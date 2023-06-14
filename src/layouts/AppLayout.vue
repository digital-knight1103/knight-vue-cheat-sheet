<script setup lang="ts">
  import ContentLayout from './ContentLayout.vue'
  import { markRaw, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const layout = ref()
  const route = useRoute()

  watch(
    () => route.meta?.layout as string | undefined,
    async (metaLayout) => {
      try {
        const component = metaLayout && await import(/* @vite-ignore */ `./${metaLayout}.vue`)
        layout.value = markRaw(component?.default || ContentLayout)
      } catch (e) {
        layout.value = markRaw(ContentLayout)
      }
    },
    { immediate: true }
  )
</script>

<template>
  <div class="mx-auto lg:ml-[290px] rounded-lg mt-8">
    <component :is="layout"> <router-view /> </component>
  </div>
</template>
