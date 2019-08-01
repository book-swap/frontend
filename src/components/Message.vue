<template>
  <div
    class="message"
    :style="{
      background: fromMe ? '#3c70ff' : '#F1F0F0',
      color: fromMe ? 'white' : 'black',
      alignSelf: fromMe ? 'flex-end' : 'flex-start'
    }"
  >
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
.message {
  padding: 1rem;
  max-width: 70%;
  border-radius: 15px;
  margin: 0.5rem 1rem;
}
.message:first-child {
  margin-top: 1rem;
}
.message:last-child {
  margin-bottom: 1rem;
}
</style>

<script>
export default {
  props: ["text", "fromMe"]
};
</script>
