<template>
  <div>
    <PageHeader path="../src/assets/images/blockTower.png" title="Components"></PageHeader>
    <div class="grid grid-cols-3 ">
      <CardComponent path='home' title="Button" description="opis komponentu"></CardComponent>
      <CardComponent path='home' title="Form" description="opis komponentu"></CardComponent>
      <CardComponent path='avatar' title="Avatar" description="avarat"></CardComponent>
      <CardComponent path='tabs' title="Tabs" description="Kontener z tabami"></CardComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageHeader from "@molecules/PageHeader/PageHeader.vue";
import CardComponent from "@molecules/CardComponent/CardComponent.vue";

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