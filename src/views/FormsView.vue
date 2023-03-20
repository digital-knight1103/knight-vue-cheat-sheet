<template>
  <div class="container">
    <PageHeader path="" title="Formularze"></PageHeader>
    <PageContent>
      <p>
        Hej w tej części zbudujemy formularz oczywiście w oparciu o atomic design aby komponenty były reużywalne i stworzone według najlepszych praktyk. To co zaczynamy. Warto zacząć od jakiegoś planu co by nam się przydało do naszego formularza. Może zacznijmy od stworzenia jakiegoś ładnego inputa.
        
        Stylami narazie się nie przejmój. Zaczynamy od labela. Najlepiej użyć tu interpolacji i poprzez propsa przekazać treść labelka od rodzica. Staje się on dzięki temu uniwersalny.  

        Ok. Czas na deser czyli naszego Inputa. Co zrobić aby był dosyć uniwersalny. To samo możemy zrobić z placeholderem co z labelkiem. Choć w tym przypadku aby łądnie wyglądało możemy go dodawać opcjonalnie.
        Nie dodajemy do naszego inputa type ponieważ defaultowo jest ustawiony text a już w rodzicu zależnie od potrzeby dodamy type jeżeli będziemy otrzebować maila czy passowrd. Nieźle za jednym zamachem mamy już kilka komponentów. 
      </p>
      https://vueschool.io/articles/vuejs-tutorials/building-a-multi-step-form-with-petite-vue/


      <!-- Formularz ładny -->
      <div class="m-10 w-[400px] mx-auto grid gap-y-4">
        <h1>Formularz oparty o komponenty</h1>
        <form class="grid">
    
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
    
          <FormInput label="Nasz labelek"/>
    
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
      </div><div class="m-10 grid gap-y-4">
        <h1>Create an event</h1>
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
      {{ event.title }}

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

export default defineComponent({
  name: 'FormsView',
  components: {
    PageHeader,
    PageContent,
    FormInput,
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

