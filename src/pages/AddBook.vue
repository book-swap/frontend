<template>
  <div>
    <form>
      <div>
        <h2>Adaugă o carte</h2>
        <p>Poți adăuga o carte pentru a o oferi la schimb</p>
      </div>
      <hr />

      <div class="input-wrap">
        <label for="search_query">Titlu/Autor/ISBN:</label>
        <input type="text" name="search_query" required @input="handleInput" />
      </div>

      <Loader v-if="loading" style="margin: 0 auto" />

      <div v-if="loaded">
        <strong>Alege o carte:</strong>
        <ul class="books-list">
          <Book v-for="(book, index) in books" :key="index" :book="book" />
        </ul>
      </div>

      <div v-if="notFound">
        <p>Cartea nu a putut fi găsită.</p>
        <router-link to="addbook-manual" id="add-book-manul-anchor"
          >Poți adăuga cartea manual</router-link
        >
      </div>

      <div :style="{ paddingBottom: loading || loaded ? 0 : '2rem' }"></div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
#add-book-manul-anchor {
  color: $blue-main;
  display: block;
}
.books-list {
  padding: 0;
  display: flex;
  justify-content: space-evenly;
}
form {
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0px 3px 7px rgba(54, 64, 82, 0.25);
  border-radius: 7px;
  margin: 3em auto;
  & > * {
    margin: 5px 20px;
  }
  .input-wrap {
    display: flex;
    flex-direction: column;
    input,
    select {
      padding: 0 10px;
      background-color: #fff;
      border: 1px solid #dbdbdb;
      color: #363636;
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);

      line-height: 1.5;
      border-radius: 3px;
      height: 2em;
    }
    label {
      font-weight: bold;
      margin: 0.5em 0;
    }
  }
}
h2 {
  color: #363636;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1.125;
  margin: 20px 0 0 0;
}
p {
  margin: 4px 0 0 0;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #f5f5f5;
  padding: 0;
}

@media screen and (max-width: 768px) {
  form {
    box-shadow: none;
    width: 100%;
    max-width: 100%;
    margin: 0 !important;
  }
  input[type="submit"] {
    width: 60%;
  }
}
@media screen and (max-width: 425px) {
  input[type="submit"] {
    width: 90%;
  }
}
</style>

<script>
import smoothReflow from "vue-smooth-reflow";
import axios from "../request";
import Loader from "../components/Loader.vue";
import Book from "../components/QueryBook";

export default {
  mixins: [smoothReflow],
  mounted() {
    this.$smoothReflow({ el: "form" });
  },
  components: { Loader, Book },
  data() {
    return {
      timeout: undefined,
      notFound: false,
      loading: false,
      loaded: false,
      books: []
    };
  },
  methods: {
    handleInput(event) {
      clearTimeout(this.timeout);
      this.loading = true;
      this.loaded = false;
      this.notFound = false;
      this.books = [];

      this.timeout = setTimeout(async () => {
        const query = event.target.value;
        try {
          const response = await axios.get("query", { params: { q: query } });

          this.books = response.data;
          this.loading = false;
          this.loaded = true;
        } catch (error) {
          if (
            error.response.status === 404 &&
            error.response.data.message === "Not found"
          ) {
            this.notFound = true;
            this.loaded = false;
            this.loading = false;
          }
        }
      }, 500);
    }
  }
};
</script>
