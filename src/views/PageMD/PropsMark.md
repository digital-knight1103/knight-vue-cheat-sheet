---
title: Props and Emits
---
<h1 class='text-white mb-10 mt-5 text-2xl uppercase text-center'>
  Komunikacja Rodzic - dziecko (propsy i emity)
</h1>

<TextBoxMD>
  <p class='mb-6'>
    "Props" oraz "Emits" są bardzo ważne w VUE ponieważ przekazywanie danych pomiędzy komponentami to fundamentalny element pracy z VUE. Ponieważ VUE wykorzystuje koncepcję, która nazywa się jednokierunkowym przepływem danych (one-way data flow) oznacza to że dane przesyłane są w jednym kierunku z komponentu nadrzędnego (rodzica) do jednego z jego elementów podrzędnych (dziecka) w przypadku "Propsów" oraz odwrotnie w przypadku "Emits" co sprawia że są bardziej uniwersalne i reużywalne, ułatwia też późniejsze debugowanie oraz testowanie aplikacji.
  </p>
    <h1 class="text-lg uppercase font-semibold">
    <span class='text-green-500 forn-bold'>#</span> Props
  </h1>
  <p class='mb-8'>
    Ale jak mamy rozumieć te komunikację. Może zacznijmy od "Propsów". Są to niestandardowe atrybuty, które możemy zarejestrować w komponencie co pozwala nam przekazywać dane z tak jak wcześniej pisaliśmy komponentu nadrzędnego (rodzica) do podrzędnego (dziecka). Props to argumenty, które deklarujemy w definicji komponentu i mogą one przyjmować różne typy danych, takie jak: liczby, łańcuchy znaków, obiekty czy funkcje. Propsy troche inaczej deklaruje się dla składni script setup ale to zaraz pokażemy.
  </p>
  <p class='mb-6'>
    Zerknijmy na przykład:
  </p>

  1. -1-  Stworzyliśmy nasz komponent (dziecko) w którym chcemy przekazać dwie wartości tytuł i opis ale nie podamy go w naszym komponencie dziecka tylko żeby był reużywalny chcemy te dane przekazać w rodzicu.
  2. -2-  Dane rejestrujemy w sekcji setup i możemy je przekaząć poprzez tablicę lub jeżeli wiemy dokładnie jaką wartość chcemy przekazać [String, Number, Array ...] to wtedy umieszczamy to w obiekcie (zalecane)
  3. -3-  Dzięki temu że korzystamy z obiektu możemy również ustawić wartość domyślną dla naszej wartości jako zabezpieczenie, ustawić aby wartość była obowiązkowa w elemencie nadrzędnym (rodzicu required) lub ustawić walidacje danych (validator)
</TextBoxMD>


```vue
// Dziecko (ChildComponent)

<template>
  <h1 class="color"> {{ title }} </h1>
  <p> {{ description }} </p>
</template>

<script lang='ts'>
import { defineComponent } from 'vue' // defineComponent = TypeScript 

export default defineComponent({
  name: 'ChildComponent',
  // props: ['title', 'description']
  props: {
    title: {
      type: String,
      required: true //wartość wymagana
    },
    desctiption {
      type: String,
      default: 'Hej. Jestem Propem'
    },
    color: {
      type: String,
      default: 'primary',
      validator(value: string) { // bez TS wystarczy tylko value
        return ['primary', 'secodary', 'warning', 'różowiutki'].includes(value)
      }
    }
  }
})
</script>
```

<TextBoxMD>

  1. -4- Czas zarejestrować nasz komponent w rodzicu. 
  2. -5- Jako że w naszym dziecku ustawiliśmy że prop "title" jest wymagany required=true to musimy go umieścić w naszym rodzicu inczej będzie błąd.
  3. -6- W naszym przypadku gdy nie podamy wartości drugiego propa description wyświetli się nam opis defaultowy czyli "Hej. Jestem Propem", ale za to zmieniliśmy kolor na secondary.
</TextBoxMD>

```vue
// Rodzic (ParentComponent)

<template>
  <div>
    <ChildComponent title='Piękny Komponent' color='secondary'/>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'
export default {
  name: 'ParentComponent',
  components: {
    ChildComponent
  }
}
</script>

```

<TextBoxMD>
  <p>
    Możemy też w rodzicy skorzystać ze zmiennej reaktywnej przy pomocy np: "ref" o którym więcej w dziale ref, reactive i danymi manipulować z części setup tylko musimy pamiętać aby skorzytać z v-bild czyli dwukropka przed wartością :description
  </p>
</TextBoxMD>

```vue
// Rodzic (ParentComponent)

<template>
  <div>
    <ChildComponent title='Piękny Komponent' :description='msg'/>
  </div>
</template>

<script>
import { ref } from 'vue'
import ChildComponent from './ChildComponent'
export default {
  name: 'ParentComponent',
  components: {
    ChildComponent
  },
  setup() {
    const msg = ref('Wow nowa wiadomość')
  }
}
</script>

```

<TextBoxMD>
  <p>
    Ale żeby nie było tak nudno to oczywiście możemy również popracować z naszym propem w komponencie. Może zróbmy aby nasz title był zapisany dużymi literami.
  </p>

  1. -- Musimy w naszym setup dodać props aby móc z nim pracować i poprzez słowo kluczowe props.nazwapropsa możemy walczyć dalej
</TextBoxMD>

```vue
<template>
  <h1> {{ bigTitle }} </h1>
</template>

<script>
export default {
  name: 'ChildComponent',
  // props: ['title', 'description']
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const bigTitle = props.title.toUpperCase()

    return {
      bigTitle
    }
  }
}
</script>
```

