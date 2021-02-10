<template lang="pug">
div.NewsPost
  p(v-for="v, k in post" :key="k") {{ `${k}: ${v}` }}
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from "@nuxtjs/composition-api"
import { INewsPost } from "@/assets/scripts/news"

export default defineComponent({
  setup: () => {
    const { $content, params } = useContext()
    const post = useAsync(async () => {
      return (await $content("news", params.value.slug).fetch()) as INewsPost
    })

    return { post }
  },
})
</script>

<style lang="stylus" scoped>
.NewsPost
  width: 100%
  padding-top: 4rem
</style>
