<template lang="pug">
section.IndexTop#top
  div.hero-wrapper
    ImageWrapper.image-wrapper(:aspectRaito="9/16")
      img.hero(src="/images/top.png" alt="AYCFZ/えーゆーちごふれずも")
      img.back(src="/images/back.png" alt="")
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
