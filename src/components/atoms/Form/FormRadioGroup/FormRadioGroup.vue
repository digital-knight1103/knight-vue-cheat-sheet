<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      horizontal: !vertical
    }"
  >
    <FormRadio
      :label="option.label"
      :value="option.value"
      :modelValue="modelValue"
      :name="name"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue'

import FormRadio from '../FormRadio/FormRadio.vue';

interface selectItem {
  [value: string]: string 
}

export default defineComponent({
  name: 'FormRadioGroup',
  components: {
    FormRadio
  },
  props: {
    options: {
      type: Array as PropType<selectItem[]>,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  }

})
</script>

<style scoped>
.horizontal {
  margin-right: 20px;
}
</style>