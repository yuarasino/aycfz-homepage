<template lang="pug">
section.IndexNews#news
  div.title-wrapper
    h2 IndexNews
  ContentWrapper
    ul.summary-list
      li.summary-item(v-for="post in posts" :key="post.slug")
        NuxtLink.summary-link(:to="`/news/${post.slug}`")
          NewsSummary(:post="post")
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api"
import { INewsPost } from "@/types/news"

export default defineComponent({
  props: {
    posts: { type: Array as PropType<INewsPost[]>, required: true },
  },
})
</script>

<style lang="stylus" scoped>
.IndexNews
  width: 100%
  min-height: 100vh
</style>
