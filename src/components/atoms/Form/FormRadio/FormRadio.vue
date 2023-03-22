<template>
  <input
      type="radio"
      :checked="modelValue === value"
      :value="value"
      @change="$emit('update:modelValue, value')"
      v-bind="$attrs"
    />
  <label v-if="label" class="ml-2">{{ label }}</label>
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
    },
    value: {
      type: [String, Number],
      required: true
    }
  }
})
</script>
