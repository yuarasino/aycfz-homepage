<template lang="pug">
header.SiteHeader(:class="isScrollOver ? 'scroll-over' : ''")
  h1.logo-wrapper
    NuxtLink.logo(to="/" data-content="/えーゆーちごふれずも") AYCFZ
  div.flex-spacer
  nav.menu-wrapper
    ul.ul
      li.li
        NuxtLink.menu(to="/#top") TOP
      li.li
        NuxtLink.menu(to="/#news") NEWS
      li.li
        NuxtLink.menu(to="/#member") MEMBER
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api"
import { throttle } from "throttle-debounce"

export default defineComponent({
  setup: () => {
    const isScrollOver = ref(false)

    onMounted(() => {
      window.addEventListener("scroll", throttle(500, false, () => {
        const y = Math.floor(document.body.clientWidth * 9 / 16)
        isScrollOver.value = window.scrollY >= y
      }))
    })

    return { isScrollOver }
  }
})
</script>

<style lang="stylus" scoped>
.SiteHeader
  display: flex
  justify-content: center
  align-items: center
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 4rem
  transition: 1s

  &.scroll-over
    background-color: #333
    color: #fff

.logo-wrapper
  margin-left: 1rem

.logo
  display: block
  padding: 0 .25em
  text-decoration: none
  font-family: $designFontFamily
  font-size: 2rem
  font-weight: 700
  color: inherit

  &::after
    content: attr(data-content)
    margin-left: .125em
    font-family: $textFontFamily
    font-size: 1rem

.flex-spacer
  flex: 1

.menu-wrapper
  margin-right: 1.5rem

.ul
  list-style: none
  display: flex
  justify-content: center
  align-items: center
  padding-left: 0

.li
  margin-left: 1rem

.menu
  display: block
  padding: 0 .25em
  text-decoration: none
  font-family: $designFontFamily
  font-size: 1rem
  font-weight: 700
  color: inherit
</style>
