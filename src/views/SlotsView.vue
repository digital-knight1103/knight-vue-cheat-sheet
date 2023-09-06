<template>
  <div class="container">
    <PageHeader title="Slots" path="../src/assets/images/forest.png"></PageHeader>
    <PageContent>
      <div class="flex">
        <TheAvatar alt="Slots Logo" size="2xl" />
        <div class="my-auto">
          <h1 class="text-2xl uppercase font-bold text-white">Slo<span class="text-green-500 font-bold">t</span>y</h1>
          <p>Czas coś wsadzić do komponentu.</p>
        </div>
      </div>
      
      <SlotsMark />
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue';
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import TheAvatar from '@/components/atoms/TheAvatar/TheAvatar.vue';
import SlotsMark from '@mark/SlotsMark.md'

export default defineComponent({
  name: 'CompositionView',
  components: {
    PageHeader,
    PageContent,
    TheAvatar,
    SlotsMark
  },
  setup() {
  }
})
</script>
