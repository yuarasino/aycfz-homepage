<template lang="pug">
footer.SiteFooter
  p.copyright-wrapper
    span.copyright &copy; AYCFZ
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({})
</script>

<style lang="stylus" scoped>
.SiteFooter
  display: flex
  justify-content: center
  align-items: center
  height: 4rem
  background-color: #333
  color: #fff

.copyright
  font-size: (14rem / 16)
</style>
