<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwitchBackground',
  setup() {
    let color = prompt('Wpisz jakiś kolor:')

    document.body.style.background = color

    return {
      color
    }
  }
})
</script>