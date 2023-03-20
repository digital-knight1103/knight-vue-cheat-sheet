---
title: Forms
---

<div class='mx-10 my-2 p-5 bg-gray-600 rounded-lg'>
  <p class='text-white'>
    W tej części zbudujemy formularz krok po kroku oczywiście w oparciu o 
    <RouterLink to='' class='text-green-500 indent-8'>atomic design</RouterLink>
    aby komponenty były reużywalne i stworzone według najlepszych praktyk. 
  </p>
  <p>
    To co zaczynamy. Warto zacząć od jakiegoś planu, co by nam się przydało do naszego formularza. Może zacznijmy od stworzenia jakiegoś ładnego inputa typy text a nastepnie będzie kombinować jak zrobić selecta albo typy ratio. 
  </p>
  <p>
    Stylami się nie przejmujemy aby nie zaśmiecać ale udostępnie na końcu jak komuś się podoba styl. Bierzemy się za mięso. Zaczynamy od labela. Najlepiej użyć tu interpolacji i poprzez propsa przekazać treść labelka od rodzica. Staje się on dzięki temu uniwersalny.  
  </p>
</div>


  ```js
  // FormInput
<template>
    <label>
      {{ label }}
    </label>
    <input />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'FormInput',
  props: {
    label: {
      type: String,
      required: true
    }
  }

})
</script>
  ```

<div class='mx-10 my-2 p-5 bg-gray-600 rounded-lg text-white'>
  <p>
    Labelek mamy, czas na główne danie. Co zrobić aby nasz input był dosyć uniwersalny.
    Możemy np: ustawić nasz palceholder aby był równy wartości labelka.
    Nie ustawiamy również type dla naszego inpute ponieważ te wartość przekażemy już w rodzicu. Dzięki temu będziemy mogli wybrać między np: text, email czy password. Nieźle za jednym zamacham mamy kilka opcji.
  </p>
  <p class='my-4'>
    V-model również możemy usunąć ponieważ na poziomie komponentu nie jest nam potrzebny. Uźyjemy go dopiero w rodzicu.
  </p>
  <p class='my-4'>
    No tak ale jak nie ma v-model to jak te dane pobrac lub zaktualizować. Jakbyśmy mieli w głównym komponencie to v-model byłby idealny ale tu skorzystamy z takiego rozwiązania. 
  </p>
  <p class='my-4'>
    W tym przykładzie wartość modelu jest przechowywana jako właściwość danych komponentu, którą nazywa się modelValue. Ta wartość będzie przekazana do elementu formularza (rodzica) jako wartość value.
  </p>
</div>

  ```js
  // FormInput
<template>
    <label>{{ label }}</label>
    <input 
      :placeholder='label'
      :value="modelValue"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'FormInput',
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
  }
})
</script>
  ```

<div class='mx-10 my-2 p-5 bg-gray-600 rounded-lg text-white'>
  <p>
    Jeśli użytkownik wprowadza zmiany w polu formularza, emitowany jest zdarzenie input za pomocą dyrektywy <span class='text-green-500'>@input</span>. Ta dyrektywa słucha zdarzeń wejściowych na elemencie formularza i wywołuje metodę $emit, która wysyła zdarzenie <span class='text-blue-500'>update:modelValue</span> do rodzica komponentu, przekazując aktualną wartość pola formularza.
    <code>
      @input="$emit('update:modelValue', $event.target.value)"
    </code>
  </p>
</div>

```js
// FormInput
<template>
    <label>{{ label }}</label>
    <input 
      :placeholder='label'
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
</template>
```

    