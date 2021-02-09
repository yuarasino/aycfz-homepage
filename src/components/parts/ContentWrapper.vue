<template lang="pug">
div.ContentWrapper
  slot
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({})
</script>

<style lang="stylus" scoped>
.ContentWrapper
  margin: 0 auto
  max-width: 62rem
  padding: 0 1rem
</style>
