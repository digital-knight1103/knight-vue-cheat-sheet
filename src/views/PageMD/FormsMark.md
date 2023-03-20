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

<div  class='mx-10 my-2 p-5 bg-gray-600 rounded-lg text-white'>
  <p>
    W rodzicu możemy zarejestrować to zdarzenie i aktualizować wartość model, używając v-model, który jest połaczeniem dla dyrektywy :value i @input.
  </p>
</div>

<div  class='mx-10 my-2 p-5 bg-gray-600 rounded-lg text-white'>
  <p>
   Ale jak spojrzymy do devTools zobaczymy że coś jest nie tak. Brakuje atrybutów takich jak type mimo że dodaliśmy. O co tu chodzi???
  </p>
  <BoxInfo title='DevTools' description='Będzie grubo'/>
  <p>
    W Vue za każdym razem, gdy przekazujesz atrybuty, klasy i style od rodzica do dziecka, tak jak robimy to z type w naszym FormInput, Vue spróbuje automatycznie dowiedzieć się, gdzie wewnątrz szablonu te atrybuty powinny zostać wstrzyknięte.
    W przypadku komponentów z pojedynczym elementem opakowującym, znanych również jako pojedyncze komponenty główne, takie zachowanie jest bardzo proste. Vue po prostu wstrzyknie wszystkie atrybuty, klasy i style do elementu głównego.
  </p>
  <p class='my-2'>
    W komponentach wielordzeniowych, takich jak nasz FormInput, Vue nie może ustalić bez naszej pomocy, do którego węzła lub fragmentu powinien wstrzyknąć atrybuty — więc Vue po prostu się poddaje i wyświetla ostrzeżenie.
  </p>
</div>

<div class='flex mx-auto'>

```js
// Jest tylko input więc nie ma problemu
// atrybuty spokojnie zostaną przekazane
<template>
    <input />
</template>
```
```js
// Są dwa elementy więc są i problemy
// Vue nie wie gdzie przekazać atrybut
<template>
    <label>Problem</label>
    <input />
</template>
```

</div>

<div  class='mx-10 my-2 p-5 bg-gray-600 rounded-lg text-white'>
  <p>
   W przypadku naszego FormInput mieć możliwość wstrzykiwania atrybutów bezpośrednio do pliku input, więc musimy ręcznie powiązać plik $attrs przeciwić się temu. Zróbmy to teraz, dodając v-bind="$attrs”do naszego elementu wejściowego.
  </p>
</div>

```js
<template>
    <input 
      v-bind="$attrs" 
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
</template>
```

<div  class='mx-10 my-2 p-5 bg-gray-600 rounded-lg text-white'>
  <p>
   Dzięki tej małej zmianie, VUE teraz wie gdzie co dodać i dziecko będą teraz poprawnie odbierać atrybuty np:type od rodzica, oraz zastosowane klasy. 
   Po tym wszystkim otrzymujemy takie cuś pięknego.
  </p>
</div>

```js
// FormInput (dziecko)
<template>
  <div class="kolorki i inne css-y">
    <label 
      v-if="label"
      class="tailwind">
      {{ label }}
    </label>
    <input 
      class="tailwind"
      v-bind="$attrs"
      :placeholder="placeholder?.length > 0 ? placeholder : label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
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
    }
  }

})
</script>
</template>
```

```js
// FormInput (rodzic)
<template>
  <Form>
    <FormInput 
      v-model="event.title"
      label="Label title"
      type="text"
    />
    <FormInput 
      v-model="event.description"
      label="Label desc"
      type="text"
    />
  </Form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormInput from '@/components/atoms/Form/FormInput/FormInput.vue'

export default defineComponent({
  name: 'FormsView',
  components: {
    FormInput,
  },
  setup() {
    const event = {
      title: '',
      description: '',
    }
    return {
      event
    }
  }
})
</script>
</template>
```

<div>
  <div class='mx-10 my-2 p-5 bg-gray-600 rounded-lg text-white'>
    <p>
      I jak dodamy parę klas finalnie otrzymujemy takie cuś. Czyż to nie jest nawet ładne.
    </p>
  </div>
</div>

<Form class='w-96 mx-auto'>
  <h3 class='text-white font-semibold'>Przykładowe inputy</h3>
    
  <FormInput 
    label="Name"
    type="text"
  />
    
  <FormInput 
    label="Surname"
    type="text"
  />
</Form>

<div class='mx-10 my-2 p-5 bg-gray-600 rounded-lg text-white'>
  <h1 class='text-2xl uppercase font-semibold'>FormSelect</h1> 
  <p>To co jedziemy dalej. Czas na jakiegoś selecta</p>
  <p>Z labelkiem będzie identycznie więc bierzemy się od razu za grubsze sprawy. Jak poprzednio aby nasz komponent był elastyczny musimy umożliwić rodzicowi jego modyfikowanie. Więc znów v-model dodamy dopiero w rodzicu a tu dodamy modelValue czyli naszą domyślną nazwe właściwości, której VUE będzie szukać podczas wiązania v-model do niestandardowych komponentów
  </p>
</div>

  ```js
  // FormInput
<template>
    <label>{{ label }}</label>
    <select 
      v-bind="{
        ...$attrs,
        onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
      }"
      :value="modelValue"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
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
  <p>Zauważ, że tym razem nie używamy bezpośredniego powiązania, konfigurując nasz detektor zdarzeń zmiany za pomocą @changesłowo kluczowe, tak jak zrobiliśmy to w naszym BaseInputskładnik dla @inputwydarzenie. Tym razem konfigurujemy powiązanie naszego zdarzenia bezpośrednio z plikiem v-bindobiekt, po naszym $attrswiążący.

W Vue 3 ważne jest, aby pamiętać, że jeśli zdecydujemy się nie używać @składni znaku, zdarzenie zostanie poprzedzone słowem kluczowym on, w tym przypadku onChangeponieważ słuchałem changewydarzenie.

Wszystkie odbiorniki zdarzeń, które są odbierane w $attrsod rodzica poprzedzone są przedrostkiem onsłowo kluczowe, a pierwsza litera jest wielka.

Na naszym słuchaczu zdarzeń dla onChangechwytamy $eventjako parametr funkcji i $emitnasze wydarzenie update:modelValuez ładunkiem $event.target.valuepoinformowanie rodzica o wszelkich zmianach. </p>
  <p>
    I co dalej. Trzeba by wybrać jakąś opcję. 
  </p>
</div>










        
    