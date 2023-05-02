<template>
  <component 
    :is="iconComponent" 
    class="inline-block bg-green-500 w-10"
  />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'AppIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'md',
      validator(value: string) {
        return ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
      }
    }
  },

  computed: {
    // this will cause lazy loading
    iconComponent() {
      return () => import(`../assets/icons/${this.name}.svg`)
      // return () => import (`/src/icons/${this.name}.svg`)
    }
  },
  setup () {
    return {
    }
  }
})
</script>
