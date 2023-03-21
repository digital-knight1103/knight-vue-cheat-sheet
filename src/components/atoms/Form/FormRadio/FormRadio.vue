<template>
  <input
      type="radio"
      v-model="event.pets"
      :value="1"
      name="pets"
    />
  <label v-if="label">{{ label }}</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormRadio',
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
})
</script>
