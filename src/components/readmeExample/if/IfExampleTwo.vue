<script setup lang="ts">
import { reactive } from 'vue'

const fireSword = reactive({
  name: 'Miecz ognia',
  inventory: 0,
})

const airSword = reactive({
  name: 'Miecz powietrza',
  inventory: 12,
})

</script>

<template>
  <div class="p-4 mt-4 mb-8 border rounded-lg flex flex-col justify-center max-w-md mx-auto">

    <div class="flex">
      <img class='m-2 basis-1/5 h-16' src='../../../assets/images/fireSword.svg' />
      <div class="p-2 grow">
        <h1 class="text-white uppercase "> {{ fireSword.name }}</h1>
        <p v-if="fireSword.inventory > 5">Duża dostępność</p>
        <p v-else-if="fireSword.inventory <=5 && fireSword.inventory > 0">Mała dostepność</p>
        <p v-else>Niedostępnę</p>
        <span class="text-pink-500">{{ fireSword.inventory }}</span>
      </div>
      <button :disabled="fireSword.inventory < 1" class=" text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow h-12">
        Kup
      </button>
    </div>

    <div class="flex">
      <img class='m-2 basis-1/5 h-16' src='../../../assets/images/airSword.svg' />
      <div class="p-2 grow">
        <h1 class="text-white uppercase "> {{ airSword.name }}</h1>
        <p v-if="airSword.inventory > 5">Duża dostępność</p>
        <p v-else-if="airSword.inventory <=5 && airSword.inventory > 0">Mała dostepność</p>
        <p v-else>Niedostępnę</p>
        <span class="text-green-500">{{ airSword.inventory }}</span>
      </div>
      <button :disabled="airSword.inventory < 1" class="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow h-12">
        Kup
      </button>
    </div>
  </div>

</template>



