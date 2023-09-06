<template>
  <div class="container">
    <PageHeader path="../src/assets/images/laptopgreen.png" title="Props/Emits"></PageHeader>
    <PageContent>
      <PropsMark/>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue'
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import PropsMark from '@mark/PropsMark.md'

export default defineComponent({
  name: 'PropsEmitsView',
  components: {
    PageHeader,
    PageContent,
    PropsMark,
  },
  setup() {
  }
})
</script>
