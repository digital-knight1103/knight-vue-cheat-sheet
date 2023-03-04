<template>
    <div class="container px-4 mx-auto">
      <div class="relative h-full py-24 md:py-44 px-8 bg-green-500 rounded-2xl overflow-hidden shadow-lg shadow-green-500/10">
        <img class="absolute top-0 left-0 h-full w-full object-cover" src="../../../assets/images/knight.png" alt="images banner">
        <div class="relative max-w-lg mx-auto text-center mb-12 z-10">
          <h3 class="text-3xl md:text-4xl font-bold text-white mb-3">Mały Przewodnik po VUE3</h3>
          <p class="font-medium text-blue-200 mb-6">Jedziemy z tematem</p>
          <a class="inline-block w-full sm:w-auto px-16 py-3 leading-6 text-center font-semibold text-blue-50 bg-gray-500 hover:bg-gray-600 transition duration-200 rounded-lg" href="#">Zaczynajmy</a>
        </div>
        <span class="mask absolute top-0 left-0 w-full h-full bg-cover opacity-60"></span>
      </div>
    </div>
</template>

<style scoped>
.mask {
  background-image: linear-gradient(195deg,#66bb6a,#43a047);
}
</style>