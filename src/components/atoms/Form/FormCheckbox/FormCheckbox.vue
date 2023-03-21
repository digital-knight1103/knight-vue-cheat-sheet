<template>
<div>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
  />
  <label v-if="label" class="ml-2">{{ label }}</label>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FormCheckbox',
  props: {
    label: {
      type: String,
      default: ''
    },
      modelValue: {
      type: Boolean,
      default: false
  }
  }
})
</script>
