<template>
  <div class="tabs">
    <ul class="tabs_header">
      <li 
        v-for="title in tabTitles" 
        :key="title"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue'

export default defineComponent({
  name: 'TabsWrapper',

  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title))
    const selectedTitle = ref(tabTitles.value[0])

    provide('selectedTitle', selectedTitle)
    return {
      selectedTitle,
      tabTitles
    }
  }

})

</script>

