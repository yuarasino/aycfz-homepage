<template lang="pug">
section.IndexMember#member
  div.title-wrapper
    h2.title.scroll-effect
      span.en MEMBER
      span.jp /メンバー
  div.profile-wrapper
    ContentWrapper
      ul.button-list
        li.button-item.scroll-effect(
          v-for="profile in profiles"
          :key="profile.nameEN"
          :class="scrollAppear ? 'scroll-appear' : ''"
        )
          MemberButton(
            :profile="profile"
            @click="onClick"
          )
      Transition
        MemberProfile.profile.scroll-effect(:profile="currentProfile")
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  onMounted,
  ref,
} from "@nuxtjs/composition-api"
import { IMemberProfile } from "@/assets/scripts/member"
import { throttle } from "throttle-debounce"

export default defineComponent({
  props: {
    profiles: { type: Array as PropType<IMemberProfile[]>, required: true },
  },
  setup: (props) => {
    const currentProfile = ref(props.profiles[0])
    const scrollAppear = ref(false)

    const onClick = (profile: IMemberProfile) => {
      currentProfile.value = profile
    }

    onMounted(() => {
      const els = document.querySelectorAll(".scroll-effect")
      els.forEach((el) => {
        const f = throttle(500, false, () => {
          const top = el.getBoundingClientRect().top
          const wh = window.innerHeight
          if (wh - top > 0) {
            el.classList.add("scroll-appear")
            scrollAppear.value = true
          } else {
            el.classList.remove("scroll-appear")
            scrollAppear.value = false
          }
        })
        f()
        window.addEventListener("scroll", f)
      })
    })

    return { currentProfile, scrollAppear, onClick }
  },
})
</script>

<style lang="stylus" scoped>
.IndexMember
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

.button-list
  flexCenter()
  flex-wrap: wrap
  gap: 2%

.button-item
  margin-top: 1rem
  width: 32%

.profile
  margin-top: 4rem

.scroll-effect
  transition: 2s
  opacity: 0
  transform: translateY(4rem)

.scroll-appear
  opacity: 1
  transform: translateY(0)
</style>
