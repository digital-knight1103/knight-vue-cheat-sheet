---
title: Props and Emits
---
<h1 class='text-white mb-10 mt-5 text-2xl uppercase text-center'>
  Komunikacja Rodzic - dziecko (propsy i emity)
</h1>

<TextBoxMD>
  <p class='mb-8'>
    Ponieważ Vue wykorzystuje koncepcję, która nazywa się jednokierunkowym przepływem danych. Dane przekazywane z komponentu nadrzędnego ( rodzica ) do komponentu ( dziecka ) powinny być zmieniane tylko w komponencie nadrzędnym (rodzicu). Po prostu przekazujemy dane do komponentu aby był uniwersalny i reużywlany. Props to argumenty, które deklarujemy w definicji komponentu i mogą one przyjmować różne typy danych, takie jak liczby, łańcuchy znaków, obiekty czy funkcje.
  </p>
  <p class='mb-8'>
    Aby przekazać propsy do komponentu, musimy użyć atrybutu v-bind w elemencie, w którym renderujemy ten komponent. Na przykład, jeśli mamy komponent o nazwie "ChildComponent" z deklarowanym props "message", to możemy przekazać wartość dla tego propsa w ten sposób: 
  </p>
</TextBoxMD>

```vue
// Rodzic

<template>
  <div>
    <ChildComponent message='Wiadomość do ciebie Rycerzu' />
  </div>
</template>

<script>
import ChildComponent from ''
export default {
  name: 'ChildComponent',
  props: ['message']
}
</script>

```

```vue
// Dziecko

<template>
  <h1> {{ message }} </h1>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: ['message']
}
</script>
```