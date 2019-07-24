<template>
  <div>
    <div class="container">
      <Navbar />
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </main>
    </div>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 104rem;
  margin: 2rem auto;
  font-size: 1.8rem;
}

main > *:nth-child(1) {
  margin-top: 17rem;
}

main > *:nth-child(2),
main > *:nth-child(3),
main > *:nth-child(4) {
  margin-top: 25rem;
}
footer {
  margin-top: 25rem;
}
@media screen and (max-width: 1240px) and (min-width: 768px) {
  .container {
    margin: 2rem 10%;
  }
}

@media screen and (max-width: 768px) {
  .container {
    margin: 2rem 1rem;
  }
  main > *:nth-child(1) {
    margin-top: 3rem;
  }
}
</style>

<script>
import Navbar from "../components/Landing/Navbar.vue";
import FirstSection from "../components/Landing/FirstSection.vue";
import SecondSection from "../components/Landing/SecondSection.vue";
import ThirdSection from "../components/Landing/ThirdSection.vue";
import FourthSection from "../components/Landing/FourthSection.vue";
import Footer from "../components/Landing/Footer.vue";

export default {
  components: {
    Navbar,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    Footer
  }
};
</script>
