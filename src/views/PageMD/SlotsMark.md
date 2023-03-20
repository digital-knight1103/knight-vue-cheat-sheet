---
title: Slots
---

<div class='mx-10 p-5 bg-gray-600 rounded-lg'>
  <p>Co mamy rozumieć poprzez SLOTY. Moim zdanie sloty to takie miejsce w komponencie do którego możemy przekazać fragment naszego template.</p>

  <p>W przykładzie stworzyliśmy prosty komponent <code class='text-green-500'> ChildComponent</code> w którym stworzymy 3 sloty. </p>

  <p>Jeżeli w naszym komponencie rodzicu wrzucimy teraz jakąś treść to pokaże nam się ona jako wiek ponieważ nie nazwany slot zawsze jest slotem defaultowym. </p>

  <p>To teraz co dalej. W naszym komponencie stworzymy template ale nie bój się ostatecznie jest on usunięty a robi za nasz kontener dla elemetów bądź treści które do niego zamieścimy. Potrzebne nam to jest do tego aby skorzystać z v-slot:nazwa slota</p>
</div>

<div class='flex'>

  <span>

  ```js
  // Child Component
  <template>
    <div>
      <p class='name'>
        <slot name='name'></slot>
        <slot name='surname'></slot>
      </p>

      <p class='info'>
        Wiek: <slot></slot> lat/a
      </p>
    </div>
  </template>
  ```

  </span>

  <span>


  ```js
  // Parent Component
  <template>
    <ChildComponent>
      No i co nam się pojawi???

      <tamplate v-slot:name>
        Pawełek
      </tamplate>

      <template v-slot:surname>
        Mistrz
      </template>
    </ChildComponent>
  </template>
  ```

  </span>

</div>





