<template>
  <div class="book">
    <img :src="book.coverUrl || 'no_cover_small.png'" :alt="book.title" />
    <div class="book-info">
      <span class="title">{{ book.title }}</span>
      <br />
      <span class="author">{{ book.author }}</span>
    </div>
    <button @click="handleAddBook">Adaugă</button>
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
export default {
  props: ["book", "addBookCallbackFn"],
  methods: {
    handleAddBook() {
      this.addBookCallbackFn(this.book);
    }
  }
};
</script>
