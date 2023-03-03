<template>
  <div>
    <section class="py-3">
      <div class="container px-4 mx-auto">
        <div class="relative p-6 bg-gray-500 rounded-xl">
          <a class="inline-block absolute top-0 right-0 m-6 text-gray-300 hover:text-gray-200" href="#">
            <IconVerticalDotsVue/>
          </a>
          <div class="inline-flex items-center justify-center w-16 h-16 mb-6 bg-purple-500 rounded-lg">
            <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8729 24.5972L6.0221 24.5972L2.0684 17.8231L5.7387 11.262L2.39182 11.262L0 6.68164L16.1083 6.68164L18.628 11.0002L10.9888 11.0002L7.02915 17.897L10.8729 24.5972Z" fill="#232B3A"></path>
              <path d="M9.93945 17.7865L12.4656 13.4L16.2914 20.3588L23.9609 20.3588L28.0246 13.6219L30.4044 17.6013L26.3771 24.8378L18.7439 24.8378L20.3182 27.2068L17.9389 32.0003L9.93945 17.7865Z" fill="#232B3A"></path>
              <path d="M17.6275 17.7122L22.5151 17.7122L30.6668 3.6645L25.5538 3.52868L23.9671 6.41591L20.2576 -1.80511e-06L12.0448 -3.69131e-07L9.93359 4.15804L17.6215 4.15804L21.5021 10.9075L17.6275 17.7122Z" fill="#232B3A"></path>
              <defs><rect width="30.6667" height="32" fill="white"></rect></defs>
            </svg>
          </div>
          <h4 class="text-xl text-white font-bold mb-3">{{ title }}</h4>
          <p class="text-gray-300 mb-5">{{ description }}</p>
          <div class="flex flex-wrap items-center mb-6">
            <div class="flex w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2">
              <img class="w-8 h-8 rounded-full object-cover" src="../../../assets/html.svg" alt="">
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
          <AppButton text="Sprawdź" :full="true"></AppButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconVerticalDotsVue from '@/assets/icons/IconVerticalDots.vue';
import AppButton from '@/components/atoms/AppButton/AppButton.vue';

export default defineComponent({
    name: "CardComponent",
    components: {
      IconVerticalDotsVue,
      AppButton
    },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
})


</script>