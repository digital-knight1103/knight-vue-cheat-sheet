<template>
  <div class="card bg-gray-500 shadow-lg shadow-green-500/10 mx-4 md:mx-6 min-h-[700px] -mt-12">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageContent',
  components: {
  },
  setup() {
  }
})
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 0 solid rgba(0,0,0,.125);
  border-radius: .75rem;
}
</style>