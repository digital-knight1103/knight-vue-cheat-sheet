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
    Reaktywne dane stanowią kluczowy koncept we VUE. Pozwalają one na automatyczną aktualizację danych w komponencie bez potrzeby ręcznego manipulowania nimi. Czyli w dużym uproszczeniu VUE "obserwuje" nasze zmienne i w razie konieczności reaguje na ich zmianny.<br>
    
    Ale może początku zerknijmy jak to odbywa się w wersji starszej niż 3, czyli OptionsAPI. Do deklarowania stanu reaktywnego używamy 'data'
    
    
    Tu reaktywne dane osiągało się poprzez zastosowanie właściwości danych (data properties) w komponentach.
    W Options API, deklarujemy dane reaktywne poprzez dodanie właściwości data do obiektu komponentu. Właściwości te przechowują dane, które mają być reaktywne, czyli takie, których zmiana spowoduje ponowne renderowanie komponentu.
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
    W powyższym przykładzie "counter" oraz "name" są deklarowane jako dane reaktywne. Kiedy następuje zmiana wartości któregoś z tych pól, Vue automatycznie odświeży komponent, aby odzwierciedlić nową wartość.<br>
    Aby uzyskać dostęp do danych reaktywnych wewnątrz komponentu, możemy odwoływać się do nich za pomocą składnika this. Na przykład, aby uzyskać dostęp do counter wewnątrz metody, możemy napisać:
  </p>
</TextBoxMD>

```js
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
};
```

<TextBoxMD>
  <p>
  W powyższym przykładzie, metoda increment zwiększa wartość counter o 1, a zmiana tej wartości spowoduje ponowne renderowanie komponentu.

W Options API, dane reaktywne są reprezentowane jako właściwości obiektu data. Podczas renderowania komponentu, Vue automatycznie śledzi zależności między danymi reaktywnymi a komponentem, dzięki czemu wie, kiedy trzeba odświeżyć widok. Jednakże, w Options API, trzeba ręcznie zarządzać cyklem życia komponentu i obserwacją zmian danych.

W skrócie, w Options API w Vue.js dane reaktywne definiuje się poprzez dodanie właściwości data do obiektu komponentu. Zmiana wartości tych danych spowoduje ponowne renderowanie komponentu. Aby uzyskać dostęp do danych reaktywnych, można użyć składnika this.<br>
  </p>
</TextBoxMD>

<TextBoxMD>
  <h1 class="text-2xl font-semibold">
    <span class='text-green-500 forn-bold'>#</span>  CompositionAPI
  </h1>
  <p>
    To małe wprowadzenie i powtórkę OptionsApi mamy za sobą. Czas skupić się na tym co jest na topie i zalecane przez producenta czyt. "Evan You". Jak juz wczesniej zostało wspomniane w CompositionAPI dane reaktywne tworzy się trochę inaczej i możemy skorzystać z róznych rozwiązań ale żeby nie było mamy tez możliwość tworzenia danych które nie są reaktywne (non-reactive) ponieważ nie zawsze potrzebujemy coś robić z naszymi danymi a po co sobie dodawać niepotrzebne 
  </p>
  <p>
    We VUE3 CompositionAPI aby nasze dane były reaktywne i mutowalne musimy zastosować funkcje takie jak `ref` oraz `reactive`<br>
  </p>
</TextBoxMD>

poprzez użycie ref zmienna staje się obiektem dlatego musimy użyć value
- zdjęcie z devtools
- ciekawostka 