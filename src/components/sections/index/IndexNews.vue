<template lang="pug">
section.IndexNews#news
  div.title-wrapper
    h2 IndexNews
  div.summary-wrapper
    ContentWrapper
      ul.summary-list
        li.summary-item(v-for="post in posts" :key="post.slug")
          NuxtLink.summary-link(:to="`/news/${post.slug}`")
            NewsSummary.summary(:post="post")
  button(@click="onClick") 追加
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted } from "@nuxtjs/composition-api"
import { INewsPost } from "@/types/news"

export default defineComponent({
  props: {
    posts: { type: Array as PropType<INewsPost[]>, required: true },
  },
  setup: () => {
    onMounted(() => {
      const els = document.querySelectorAll(".summary-item")
      els.forEach(el => {
        const f = () => {
          const top = el.getBoundingClientRect().top
          const wh = window.innerHeight
          if (wh - top > 64) {
            el.classList.add("scroll-appear")
            window.removeEventListener("scroll", f)
          }
        }
        window.addEventListener("scroll", f)
      })
    })
  }
})
</script>

<style lang="stylus" scoped>
.IndexNews
  width: 100%
  min-height: 100vh

.summary-item
  margin-top: 4rem
  transition: 1s
  opacity: 0
  transform: translateY(4rem)

.scroll-appear
  &.summary-item
    opacity: 1
    transform: translateY(0)
</style>
