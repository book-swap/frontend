<template>
  <main>
    <form v-on:submit.prevent="submitUpdateForm">
      <div>
        <h2>Adaugă o carte</h2>
        <p>Poți adăuga o carte pentru a o oferi la schimb</p>
      </div>
      <hr />

      <div class="input-wrap">
        <label for="search_query">Titlu/Autor/ISBN:</label>
        <input type="text" name="search_query" v-model="firstName" required />
      </div>
    </form>
  </main>
</template>

<style lang="scss" scoped>
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
