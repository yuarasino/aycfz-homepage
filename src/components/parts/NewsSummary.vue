<template lang="pug">
article.NewsSummary
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api"
import { INewsPost } from "@/types/news"

export default defineComponent({
  props: {
    post: { type: Object as PropType<INewsPost>, required: true },
  },
})
</script>

<style lang="stylus" scoped>
.NewsSummary
  width: 100%
</style>
