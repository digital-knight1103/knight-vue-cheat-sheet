<template>
  <div class="container">
    <PageHeader title="CompositionAPI" path="../src/assets/images/forest.png"></PageHeader>
    <PageContent>
      <CodeMark />
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue';
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import CodeMark from './PageMD/CodeMark.md'

export default defineComponent({
  name: 'CompositionView',
  components: {
    PageHeader,
    PageContent,
    CodeMark
  },
  setup() {
  }
})
</script>
