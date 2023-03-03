<template>
  <button  :disabled="disabled" :class="buttonClass">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AppButton',
  props: {
    text: {
      type: String,
      default: 'BTN'
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
    const buttonClass = ref('block py-4 px-12 text-center text-white font-bold text-sm leading-6 bg-green-500 hover:bg-green-600 rounded-xl transition duration-200')

    if (props.full) buttonClass.value += ' w-full'

    return {
      buttonClass
    }
  }
})
</script>
