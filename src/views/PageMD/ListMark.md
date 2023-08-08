---
title: Renderowanie list v-for
---

<h1 class='text-white mb-10 mt-5 text-2xl uppercase text-center'>
  Renderowanie listy v-for
</h1>

<TextBoxMD>
  <h1 class="text-2xl font-semibold">
    <span class='text-green-500 forn-bold'>#</span>  Wylistujmy to. 
  </h1>
  <p class='my-2'>
    Listownie elementów jest niezwykle przydatne naszych aplikacjach. No bo jak inaczej sobie wyobrażasz wyświetlenie listy użytkowników albo produktów do naszej ulubionej pizzuni. No właśnie przydą nam z odległej galaktyki jakies tablice i obiekty i trzeba by to szybciutko pokazać.
  </p>
  <p class='my-2'>
    I tu na białym koniu wjeżdża dyrektywa "v-for". Służy ona do renderowania listy elementów na podstawie otrzymanej tablicy lub obiektu. 
  </p>
  <p class='my-2'>
    To co jak już o pizzunie chodzi to może wylistujmy potrzebne składniki, co ty na to. To zaczynamy wałkowanie ciasta.
  </p>
</TextBoxMD>

```vue 
<template>
  <h1> {{meal}} </h1>
  <!-- <ul>
    <li>1kg sera</li>
    <li>Sos pomidorowy</li>
    <li>Szyneczka</li>
    <li>Duży ananas</li>
  </ul> -->
  <ul>
    <li 
      v-for="(item, index) in ingredients" 
      :key="item.id"
    > 
      {{ item }}: indeks {{ index }} 
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const meal = ref('Pizza z Ananasem')

  const ingredients = ref([
    {id: 1, label: "1kg sera"},
    {id: 2, label: "Sos pomidorowy"},
    {id: 3, label: "Szyneczka"},
    {id: 4, label: "Duży ananas"},
  ])
</script>
```

<ArrayExample />

<TextBoxMD>
  <p class='my-2'>
    No i mamy ładną listę naszych produktów. Czas przeanalizować kod krok po kroku:
  </p>
  <p class='my-2'>
    1. Naszą tablicę albo obiekt możemy wylistować sobie mimo że nie są danymi reaktywnymi ale nic z nim nie zrobimy. W aplikacjach nasze dane zapewne skądś zostaną dostarczone i będziemy na nich pracować dlatego warto je opakować w jakiś ref albo reactive (obiekty) aby były reaktywne. <br>
    2. Dyrektywa "v-for" wymaga specjalnej składni w postaci item in items, Gdzie items jest tablicą danych źródłowych natomiast item pojedyńczym elementem naszej tablicy, po którym następuje iteracja. <br>
    3. V-for obsługuje również opcjonalny drugi alias dla indeksu naszego elementu
  </p>
</TextBoxMD>

```vue 
<template>
  <li v-for="(item, index) in items">
    {{ item }} - {{ index }}
  </li>
</template>
```

<TextBoxMD>
  <p class='my-2'>
    4. W listach zalecane jest również dodawanie specjalnego atrybutu klucza (key) do wszystkich pętli. Jest to unikalny identyfikator dla naszego elementu. Nie jest to konieczne dla prostych tablic ale jest dobrą praktyką. Zresztą większość rozszerzeń wspomagających naszą prace z VUE wyrzuci nam komunikat o braku klucza. 
    
  </p>
</TextBoxMD>