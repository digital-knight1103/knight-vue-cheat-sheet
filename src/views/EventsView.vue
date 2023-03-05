<template>
  <div class="container">
    <PageHeader path="../src/assets/images/proggramGirl.png" title="Events"></PageHeader>
    <PageContent></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue';
import PageContent from '@/components/molecules/PageContent/PageContent.vue'

export default defineComponent({
  name: 'EventsView',
  components: {
    PageHeader,
    PageContent
  },
  setup() {
  }
})
</script>
