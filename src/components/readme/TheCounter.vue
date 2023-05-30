
<template>
  <button class='text-white block mx-auto  mb-6 text-center border p-2 rounded-md' @click="increment">Klikamy i zwiększamy: {{ count }}</button>
</template>

<script>
export default {
  // reactive state
  data() {
    return {
      count: 1,
    }
  },
  // functions that mutate state and trigger updates
  methods: {
    increment() {
      this.count++
    }
  },
  // lifecycle hooks
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

