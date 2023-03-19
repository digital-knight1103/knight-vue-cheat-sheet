<template>
  <div class="container">
    <PageHeader path="" title="Formularze"></PageHeader>
    <PageContent>
      https://vueschool.io/articles/vuejs-tutorials/building-a-multi-step-form-with-petite-vue/
      <FormInput text="Label do inputa"/>

    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue'
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import FormInput from '@/components/atoms/Form/FormInput/FormInput.vue'

export default defineComponent({
  name: 'FormsView',
  components: {
    PageHeader,
    PageContent,
    FormInput,
  },
  setup() {
  }
})
</script>

