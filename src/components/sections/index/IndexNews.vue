<template lang="pug">
section.IndexNews#news
  div.title-wrapper
    h2.title.scroll-effect
      span.en NEWS
      span.jp /ニュース
  div.summary-wrapper
    ContentWrapper
      ul.summary-list
        li.summary-item.scroll-effect(v-for="post in posts" :key="post.slug")
          NuxtLink.summary-link(:to="`/news/${post.slug}`")
            NewsSummary.summary(:post="post")
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted } from "@nuxtjs/composition-api"
import { INewsPost } from "@/types/news"
import { throttle } from "throttle-debounce"

export default defineComponent({
  props: {
    posts: { type: Array as PropType<INewsPost[]>, required: true },
  },
  setup: () => {
    onMounted(() => {
      const els = document.querySelectorAll(".scroll-effect")
      els.forEach((el) => {
        const f = throttle(500, false, () => {
          const top = el.getBoundingClientRect().top
          const wh = window.innerHeight
          if (wh - top > 32) {
            el.classList.add("scroll-appear")
          } else {
            el.classList.remove("scroll-appear")
          }
        })
        f()
        window.addEventListener("scroll", f)
      })
    })
  },
})
</script>

<style lang="stylus" scoped>
.IndexNews
  width: 100%
  min-height: 100vh
  padding-top: 4rem

.title-wrapper
  padding-top: 4rem

.title
  text-align: center;
  font-weight: 400

  .en
    font-family: $enFontFamily
    font-size: 4rem

  .jp
    margin-left: .125em
    font-size: 2rem


.summary-item
  margin-top: 4rem

.scroll-effect
  transition: 2s
  opacity: 0
  transform: translateY(4rem)

.scroll-appear
  opacity: 1
  transform: translateY(0)
</style>
