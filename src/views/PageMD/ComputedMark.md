---
title: Computed
---

<h1 class='text-white mb-10 mt-5 text-2xl uppercase text-center'>
  Computed
</h1>

- [1. Computed](#1-options)
- [2. CompositionAPI](#2-composition)
- [3. Podsumowanie](#3-summary)

<TextBoxMD>
  <h1 class="text-2xl font-semibold">
    <span class='text-green-500 forn-bold'>#</span>  Computed Properties - wartości obliczone.
  </h1>
  <p class='my-2'>
    Świetnie. Rozumiemy już reaktywność danych to teraz przyjrzyjmy się kolejnej potężnej funkcji VUE a mowa tu o computed properties. Computed pozwala nam na tworzenie zależności lub wykonywać wszelakie przekształcenia obliczanych wartości na podstawie innych danych. Computed properties są automatycznie przeliczane tylko wtedy, gdy zależne od nich dane ulegają zmianie, co pomaga w zoptymalizowaniu wydajności aplikacji. <br>
    Brzmi to trochę strasznie ale zaraz popracujemy na przykładach i się wszystko okaże rozjaśni.
  </p>
  <p>
    Ok to szybka powtórka jak to się wykonywało w OptionsAPI
  </p>
</TextBoxMD>

```vue
<template>
  <div>
    <h1>{{ reversedMessage }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      msg: "option",
      text: 'api'
    }
  },
  methods: {
    ...
  },
  computed: {
    reversedMessage() {
      return this.msg.charAt(0).toUpperCase() 
           + this.msg.slice(1) 
           + this.text.toUpperCase() + ' !';
    }
  }
}
</script>

```

<TextBoxMD>
  <p>W OptionApi w sekcji "data" stworzyliśmy nasze dane które są reaktywne dzięki czemu możemy teraz z nimi pracować. Tworzymy sekcję "computed" i w niej wyliczamy i pracujemy na naszych danych. łatwe. To powtórkę mamy za sobą, zerknijmy teraz jak to się robi w CompositionApi</p>
</TextBoxMD>

<TextBoxMD>
  <h1 class="text-2xl font-semibold mb-6">
    <span class='text-green-500 forn-bold'>#</span>  CompositionApi
  </h1>
  <p class='my-2'>
    W CompositionApi aby skorzystać z "computed" musimy najpierw zainportować. A potem wykorzysujemy jak w przykładzie poniżej. Czyli zmienna + computed i heja. <br>
    Pokazane są dwa przykłady jedne napisany w skłądni -- script setup -- a drugi zwykłym compositionApi 
  </p>
</TextBoxMD>

<div class='flex justify-center flex-wrap'>

```vue
<!-- CompositionApi -->

<template>
  <h1>{{ message }}</h1>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  setup() {
    const state = reactive({
      msg: 'composition',
      text: 'api',
    });
    const message = computed(() => {
      return (
        state.msg.charAt(0).toUpperCase() +
        state.msg.slice(1) +
        state.text.toUpperCase() + ' !'
      );
    });
    return {
      state,
      increment,
      message,
    };
  },
};
</script>
```

```vue
<!-- CompositionApi - Script Setup -->

<template>
  <h1>{{ message }}</h1>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';

const state = reactive({
  msg: 'composition',
  text: 'api',
});
const message = computed(() => {
  return (
    state.msg.charAt(0).toUpperCase() +
    state.msg.slice(1) +
    state.text.toUpperCase() + ' !'
  );
});
</script>
```

</div>

<TextBoxMD>
  <p class='my-2'>
    No i po naszych pięknych obliczeniach otrzymujemy cudowny napis. 
  </p>
</TextBoxMD>

<ExampleCom />


<TextBoxMD>
  <p class='my-2'>
    Teraz kolejny przyjemny przykład gdzie postaramy się stworzyć pełne imię urzytkownika.
  </p>
</TextBoxMD>

<div class='flex justify-center flex-wrap'>

```vue
<!-- bez computed -->
<template>
  <p>Imię: {{ firstName }} {{ lastName}}</p>
</template>

<script setup>
import { ref, computed } from 'vue';

const firstName = ref('Jan');
const lastName = ref('Kowalski');

</script>

```

```vue
<!-- z computed -->

<template>
  <p>Imię: {{ fullName }}</p>
</template>

<script setup>
import { ref, computed } from 'vue';

const firstName = ref('Jan');
const lastName = ref('Kowalski');

// Deklaracja Computed Property.
  const fullName = computed(() => {
    return `${firstName.value} ${lastName.value}`;
});
</script>


```

</div>