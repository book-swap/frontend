<template>
  <nav>
    <div class="nav">
      <router-link to="/" class="hide-on-mobile">
        <img src="../../assets/img/logo_icon.svg" alt="BookSwap" id="logo" />
      </router-link>
      <ul class="hide-on-mobile">
        <li>
          <router-link to="/app/explore">Explorează</router-link>
        </li>
        <li>
          <router-link to="#">Cărți dorite</router-link>
        </li>
        <li>
          <router-link to="#">Cărți oferite</router-link>
        </li>
      </ul>
      <div id="right" class="hide-on-mobile">
        <a href="#" class="avatar">
          <img :src="avatar" alt="Avatar" class="avatar" />
        </a>
        <a href="#" id="dropdown-toggle">
          <span id="dropdown-toggle">{{ name }}</span>
          <img
            src="../../assets/img/app/navigation/expand-button.svg"
            alt="Expand"
            class="icon"
            id="dropdown-toggle"
          />
        </a>
        <transition name="fade">
          <ul v-if="isDropdownOpen" class="nav-dropdown">
            <li>
              <router-link to="/app/settings">Setări</router-link>
            </li>
            <li>
              <router-link to="/logout">Logout</router-link>
            </li>
          </ul>
        </transition>
      </div>

      <router-link to="/" class="mobile-navigation">
        <img src="../../assets/img/logo.svg" alt="BookSwap" id="logo" />
      </router-link>
      <div class="mobile-navigation">
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
      </div>
      <div class="mobile-nav" v-if="isMobileNavigationCollapsed">
        <ul>
          <li>
            <router-link to="/app/explore">Explorează</router-link>
          </li>
          <li>
            <router-link to="#">Cărți dorite</router-link>
          </li>
          <li>
            <router-link to="#">Cărți oferite</router-link>
          </li>
          <li>
            <router-link to="/app/settings">Setări</router-link>
          </li>
          <li>
            <router-link to="/logout">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
$hamburger-layer-color: $blue-main;
@import "hamburgers/_sass/hamburgers/hamburgers.scss";
$border-gray: #ececec;
.nav-dropdown {
  display: block;
  position: absolute;
  top: 1.5em;
  right: 2rem;
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  background: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.1);
  // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  & > li {
    a {
      padding: 2rem 4rem;
      display: block;
    }
    margin: 0 !important;
    &:not(:last-child) {
      border-bottom: 1px solid #ececec;
    }
  }
  & > li:hover {
    background: #f9f9f9;
  }
}
.nav {
  height: 5.5rem;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.25);
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
#logo {
  margin-left: 2rem;
}
ul {
  list-style: none;
  .router-link-exact-active {
    color: black;
    font-weight: 600;
  }
  a {
    color: $almost-black-text;
    &:hover {
      color: black;
    }
    text-decoration: none;
  }
  display: flex;
  li:not(:last-child) {
    margin-right: 2rem;
  }
}
#right {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 2rem;
  a {
    text-decoration: none;
    color: black;
  }
  & > *:not(:last-child) {
    height: 1em;
    width: auto;
  }
  .avatar {
    height: 4rem;
    border-radius: 100px;
  }
  .icon {
    height: 1rem;
  }

  span {
    margin: 0 0.5rem 0 1.5rem;
  }
}
.mobile-navigation {
  display: none;
}
.mobile-nav {
  flex: 0 0 100%;
  text-align: center;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: column;
  }
  li:first-child {
    padding-top: 0.5rem;
  }
  li:last-child {
    padding-bottom: 2.5rem;
  }
  li {
    padding: 1.5rem 0;
    margin: 0 !important;
  }
  a {
    text-decoration: none;
    color: $blue-main;
    &:hover {
      color: #3c70ff !important;
    }
  }
}
.mobile-nav {
  display: none;
}
@media screen and (max-width: 768px) {
  .nav {
    box-shadow: none;
    background: none;
    height: auto;
  }
  nav {
    border-bottom: 1px solid $border-gray;
    margin: 2rem 1rem 0 1rem;
  }
  .hide-on-mobile {
    display: none !important;
  }
  .mobile-navigation {
    display: block !important;
  }
  #logo {
    margin: 0;
  }
  .mobile-nav {
    display: block !important;
  }
}
</style>

<script>
import smoothReflow from "vue-smooth-reflow";
export default {
  mixins: [smoothReflow],
  data() {
    return {
      name: this.$store.getters.fullName,
      avatar:
        "https://ui-avatars.com/api/?name=" + this.$store.getters.fullName,
      isDropdownOpen: false,
      isMobileNavigationCollapsed: false
    };
  },
  methods: {
    toggleMobileNavigation() {
      this.isMobileNavigationCollapsed = !this.isMobileNavigationCollapsed;
    }
  },
  mounted() {
    this.$smoothReflow();
    window.addEventListener(
      "click",
      e => {
        if (e.target.id === "dropdown-toggle" && this.isDropdownOpen === false)
          this.isDropdownOpen = true;
        else this.isDropdownOpen = false;
      },
      false
    );
  }
};
</script>
