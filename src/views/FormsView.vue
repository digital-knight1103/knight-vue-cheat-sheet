<template>
  <div class="container">
    <PageHeader path="" title="Formularze"></PageHeader>
    <PageContent>
      https://vueschool.io/articles/vuejs-tutorials/building-a-multi-step-form-with-petite-vue/
      <FormEmail size="lg"/>

    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue'
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import FormEmail from '@/components/atoms/Form/FormEmail/FormEmail.vue'

export default defineComponent({
  name: 'FormsView',
  components: {
    PageHeader,
    PageContent,
    FormEmail,
  },
  setup() {
  }
})
</script>
