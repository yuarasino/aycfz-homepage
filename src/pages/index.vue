<template lang="pug">
div.SiteIndex
  IndexTop
  IndexNews(:posts="newsPosts")
  IndexMember
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from "@nuxtjs/composition-api"
import { INewsPost } from "@/types/news"

export default defineComponent({
  setup: () => {
    const { $content } = useContext()
    const newsPosts = useAsync(async () => {
      return (await $content("news")
        .without(["body"])
        .sortBy("date", "desc")
        .fetch()) as INewsPost[]
    })

    return { newsPosts }
  },
})
</script>

<style lang="stylus" scoped>
.SiteIndex
  width: 100%
</style>
