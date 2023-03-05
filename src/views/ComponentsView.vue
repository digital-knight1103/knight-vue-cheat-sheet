<template>
  <div>
    <PageHeader path="../src/assets/images/blockTower.png" title="Components"></PageHeader>
    <div class="grid grid-cols-3 ">
      <CardComponent title="Button" description="opis komponentu"></CardComponent>
      <CardComponent title="Form" description="opis komponentu"></CardComponent>
      <CardComponent title="Card" description="opis komponentu"></CardComponent>
      <CardComponent title="Dupa" description="opis komponentu"></CardComponent>
      <CardComponent title="Button" description="opis komponentu"></CardComponent>
      <CardComponent title="Button" description="opis komponentu"></CardComponent>
      <CardComponent title="Button" description="opis komponentu"></CardComponent>
      <CardComponent title="Button" description="opis komponentu"></CardComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageHeader from "@/components/molecules/PageHeader/PageHeader.vue";
import CardComponent from "@/components/molecules/CardComponent/CardComponent.vue";

export default defineComponent({
  name: 'ComponentView',
  components: {
    PageHeader,
    CardComponent
},
  setup() {
  }
})


</script>