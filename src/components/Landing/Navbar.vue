<template>
  <nav>
    <div style="padding-bottom: 1rem;">
      <div class="navbar-left">
        <a href="#">
          <img
            src="../../assets/img/logo.svg"
            alt="BookSwap"
            draggable="false"
            class="unselectable"
          />
        </a>
      </div>
      <div class="navbar-right">
        <button
          class="hamburger hamburger--spin"
          type="button"
          @click="toggleMobileNavigation"
          :class="{ 'is-active': isMobileNavigationCollapsed }"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <ul>
          <li>
            <router-link to="login">Cont</router-link>
          </li>
          <li>
            <router-link to="register" class="btn-cta">Începe</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="mobile-navigation" v-if="isMobileNavigationCollapsed">
      <ul>
        <li>
          <router-link to="register">Înregistrare</router-link>
        </li>
        <li>
          <router-link to="login">Intră în cont</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
$hamburger-layer-color: $blue-main;
@import "hamburgers/_sass/hamburgers/hamburgers.scss";
$anchor-black: #474f5b;
$border-gray: #ececec;
nav {
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    .navbar-right > ul {
      list-style: none;
      display: flex;

      li:not(:last-child) {
        margin-right: 50px;
      }
      a {
        text-decoration: none;
        color: $anchor-black;
        &:hover {
          color: black;
        }
      }
    }
  }
}
nav .btn-cta {
  padding: 8px 38px;
}
.btn-cta {
  background: $red-main;
  border-radius: 100px;
  color: white !important;
  &:hover {
    background: $red-main-hover;
    color: white !important;
  }
}
.hamburger {
  display: none;
  &:focus {
    outline: none;
  }
}
.mobile-navigation {
  flex: 0 1 100%;
  text-align: center;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li:first-child {
    padding-top: 0.5rem;
  }
  li:last-child {
    padding-bottom: 2.5rem;
  }
  li {
    padding: 1.5rem 0;
  }
  a {
    text-decoration: none;
    color: $blue-main;
    &:hover {
      color: black;
    }
  }
}
@media screen and (max-width: 1240px) {
  .hamburger {
    display: inline-block;
  }
  .navbar-right > ul {
    display: none !important;
  }
}

@media screen and (min-width: 1240px) {
  .mobile-navigation {
    display: none !important;
  }
}

@media screen and (max-width: 768px) {
  nav {
    border-bottom: 1px solid $border-gray;
  }
}
</style>

<script>
import smoothReflow from "vue-smooth-reflow";
export default {
  mixins: [smoothReflow],
  mounted() {
    this.$smoothReflow();
  },
  data() {
    return {
      isMobileNavigationCollapsed: false
    };
  },
  methods: {
    toggleMobileNavigation() {
      this.isMobileNavigationCollapsed = !this.isMobileNavigationCollapsed;
    }
  }
};
</script>
