<template lang="pug">
header.SiteHeader(:class="isScrollOver ? 'scroll-over' : ''")
  div.logo-wrapper
    NuxtLink.logo-link(to="/")
      h1.logo
        span.en AYCFZ
        span.jp /えーゆーちごふれずも
  div.flex-spacer
  nav.menu-wrapper
    ul.menu-list
      li.menu-item
        NuxtLink.menu-link(to="/")
          div.menu
            span.en TOP
      li.menu-item
        NuxtLink.menu-link(to="/#news")
          div.menu
            span.en NEWS
      li.menu-item
        NuxtLink.menu-link(to="/#member")
          div.menu
            span.en MEMBER
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api"
import { throttle } from "throttle-debounce"

export default defineComponent({
  setup: () => {
    const isScrollOver = ref(false)

    onMounted(() => {
      const f = throttle(500, false, () => {
        const y = Math.floor((document.body.clientWidth * 9) / 16) / 2
        isScrollOver.value = window.scrollY >= y
      })
      window.addEventListener("scroll", f)
    })

    return { isScrollOver }
  },
})
</script>

<style lang="stylus" scoped>
.SiteHeader
  flexCenter()
  position: fixed
  top: 0
  left: 0
  z-index: 9999
  width: 100%
  height: 4rem
  transition: 1s

  &.scroll-over
    background-color: #333
    color: #fff

.logo-wrapper
  margin-left: 1rem

.logo
  padding: 0 .25em
  font-size: 2rem
  font-weight: 700

  .en
    font-family: $enFontFamily

  .jp
    margin-left: .125em
    font-size: 1rem

.flex-spacer
  flex: 1

.menu-wrapper
  margin-right: 1.5rem

.menu-list
  flexCenter()

.menu-item
  margin-left: 1rem

.menu
  padding: 0 .25em
  font-size: 1rem
  font-weight: 700

  .en
    font-family: $enFontFamily
</style>
