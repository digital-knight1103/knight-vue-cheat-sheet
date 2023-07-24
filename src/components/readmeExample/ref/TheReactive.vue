<template>
  <div class="grid justify-center">
    <h1 class="text-white block text-2xl text-center mb-4">Counter</h1>
    <div class="flex">
    <button class='text-white mb-6 text-center border p-2 rounded-md' @click="decrement()">-1</button>
    <p class="block text-xl p-2 text-green-500">{{ counter }}</p>

    <button class='text-white mb-6 text-center border p-2 rounded-md' @click="increment()">+1</button>
    </div>
    
    <!-- <button class='text-white mb-6 text-center border p-2 rounded-md' @click="incrementRef()">Dodaj REF</button> -->
  </div>
</template>


<script setup lang="ts">
  import { ref } from 'vue'
// import { ref, reactive } from 'vue'
  const counter = ref(0)
  console.log('Counter', counter);
  console.log('Counter value', counter.value);
  // const counterRef = ref(10);
  // const counterReactive = reactive({num: 20});
  const increment = () => {
    counter.value++
  }
  const decrement = () => {
    counter.value--
  }
    // const incrementRef = () => {
    //   counterRef.value++
    // }
</script>