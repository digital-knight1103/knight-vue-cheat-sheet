<template>
  <div :class="box">
    <h4 :class="titleClass">{{ title }}</h4>
    <p :class="paraClass">{{ description }}</p>
    <div :class="imgClass">
      <img src="../../../assets/icons/info.svg"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';

export default defineComponent({
  name: 'BoxInfo',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  setup() {
    const box = ref('m-6 pt-5 pr-5 pb-7 pl-10 border border-green-600 rounded-lg relative overflow-hidden bg-gray-600')
    const titleClass = ref('text-white font-semibold mb-2')
    const paraClass = ref('text-gray-200 text-sm leading-5 font-medium z-10')
    const imgClass = ref('absolute w-40 -right-10 -bottom-20 text-green-500 rotate-12 opacity-20')

    return {
      box,
      titleClass,
      paraClass,
      imgClass
    }
  }
})
</script>
