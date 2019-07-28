<template>
  <div class="books">
    <Book />
    <Book />
    <Book />
    <Book />
  </div>
</template>

<style lang="scss" scoped>
.books {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 104rem;
}
@media screen and (min-width: 1920px) {
  .books {
    max-width: 156rem;
  }
}
@media screen and (max-width: 1140px) {
  .books {
    max-width: 52rem;
  }
}
</style>

<script>
import Book from "./Book";
export default {
  components: { Book }
};
</script>
