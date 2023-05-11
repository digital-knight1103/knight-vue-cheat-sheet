---
title: CompositionApi
---
<h1 class='text-white mb-10 mt-5 text-2xl uppercase text-center'>
  Nowe, Lepsze compositionAPi
</h1>

<TextBoxMD>
  <p class='indent-6'>
    Wiemy że VUE wraz z wyjściem wersji "VUE3" wprowadził nowy alternatywny sposób pisania kodu, czyli CompositionAPI który daje nam inny sposób budowania naszych komponentów względem OptionsApi. Ma ona na celu poprawę skalowalności projektu oraz ułatwienie tworzenia reużywalnych komponentów.
    W skrócie, polega ona na definiowaniu funkcji, które następnie mogą być używane w komponencie. W przeciwieństwie do OptionAPI, CompositionAPI nie opiera się na jednym dużym obiekcie options, ale pozwala na tworzenie wielu mniejszych funkcji, które można następnie składać w większe komponenty. CompositionAPI ma kilka zalet, takich jak łatwiejsze testowanie, ułatwiony refaktoring i ponowne użycie kodu. Ponadto, CompositionAPI pozwala na lepsze wykorzystanie typowych wzorców programistycznych, takich jak np. useFetch, useLocalStorage, useTimer itp.
  </p>
  <p class='my-2'>
    <span class='text-green-500'>OptionAPI</span> (także znany jako Object-based API) to oryginalny sposób tworzenia komponentów w Vue. Polega on na definiowaniu właściwości komponentu w obiekcie options, który zawiera m.in. sekcję data, methods, computed itp. OptionAPI jest stosunkowo łatwy do zrozumienia i stosunkowo mało inwazyjny w stosunku do istniejącego kodu.
  </p>
  <p class='my-2'>
    Porównując OptionAPI i CompositionAPI, można zauważyć, że CompositionAPI jest bardziej elastyczne i pozwala na tworzenie bardziej modułowego i czytelnego kodu. Ponadto, CompositionAPI pozwala na lepsze rozdzielenie funkcjonalności, co ułatwia testowanie i ponowne użycie kodu. OptionAPI z kolei jest bardziej zrozumiały dla początkujących programistów i może być łatwiejszy do użycia w małych projektach.
  </p>
  <p class='my-2'>
    Pamiętajmy jeszcze że w CompositionAPI możemy również skorzystać ze składni script setup która jeszcze bardziej ułatwia nam pracę. Ale to po kolei. Zerknijmy poniżej i zobaczy czy zauważysz różnice: 
  </p>
</TextBoxMD>

<div class='flex flex-wrap justify-center'>

```vue
<!-- OptionsAPI  -->

<template>
  <div>
    <h1>OptionAPI</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      message: "Hello world"
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

```


```vue
<!-- CompositionAPI -->

<template>
  <h1>CompositionAPI</h1>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  setup() {
    const state = reactive({
      count: 0,
      message: "Hello world"
    })
    const increment = () => {
      state.count++
    }
    const reversedMessage = computed(() => {
      return state.message.split('').reverse().join('')
    })
    return {
      state,
      increment,
      reversedMessage
    }
  }
}
</script>
```
</div>

