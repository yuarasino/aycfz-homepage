<template lang="pug">
section.IndexTop#top
  ImageWrapper(:aspectRaito="9/16")
    img(src="/images/top.png" alt="AYCFZ/えーゆーちごふれずも")
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({})
</script>

<style lang="stylus" scoped>
.IndexTop
  width: 100%
</style>
