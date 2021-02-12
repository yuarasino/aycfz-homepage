<template lang="pug">
section.IndexTop#top
  div.hero-wrapper
    ImageWrapper.image-wrapper(:aspectRaito="9/16")
      WebpWrapper.hero(src="/images/top.webp" alt="AYCFZ/えーゆーちごふれずも")
      WebpWrapper.back(src="/images/back.webp" alt="")
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({})
</script>

<style lang="stylus" scoped>
.IndexTop
  width: 100%

.image-wrapper
  position: relative

.hero
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: auto
  z-index: 1

.back
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: auto
  z-index: 0
</style>
