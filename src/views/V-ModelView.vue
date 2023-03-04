<template>
  <div class="container">
    <PageHeader title="v-model"></PageHeader>
    <PageContent></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue';
import PageContent from '@/components/molecules/PageContent/PageContent.vue'

export default defineComponent({
  name: 'V-ModelView',
  components: {
    PageHeader,
    PageContent
  },
  setup() {
  }
})
</script>
