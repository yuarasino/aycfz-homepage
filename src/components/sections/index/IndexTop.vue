<template lang="pug">
section.IndexTop#top
  ImageWrapper(:src="'/images/top.png'" :alt="''" :raito="9/16")
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({})
</script>

<style lang="stylus">
.IndexTop
  width: 100%
</style>
