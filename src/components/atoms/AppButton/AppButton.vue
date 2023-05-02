<template>
  <button  :disabled="disabled" :class="buttonClass">
    <component :is="$props.icon" class="w-5 h-5 mr-2"/>
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AppButton',
  props: {
    icon: {
      type: Object,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const buttonClass = ref('block py-4 px-8 text-center text-white font-bold text-sm leading-6 bg-green-500 hover:bg-green-600 rounded-xl transition duration-200 w-96')

    if (props.full) buttonClass.value += 'w-full'

    return {
      buttonClass
    }
  }
})
</script>
