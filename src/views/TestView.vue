<template>
  <div class="container">
    <PageHeader title="Test" path="../src/assets/images/forest.png"></PageHeader>
    <PageContent>
      <AppButton @click="createBox" text='Dodaj Boxa' class="w-[200px] mt-10 mx-auto"/>
      <div ref="place" class="grid grid-cols-8">
        
      </div>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue';
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import AppButton from '@/components/atoms/AppButton/AppButton.vue';

export default defineComponent({
  name: 'CompositionView',
  components: {
    PageHeader,
    PageContent,
    AppButton
},
  setup() {
    const place = ref<HTMLElement | null>(null)
    // const place = ref(null)
    let number = 1

    const createBox = () => {
      const box = document.createElement('div')
      place.value.append(box)
      box.classList.add('box')
      box.textContent = `${number++} Box`
    }

    onMounted(() => {
      place.value
      console.log("onMounted", place.value)
    })

    return {
      place,
      createBox
    }
  }
})
</script>
