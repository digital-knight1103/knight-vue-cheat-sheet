<template>
  <input
    type="email"
    :size="size"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import FormText from '@/atoms/Form/FormEmail/FromEmail.vue'

export default defineComponent({
  name: 'FormEmail',
  // components: { FormText },
  props: {
    size: {
      type: String,
      default: 'md',
      validator: (v: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v)
    }
  }
})
</script>
