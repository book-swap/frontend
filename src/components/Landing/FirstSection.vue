<template>
  <section>
    <div class="left">
      <h1>Cel mai ușor mod de a face schimb de cărți</h1>
      <p>
        BookSwap este o platforma online unde poți schimba cărțile de care nu
        mai ai nevoie pentru unele noi
      </p>
      <router-link to="register" class="btn-cta">Înregistrează-te</router-link>
    </div>
    <div class="right">
      <img
        src="../../assets/img/landing/bookreader.svg"
        alt="Book Reader"
        draggable="false"
        class="unselectable"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 4.8rem;
  line-height: 6.5rem;
  margin-bottom: 20px;
  margin-top: 0;
}
p {
  font-size: 1.8rem;
  line-height: 2.5rem;
  margin-bottom: 45px;
  margin-top: 0;
}

a {
  color: white;
  text-decoration: none;
  background: $red-main;
  padding: 13px 30px;
  border-radius: 100px;
  margin: 0;
}

img {
  max-width: 98vw;
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
