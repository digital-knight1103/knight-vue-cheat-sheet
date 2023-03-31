<template>
  <div class="container">
    <PageHeader path="../src/assets/images/proggramGirl.png" title="Wstęp"></PageHeader>
    <PageContent>
      <IntroductionMark/>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue'
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import IntroductionMark from './PageMD/IntorductionMark.md'

export default defineComponent({
  name: 'IntroductionView',
  components: {
    PageHeader,
    PageContent,
    IntroductionMark
  },
  setup() {
  }
})
</script>
