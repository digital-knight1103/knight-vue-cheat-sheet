<template>
  <div class="bar" style="--i:1;">
    <span class="flex justify-center text-white ">{{ text }}</span>
  </div>
  <div class="bar" style="--i:3;"></div>
  <div class="bar" style="--i:2;"></div>
  <div class="bar" style="--i:4;"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingBar',
  props: {
    text: {
      type: String,
      default: 'Loading...'
    }
  }
})

</script>

<style scoped>
.container .bar {
  border: 2px solid #00f376;
  border-radius: 100px;
  margin: 10px;
  position: relative; 
  width: 160px;
  height: 30px;
  background: linear-gradient(45deg, #00f376 10%, transparent 10%, transparent 50%, #00f376 50%, #00f376 60%, transparent 60%, transparent 100%);
  background-size: 20px 20px;
  filter: hue-rotate(calc(var(--i) * 90deg));
  animation: animate 0.5s linear infinite;
}

@keyframes animate 
{
  0% {background-position: 0;}
  100% {background-position: 20px;}
}

</style>