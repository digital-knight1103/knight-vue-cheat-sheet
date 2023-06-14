<template>
  <h1>{{ state.text }}</h1>
  <p>{{ state.counter }}</p>

  <input v-model="state.text">

  <div clas="p-4 border"> 
    <h1>{{ title }}</h1>
    <p>koszt {{ price }} </p>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'


    const state = reactive({
      counter: 12,
      text: 'Witam',
      product: ['Gruszka', 'Orzeszki']
    })

    const pro = reactive({
      title: 'lolo',
      price: 23
    })

    const { title, price }= toRefs(pro)

</script>
