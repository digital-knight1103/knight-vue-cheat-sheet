<template>
  <main>
    <MainBanner 
      title='Mały przewodnik VUE3' 
      subtitle='Jesteś gotowy na podróż ' 
      :path='pathImg' 
      alt="Images Banner"
    />
    <button @click="decreaseCounter">-</button>
      <span>{{ counter }}</span>
    <button @click="increaseCounter">+</button>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// nie dodajemy importów komponentów
// nie tworzymy setup()
  const pathImg = ref('../src/assets/images/space.png')
  const counter = ref(0)

  const decreaseCounter = () => {
    return counter.value = counter.value - 1
  }
  const increaseCounter = () => {
    return counter.value++
  }
</script>

<!-- compositionAPI
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
    const counter = ref(0)

    const decreaseCounter = () => {
      return counter.value = counter.value - 1
    }
    const increaseCounter = () => {
      return counter.value++
    }

    return {
      pathImg,
      counter,
      increaseCounter,
      decreaseCounter
    }
  }

})
</script>
-->

<!-- OptionsApi
<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainBanner from '@/components/molecules/MainBanner/MainBanner.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    MainBanner
  },
  data() {
    return {
      counter: 0
    }
  },
  method: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }

})
</script>
-->


