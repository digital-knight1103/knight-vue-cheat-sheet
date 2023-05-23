---
title: Lifecycles Hooks
---

<h1 class='text-white mb-10 mt-5 text-2xl uppercase text-center'>
  Cykl Życia Komponentu (Hooks)
</h1>

dodać jak w options 
```vue

mounted() {
  //do stuff when component is loaded
}
unmounted {
  // 
}

```

Cóż, w każdym razie, ponieważ dzięki opcjom API mogliśmy dodać tylko jeden hak każdego typu.

Więc jeden zamontowany hak i jeden na zamontowanym haku.

Oznaczało to, że często musieliśmy połączyć wiele niezwiązanych ze sobą logiki w tych hakach, ale

w API kompozycji nie możemy mieć tylu haków, ile chcemy, tyle zamontowanych haków, ile chcemy, i

tyle niechcianych haczyków, ile nam się podoba.

Możemy je umieścić w dowolnym miejscu w naszej sekcji skryptów.

Więc po prostu skomentujmy tę sekcję skryptu interfejsu API opcji. 


## Aktywacja i dezaktywacja hooków