<template>
  <div class="page-header flex p-0 relative overflow-hidden items-center bg-cover bg-center min-h-[300px] rounded-lg mt-4">
    <span class="mask absolute top-0 left-0 w-full h-full bg-cover opacity-60"></span>
    <h1 class="text-xl text-white ml-4">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
  }
})
</script>

<!-- Poprawić na tailwindowe, BG-image ma być inne dla każdej sekcji-->
<style scoped>
.page-header {
  background-image: url("https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
}
.mask {
  background-image: linear-gradient(195deg,#66bb6a,#43a047);
}
</style>