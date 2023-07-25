---
title: Computed
---

<h1 class='text-white mb-10 mt-5 text-2xl uppercase text-center'>
  Computed
</h1>

- [1. Computed](#1-options)
- [2. CompositionAPI](#2-composition)
- [3. Podsumowanie](#3-summary)

<TextBoxMD>
  <h1 class="text-2xl font-semibold">
    <span class='text-green-500 forn-bold'>#</span>  Computed Properties 
  </h1>
  <p class='my-2'>
    Reaktywne dane stanowią kluczowy koncept we VUE. Pozwalają one na automatyczną aktualizację danych w komponencie bez potrzeby ręcznego manipulowania nimi. Czyli w dużym uproszczeniu VUE "obserwuje" nasze zmienne i w razie konieczności reaguje na ich zmianny.
  </p>
  <p>
    To co starczy teorii. Najlepiej jak popracujemy na przykładach. To w ramach przypomnienia (bo głównie skupiamy się na CompositionAPI) zerkniemy jak to się odbywało w wersji starszej niż VUE3 czyli naszym OptionsAPI.<br>
    W OptionsAPI do deklarowania stanu reaktywnego dodajemy właściwość `data` (data properties) do obiektu naszego komponentu. Od teraz nasze dane w 'data' są reaktywne i zmiana ich spowoduje ponowne renderowanie komponentu.
  </p>
</TextBoxMD>