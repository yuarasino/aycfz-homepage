<template lang="pug">
figure.MemberProfile
  div.illust-wrapper
    img.illust(:src="profile.illust" :alt="profile.nameJP")
  div.information-wrapper
    p.name
      span.jp {{ profile.nameJP }}
    p.position
      span.jp {{ profile.position }}
    div.description
      p.jp {{ profile.description }}
    div.links
      p.twitter
        a(:href="profile.twitter" rel="noopener noreferrer" target="_blank") Twitter
      p.youtube
        a(:href="profile.youtube" rel="noopener noreferrer" target="_blank") YouTube
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api"
import { IMemberProfile } from "@/assets/scripts/member"

export default defineComponent({
  props: {
    profile: { type: Object as PropType<IMemberProfile>, required: true },
  },
})
</script>

<style lang="stylus" scoped>
.MemberProfile
  flexCenter()
  margin-left: auto
  margin-right: auto
  width: 80%
  // box-shadow: 0 0 8px alpha(#000, .2)

.illust-wrapper
  width: 50%

.information-wrapper
  align-self: flex-start
  width: 50%
  padding-left: 2rem

.name
  margin-top: 2rem

  .jp
    font-family: $jpFontFamily
    font-size: 3rem

.position
  margin-top: .5rem
  color: #995555

  .jp
    font-family: $jpFontFamily
    font-size: 1.5rem

.description
  margin-top: 2rem
  line-height: 1.8

  .jp
    font-family: $jpFontFamily
    font-size: 1rem
    white-space: pre-wrap

.links
  margin-top: 2rem
</style>
