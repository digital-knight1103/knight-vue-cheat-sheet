<template>
    <div class="md:max-w-[2000px] container px-4 h-full">
      <div class="relative py-24 md:py-64 px-8 bg-green-500 rounded-2xl overflow-hidden shadow-lg shadow-green-500/10">
        <img 
          class="absolute top-0 left-0 h-full w-full object-cover" 
          :src="path" 
          :alt="alt"
        >
        <!-- START CONTENT -->
        <div class="relative max-w-lg mx-auto text-center mb-12 z-10">
          <h3 class="text-3xl md:text-4xl font-bold text-white mb-3">
            {{ title}}
          </h3>
          <p class="font-medium text-blue-200 mb-6">
            {{ subtitle }}
          </p>
          <a class="inline-block w-full sm:w-auto px-16 py-3 leading-6 text-center font-semibold text-blue-50 bg-gray-500 hover:bg-gray-600 transition duration-200 rounded-lg" href="#">Zaczynajmy</a>
        </div>
        <!-- END CONTENT -->
        <span class="mask absolute top-0 left-0 w-full h-full bg-cover opacity-60"></span>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainBanner',
  props: {
    path: {
      type: String,
      required: true,
      default: '@/assets/images.space.png'
    },
    alt : {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    }
  },
  setup() {

  }
})

</script>

<style scoped>
.mask {
  background-image: linear-gradient(195deg,#66bb6a,#43a047);
}
</style>