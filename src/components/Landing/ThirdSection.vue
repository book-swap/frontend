<template>
  <section>
    <div>
      <h2>Schimb cu ușurință</h2>
      <p>
        Platforma noastră este gândită pentru a face tot procesul de schimb cât
        mai ușor pentru tine. Este foarte simplu să faci o ofertă de schimb.
      </p>
      <router-link to="register" class="btn-cta">Înregistrează-te</router-link>
    </div>
    <img src="../../assets/img/landing/chat.png" alt="Conversation" />
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
}
@media screen and (max-width: 1240px) {
  section {
    flex-direction: column-reverse;
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
