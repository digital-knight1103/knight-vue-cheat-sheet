<script setup>
import { reactive } from 'vue'

const product = reactive({
  name: 'Miecz',
  inStock: false
})


</script>

<template>
  <div class="p-4 mt-4 mb-8 border rounded-lg flex flex-col justify-center max-w-md mx-auto">
    <h1> {{ product.name }}</h1>
    <img class='w-8 h-8' src='../../../assets/images/avatar.svg' />
    <p v-if="product.inStock">In stock</p>
    <p v-else>Out of stock</p>
  </div>

  <h1 v-show="product.inStock">v-show</h1>
</template>



