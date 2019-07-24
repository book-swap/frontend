<template>
  <footer>
    <a href="https://github.com/mihaivoinea">
      Made with
      <span>❤</span> by Mihai Voinea — &copy; BookSwap 2019
    </a>
  </footer>
</template>

<style lang="scss" scoped>
span {
  color: red;
}
footer {
  text-align: center;
  background: $blue-main;
  line-height: normal;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  color: white;
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  footer {
    height: 5rem;
  }
}
</style>
