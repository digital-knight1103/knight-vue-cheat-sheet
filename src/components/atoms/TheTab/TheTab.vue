<template>
  <div class="tab-content" v-show="title == selectedTitle">
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

<style scoped>
.tab-content {
  min-height: 400px;
  background-color: #1E2431;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
}

</style>