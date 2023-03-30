<template>
  <!-- <div class="check ml-[600px] mx-auto mt-10">
      <label for="">
        <input type="radio" name="anim" value="fade" v-model="anim">Fade
      </label>
      <label for="">
        <input type="radio" name="anim" value="slide" v-model="anim">Slide
      </label>
      <label for="">
        <input type="radio" name="anim" value="slide-down" v-model="anim">Slide down
      </label>
      <label for="">
        <input type="radio" name="anim" value="grow-in" v-model="anim">Grow in
      </label>
      <label for="">
        <input type="radio" name="anim" value="grow-out" v-model="anim">Grow out
      </label>
    </div> -->

    <div class="check ml-[600px] mx-auto mt-10">
      <!-- Fade -->
      <div class="flex items-center">
        <label
          class="relative flex cursor-pointer items-center rounded-full p-3"
          for="html"
          data-ripple-dark="true"
        >
          <input
            id="html"
            name="anim"
            type="radio"
            value="fade"
            v-model="anim"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
          />
          <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </div>
        </label>
        <label
          class="mt-px cursor-pointer select-none font-semibold text-white"
          for="html"
        >
          Fade
        </label>
      </div>
      <!-- Slide -->
      <div class="inline-flex items-center">
        <label
          class="relative flex cursor-pointer items-center rounded-full p-3"
          for="react"
          data-ripple-dark="true"
        >
          <input
            id="react"
            name="anim"
            type="radio"
            value="slide"
            v-model="anim"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-400 checked:before:bg-green-500 hover:before:opacity-10"
          />
          <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-500 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </div>
        </label>
        <label
          class="mt-px cursor-pointer select-none font-semibold text-white"
          for="react"
        >
          Slide
        </label>
      </div>
      <!-- Grow -->
      <div class="flex items-center">
        <label
          class="relative flex cursor-pointer items-center rounded-full p-3"
          for="html"
          data-ripple-dark="true"
        >
          <input
            id="html"
            name="anim"
            type="radio"
            value="grow-in"
            v-model="anim"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
          />
          <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </div>
        </label>
        <label
          class="mt-px cursor-pointer select-none font-semibold text-white"
          for="html"
        >
          Grow
        </label>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const anim = ref('')

    return {
      anim
    }
  }
})
</script>

<style scoped>

</style>