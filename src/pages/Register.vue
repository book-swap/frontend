<template>
  <div class="container">
    <main>
      <div id="left">
        <router-link to="/" class="title">
          <img src="../assets/img/login/left_arrow.svg" />
          <span>Înapoi</span>
        </router-link>
        <div style="margin-bottom: 0px;">
          <h1>BookSwap</h1>
          <p>
            Te ajutăm să schimbi cărțile vechi de care nu mai ai nevoie pentru
            unele noi.
          </p>
        </div>
        <div>
          <span id="social_media_follow_label">Urmărește-ne pe:</span>
          <ul id="social_media_follow">
            <li>
              <a href="#">
                <img
                  src="../assets/img/login/social_media_follow_icon/twitter.svg"
                  alt="Twitter"
                />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="../assets/img/login/social_media_follow_icon/instagram.svg"
                  alt="Instagram"
                />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="../assets/img/login/social_media_follow_icon/facebook.svg"
                  alt="Instagram"
                />
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="right">
        <router-link to="/" class="title" style="display: none; color: black;">
          <img src="../assets/img/login/left_arrow.svg" />
          <span>Înapoi</span>
        </router-link>
        <span class="title">Creează un cont</span>
        <form method="post" v-on:submit.prevent="submitLoginForm">
          <div class="names-input">
            <div>
              <label for="firstName">Prenume</label>
              <input
                type="text"
                name="firstName"
                v-model="firstName"
                required
              />
            </div>
            <div>
              <label for="firstName">Nume</label>
              <input type="text" name="lastName" v-model="lastName" required />
            </div>
          </div>
          <div class="location-input">
            <div>
              <label for="county">Județ:</label>
              <select
                id="county"
                @change="handleCountyChange"
                v-model="selectedCounty"
                required
              >
                <option value="undefined" v-if="selectedCounty === undefined"
                  >Alege</option
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
            <div>
              <label for="city">Localitate:</label>
              <select
                id="city"
                v-model="selectedCity"
                :disabled="selectedCounty === undefined"
                required
              >
                <option
                  value="undefined"
                  v-if="
                    selectedCity === undefined && selectedCounty !== undefined
                  "
                  >Alege</option
                >
                <option
                  v-for="(city, index) in cities"
                  :key="index"
                  :value="city"
                  >{{ city }}</option
                >
              </select>
            </div>
          </div>
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="email" required />
          <label for="password">Parolă:</label>
          <input type="password" name="password" v-model="password" required />

          <div id="submit">
            <input type="submit" value="Intră în cont" />
          </div>
        </form>
        <span id="register-anchor">
          Ai deja cont?
          <router-link to="/login">Conectează-te!</router-link>
        </span>
      </div>

      <notifications group="register" />
    </main>
    <img src="../assets/img/login/blobs/Vector1.svg" id="Vector1" />
    <img src="../assets/img/login/blobs/Vector2.svg" id="Vector2" />
    <img src="../assets/img/login/blobs/Vector3.svg" id="Vector3" />
  </div>
</template>

<style scoped lang="scss">
.names-input {
  margin-top: 30px;
}
.names-input,
.location-input {
  display: flex;
  justify-content: space-between;
  & > * {
    flex: 0 0 48%;
  }
}
#social_media_follow_label {
  font-size: 1.6rem;
}

#social_media_follow {
  list-style: none;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  margin: 7px 0 0 0;
  img {
    height: 1.4rem;
    width: auto;
    filter: invert(1);
  }
  a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    span {
      margin-left: 3px;
    }
  }
}

#register-anchor {
  margin: 10px auto;
  text-align: center;
  display: block;
  a {
    text-decoration: none;
    color: $blue-main;
  }
}

#left {
  color: white;
  flex: 0 0 43.75%;
  height: 100%;
  border-radius: 0 15px 15px 0;
  background: $blue-main;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 2.4rem;
    line-height: normal;
    text-transform: uppercase;
    margin: 0 0 10px 0;
  }
  div {
    margin: 30px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    text-align: justify;
    line-height: 2.3rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
  }
}
form {
  input[type="password"] {
    margin-bottom: 40px !important;
  }
  #submit {
    margin: 9px 0 0 0;
    input[type="submit"] {
      width: 100%;
      height: 55px;

      background: $red-main;
      border-radius: 7px;
      color: white;
      font-size: 1.4em;
      border: 0;

      font-style: normal;
      font-weight: 300;
      cursor: pointer;
    }
  }

  #remember_me {
    display: flex;
    align-items: center;
    label {
      margin-left: 5px;
    }
  }

  label[for="remember_me"] {
    display: inline;
  }
  margin: 0px 30px;
  label {
    display: block;
    color: rgba(0, 0, 0, 0.8);
  }
  input:focus,
  select:focus {
    outline-width: 0;
  }
  input[type="text"],
  input[type="email"],
  input[type="password"],
  select {
    background: transparent;
    border: none;
    border-bottom: 1px solid #c4c4c4;
    width: 100%;
    height: 30px;
    transition: border 500ms ease-out;
    margin-top: 3px;
    margin-bottom: 35px;
    color: #000;

    font-size: 1.4em;
  }
  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="password"]:focus,
  select:focus {
    border-bottom: 1px solid $blue-main;
  }
}

hr {
  height: 1px;
  background: rgba(196, 196, 196, 0.2);
  border: 0;
  margin: 30px 30px;
}

.vr {
  width: 1px;
  height: 65px;
  background: rgba(196, 196, 196, 0.2);
}

#social_media_login {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 35px 30px;
  a {
    text-decoration: none;
    text-align: center;
    margin: 0px 2px;
    img {
      height: 60px;
      width: auto;
    }
    span {
      color: rgba(0, 0, 0, 0.9);
      margin-top: 5px;
      display: block;
    }
  }
}

.title {
  margin: 20px 0px 0px 30px;
  font-size: 1.8rem;
  display: inline-block;
}

a.title {
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  img {
    height: 1.6rem;
    width: auto;
    margin-right: 5px;
  }
}

main {
  width: 80rem;
  height: 54rem;
  margin: 0 auto;
  box-shadow: 0px 3px 20px rgba(54, 64, 82, 0.18);
  display: flex;
  border-radius: 15px;
  flex-direction: row-reverse;
}

#right {
  width: 100%;

  border-radius: 15px 0 0 15px;
  background: white;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  font-size: 1.4rem;
}

#Vector1 {
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: -1;
}
#Vector2 {
  position: absolute;
  left: 0px;
  top: 10vh;
  z-index: -1;
}
#Vector3 {
  position: absolute;
  right: 10vw;
  top: 0px;
  z-index: -1;
}

@media screen and (max-width: 1024px) {
  main {
    width: 73rem;
  }
}

@media screen and (max-width: 768px), screen and (max-height: 600px) {
  #left {
    display: none;
  }
  main {
    width: 45rem;
  }
  #right .title {
    display: block !important;
    img {
      filter: invert(1);
    }
  }
}

@media screen and (max-height: 780px) {
  #Vector1 {
    width: 45vw;
    height: auto;
  }
  #Vector2 {
    width: auto;
    height: 80vh;
  }
  #Vector3 {
    width: 11vw;
    height: auto;
  }
}

@media screen and (max-width: 687px), screen and (max-height: 600px) {
  #Vector1,
  #Vector2,
  #Vector3 {
    display: none;
  }
  main {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    box-shadow: none;
  }
  #right {
    border-radius: 0;
  }
}

@media screen and (min-width: 1921px) {
  #Vector1 {
    width: 34.48vw;
    height: 30.19vh;
  }
  #Vector2 {
    width: 10.21vw;
    height: 64.91vh;
  }
  #Vector3 {
    width: 9.58vw;
    height: 7.41vh;
  }
}
</style>

<script>
import counties from "../assets/json/cities/_judete.json";

export default {
  data: () => {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      counties,
      cities: [],
      selectedCounty: undefined,
      selectedCity: undefined
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
    submitLoginForm() {
      if (
        this.email === "" ||
        this.password === "" ||
        this.firstName === "" ||
        this.lastName === "" ||
        this.selectedCounty == undefined ||
        this.selectedCity == undefined
      )
        return this.$notify({
          group: "register",
          type: "warn",
          title: "Înregistrarea a eșuat",
          text: "Completează toate câmpurile!"
        });

      this.$store
        .dispatch("register", {
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          county: this.selectedCounty,
          city: this.selectedCity
        })
        .then(() => this.$router.push("/app/explore"))
        .catch(err => {
          let message = err.data.message;

          this.$notify({
            group: "auth",
            title: "Eroare",
            text: message,
            type: "error"
          });
        });
    }
  }
};
</script>
