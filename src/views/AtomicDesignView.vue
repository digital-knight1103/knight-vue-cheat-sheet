<template>
  <div>
    <PageHeader title="Atomic Design"></PageHeader>
    <PageContent>
      <BoxInfo title="Hints" :description="desHints"/>
    </PageContent>
    <BoxInfo title="Hints" :description="desHints"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue'
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import BoxInfo from '@/components/atoms/BoxInfo/BoxInfo.vue'

export default defineComponent({
  name: 'CompositionView',
  components: {
    PageHeader,
    PageContent,
    BoxInfo
  },
  setup() {
    const desHints = ref('The rest of the documentation assumes basic familiarity with HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics and then come back! You can check your knowledge level with this JavaScript overview. Prior experience with other frameworks helps, but is not required.')

    return {
      desHints
    }
  }

})
</script>
