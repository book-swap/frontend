<template>
  <main>
    <div class="page-title">
      <h2>Cărțile mele</h2>
      <div class="rightside-buttons">
        <!-- <a href="#" class="filter">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 5h16a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2zm2 6h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm3 6h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z"
            />
          </svg>
          Filtrează
        </a>
        <div class="vr"></div>-->
        <router-link to="addbook" class="add-new">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z"
            />
          </svg>
          Adaugă
        </router-link>
      </div>
    </div>
    <BooksGrid :books="books" />
  </main>
</template>

<style lang="scss" scoped>
.vr {
  border-right: 1px solid #c6c6c6;
  height: inherit;
  margin: 0 1.5rem;
}
.rightside-buttons {
  display: flex;
}
.page-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .filter {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: $red-darker;

    fill: $red-darker;
    &:hover {
      color: $red-main-hover;

      fill: $red-main-hover;
    }
    font-size: 2.2rem;
    svg {
      position: relative;
      top: 1px;
      right: 5px;
    }
  }
  .add-new {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: $blue-main;

    fill: $blue-main;
    &:hover {
      color: $blue-main-hover;
      fill: $blue-main-hover;
    }
    font-size: 2.2rem;
    svg {
      position: relative;
      top: 1px;
      right: 5px;
    }
  }
}
h2 {
  font-style: normal;
  font-weight: 300;
  font-size: 3.6rem;
  line-height: 4.9rem;
  margin-bottom: 3rem;
}
main {
  max-width: 107rem;
  margin: 0 auto;
}

@media screen and (min-width: 1920px) {
  main {
    max-width: 159rem;
  }
}
@media screen and (max-width: 1140px) {
  main {
    max-width: 55rem;
  }
}

@media screen and (max-width: 550px) {
  h2 {
    font-size: 2.4rem;
    line-height: 3.3rem;

    margin: 0;
  }
  .page-title {
    margin: 2rem;
  }
}
</style>

<script>
import axios from "../request";
import BooksGrid from "../components/BooksGrid";
export default {
  components: { BooksGrid },
  mounted() {
    axios({ method: "GET", url: "/book/me" })
      .then(response => {
        if (response.status === 200) this.books = response.data;
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
