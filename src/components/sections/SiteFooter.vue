<template lang="pug">
footer.SiteFooter
  div.copyright-wrapper
    p.copyright
      span.en &copy; AYCFZ
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({})
</script>

<style lang="stylus" scoped>
.SiteFooter
  flexCenter()
  width: 100%
  height: 4rem
  background-color: #333
  color: #fff

.copyright
  font-size: (14rem / 16)
  font-weight: 700

  .en
    font-family: $enFontFamily
</style>
