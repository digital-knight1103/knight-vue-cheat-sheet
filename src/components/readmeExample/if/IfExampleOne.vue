<script setup lang="ts">
import { ref } from 'vue'

const showMessage = ref(true)
const toggleMessage = () => {
      showMessage.value = !showMessage.value;
    };

</script>

<template>
  <div class="p-4 mt-4 mb-8 border rounded-lg flex flex-col justify-center max-w-md mx-auto">
    <!-- <h1 class="">{{ showMessage }}</h1> -->
    <button 
      @click="toggleMessage"
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"  
    >
      Zmień wartość <span class="uppercase inline-flex items-center rounded-lg bg-green-50 px-2 py-1 font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{ showMessage }}</span>
    </button>
  
    <div class="mt-4 text-white font-lg text-center">
      <p v-if="showMessage">To jest wiadomość główna.</p>
      <p v-else>To jest wiadomość alternatywna.</p>
    </div>
  </div>
</template>