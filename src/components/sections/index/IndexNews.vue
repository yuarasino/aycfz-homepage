<template lang="pug">
section.IndexNews#news
  div.title-wrapper
    h2 IndexNews
  ContentWrapper
    ul.content-list
      li.content-item(v-for="content in contents" :key="content.slug")
        NuxtLink.content-link(:to="`/blog/news/${content.slug}`")
          article.content
            h3
              span {{ formatDate(content.date) }}
              span {{ content.title }}
            div
              img(:src="content.thumbnail")
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "@nuxtjs/composition-api"
import { IContentDocument } from "@nuxt/content/types/content"
import { formatDate } from "@/assets/scripts/utils"

export default defineComponent({
  props: {
    contents: { type: Array as PropType<IContentDocument[]>, required: true },
  },
  setup: () => {
    return { formatDate }
  }
})
</script>

<style lang="stylus" scoped>
.IndexNews
  width: 100%
  min-height: 100vh
</style>
