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
              span {{ formatDate(content.createdAt) }}
              span {{ content.title }}
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "@nuxtjs/composition-api"
import { IContentDocument } from "@nuxt/content/types/content"
import moment from "moment"

export default defineComponent({
  props: {
    contents: { type: Array as PropType<IContentDocument[]>, required: true },
  },
  setup: () => {
    const formatDate = (date: Date) => {
      return moment(date).format("YYYY.MM.DD")
    }

    return { formatDate }
  }
})
</script>

<style lang="stylus" scoped>
.IndexNews
  width: 100%
  min-height: 100vh
</style>
