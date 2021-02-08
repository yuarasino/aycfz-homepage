<template lang="pug">
div.SiteLayout
  SiteHeader
  SiteMain
  SiteFooter
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({})
</script>

<style lang="stylus">
.SiteLayout
  width: 100%
  min-height: 100vh
</style>
