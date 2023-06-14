<template>
  <h1>Default Layout</h1>

  <div class="container">
    <PageHeader title="CompositionAPI" path="../src/assets/images/forest.png"></PageHeader>
    <PageContent>
      <slot />
    </PageContent>
  </div>
</template>

<script setup lang="ts">

// const props = defineProps(['title', 'path'])

defineProps<{
  title: {
    type: String,
    required: true,
  },
  path: string
}>()


</script>