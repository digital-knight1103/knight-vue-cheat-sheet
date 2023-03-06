<template>
  <div class="tab-content min-h-[100px] bg-gray-600 p-5 rounded-lg shadow-green" v-show="title == selectedTitle">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'TheTab',
  props: {
    title: {
      type: String
    }
  },

  setup() {
    const selectedTitle = inject('selectedTitle')

    return {
      selectedTitle
    }
  }

})

</script>
