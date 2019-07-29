<template>
  <div class="book">
    <img :src="book.coverUrl || '/no_cover_small.png'" :alt="book.title" />
    <div class="book-info">
      <span class="title">{{ book.title }}</span>
      <br />
      <span class="author">{{ book.author }}</span>
    </div>
    <button @click.prevent="handleAddBook">Adaugă</button>
  </div>
</template>

<style lang="scss" scoped>
button {
  padding: 8px 15px;
  background: $blue-main;
  border-radius: 100px;
  border: 0;
  color: white;
  display: block;
  margin: 10px auto 20px auto;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: #2d60ed;
  }
}
.book {
  width: 30%;
  text-align: center;
}
img {
  max-width: 80%;
  margin: 0 auto;
}
.book-info {
  display: block;
  text-align: center;
}
.title {
  font-size: 1.8rem;
  line-height: 1.2em;
}
.author {
  color: rgba(34, 37, 41, 0.8);
  margin-top: 2px;
}
</style>

<script>
import axios from "../request";
export default {
  props: ["book"],
  methods: {
    async handleAddBook() {
      console.log(this.book);
      try {
        const response = await axios({
          method: "post",
          url: "/book",
          data: {
            title: this.book.title,
            author: this.book.author,
            rating: this.book.rating,
            coverUrl: this.book.coverUrl
          }
        });
        if (response.status === 200) {
          this.$notify({
            group: "add-book",
            type: "success ",
            title: "Adăugat cu success",
            text: "Cartea a fost adăugată!"
          });
        } else {
          console.log(response);
          this.$notify({
            group: "add-book",
            type: "error",
            title: "Adăugarea a eșuat",
            text: "A apărut o eroare la adăugarea cărții!"
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
