<template>
  <FormRadio
    v-for="option in options"
    :key="option.value"
    :label="option.label"
    :value="option.value"
    :modelValue="modelValue"
    :name="name"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
  </FormRadio>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormRadio from '../FormRadio/FormRadio.vue';

export default defineComponent({
  name: 'FormRadioGroup',
  components: {
    FormRadio
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    }
  }

})
</script>