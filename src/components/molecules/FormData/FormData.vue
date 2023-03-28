<template>
  <!-- Formularz Z KOMPONENTÓW -->
  <div class="m-10 max-w-[600px] mx-auto grid gap-y-4 border border-green-500 p-10 rounded-lg">
    <h1 class="mx-auto text-semibold text-white text-lg">Impreza Urodzinowa</h1>
    <form class="grid">
      <FormSelect 
        :options="categories"
        v-model="event.category"
        label="Kategorie" 
      />
    <h3>Dane dla imprezy:</h3>
      <FormInput 
        v-model="event.title"
        label="Nazwa Solenizanta"
        type="text"
      />
      <FormInput 
        v-model="event.description"
        label="Opis "
        type="text"
      />
      <h3>Miejsce urodzin</h3>
      <FormInput 
        v-model="event.location"
        label="Lokalizacja"
        type="text"
      />

      <h3>Można wziąć zwierzaczka ?</h3>
      <div>
        <FormRadioGroup
          v-model="event.pets"
          name="pets"
          :options="petOptions"
          vertical
        />
        <!-- <FormRadio 
          label="Tak"
          v-model="event.pets"
          :value="1"
          name="pets"
        />
        <FormRadio 
          label="Nie"
          v-model="event.pets"
          :value="0"
          name="pets"
        /> -->
      </div>

      <h3>Dodatki</h3>
        <FormCheckbox
          label="Jedzonko"
          v-model="event.extras.catering"
        />
        <FormCheckbox
          label="Muzyczka"
          v-model="event.extras.music"
        />
        <FormCheckbox
          label="Opiekunka"
          v-model="event.extras.music"
        />

      <button type="submit">Submit</button>
    </form>
  </div>
  
  <div class="max-w-[400px] mx-auto mb-5">
    <h1>Dane pobrane z formularza</h1>
    {{ event }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormInput from '@/components/atoms/Form/FormInput/FormInput.vue'
import FormSelect from '@/components/atoms/Form/FormSelect/FormSelect.vue'
import FormCheckbox from '@/components/atoms/Form/FormCheckbox/FormCheckbox.vue'

export default defineComponent({
  name: 'FormsView',
  components: {
    FormInput,
    FormSelect,
    FormCheckbox
  },
  setup() {
    const categories = [
      'sustainability',
        'natura',
        'klauny',
        'wyścigi',
        'edukacja',
        'crossfit',
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
      { label: 'Tak', value: 1 },
      { label: 'Nie', value: 0 },
      { label: 'Pokemon', value: 2 },
    ]

    return {
      categories,
      event,
      petOptions
    }
  }
})
</script>

<style scoped>
.test {
  margin: 20px;
}
</style>