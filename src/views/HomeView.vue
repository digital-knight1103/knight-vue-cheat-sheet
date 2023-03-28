<template>
  <main>
    <MainBanner 
      title='Mały przewodnik VUE3' 
      subtitle='Jesteś gotowy na podróż ' 
      :path='pathImg' 
      alt="Images Banner"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainBanner from '@/components/molecules/MainBanner/MainBanner.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    MainBanner
  },
  setup() {
    const pathImg = ref('../src/assets/images/space.png')

    return {
      pathImg
    }
  }

})

</script>
