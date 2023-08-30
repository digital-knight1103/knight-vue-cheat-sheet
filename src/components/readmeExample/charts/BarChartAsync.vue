<template>
  <div class="p-8 border rounded-lg m-6">
    <Bar
      id="my-chart-id"
      :data="chartData"
      :options="{
        plugins: {
          legend: {display: false}
        }
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { Bar } from 'vue-chartjs'
import type { ChartData } from 'chart.js'

import { 
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = reactive<ChartData<'bar'>>({
  labels: [ 
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec'
  ],
  datasets: [ 
    { 
      label: 'Nadgodzinki',
      backgroundColor: ['#1B9F4C', '#127838', '#13f065'],
      data: [30, 23, 11, 67, 11, 2, 5]
    } ]
})
</script>
