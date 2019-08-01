<template>
  <div class="card viewbook">
    <div class="book-info">
      <img
        class="cover"
        :src="book.coverUrl || '/no_cover.png'"
        :alt="book.title"
      />
      <div class="info">
        <div class="title">
          <h3>{{ book.title }}</h3>
        </div>
        <div class="author">{{ book.author }}</div>
        <div class="rating">
          <StarRating :rating="book.rating" v-if="book.rating" />
        </div>
      </div>
      <div class="description" v-if="book.description">
        <span class="desc">Descriere:</span>
        <span>{{ book.description }}</span>
      </div>
    </div>
    <div class="vr"></div>
    <div class="user-info">
      <span class="addedBy">Adăugat de:</span>
      <img class="avatar" :src="avatarUrl" :alt="fullName" />
      <span class="addedByUser">{{ fullName }}</span>
      <span class="addedByLocation"
        >{{ addedByUser.county }}, {{ addedByUser.city }}</span
      >
      <router-link
        v-if="addedByUser.id !== $store.state.user.id"
        class="offer"
        :to="`/app/chat/${addedByUser.id}`"
        >Oferă un schimb</router-link
      >
      <a href="#" class="offer" v-else @click.prevent="deleteBook"
        >Elimină cartea</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.offer {
  padding: 1.2rem 1.5rem;
  background: $blue-main;
  border-radius: 100px;
  border: 0;
  color: white;
  display: block;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  width: 55%;
  margin: 2rem auto;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: $blue-main-hover;
  }
}
.avatar {
  width: 40%;
  border-radius: 100%;
  display: block;
  margin: 2rem auto 1.5rem auto;
}
.addedBy {
  font-style: normal;
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 2.8rem;
  word-wrap: break-word;
  margin: 0;
  text-align: center;
  display: block;
}
.vr {
  margin: 2rem 1rem;
  border-right: 1px solid #ececec;
}
.viewbook {
  display: flex;
  flex-direction: row !important;
}
.user-info {
  flex: 0 0 30.5%;
  margin: 2rem 1rem 2rem 0;
}
.card {
  max-width: 90rem;
  background: white;
  box-shadow: 0px 3px 7px rgba(54, 64, 82, 0.25);
  border-radius: 7px;
  margin: 3em auto;
}
.desc {
  font-style: normal;
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin-bottom: 0.5rem;
  margin-top: 0;
  display: block;
}
.book-info {
  display: flex;
  flex: 0 0 66%;
  flex-wrap: wrap;
  & > img {
    margin: 2rem;
    flex: 0 0;
  }
  & > .info {
    margin: 2rem 2rem 0 0;
    flex: 1 0;
  }
  & > .description {
    flex: 0 0 95%;
    margin: 0 2rem 2rem 2rem;
    span {
      white-space: pre-wrap;
      text-align: justify;
    }
  }
}
.cover {
  min-width: 15rem;
  width: 15rem;
  height: 22.5rem;
  object-fit: cover;
  object-position: 50% 50%;
  margin: 2rem;
  flex-shrink: 0;
  flex-grow: 0;
}
h3 {
  font-style: normal;
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 2.8rem;
  word-wrap: break-word;
  margin: 0;
}
.author {
  color: $almost-black-text;
  margin-top: 0.5rem;
}
.addedByUser {
  text-align: center;
  display: block;
  font-size: 2.4rem;
  line-height: 2.8rem;
}
.addedByLocation {
  display: block;
  text-align: center;
}
</style>

<script>
import axios from "../request";
import StarRating from "../components/StarRating";
export default {
  components: { StarRating },
  data() {
    return {
      book: { coverUrl: "", title: "", author: "", rating: "" },
      addedByUser: {}
    };
  },
  async created() {
    try {
      const bookResponse = await axios.get(`/book/${this.$route.params.id}`);
      this.book = bookResponse.data;

      const addedByUserresponse = await axios.get(`/user/${this.book.addedBy}`);
      this.addedByUser = addedByUserresponse.data;
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    fullName() {
      return `${this.addedByUser.firstName} ${this.addedByUser.lastName}`;
    },
    avatarUrl() {
      return "https://ui-avatars.com/api/?size=256&name=" + this.fullName;
    }
  },
  methods: {
    async deleteBook() {
      try {
        const resp = await axios.delete("/book/" + this.$route.params.id);
        if (resp.status === 200) this.$router.push("/app/mybooks");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
