<template>
  <div>
    <form v-on:submit.prevent="submitAddBookForm">
      <div>
        <h2>Adaugă o carte</h2>
        <p>Poți adăuga o carte pentru a o oferi la schimb</p>
      </div>
      <hr />
      <div class="input-wrap">
        <label for="title">Titlu:</label>
        <input type="text" name="title" required v-model="title" />
      </div>
      <div class="input-wrap">
        <label for="author">Autor:</label>
        <input type="text" name="author" required v-model="author" />
      </div>

      <div class="input-wrap">
        <label for="description">Descriere</label>
        <textarea type="text" name="description" required v-model="description" />
      </div>
      <div class="input-wrap">
        <label for="cover">Link imagine copertă:</label>
        <input type="text" name="cover" required v-model="coverUrl" />
      </div>
      <input type="submit" value="Adaugă" />
    </form>
    <notifications group="add-book" />
  </div>
</template>
<style lang="scss" scoped>
input[type="submit"] {
  width: 20%;
  padding: 13px 35px;
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
    textarea {
      height: 8em !important;
    }
    input,
    select,
    textarea {
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
import axios from "../request";
export default {
  data() {
    return {
      title: "",
      author: "",
      description: "",
      coverUrl: ""
    };
  },
  methods: {
    async submitAddBookForm() {
      if (this.title === "" || this.author === "" || this.cover === "")
        return this.$notify({
          group: "add-book",
          type: "error",
          title: "Adăugarea a eșuat",
          text: "Toate câmpurile trebuie completate!"
        });
      if (!this.isURL(this.coverUrl))
        return this.$notify({
          group: "add-book",
          type: "error",
          title: "Adăugarea a eșuat",
          text: "Link-ul pentru copertă este invalid!"
        });
      try {
        const response = await axios({
          method: "post",
          url: "/book",
          data: {
            title: this.title,
            author: this.author,
            description: this.description === "" ? undefined : this.description,
            coverUrl: this.coverUrl
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
    },
    isURL(str) {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return pattern.test(str);
    }
  }
};
</script>
