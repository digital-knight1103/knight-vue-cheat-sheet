---
title: Ref/Reactive
---

<h1 class='text-white mb-10 mt-5 text-2xl uppercase text-center'>
  Reaktywne dane
</h1>

- [1. Reaktywne Dane](#1-options)
- [1. OptionsAPI](#1-options) 
- [2. CompositionAPI](#2-composition)

<TextBoxMD>
  <h1 class="text-2xl font-semibold">
    <span class='text-green-500 forn-bold'>#</span>  Reaktywne dane. Jak mamy to rozumieć ?
  </h1>
  <p class='my-2'>
    Reaktywne dane stanowią kluczowy koncept we VUE. Pozwalają one na automatyczną aktualizację danych w komponencie bez potrzeby ręcznego manipulowania nimi. Czyli w dużym uproszczeniu VUE "obserwuje" nasze zmienne i w razie konieczności reaguje na ich zmianny.
  </p>
  <p>
    To co starczy teorii. Najlepiej jak popracujemy na przykładach. To w ramach przypomnienia (bo głównie skupiamy się na CompositionAPI) zerkniemy jak to się odbywało w wersji starszej niż VUE3 czyli naszym OptionsAPI.<br>
    W OptionsAPI do deklarowania stanu reaktywnego dodajemy właściwość `data` (data properties) do obiektu naszego komponentu. Od teraz nasze dane w 'data' są reaktywne i zmiana ich spowoduje ponowne renderowanie komponentu.
  </p>
</TextBoxMD>

```js
// OptionsAPI

export default {
  data() {
    return {
      counter: 0,
      name: 'John',
    };
  },
};
```

<TextBoxMD>
  <p>
    Jak można zauważyć W powyższym przykładzie "counter" oraz "name" zadeklarowane w 'data' są teraz reaktywne. Kiedy następuje zmiana wartości któregoś z tych pól, Vue automatycznie odświeży komponent, aby odzwierciedlić nową wartość.
  </p>
  <p>
    Aby uzyskać dostęp do danych reaktywnych wewnątrz komponentu w OptionAPI, musimy odwoływać się do nich za pomocą składnika "this". Na przykład, aby uzyskać dostęp do counter wewnątrz metody, możemy napisać:
  </p>
</TextBoxMD>

```js
<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

export default {
  data() {
    return {
      counter: 0,
      name: 'John'
    };
  },
  methods: {
    increment() {
      this.counter++;
    }
  },
};
```

<TheCounter/>

<TextBoxMD>
  <p>
    W powyższym przykładzie, metoda increment zwiększa wartość counter o 1, a zmiana tej wartości spowoduje ponowne renderowanie komponentu. <br>
    Jednakże trzeba pamiętać że Options API, trzeba ręcznie zarządzać cyklem życia komponentu (hooks) i obserwacją zmian danych (watch). 
  </p>
</TextBoxMD>

<TextBoxMD>
  <h1 class="text-2xl font-semibold mb-6">
    <span class='text-green-500 forn-bold'>#</span>  CompositionAPI
  </h1>
  <p>
    To małe wprowadzenie i powtórkę OptionsApi mamy za sobą. Czas skupić się na tym co jest na topie i zalecane przez producenta czyt. "Evan You i VUE" nawet się zrymowało. Jak juz wczesniej zostało wspomniane w CompositionAPI dane reaktywne tworzy się trochę inaczej i możemy skorzystać z różnych podejść ale żeby nie było mamy tez możliwość tworzenia danych które nie są reaktywne (non-reactive) ponieważ nie zawsze potrzebujemy coś robić z naszymi danymi a po co dodawać naszej aplikacji kolejne zadania do wykonania. 
  </p>
  <p class='my-2'>
    We VUE3 CompositionAPI aby nasze dane aby były reaktywne i mutowalne korzystamy z funkcji dostarczanych przez Composition API, takich jak <span class='font-semibold text-pink-500'>'ref'</span> oraz <span class='font-semibold text-pink-500'>"reactive"</span><br>
  </p>
  
  <p>
    Przyjeło się że "ref" używamy raczej do tworzenia prostych typów danych, natomiast reactive służy do tworzenia obiektów dla bardziej złożonych struktur.<br>
    I tak jak to w reaktywnych danych wszelkie zmiany dokonane na naszych danych są automatycznie śledzone, co pozwala na natychmiastowe odzwierciedlanie tych zmian w interfejsie użytkownika.
  </p>
  <p class='my-2'>
    To jedziemy z przykładami bo tam będzie mi łatwiej przedstawić kilka niuansów. 
  </p>
</TextBoxMD>

<div class='flex'>

```js
<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
</template>
```

```js
<script setup>
import { reactive } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
</template>
```

</div>






poprzez użycie ref zmienna staje się obiektem dlatego musimy użyć value
- zdjęcie z devtools
- ciekawostka 
- Dzięki reaktywnym danym w Vue 3, programiści mogą łatwo zarządzać stanem aplikacji i automatycznie odświeżać interfejs użytkownika w odpowiedzi na zmiany danych. Jest to istotne w budowie dynamicznych i responsywnych aplikacji internetowych.