<template lang="pug">
button.MemberButton(@click="onClick")
  div.icon-wrapper
    div.icon-rounded
      img.icon(:src="profile.icon" alt="")
  div.name-wrapper
    div.name
      span.jp {{ profile.nameJP }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api"
import { IMemberProfile } from "@/assets/scripts/member"

export default defineComponent({
  props: {
    profile: { type: Object as PropType<IMemberProfile>, required: true },
  },
  setup: (props, { emit }) => {
    const onClick = () => {
      emit("click", props.profile)
    }

    return { onClick }
  },
})
</script>

<style lang="stylus" scoped>
.MemberButton
  flexCenter()
  position: relative
  width: 100%

  &::after
    content: ""
    position: absolute
    top: 100%
    left: 0
    width: 100%
    height: 1px
    background-color: #999


.icon-wrapper
  width: 3rem

.icon-rounded
  border: 1px solid alpha(#000, .04)
  border-radius: 50%
  box-shadow: 0px 0px 2px alpha(#000, .02) inset
  overflow: hidden

.name-wrapper
  flex: 1
  padding-left: 1.0rem

.name
  text-align: left
  font-weight: 400

  .jp
    font-size: 1.5rem
</style>
