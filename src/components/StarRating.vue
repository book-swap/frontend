<template>
  <div>
    <Star
      v-for="index in 5"
      :key="index"
      :fill="
        index <= Math.round(rating)
          ? filledColor || '#FF6454'
          : emptyColor || '#E3E7EB'
      "
    />
  </div>
</template>

<script>
import Star from "./Star";
export default {
  components: { Star },
  props: ["rating", "emptyColor", "filledColor"]
};
</script>
