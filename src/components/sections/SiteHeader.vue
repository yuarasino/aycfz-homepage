<template lang="pug">
header.SiteHeader
  h1.logo-wrapper
    NuxtLink.logo(to="/") AYCFZ
  div.flex-spacer
  nav.menu-wrapper
    ul.ul
      li.li
        NuxtLink.menu(to="/") TOP
      li.li
        NuxtLink.menu(to="/#news") NEWS
      li.li
        NuxtLink.menu(to="/#member") MEMBER
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({})
</script>

<style lang="stylus" scoped>
.SiteHeader
  display: flex
  position: fixed
  align-items: center
  top: 0
  left: 0
  width: 100%
  height: 4rem

.logo-wrapper
  margin-left: 1rem

.logo
  display: block
  padding: 0 .25em
  text-decoration: none
  font-family: $designFontFamily
  font-size: 2rem
  font-weight: bold
  color: inherit

.flex-spacer
  flex: 1

.menu-wrapper
  margin-right: 1.5rem

.ul
  list-style: none
  display: flex
  align-items: center
  padding-left: 0

.li
  margin-left: 1rem

.menu
  display: block
  padding: 0 .25em
  text-decoration: none
  font-family: $designFontFamily
  font-weight: bold
  color: inherit
</style>
