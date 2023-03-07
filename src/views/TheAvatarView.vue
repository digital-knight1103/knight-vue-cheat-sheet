<template>
  <div>
    <PageHeader path="../src/assets/images/knighteye.png" title="O mnie"></PageHeader>
    <PageContent>
      <h1 class="text-center m-4 text-xl uppercase font-bold">Avatar</h1>
      <div class="p-10 grid gap-y-4">
        <div class="flex gap-x-2">
          <TheAvatar path='../../src/assets/images/av2.png' alt="avatar" size="2xl"/>
          <TheAvatar path='../../src/assets/images/av3.png' alt="avatar" size="2xl"/>
          <TheAvatar path='../../src/assets/images/av4.png' alt="avatar" size="2xl"/>
          <TheAvatar path='../../src/assets/images/av2.png' alt="avatar" size="2xl"/>
        </div>
        
        <div class="flex gap-x-2">
          <TheAvatar alt="avatar" size="2xl" />
          <TheAvatar alt="avatar" size="xl" />
          <TheAvatar alt="avatar" size="lg" />
          <TheAvatar alt="avatar" size="md"/>
        </div>
        
      </div>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue';
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import TheAvatar from '@/components/atoms/TheAvatar/TheAvatar.vue'

export default defineComponent({
  name: 'TabsView',
  components: {
    PageHeader,
    PageContent,
    TheAvatar
},
  setup() {
  }
})
</script>
