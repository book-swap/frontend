<template>
  <div>
    <img src="../../assets/img/landing/blobs/Vector1.svg" id="Vector1" />
    <img src="../../assets/img/landing/blobs/Vector2.svg" id="Vector2" />
  </div>
</template>

<style lang="scss" scoped>
#Vector1 {
  position: absolute;
  top: 0;
  right: 0;
}

#Vector2 {
  position: absolute;
  top: 65rem;
  left: 0;
}
@media screen and(max-width: 1440px) {
  #Vector1,
  #Vector2 {
    display: none;
  }
}
</style>
