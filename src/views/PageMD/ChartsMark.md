---
title: Wykresy i diagramy
---

<h1 class='text-white mb-10 mt-5 text-2xl uppercase text-center'>
  Wykresy i diagramy
</h1>

<TextBoxMD>
  <h1 class="text-2xl font-semibold mb-4">
    <span class='text-green-500 font-bold'>#</span> Zaprezentuj dane w ciekawy sposób.
  </h1>
  <p class='my-2'>
    Wykresy i diagramy są powszechną częścią współczesnych pulpitów administarcyjnych (dashbordów) czy stron. Są świetnym sposobem na pokazanie danych analitycznych dotyczących wszelkiego rodzaju rzeczy w łatwym do przyswojenia formacie. Użytkownik zdecydowanie chętniej zerknie na dane którę są pokazane w ciekawy, kolorowy sposób niż na zlepek przypadkowych liczb. 
  </p>
  <p class='my-2'>
    Trzeba sobie jasno powiedzieć że Wykresy stały się integralną częścią sieci, wystepują w aplikacjach finasowych, w aplikacjach gdzie jest śledzony ruch użytkowników na stronie, możemy stworzyć wykresy związane z wydajnością aplikacji i stale ją monitorować. Opcji jest mnóstwo.
  </p>
  <p class='my-2'>
    Do obsługi czy tworzenia wykresów we VUE istnieje wiele dedykowanych bibliotek jak ChartJS, ApexCharts czy Trading-vue-js który jest fajnym narzędziem do tworzenia wykrsów giełdowych. Są też niesamowite kombajny jak D3 czy Three.js w któych już można robic cuda. My jednak skupimy się obsługiwać wykresy przy pomocy biblioteki vue-chartjs która jest dedykowanym narzędziem dla VUE. Oczywiscie vue-chartsjs jest to opakowana biblioteka chartsJS żeby nie było niedomówień.
  </p>
  <p class='my-2'>
    Co więc możemy stworzyć dzięki naszej bibliotece. Na początku polecam zerknąć do dokumentacji więc smiało możesz klikąć na link  <a href='https://vue-chartjs.org/' class='text-green-500 font-bold'>vue-chartjs</a>. Na stronie jest wiele ciakwych przykładów które możemy dopasować do naszych danych na których będziemy pracować i oczywiście w sekcji example możemy sobie manipulować i testować różne mozliwości. Super extra bomba cool.
  </p>
</TextBoxMD>

<BoxInfo title='Ciekawostka' description="Warto też wspomnieć że pracujemy z VUE więc nasze reaktywne dane mogą być na bierząco aktualizowane. "/>

<TextBoxMD>
  <h1 class="text-2xl font-semibold mb-4">
    <span class='text-green-500 font-bold'>#</span> Twój pierwszy wykres.
  </h1>
  <p class='my-2'>
    Dobra dość teori. Czas na praktyczne wdrożenie naszych wykresów. Popracujemy trochę z danymi lokalnymi a także spróbujemy uzyskać dane ze źródła asynchronicznego. 
  </p>
  <p>
    Aby zacząc pracę z naszym vue-chartjs musimy najpierw zainstalować nasze biblioteki. Potrzebujemy chartJJ oraz vue-chartjs. Pamiętaj !!! jak zaczynasz pracę z jakąś bibiloteką warto poświęcic chwilkę i zapoznać się z dokumentacją. 
  </p>
</TextBoxMD>

``` sh
pnpm add vue-chartjs chart.js
# or
yarn add vue-chartjs chart.js
# or
npm i vue-chartjs chart.js
```

<TextBoxMD>
  <p class='my-2'>
    Ok. Jak już mamy wszystko ładnie zainstalowane to spróbujemy stworzyć nasz komponent z naszym pierwszym wykresem. Niech będzie słupkowy. 
  </p>
</TextBoxMD>

```vue
<template>
  <Bar
    :data="chartData"
  />
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
</script>

```


<TextBoxMD>
  <ol>
    <li>1. Importujemy nasz { Bar } z inny wykres zależy co akurat potrzebujemy z naszego pakietu vue-chartjs </li>
    <li>2. Importujemy wszyskie zależności wymagane dla naszego wykresu</li>
    <li>3. Musimy zarejestorwać nasze zależnosci.</li>
  </ol>
  <p class='my-2'>
    Mając to możemy zacząć pracę z naszym wykresem. 
  </p>
  <ol>
    <li>4. Teraz w naszym template możemy rozpocząć tworzenie naszego wykresu. </li>
    <li>UWAGA! Na tym etapie możę pojawić się BŁĄD ponieważ próbujemy wyświetlć wykres ale nie posiadamy obecnie żadnych danych.</li>
    <li>5. Tworzymy dane. Pamiętaj aby opakować je w refa bądź reactive.</li>
    <li>6. Mamy nasz labelki która określa etykiety pojawiające się na dole wykresu</li>
    <li>7. datasets w tym przypadku określa nam dane czyli np: nadgodziny w danym miesiącu</li>
    <li>8. Jak mamy już nasze fejkowe dane musimy je dostarczyć(połączyć) z naszym wykresem </li>
  </ol>
</TextBoxMD>

<BarChart></BarChart>
