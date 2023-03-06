<template>
  <div class="my-0 mx-auto">
    <ul 
      class="tabs__header flex flex-wrap p-0 mb-4"
    >
      <li 
        v-for="title in tabTitles" 
        :key="title"
        class="min-w-[100px]"
        :class="{ 
          selected: title == selectedTitle 
        }"
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

.tabs__header li {
  text-align: center;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #1E2431;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s all ease-in-out;
}

.tabs__header li:last-child {
  margin-right: 0;
}

.tabs__header li.selected {
  background-color: #24D164;
  color: white;
}


</style>