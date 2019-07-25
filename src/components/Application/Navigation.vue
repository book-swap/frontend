<template>
  <nav>
    <router-link to="/">
      <img src="../../assets/img/logo_icon.svg" alt="BookSwap" id="logo" />
    </router-link>
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
    </ul>
    <div id="right">
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
  </nav>
</template>

<style lang="scss" scoped>
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
nav {
  height: 5.5rem;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.25);
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
</style>

<script>
export default {
  data() {
    return {
      name: "Mihai Voinea",
      avatar: "https://ui-avatars.com/api/?name=Mihai+Voinea",
      isDropdownOpen: false
    };
  },
  mounted() {
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
