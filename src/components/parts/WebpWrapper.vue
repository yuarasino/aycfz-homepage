<template lang="pug">
picture.WebpWrapper
  source(:srcset="src" type="image/webp")
  img(:src="fallback" :alt="alt")
</template>

<script lang="ts">
import { defineComponent, computed } from "@nuxtjs/composition-api"

export default defineComponent({
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
  },
  setup: (props) => {
    const fallback = computed(() => props.src.replace(".webp", ".png"))
    return { fallback }
  }
})
</script>

<style lang="stylus" scoped>
.WebpWrapper
  width: 100%
</style>
