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
    Labelek mamy czas na główne danie. 
  </p>
</div>






        <p class="my-2">
          Ok. Czas na deser czyli naszego Inputa. Co zrobić aby był dosyć uniwersalny. To samo możemy zrobić z placeholderem co z labelkiem. Choć w tym przypadku aby łądnie wyglądało możemy go dodawać opcjonalnie.
        Nie dodajemy do naszego inputa type ponieważ defaultowo jest ustawiony text a już w rodzicu zależnie od potrzeby dodamy type jeżeli będziemy otrzebować maila czy passowrd. Nieźle za jednym zamachem mamy już kilka opcji. 
        </p>