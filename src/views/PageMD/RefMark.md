---
title: Ref/Reactive
---

<h1 class='text-white mb-10 mt-5 text-2xl uppercase text-center'>
  Reaktywne dane
</h1>

- [1. OptionsAPI](#1-options) 
- [2. CompositionAPI](#2-composition)

<TextBoxMD>
  <p class='my-2'>
    Reaktywne dane. Jak mamy to rozumieć ? <br>
    Reaktywne dane stanowią kluczowy koncept w VUE3. Pozwalają one na automatyczną aktualizację danych w komponencie bez potrzeby ręcznego manipulowania nimi. Czyli w dużym uproszczeniu VUE "obserwuje" te zmienne i w razie konieczności reaguje na zmianny. We vue3 aby nasze dane były reaktywne i mutowalne musimy zastosować funckje takie jak `ref` oraz `reactive`<br>
    Ale może pokażmy od początku. Oczywiście! W Vue.js w wersji starszej niż 3, czyli w Options API, reaktywne dane można osiągnąć poprzez zastosowanie właściwości danych (data properties) w komponentach.<br>
    W Options API, deklarujemy dane reaktywne poprzez dodanie właściwości data do obiektu komponentu. Właściwości te przechowują dane, które mają być reaktywne, czyli takie, których zmiana spowoduje ponowne renderowanie komponentu.
  </p>

</TextBoxMD>

# 1.Options

poprzez użycie ref zmienna staje się obiektem dlatego musimy użyć value
- zdjęcie z devtools
- ciekawostka 

```js
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
    W powyższym przykładzie counter i name są deklarowane jako dane reaktywne. Kiedy następuje zmiana wartości któregoś z tych pól, Vue automatycznie odświeży komponent, aby odzwierciedlić nową wartość.<br>
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

W skrócie, w Options API w Vue.js dane reaktywne definiuje się poprzez dodanie właściwości data do obiektu komponentu. Zmiana wartości tych danych spowoduje ponowne renderowanie komponentu. Aby uzyskać dostęp do danych reaktywnych, można użyć składnika this.
  </p>
</TextBoxMD>