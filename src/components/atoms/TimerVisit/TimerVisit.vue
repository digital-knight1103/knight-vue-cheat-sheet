
<template>
  <div class="mt-5">

  <p>Twój czas na stronie</p>
  <div>{{ (elapsed / 1000).toFixed(1) }}s</div>

  <!-- <button @click="elapsed = 0">Reset</button> -->
  </div>
</template>


<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const duration = ref(10000 * 1000)
const elapsed = ref(0)

let lastTime = performance.now()
let handle:number
const update = () => {
  const time = performance.now()
  elapsed.value += Math.min(time - lastTime, duration.value - elapsed.value)
  lastTime = time
  handle = requestAnimationFrame(update)
}

update()
onUnmounted(() => {
  cancelAnimationFrame(handle)
})
</script>
