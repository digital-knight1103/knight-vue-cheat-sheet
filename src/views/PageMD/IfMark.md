---
title: Renderowanie warunkowe
---

<h1 class='text-white mb-10 mt-5 text-2xl uppercase text-center'>
  Conditional Rendering
</h1>

- [1. Computed](#1-options)
- [2. CompositionAPI](#2-composition)
- [3. Podsumowanie](#3-summary)

<TextBoxMD>
  <h1 class="text-2xl font-semibold">
    <span class='text-green-500 forn-bold'>#</span>  Conditional Rendering  - Renderowanie warunkowe.
  </h1>
  <p class='my-2'>
    A teraz bardzo fajne i przyjemne renderowanie warunkowe za pomocą dyrektywy "v-if", "v-else" oraz "v-else-if". Ogólnie pracy z if czy else nie trzeba nikomu tłumaczyć. W prostych żołnierskich słowach: "Te dyrektywy pozwalają na wyświetlenie różnych elementów w zależnosći od spełnionych warunków."
  </p>
  <p>
     Można również użyć atrybutu "v-show" do dynamicznego ukrywania i pokazywania elementów, ale v-if i v-show mają różnice w działaniu, co warto wiedzieć ale zaraz pokażemy i omówimy sobie wszystko na przykładach.
  </p>
  <p class='my-2'>
    To zaczynamy, zerknijmy na przykład poniżej:
  </p>
</TextBoxMD>

<div class='flex justify-center flex-wrap'>

```vue
<!-- CompositionApi -->

<template>
  <div>
    <p v-if="showMessage">To jest wyświetlana wiadomość.</p>
    <p v-else>To jest wiadomość alternatywna.</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const showMessage = ref(true);

    return {
      showMessage,
    };
  },
};
</script>

```
```vue
<!-- CompositionApi - script setup -->

<template>
  <div>
    <p v-if="showMessage">To jest wyświetlana wiadomość.</p>
    <p v-else>To jest wiadomość alternatywna.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showMessage = ref(true);

</script>

```

</div>
