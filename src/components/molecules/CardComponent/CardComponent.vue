<template>
  <div>
    <section class="py-3">
      <div class="container px-4 mx-auto">
        <div class="relative p-6 bg-gray-500 rounded-xl">
          <a class="inline-block absolute top-0 right-0 m-6 text-gray-300 hover:text-gray-200" href="#">
            <IconVerticalDotsVue/>
          </a>
          <div class="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-500 rounded-lg">

            <!--TODO  Tu dać logo -->

          </div>
          <h4 class="text-xl text-white font-bold mb-3">{{ title }}</h4>
          <p class="text-gray-300 mb-5">{{ description }}</p>
          <div class="flex flex-wrap items-center mb-6">
            <div class="flex w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2">
              <!-- <img class="w-8 h-8 rounded-full object-cover" src="../../../assets/html.svg" alt=""> -->
              <img class="w-8 h-8 -ml-2 rounded-full object-cover" src="../../../assets/css3.svg" alt="">
              <img class="w-8 h-8 -ml-2 rounded-full object-cover" src="../../../assets/javascript.svg" alt="">
              <div class="flex items-center justify-center w-8 h-8 -ml-2 bg-gray-500 rounded-full">
                <div class="flex items-center justify-center w-7 h-7 bg-gray-400 text-xs text-gray-300 font-semibold rounded-full">+2</div>
              </div>
            </div>
            <div class="w-full sm:w-auto">
              <span class="text-xs text-gray-300">Użyte technologie</span>
            </div>
          </div>
          <!-- Zrobi router linka -->
          <RouterLink :to='path' text="Sprawdź" class="'block py-4 px-12 text-center text-white font-bold text-sm leading-6 bg-green-500 hover:bg-green-600 rounded-xl transition duration-200'">
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconVerticalDotsVue from '@/assets/icons/IconVerticalDots.vue';

export default defineComponent({
    name: "CardComponent",
    components: {
      IconVerticalDotsVue
    },
    props: {
        title: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        path: {
          type: String,
          required: true
        }
    }
})


</script>