<template>
  <div>
    <PageHeader title="Components"></PageHeader>
    <div class="grid grid-cols-3 ">
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
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