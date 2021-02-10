<template lang="pug">
article.NewsSummary
  div.icon-wrapper
    div.icon-rounded
      img.icon(:src="post.icon" alt="")
  div.title-wrapper
    h3.title {{ post.title }}
  div.date-wrapper
    time.date {{ formatDate(post.date) }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api"
import { INewsPost } from "@/assets/scripts/news"
import { formatDate } from "@/assets/scripts/common"

export default defineComponent({
  props: {
    post: { type: Object as PropType<INewsPost>, required: true },
  },
  setup: () => {
    return { formatDate }
  },
})
</script>

<style lang="stylus" scoped>
.NewsSummary
  flexCenter()
  width: 100%

.icon-wrapper
  width: 4rem

.icon-rounded
  border: 1px solid alpha(#000, .04)
  border-radius: 50%
  box-shadow: 0px 0px 2px alpha(#000, .02) inset
  overflow: hidden

.title-wrapper
  flex: 1
  padding-left: 1.5rem

.title
  font-size: 1.2rem
  font-weight: 400

.date-wrapper
  width: 8rem
  padding-left: 2rem

.date
  display: block
  font-family: $enFontFamily
  font-size: 1rem
  color: $metaColor
</style>
