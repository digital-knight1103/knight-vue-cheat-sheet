<template>
  <div class="container">
    <PageHeader title="CompositionAPI" path="../src/assets/images/forest.png"></PageHeader>
    <PageContent>
      <CompositionMark />
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue';
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import CompositionMark from './PageMD/CompositionMark.md'

export default defineComponent({
  name: 'CompositionView',
  components: {
    PageHeader,
    PageContent,
    CompositionMark
  },
  setup() {
  }
})
</script>
