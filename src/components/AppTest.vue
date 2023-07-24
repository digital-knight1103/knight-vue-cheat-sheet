<template>
  <div class="block border mx-auto text-center w-[20%] mb-8">
    <h1>{{ text }}</h1>
    <p>{{ counter }} </p>
    <p>Lubię {{ product[0] }} i {{ product[1] }}</p>
  
    <input v-model="text">
  
    <div clas="p-4 border"> 
      <h1>{{ pro.title }}</h1>
      <p>koszt {{ pro.price }} </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'

    //z toRefs
    const state = reactive({
      counter: 12,
      text: 'Witam',
      product: ['Gruszki', 'Orzeszki']
    })

    const { counter, text, product } = toRefs(state)

    // bez to Refs
    const pro = reactive({
      title: 'bez toRefs',
      price: 23
    })
</script>
