<template>
  <div class="container">
    <PageHeader path="" title="Formularze"></PageHeader>
    <PageContent>
      <FormsMark class="mb-[1000px]"/>

<p>
  Warto wspomnieć o modyfikatorach
</p>


      https://vueschool.io/articles/vuejs-tutorials/building-a-multi-step-form-with-petite-vue/


      <!-- Zwykły Formularz -->
      <!-- <div class="m-10 grid gap-y-4">
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
      </div> -->

    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/molecules/PageHeader/PageHeader.vue'
import PageContent from '@/components/molecules/PageContent/PageContent.vue'
import FormsMark from '../views/PageMD/FormsMark.md'

export default defineComponent({
  name: 'FormsView',
  components: {
    FormsMark,
    PageHeader,
    PageContent,
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
          music: true
        }
    }
    const petOptions = [
      { label: 'Yes', value: 1 },
      { label: 'No', value: 0 },
      { label: 'No matter', value: 2 },
    ]

    return {
      categories,
      event,
      petOptions
    }
  }
})
</script>

