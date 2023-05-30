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
  <h1 class="text-2xl font-semibold">
    <span class='text-green-500 forn-bold'>#</span>  CompositionAPI
  </h1>
  <p>
    To małe wprowadzenie i powtórkę OptionsApi mamy za sobą. Czas skupić się na tym co jest na topie i zalecane przez producenta czyt. "Evan You i VUE" nawet się zrymowało. Jak juz wczesniej zostało wspomniane w CompositionAPI dane reaktywne tworzy się trochę inaczej i możemy skorzystać z róznych rozwiązań ale żeby nie było mamy tez możliwość tworzenia danych które nie są reaktywne (non-reactive) ponieważ nie zawsze potrzebujemy coś robić z naszymi danymi a po co dodawać naszej aplikacji kolejne zadania do wykonania. 
  </p>
  <p class='my-2'>
    We VUE3 CompositionAPI aby nasze dane aby były reaktywne i mutowalne musimy zastosować funkcje takie jak `ref` oraz `reactive`<br>
    Aby skorzystać z reaktywnych danych w Vue 3, korzystamy z funkcji dostarczanych przez Composition API, takich jak ref i reactive. ref używamy do tworzenia refów dla prostych typów danych, natomiast reactive służy do tworzenia reactive obiektów dla bardziej złożonych struktur.<br>
    Vue 3 wprowadza nowy system reaktywności, nazwany Composition API, który oferuje programistom bardziej elastyczne i potężne narzędzia do pracy z danymi.
    W Vue 3, reaktywne dane są reprezentowane jako tzw. refy (referencje) lub reactive (reaktywne) obiekty. Refy to opakowanie dla wartości, które umożliwiają śledzenie zmian i automatyczne wywoływanie ponownego renderowania komponentów, gdy dane się zmieniają. Refy są szczególnie przydatne w przypadku prostych typów danych, takich jak liczby czy łańcuchy znaków.
    Reactive obiekty, z drugiej strony, umożliwiają reaktywne zarządzanie bardziej złożonymi danymi, takimi jak obiekty i tablice. Wszelkie zmiany dokonane na reactive obiektach są automatycznie śledzone, co pozwala na natychmiastowe odzwierciedlanie tych zmian w interfejsie użytkownika.
  </p>
</TextBoxMD>

poprzez użycie ref zmienna staje się obiektem dlatego musimy użyć value
- zdjęcie z devtools
- ciekawostka 
- Dzięki reaktywnym danym w Vue 3, programiści mogą łatwo zarządzać stanem aplikacji i automatycznie odświeżać interfejs użytkownika w odpowiedzi na zmiany danych. Jest to istotne w budowie dynamicznych i responsywnych aplikacji internetowych.