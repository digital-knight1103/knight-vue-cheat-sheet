<template>
  <main>
    <MainBanner 
      title='Mały przewodnik VUE3' 
      subtitle='Jesteś gotowy na podróż ' 
      :path='pathImg' 
      alt="Images Banner"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pathImg = ref('../src/assets/images/space.png')

</script>
