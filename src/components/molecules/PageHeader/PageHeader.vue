<template>
  <div 
    class="flex p-0 relative overflow-hidden items-center bg-cover bg-center rounded-lg mt-4" 
    :class="[big ? smallBanner : bigBanner]"
  >
    <img 
      class="absolute top-0 left-0 h-full w-full object-cover" 
      :src="path"
    >
    <span class="mask absolute top-0 left-0 w-full h-full bg-cover opacity-60"></span>
    <h1 class="text-xl text-white ml-4">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true,
    },
    big: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const bigBanner = ref('min-h-[300px]')
    const smallBanner = ref('min-h-[150px]')

    return {
      bigBanner,
      smallBanner
    }

  }
})
</script>

<!-- Poprawić na tailwindowe, BG-image ma być inne dla każdej sekcji-->
<style scoped>
.mask {
  background-image: linear-gradient(195deg,#66bb6a,#43a047);
}
</style>