<template>
  <div class="books">
    <Book
      v-for="(book, index) in books"
      :key="index"
      :coverUrl="book.coverUrl"
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
import axios from "../request";
import Book from "./Book";
export default {
  components: { Book },
  mounted() {
    axios({ method: "GET", url: "/book" })
      .then(response => {
        if (response.status === 200) this.books = response.data;
        console.log(response.data);
      })
      .catch(e => console.log(e));
  },
  data() {
    return {
      books: undefined
    };
  }
};
</script>
