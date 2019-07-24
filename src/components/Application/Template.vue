<template>
  <div class="bookswap-app">
    <Navigation />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  background-color: #f4f6fb;
  margin-top: 2rem;
}
div.bookswap-app {
  background-color: #f4f6fb;
  height: 100vh;
  width: 100%;
  font-size: 1.8rem;
}
</style>

<script>
import Navigation from "./Navigation.vue";
export default {
  components: { Navigation }
};
</script>
