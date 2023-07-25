<template>
  <h1>{{ message }}</h1>
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
