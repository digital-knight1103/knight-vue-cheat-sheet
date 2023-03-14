<template>
      <TheNavigation/>

      <!-- <div class="mx-auto lg:ml-[290px] rounded-lg mt-8">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="in-out">
            <Component :is="Component"/>
          </Transition>
        </RouterView>
      </div> -->
</template>

<script setup lang="ts">
import TheNavigation from './components/TheNavigation.vue';
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
