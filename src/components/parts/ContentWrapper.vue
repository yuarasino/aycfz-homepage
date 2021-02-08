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
  width: 100%
  max-width: 64rem
</style>
