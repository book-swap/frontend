<template>
  <div class="book card">
    <img class="cover" :src="coverUrl || '/no_cover.png'" :alt="title" />
    <div class="book-info">
      <div>
        <div class="title">
          <h3>{{ title }}</h3>
        </div>
        <div class="author">{{ author }}</div>
        <div class="rating">
          <StarRating :rating="rating" v-if="rating" />
        </div>
        <hr />
        <div class="added-by">
          Adăugat de
          <span class="added-by-user">Mihai Voinea</span>
        </div>
      </div>
      <div class="action-buttons">
        <a href="#">Detalii</a>
        <a href="#">Fă o ofertă</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.action-buttons {
  a {
    text-decoration: none;
    color: white;
    border-radius: 100px;
  }
  a:first-child {
    background: $blue-main;
    &:hover {
      background: $blue-main-hover;
    }
    padding: 13px 44px;
  }
  a:last-child {
    background: $red-main;
    &:hover {
      background: $red-main-hover;
    }
    padding: 13px 26px;
  }
  display: flex;
  justify-content: space-between;
}
.added-by-user {
  color: black;
}
.added-by {
  color: $almost-black-text;
}
hr {
  border: 1px solid #ececec;
  width: 100%;
}
.book .cover {
  width: 15rem;
  height: 22.5rem;
  object-fit: cover;
  object-position: 50% 50%;
  margin: 2rem;
  flex-shrink: 0;
  flex-grow: 0;
}
.book {
  margin-bottom: 2rem;
  display: flex;
}
.book-info {
  margin: 2rem 2rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
h3 {
  font-style: normal;
  font-weight: 300;
  font-size: 2.4rem;
  max-height: 5.6rem;
  line-height: 2.8rem;
  word-wrap: break-word;
  overflow: hidden;
  margin: 0;
}
.author {
  color: $almost-black-text;
  margin-top: 0.5rem;
}
.card {
  width: 51rem;
  height: 26.5rem;

  background: #ffffff;
  box-shadow: 0px 3px 20px rgba(54, 64, 82, 0.18);
  border-radius: 15px;
}
.rating {
  height: 3rem;
  display: flex;
  align-items: center;
  margin-top: 1px;
  position: relative;
  right: 1px;
}
@media screen and (max-width: 550px) {
  .action-buttons {
    flex-wrap: wrap;
    a:first-child {
      padding: 13px 0px;
      width: 100%;
      text-align: center;
      margin: 0.5rem auto;
    }
    a:last-child {
      padding: 13px 0px;
      width: 100%;
      text-align: center;
      margin: 0.5rem auto;
    }
  }
  .card {
    height: 29.5rem;

    box-shadow: none;
    border-radius: 0;
    border-bottom: 1px solid #ececec;
    margin-bottom: 0;
  }
}
</style>

<script>
import StarRating from "../components/StarRating";
export default {
  components: { StarRating },
  props: ["coverUrl"],
  data() {
    return {
      title: "Sapiens. Scurta istorie a omenirii",
      author: "Yuval Noah Harari",
      rating: 4.45
    };
  }
};
</script>
