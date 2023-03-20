<template>
  <div class="container">
    <PageHeader path="" title="Formularze"></PageHeader>
    <PageContent>
      <p>
        <p>
        Hej w tej części zbudujemy formularz oczywiście w oparciu o atomic design aby komponenty były reużywalne i stworzone według najlepszych praktyk. To co zaczynamy. Warto zacząć od jakiegoś planu co by nam się przydało do naszego formularza. Może zacznijmy od stworzenia jakiegoś ładnego inputa.
        
        Stylami narazie się nie przejmój. Zaczynamy od labela. Najlepiej użyć tu interpolacji i poprzez propsa przekazać treść labelka od rodzica. Staje się on dzięki temu uniwersalny.  
        </p>
        <p class="my-2">
          Ok. Czas na deser czyli naszego Inputa. Co zrobić aby był dosyć uniwersalny. To samo możemy zrobić z placeholderem co z labelkiem. Choć w tym przypadku aby łądnie wyglądało możemy go dodawać opcjonalnie.
        Nie dodajemy do naszego inputa type ponieważ defaultowo jest ustawiony text a już w rodzicu zależnie od potrzeby dodamy type jeżeli będziemy otrzebować maila czy passowrd. Nieźle za jednym zamachem mamy już kilka opcji. 
        </p>

        
        V-model również możemy usunąć z komponentu bo na poziomie komponentu nam nie jest potrzebny. Uzyjemy go dopiero w rodzicu.

        No tak ale jak nie ma v-model co jak te dane czy pobrac czy zaktualizować. Jakbyśmy mieli w głównym komponencie to v-model byłby idealny ale tu skorzystamy z takiego rozwiązania. 

        W tym przykładzie wartość modelu jest przechowywana jako właściwość danych komponentu, którą nazywa się modelValue. Ta wartość jest przekazywana do elementu formularza jako wartość value.
        <p class="text-green-500">
          input :value="modelValue"
        </p>

        Jeśli użytkownik wprowadza zmiany w polu formularza, emitowany jest zdarzenie input za pomocą dyrektywy @input. Ta dyrektywa słucha zdarzeń wejściowych na elemencie formularza i wywołuje metodę $emit, która wysyła zdarzenie update:modelValue do rodzica komponentu, przekazując aktualną wartość pola formularza.
        <code>
          @input="$emit('update:modelValue', $event.target.value)"
        </code>

        W rodzicu komponentu możesz zarejestrować to zdarzenie i aktualizować wartość modelu, używając v-model, który jest syntaktycznym cukrem dla dyrektywy :value i @input.

        <code>
          child-component v-model="parentValue"/child-component
        </code>

        W tym przykładzie, parentValue będzie zawsze aktualizowane na podstawie wartości modelValue, którą zmienia dziecko w komponencie.

      <p>
      Ale jak spojrzymy do devTools zobaczymy że coś jest nie tak. Brakuje attrybutów takich jak type mimo że dodaliśmy. ???
    </p>

        <p class="my-4">
          W Vue za każdym razem, gdy przekazujesz atrybuty, klasy i style od rodzica do dziecka, tak jak robimy to z typew naszym BaseInputkomponentu, Vue spróbuje automatycznie dowiedzieć się, gdzie wewnątrz szablonu te atrybuty powinny zostać wstrzyknięte.

W przypadku komponentów z pojedynczym elementem opakowującym, znanych również jako pojedyncze komponenty główne, takie zachowanie jest bardzo proste. Vue po prostu wstrzyknie wszystkie atrybuty, klasy i style do elementu głównego.

W komponentach wielordzeniowych, takich jak nasz BaseInput, Vue nie może ustalić bez naszej pomocy, do którego węzła lub fragmentu powinien wstrzyknąć atrybuty — więc Vue po prostu się poddaje i wyświetla ostrzeżenie.

W przypadku naszego BaseInputchcemy mieć możliwość wstrzykiwania atrybutów bezpośrednio do pliku input, więc musimy ręcznie powiązać plik $attrssprzeciwić się temu. Zróbmy to teraz, dodając v-bind="$attrs”do naszego elementu wejściowego.
</p>

<p class="text-green-500">
  input
  v-bind="$attrs"
  :value="modelValue"
  :placeholder="label"
  @input="$emit('update:modelValue', $event.target.value)"
  class="field"
</p>

Dzięki tej małej zmianie, inputelementy będą teraz poprawnie odbierać typepowiązanie od rodzica, a nasze klasy CSS zostaną zastosowane. 

<p>
  Warto wspomnieć o modyfikatorach
</p>

      </p>

      https://vueschool.io/articles/vuejs-tutorials/building-a-multi-step-form-with-petite-vue/


      <!-- Formularz ładny -->
      <div class="m-10 w-[400px] mx-auto grid gap-y-4">
        <h1>Formularz oparty o komponenty</h1>
        
        <form class="grid">
          <FormSelect 
          :options="categories"
          v-model="event.category"
          label="Kategorie" 
        />
  
    
          <h3>Name & describe your event</h3>
    
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
    
          <h3>Where is your event?</h3>

          <FormInput 
            v-model="event.location"
            label="Location"
            type="text"
          />
    
          <h3>Are pets allowed?</h3>
          <div>
            <input
                type="radio"
                v-model="event.pets"
                :value="1"
                name="pets"
              />
            <label>Yes</label>
          </div>
    
          <div>
            <input
              type="radio"
              v-model="event.pets"
              :value="0"
              name="pets"
            />
            <label>No</label>
          </div>
    
          <h3>Extras</h3>
          <div>
            <input
              type="checkbox"
              v-model="event.extras.catering"
              class="field"
            />
            <label>Catering</label>
          </div>
    
          <div>
            <input
              type="checkbox"
              v-model="event.extras.music"
              class="field"
            />
            <label>Live music</label>
          </div>
    
          <button type="submit">Submit</button>
        </form>
      </div>
      {{ event }}

      <!-- Zwykły Formularz -->
      <div class="m-10 grid gap-y-4">
        <h1>Formularz jako jeden komponent</h1>
        <form>
    
          <label>Select a category</label>
          <select v-model="event.category">
            <option
              v-for="option in categories"
              :value="option"
              :key="option"
              :selected="option === event.category"
            >{{ option }}</option>
          </select>
    
          <h3>Name & describe your event</h3>
    
          <label>Title</label>
          <input
            v-model="event.title"
            type="text"
            placeholder="Title"
            class="field"
          >
    
          <label>Description</label>
          <input
            v-model="event.description"
            type="text"
            placeholder="Description"
            class="field"
          />
    
          <h3>Where is your event?</h3>
    
          <label>Location</label>
          <input
            v-model="event.location"
            type="text"
            placeholder="Location"
            class="field"
          />
    
          <h3>Are pets allowed?</h3>
          <div>
            <input
                type="radio"
                v-model="event.pets"
                :value="1"
                name="pets"
              />
            <label>Yes</label>
          </div>
    
          <div>
            <input
              type="radio"
              v-model="event.pets"
              :value="0"
              name="pets"
            />
            <label>No</label>
          </div>
    
          <h3>Extras</h3>
          <div>
            <input
              type="checkbox"
              v-model="event.extras.catering"
              class="field"
            />
            <label>Catering</label>
          </div>
    
          <div>
            <input
              type="checkbox"
              v-model="event.extras.music"
              class="field"
            />
            <label>Live music</label>
          </div>
    
          <button type="submit">Submit</button>
        </form>
      </div>

    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue'
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import FormInput from '@/components/atoms/Form/FormInput/FormInput.vue'
import FormSelect from '@/components/atoms/Form/FormSelect/FormSelect.vue'

export default defineComponent({
  name: 'FormsView',
  components: {
    PageHeader,
    PageContent,
    FormInput,
    FormSelect,
  },
  setup() {
    const categories = [
      'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
    ]
    const event = {
      category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
    }

    return {
      categories,
      event
    }
  }
})
</script>

