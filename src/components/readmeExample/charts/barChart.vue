<template>
  <Bar
    id="my-chart-id"
    :data="chartData"
  />
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = reactive({
  labels: [ 'January', 'February', 'March' ],
  datasets: [ { data: [40, 20, 12] } ]
})


// export default {
//   name: 'BarChart',
//   components: { Bar },
//   data() {
//     return {
//       chartData: {
        
//       },
//       chartOptions: {
//         responsive: true
//       }
//     }
//   }
// }
</script>
