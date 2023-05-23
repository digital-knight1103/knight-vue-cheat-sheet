<template>
  <div 
    class="mt-4 relative w-full h-14 py-4 px-3 mb-2 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg "
    :class="[ full ? 'w-full' : 'w-96' ]"
    >
    <label 
      v-if="label"
      class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300  px-1 bg-gray-500">
      {{ label }}
    </label>
    <select 
      class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium"
      v-bind="{
        ...$attrs,
        onChange: ($event) => { $emit('update:modelValue', ($event.target as HTMLInputElement).value) }
      }"
      :placeholder="placeholder?.length > 0 ? placeholder : label"
      :disabled="disabled"
      :value="modelValue"
    >
      <option
        class="bg-gray-600 text-white"
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'FormSelect',
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    full: {
      type: Boolean
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled:{
      type: Boolean
    },
  }

})
</script>
