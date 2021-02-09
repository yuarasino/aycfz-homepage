<template lang="pug">
div.SiteIndex
  IndexTop
  IndexNews(:contents="newsContents")
  IndexMember
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from "@nuxtjs/composition-api"

export default defineComponent({
  setup: () => {
    const { $content } = useContext()
    const newsContents = useAsync(() => {
      return $content("news")
        .sortBy("createdAt", "desc")
        .fetch()
    })

    return { newsContents }
  }
})
</script>

<style lang="stylus" scoped>
.SiteIndex
  width: 100%
</style>
