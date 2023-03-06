<template>
  <div class="my-0 mx-auto">
    <ul class="tabs__header">
      <li 
        v-for="title in tabTitles" 
        :key="title"
        :class="{ selected: title == selectedTitle}"
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

<style scoped>
.tabs {
  margin: 0 auto;
}

.tabs__header {
  margin-bottom: 10px;
  list-style: none;
  padding: 0;
  display: flex;
}

.tabs__header li {
  width: 100px;
  text-align: center;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #1E2431;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s all ease-in-out;
}

.tabs__header li.selected {
  background-color: #24D164;
  color: white;
}


</style>