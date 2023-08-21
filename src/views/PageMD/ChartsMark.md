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
    Aby zacząc pracę z naszym vue-chartjs musimy najpierw zainstalować nasze biblioteki. 
  </p>
</TextBoxMD>

``` sh
pnpm add vue-chartjs chart.js
# or
yarn add vue-chartjs chart.js
# or
npm i vue-chartjs chart.js
```

<barChart></barChart>