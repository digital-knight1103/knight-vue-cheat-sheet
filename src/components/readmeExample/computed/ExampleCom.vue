<template>
  <div class="my-8 flex mx-auto justify-center p-10 text-center border rounded-lg w-[30%]">
    <h1 class="text-white text-xl">{{ message }}</h1>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';

const state = reactive({
  count: 0,
  msg: 'composition',
  text: 'api',
});
const message = computed(() => {
  return (
    state.msg.charAt(0).toUpperCase() +
    state.msg.slice(1) +
    state.text.toUpperCase() + ' !'
  );
});
</script>
