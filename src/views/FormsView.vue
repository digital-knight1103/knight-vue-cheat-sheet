<template>
  <div class="container">
    <PageHeader title="Formularze"></PageHeader>
    <PageContent></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue';
import PageContent from '@/components/molecules/PageContent/PageContent.vue'

export default defineComponent({
  name: 'FormsView',
  components: {
    PageHeader,
    PageContent
  },
  setup() {
  }
})
</script>
