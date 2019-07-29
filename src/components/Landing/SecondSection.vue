<template>
  <div>
    <section>
      <div class="card left">
        <img src="../../assets/img/landing/chat.svg" alt="Chat" />
        <div>
          <h2>Comunicare directă</h2>
          <p>
            Ai parte de o comunicare directă cu cealaltă persoană. Poți face o
            ofertă de schimb direct din chatul platformei.
          </p>
          <a href="#">
            Află mai multe
            <img src="../../assets/img/landing/arrow-right.svg" class="icon" />
          </a>
        </div>
      </div>
      <div class="hr"></div>
      <div class="card right">
        <img src="../../assets/img/landing/check.svg" alt="Checked" />
        <div>
          <h2>Condiții excelente</h2>
          <p>
            Ne asigurăm că toate cărțile adăugate pe platforma noastră sunt în
            condiții bune pentru a-ți oferi o experiență pe măsura așteptărilor
            tale.
          </p>
        </div>
        <a href="#">
          Află mai multe
          <img src="../../assets/img/landing/arrow-right.svg" class="icon" />
        </a>
      </div>
    </section>

    <img src="../../assets/img/landing/blobs/Vector3.svg" id="Vector3" />
  </div>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
}
.card {
  width: 49.5rem;
  height: 65rem;

  background: #ffffff;
  box-shadow: 0px 3px 20px rgba(54, 64, 82, 0.18);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}

.left,
.right {
  & > * {
    margin: 0 3rem;
  }
  img {
    width: auto;
    height: 25.5rem;
    margin-top: 7rem;
    align-self: center;
  }
  div {
    margin-top: 7rem;
    h2,
    p {
      margin: 0;
    }
  }
}
h2 {
  font-style: normal;
  font-weight: 300;
  font-size: 3.6rem;
  line-height: 4.9rem;
  margin-bottom: 1rem !important;
}
p {
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.5rem;
  text-align: justify;
  margin-bottom: 4rem !important;

  color: rgba(0, 0, 0, 0.8);
}
a {
  text-decoration: none;
  color: $red-darker;
}
.icon {
  width: 1em !important;
  height: auto !important;
  position: relative;
  margin: 0 !important;
  top: 3px;
  left: 3px;
}
.hr {
  border-bottom: 1px solid #ececec;
}

@media screen and (max-width: 1440px) {
  #Vector3 {
    display: none;
  }
}

@media screen and (max-width: 1240px) {
  .card {
    width: 48%;
  }
}
@media screen and (min-width: 1025px) {
  .hr {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  .card {
    box-shadow: none;
    width: 100%;
  }
  section {
    box-shadow: 0px 3px 20px rgba(54, 64, 82, 0.18);
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 768px) {
  section {
    width: 98%;
    img {
      width: 70% !important;
      height: auto !important;
    }
  }
  .card {
    height: 60rem;
  }
}

#Vector3 {
  position: relative;
  z-index: -1;
  bottom: 92rem;
  right: 80%;
  width: 35rem;
  height: auto;

  clear: both;
  float: right;
}
</style>
