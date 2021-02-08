<template lang="pug">
section.IndexNews#news
  div.title-wrapper
    h2 IndexNews
  ContentWrapper
    ul.content-list
      li.content-item
        NuxtLink.content-link(to="/")
          article.content
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({})
</script>

<style lang="stylus" scoped>
.IndexNews
  width: 100%
  min-height: 100vh
</style>
