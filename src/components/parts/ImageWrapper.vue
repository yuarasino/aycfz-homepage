<template lang="pug">
div.ImageWrapper(:style="{ paddingBottom: `${raito*100}%` }")
  img.image(:src="src" :alt="alt")
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    raito: { type: Number, required: true },
  }
})
</script>

<style lang="stylus" scoped>
.ImageWrapper
  width: 100%
  height: 0
  overflow-y: hidden
</style>
