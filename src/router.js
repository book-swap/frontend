import Vue from "vue";
import store from "./store";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("./pages/Landing.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./pages/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./pages/Register.vue")
    },
    {
      path: "/app",
      name: "app",
      component: () => import("./components/Application/Template.vue"),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "explore",
          name: "explore",
          component: () => import("./pages/Explore.vue")
        },
        {
          path: "settings",
          name: "settings",
          component: () => import("./pages/Settings.vue")
        },
        {
          path: "addbook",
          name: "addbook",
          component: () => import("./pages/AddBook.vue")
        },
        {
          path: "addbook-manual",
          name: "addbook-manual",
          component: () => import("./pages/AddBookManual.vue")
        },
        {
          path: "mybooks",
          name: "mybooks",
          component: () => import("./pages/MyBooks.vue")
        },
        {
          path: "viewbook/:id",
          name: "viewbook",
          component: () => import("./pages/ViewBook.vue")
        },
        {
          path: "chat",
          name: "chat",
          component: () => import("./pages/Chat.vue")
        },
        {
          path: "chat/:id",
          name: "chat",
          component: () => import("./pages/Chat.vue")
        }
      ]
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("./components/Logout.vue"),
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/app") next("/app/explore");
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    if (store.getters.isLoggedIn) {
      next("/app/explore");
      return;
    }
    next();
  }
});

export default router;
