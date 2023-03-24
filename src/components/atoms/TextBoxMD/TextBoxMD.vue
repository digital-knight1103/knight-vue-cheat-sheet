<template>
  <div :class="boxClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BoxTextMD',
  setup() {
    const boxClass = 'mx-10 my-2 p-5 bg-gray-600 rounded-lg text-white'

    return {
      boxClass
    }
  }
})
</script>