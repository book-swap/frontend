<template>
  <main>
    <form v-on:submit.prevent="submitUpdateForm">
      <div>
        <h2>Contul tău</h2>
        <p>Poți modifica informațiile contului tău</p>
      </div>
      <hr />

      <div class="input-wrap">
        <label for="first_name">Prenume:</label>
        <input type="text" name="first_name" v-model="firstName" required />
      </div>
      <div class="input-wrap">
        <label for="last_name">Nume:</label>
        <input type="text" name="last_name" v-model="lastName" required />
      </div>
      <div class="input-wrap">
        <label for="county">Județ:</label>

        <select
          id="county"
          @change="handleCountyChange"
          v-model="selectedCounty"
          ref="county"
          required
        >
          <option
            v-for="(county, index) in counties"
            :key="index"
            :value="county.nume"
            :data-abr="county.abr"
            >{{ county.nume }}</option
          >
        </select>
      </div>
      <div class="input-wrap">
        <label for="city">Localitate:</label>
        <select id="city" v-model="selectedCity" required>
          <option
            v-for="(city, index) in cities"
            :key="index"
            :value="city"
            :selected="city === selectedCity"
            >{{ city }}</option
          >
        </select>
      </div>
      <input type="submit" value="Salvează" />
    </form>
    <notifications group="settings" />
  </main>
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
h1 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 25px;
  margin: 26px 0 0 0;
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
  margin: 1em 0;
  padding: 0;
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
import counties from "../assets/json/cities/_judete.json";
export default {
  data() {
    return {
      firstName: this.$store.state.user.firstName,
      lastName: this.$store.state.user.lastName,
      counties,
      selectedCounty: this.$store.state.user.county,
      cities: [],
      selectedCity: this.$store.state.user.city
    };
  },
  methods: {
    handleCountyChange(event) {
      const abr =
        event.target.options[event.target.options.selectedIndex].dataset.abr;
      this.updateCities(abr);
    },
    updateCities(abr) {
      import(`../assets/json/cities/${abr}.json`).then(cities => {
        this.cities = cities.default;
      });
    },
    submitUpdateForm() {
      if (
        this.firstName === "" ||
        this.lastName === "" ||
        this.selectedCounty == undefined ||
        this.selectedCity == undefined
      )
        return this.$notify({
          group: "settings",
          type: "warn",
          title: "Eroare",
          text: "Completează toate câmpurile!"
        });

      this.$store
        .dispatch("updateUser", {
          firstName: this.firstName,
          lastName: this.lastName,
          county: this.selectedCounty,
          city: this.selectedCity
        })
        .then(() =>
          this.$notify({
            group: "settings",
            title: "Eroare",
            text: "Contul tău a fost modificat cu succes.",
            type: "success"
          })
        )
        .catch(err => {
          let message = err.data.message;

          this.$notify({
            group: "settings",
            title: "Eroare",
            text: message,
            type: "error"
          });
        });
    }
  },
  mounted() {
    // GETS THE ABREVIATION OF THE CURRENT SELECTED COUNTY
    const abr = this.$refs.county.options[
      this.$refs.county.options.selectedIndex
    ].dataset.abr;

    this.updateCities(abr);
  }
};
</script>
