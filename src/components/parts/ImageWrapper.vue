<template lang="pug">
div.ImageWrapper(:style="{ paddingBottom: `${aspectRaito*100}%` }")
  slot
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  props: {
    aspectRaito: { type: Number, required: true },
  }
})
</script>

<style lang="stylus" scoped>
.ImageWrapper
  width: 100%
  height: 0
  overflow-y: hidden
</style>
