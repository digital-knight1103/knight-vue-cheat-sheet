<template>
  <div>
    <!-- TODO zmień tapete -->
    <PageHeader path="../src/assets/images/knighteye.png" title="ClassAndStyles"></PageHeader>
    <PageContent>
      <h1 class="text-center m-4 text-xl uppercase font-bold">Klasy i style</h1>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue';
import PageContent from '@/components/molecules/PageContent/PageContent.vue'

export default defineComponent({
  name: 'ClassAndStylesView',
  components: {
    PageHeader,
    PageContent,
},
  setup() {
  }
})
</script>
