<template>
  <div class="p-8 border rounded-lg m-6">
      <Bar
    id="my-chart-id"
    :data="chartData"
  />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { Bar } from 'vue-chartjs'
import { 
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = reactive({
  labels: [ 
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec'
  ],
  datasets: [ { data: [30, 23, 11, 67, 11, 2, 5] } ]
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
