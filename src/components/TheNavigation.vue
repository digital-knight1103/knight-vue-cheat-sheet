<template>
<div class=""> 
  <div>
    <nav class="lg:hidden flex items-center justify-between p-8 bg-gray-700 mb-3">
      <div class="w-full xl:w-auto px-2 xl:mr-12">
        <div class="flex items-center justify-between">
          <a class="inline-flex items-center h-8" href="#">
            <img src="../assets/htmlknight.svg" alt="knight vue logo">
          </a>
          <div class="xl:hidden">
            <button class="navbar-burger text-gray-400 hover:text-gray-300 focus:outline-none">
              <IconBurger/>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="hidden lg:block navbar-menu relative z-50">
      <div class="lg:hidden navbar-backdrop fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
      <nav class="fixed top-0 left-0 bottom-0 w-full max-w-xxs flex flex-col h-full py-8 px-4 bg-gray-700 overflow-auto">
        <div class="mb-6">
          <a class="block mb-12" href="#">
            <img class="h-40" src="../assets/htmlknight.svg" alt="">
          </a>
          <ul class="mb-8">
            <!-- Intro -->
            <li class="mb-2">
              <a class="flex items-center p-4 text-white bg-green-500 rounded-xl" href="#">
                <IconOverview />
                <span class="ml-4 text-sm font-semibold">Wstęp</span>
              </a>
            </li>
            
            <!-- Composition API -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/compositionAPI">
                <IconAnalitics/>
                <span class="ml-8 font-bold">
                  CompositionAPI
                </span>
                <span class="inline-block ml-auto">
                  <IconArrowDown/> 
                </span> 
            </RouterLink>
            </li>

            <!-- Components -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/components">
                <IconSuitcase/>
                <span class="ml-8 font-bold">
                  Komponenty
                </span>
                <span class="ml-4 flex items-center justify-center w-6 h-6 bg-green-500 text-white text-xs font-semibold rounded-full">
                  4
                </span>
              </RouterLink>
            </li>

            <!-- TEST -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/test">
                <IconOrder/>
                <span class="ml-8 font-bold">
                  Testowy
                </span>
                <span class="inline-block ml-auto">
                  <IconArrowDown/> 
                </span> 
              </RouterLink>
            </li>

            <!-- About -->
            <li>
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/about">
                <IconUser/>
                <span class="ml-8 font-bold">
                  O mnie
                </span>
              </RouterLink>
            </li>
          </ul>
          <div>
            <span class="block mb-8 text-xs font-semibold text-gray-400 uppercase">Tools</span>
            <ul>
              <li>
                <a class="flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl" href="#">
                  <div class="w-2 h-2 mr-2 bg-blue-300 rounded-full"></div>
                  <span class="text-sm font-semibold">Front-End Tools</span>
                </a>
              </li>
              <li>
                <a class="flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl" href="#">
                  <div class="w-2 h-2 mr-2 bg-green-400 rounded-full"></div>
                  <span class="text-sm font-semibold">Back-End Tools</span>
                </a>
              </li>
              <li>
                <a class="flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl" href="#">
                  <div class="w-2 h-2 mr-2 bg-yellow-400 rounded-full"></div>
                  <span class="text-sm font-semibold">Design</span>
                </a>
              </li>
              <li>
                <a class="flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl" href="#">
                  <div class="w-2 h-2 mr-2 bg-red-400 rounded-full"></div>
                  <span class="text-sm font-semibold text-gray-300">Marketing</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-auto">
          <a class="flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl" href="#">
            <span class="text-gray-400">
              <IconSetting/>
            </span>
            <span class="ml-4 text-sm font-semibold">Settings</span>
          </a>
          <a class="flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl" href="#">
            <span class="text-gray-400">
              <IconLogout/>
            </span>
            <span class="ml-4 text-sm font-semibold">Log Out (disabled)</span>
          </a>
        </div>
        <div class="mt-auto">
          <a class="group block py-6 pl-6 pr-8 my-4 bg-blue-500 hover:bg-blue-600 rounded-xl transition duration-200" href="#">
            <div class="flex w-12 h-12 mb-4 items-center justify-center bg-blue-600 group-hover:bg-blue-500 rounded-xl">
              <IconDoubleArrowTop/>
            </div>
            <h5 class="text-sm font-medium text-blue-50 mb-2">Upgrade to PRO</h5>
            <p class="text-xs leading-normal font-semibold text-blue-200">One year support, monthly updates for up to 5 team members.</p>
          </a>
          <a class="group flex py-5 px-6 items-center bg-gray-600 hover:bg-gray-500 rounded-xl transition duration-200" href="#">
            <div class="flex w-8 h-8 mr-2 items-center justify-center bg-gray-500 group-hover:bg-gray-600 rounded-lg">
              <img src="../assets/htmlknight.svg" alt=""></div>
            <span class="text-sm text-gray-100 font-medium">Digital_Knight</span>
            <div class="ml-auto text-gray-400 group-hover:text-gray-300">
              <IconVerticalDots/>
            </div>
          </a>
        </div>
      </nav>
    </div>
    <div class="bg-white mx-auto lg:ml-[290px] rounded-lg">
      <RouterView />
    </div>

    <!-- JESZCZE SPRAWDZIC prównać z app -->
    <!-- <RouterView /> -->
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconOverview from '../assets/icons/IconOverview.vue'
import IconBurger from '../assets/icons/IconBurger.vue'
import IconAnalitics from '@/assets/icons/IconAnalitics.vue'
import IconOrder from '@/assets/icons/IconOrder.vue'
import IconUser from '@/assets/icons/IconUser.vue'
import IconSetting from '@/assets/icons/IconSetting.vue'
import IconLogout from '@/assets/icons/IconLogout.vue'
import IconArrowDown from '@/assets/icons/IconArrowDown.vue'
import IconSuitcase from '@/assets/icons/IconSuitcase.vue'
import IconVerticalDots from '@/assets/icons/IconVerticalDots.vue'
import IconDoubleArrowTop from '@/assets/icons/IconDoubleArrowTop.vue'

export default defineComponent({
  name: 'TheNavigation',
  components: {
    IconOverview,
    IconBurger,
    IconAnalitics,
    IconOrder,
    IconUser,
    IconSetting,
    IconLogout,
    IconArrowDown,
    IconSuitcase,
    IconVerticalDots,
    IconDoubleArrowTop
  },
  setup() {
    // Burger menus
    document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var j = 0; j < close.length; j++) {
            close[j].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var k = 0; k < backdrop.length; k++) {
            backdrop[k].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});
  }
})



</script>

<style scoped>

nav a {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-left: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
}
nav a.router-link-active {
    color: #fff;
    /* background-color: rgb(36 209 100); */
    background-color: rgb(21 26 35);
    /* border: 1px solid rgb(36 209 100); */
}
nav a.router-link-exact-active {
  /* color: white; */
  margin-left: 1rem;
  font-weight: 600;
}

/* Bez ramki routerlinki
nav a:first-of-type {
  border: 0;
}
*/

</style>

flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl