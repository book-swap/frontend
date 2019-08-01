<template>
  <div class="books">
    <Book
      v-for="(book, index) in books"
      :key="index"
      :coverUrl="book.coverUrl"
      :id="book._id"
      :title="book.title"
      :author="book.author"
      :rating="book.rating"
    />
  </div>
</template>

<style lang="scss" scoped>
.books {
  display: flex;
  flex-wrap: wrap;
  max-width: 107rem;
  margin: 0 auto;
  width: fit-content;
}
@media screen and (min-width: 1920px) {
  .books {
    max-width: 159rem;
  }
}
@media screen and (max-width: 1140px) {
  .books {
    max-width: 55rem;
  }
}
</style>

<script>
import Book from "./Book";
export default {
  components: { Book },
  props: ["books"]
};
</script>
