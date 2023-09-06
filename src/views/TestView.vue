<template>
  <div class="container">
    <PageHeader title="Test" :path="pathImg"></PageHeader>
    <PageContent class="p-10">

      <AppButton @click="createBox">
        Dodaj Boxa
      </AppButton>

      <div ref="place" class="grid grid-cols-8">
        
      </div>
      <LoadingBar></LoadingBar>

    <!-- Odonel course -->
    <div class="mt-2 block text-center text-xl font-semibold ">
      <h3>{{ counterTitle }}:</h3>
      <h3>{{ counterData.title }}</h3>
      <button class='text-blue-300' @click="decreaseCounter">-</button>
      <span 
        class="p-4"
        :class="{
          'text-green-300' : (counter >= 3),
          'text-green-500' : (counter >= 5),
          'text-green-600' : (counter >= 7),
          'text-green-700' : (counter >= 9),
          'text-pink-600' : (counter >= 10)
        }"
      >
      {{ counterData.count }}</span>
      <button class='text-green-500' @click="increaseCounter(1)">+</button>
      <button class='text-pink-500' @click="increaseCounter(2)">(++)</button>
    </div>

    <p>This counter is {{ oddOrEven }} number</p>

    <div class="block text-center">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterTitle"/>
    </div>

    <div>
      <button @click="showPageId">Show page ID</button>
    </div>


    </PageContent>
  </div>
</template>

<script setup lang="ts">

import { ref, reactive, computed, watch,onMounted, } from 'vue';
import { useRoute } from 'vue-router';

// import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue';
// import PageContent from '@/components/molecules/PageContent/PageContent.vue'
// import AppButton from '@/components/atoms/AppButton/AppButton.vue';
// import LoadingBar from '@/components/atoms/LoadingBar/LoadingBar.vue';

// const place = ref<HTMLElement | null>()
    const place = ref()
    // const place = ref(null)
    let number = 1

    // let value = ref(10)

    const createBox = () => {
      const box = document.createElement('div')
      place.value.append(box)
      box.classList.add('box')
      box.textContent = `${number++} Box`
    }

    onMounted(() => {
      place.value
    })

    // nie dodajemy importów komponentów
// nie tworzymy setup()
  const pathImg = ref('../src/assets/images/space.png')
  const counter = ref(0),
        counterTitle = ref('Counter') //bez const zmienne po przecinku

  const route = useRoute()

  const counterData = reactive({
    count: 0,
    title: 'My Counter'
  })  

  const showPageId = () => {
    alert(`The ID of this post is ${ route.params.id }`)
  }

  const decreaseCounter = () => {
    // counter.value = counter.value - 1
    counterData.count--
  }
  const increaseCounter = (amount:number) => {
    console.log(amount);
    // counter.value++
    // counterData.count++
    counterData.count = counterData.count + amount 
  }

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) {
      return 'even'
    } else {
      return 'odd'
    }
  })

  //watch powinno się ustawiac po danych które będziemy obserowować
  // 1. pierwszy parametr to reaktywna dana którą będziemy obserwować
  // 2. drugi parametr to metoda

  watch(() => counterData.count, (newCount, oldCount) => {
    console.log('newCount', newCount);
    console.log('oldCount', oldCount);

    if(counterData.count === 20) {
      alert('Nie do wiary')
    }

  })
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


