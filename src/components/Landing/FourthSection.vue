<template>
  <section>
    <img src="../../assets/img/landing/bibliophile.svg" alt="Bibliophile" />
    <div>
      <h2>Rămâi la curent</h2>
      <p>
        Abonează-te la newsletterul nostru și te vom anunța când apar cărți noi
        pe placul tău în apropiere. Nu vei rata ocazia să obți cărțile pe care
        ți le dorești.
      </p>
      <router-link to="register" class="btn-cta">Înregistrează-te</router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  & > * {
    flex: 1 0 50%;
  }
  align-items: center;
  justify-content: space-between;
}
h2 {
  font-style: normal;
  font-weight: 300;
  font-size: 3.6rem;
  line-height: 4.9rem;
  margin-bottom: 8px;
  margin-top: 0;
}
p {
  font-size: 1.8rem;
  line-height: 2.5rem;
  text-align: justify;
  margin-bottom: 40px;
  margin-top: 0;
}
a {
  color: white;
  text-decoration: none;
  background: $red-main;
  padding: 13px 30px;
  border-radius: 100px;
  margin-top: 0;
}
div {
  padding-bottom: 5rem;
  flex: 0 0 49%;
}
img {
  flex: 0 0 50%;
}
@media screen and (max-width: 1240px) {
  section {
    flex-direction: column;
    align-items: center;
  }
}
@media screen and (max-width: 768px) {
  img {
    width: 90%;
  }
  section {
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  img {
    width: 90%;
  }
  section {
    text-align: center;
  }

  a {
    padding: 13px 30%;
  }
}
</style>
