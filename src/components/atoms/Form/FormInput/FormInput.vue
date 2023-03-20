<template>
  <div 
    class="my-4 relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg "
    :class="[ full ? 'w-full' : 'w-96' ]"
    >
    <label 
      class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300  px-1 bg-gray-500">
      {{ label }}
    </label>
    <input 
      class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium"
      :placeholder="placeholder?.length > 0 ? placeholder : text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'FormInput',
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    full: {
      type: Boolean
    },
    placeholder: {
      type: String,
      default: ''
    }
  }

})
</script>
