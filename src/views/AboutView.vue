<template>
  <div>
    <PageHeader path="../src/assets/images/knighteye.png" title="O mnie"></PageHeader>
    <PageContent>
      <h1>Tabs</h1>
      <TabsWrapper>
        <TheTab title="Tab 1">Hello from Tab 1</TheTab>
        <TheTab title="Tab 2">Hello from Tab 2</TheTab>
        <TheTab title="Tab 3">Hello from Tab 3</TheTab>
        <TheTab title="Tab 4">Hello from Tab 4</TheTab>
      </TabsWrapper>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue';
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import TabsWrapper from '@/components/molecules/TabsWrapper/TabsWrapper.vue';
import TheTab from '@/components/atoms/TheTab/TheTab.vue';

export default defineComponent({
  name: 'CompositionView',
  components: {
    PageHeader,
    PageContent,
    TabsWrapper,
    TheTab
},
  setup() {
  }
})
</script>
