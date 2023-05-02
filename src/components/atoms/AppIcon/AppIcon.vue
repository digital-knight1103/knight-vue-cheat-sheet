<template>
  <component 
    :is="iconComponent" 
    :class="iconClass"
  />
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

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


  // computed: {
  //   // this will cause lazy loading
  //   iconComponent() {
  //     return () => import(`../assets/icons/${this.name}.svg`)
  //     // return () => import (`/src/icons/${this.name}.svg`)
  //   }
  // },
  setup (props) {
    const iconClass = ref('inline-block bg-green-500 w-10')
    
    const iconComponent = computed(() => import(`../assets/icons/${props.name}.svg`)) 

    return {
      iconComponent,
      iconClass
    }
  }
})
</script>
