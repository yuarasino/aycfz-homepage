<template lang="pug">
section.IndexTop#top
  div.hero-wrapper
    ImageWrapper(:aspectRaito="9/16")
      img.hero(src="/images/top.jpg" alt="AYCFZ/えーゆーちごふれずも")
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({})
</script>

<style lang="stylus" scoped>
.IndexTop
  width: 100%
</style>
