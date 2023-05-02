<template>
  <div class="container">
    <PageHeader title="Test" path="../src/assets/images/forest.png"></PageHeader>
    <PageContent class="p-10">

      <AppButton @click="createBox">
        Dodaj Boxa
      </AppButton>

      <div ref="place" class="grid grid-cols-8">
        
      </div>
      <LoadingBar></LoadingBar>


    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue';
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import AppButton from '@/components/atoms/AppButton/AppButton.vue';
import LoadingBar from '@/components/atoms/LoadingBar/LoadingBar.vue';

export default defineComponent({
  name: 'CompositionView',
  components: {
    PageHeader,
    PageContent,
    AppButton,
    LoadingBar,
},
  setup() {
    const place = ref<HTMLElement | null>(null)
    // const place = ref(null)
    let number = 1

    let value = ref(10)

    const createBox = () => {
      const box = document.createElement('div')
      place.value.append(box)
      box.classList.add('box')
      box.textContent = `${number++} Box`
    }

    onMounted(() => {
      place.value
      console.log("onMounted", place.value)
      console.log("Icon", AppIcon);
    })

    return {
      place,
      createBox
    }
  }
})
</script>
