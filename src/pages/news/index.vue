<template lang="pug">
div.NewsIndex
  ul
    li(v-for="post in posts" :key="post.slug")
      p(v-for="v, k in post" :key="k") {{ `${k}: ${v}` }}
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from "@nuxtjs/composition-api"
import { INewsPost } from "@/types/news"

export default defineComponent({
  setup: () => {
    const { $content } = useContext()
    const posts = useAsync(async () => {
      return (await $content("news")
        .without(["body"])
        .sortBy("date", "desc")
        .fetch()) as INewsPost[]
    })

    return { posts }
  },
})
</script>

<style lang="stylus" scoped>
.NewsIndex
  width: 100%
  padding-top: 4rem
</style>
