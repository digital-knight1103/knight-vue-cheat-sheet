<template>
  <span class="relative inline-block flex-shrink-0">
    <img v-if="path.length > 0" :class="imgClass" :src="path" :alt="alt" />
    <img v-else src="../../../assets/images/avatar.svg"/>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'UiAvatarCreator',
  props: {
    alt: {
      type: String,
      required: true
    },
    path: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md',
      validator: (v: string) =>
        ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(v)
    }
  },
  setup(props) {
    const style = {
      img: 'rounded-lg',
      span: 'inline-flex items-center justify-center rounded-full border border-blue-medium'
    }
    switch (props.size) {
      case 'xs':
        style.img += ' w-6 h-6'
        style.span += ' w-6 h-6'
        break
      case 'sm':
        style.img += ' w-8 h-8'
        style.span += ' w-8 h-8'
        break
      case 'md':
        style.img += ' w-10 h-10'
        style.span += ' w-10 h-10'
        break
      case 'lg':
        style.img += ' w-12 h-12'
        style.span += ' w-12 h-12'
        break
      case 'xl':
        style.img += ' w-14 h-14'
        style.span += ' w-14 h-14'
        break
      case '2xl':
        style.img += ' w-28 h-28'
        style.span += ' w-28 h-28'
        break
      default:
        break
    }
    const imgClass = computed(() => style.img)
    const spanClass = computed(() => style.span)

    return {
      imgClass,
      spanClass
    }
  }
})
</script>