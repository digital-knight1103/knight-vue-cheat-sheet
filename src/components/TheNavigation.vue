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
      <nav class="fixed top-0 left-0 bottom-0 w-full max-w-xxs flex flex-col h-full pb-8 pt-2 px-4 bg-gray-700 overflow-auto">
        <div class="mb-6">
          <a class="flex justify-center mb-4" href="#">
            <img class="h-20" src="../assets/htmlknight.svg" alt="logo knight vue">
          </a>

          <ul class="mb-8">
            <!-- Intro -->
            <li class="mb-2">
              <a class="flex items-center p-4 text-white bg-green-500 rounded-xl" href="#">
                <IconOverview />
                <span class="ml-8 text-sm font-semibold">Wstęp</span>
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

            <!-- Atomic Design -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/atomicdesign">
                <IconOrder/>
                <span class="ml-8 font-bold">
                  Atomic Design
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
                <span class="ml-auto flex items-center justify-center w-6 h-6 bg-green-500 text-white text-xs font-semibold rounded-full">
                  4
                </span>
              </RouterLink>
            </li>

            <!-- About -->
            <li class="mb-8">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/about">
                <IconUser/>
                <span class="ml-8 font-bold">
                  O mnie
                </span>
              </RouterLink>
            </li>

              
            <div class="border-green-500 opacity-60 border-t-[1px] relative mb-10">
              <span class="absolute text-[12px] font-bold">Wiedza</span>
            </div>

            <!-- Props -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/#">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Props / Emits
                </span>
              </RouterLink>
            </li>

            <!-- Events -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/#">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Eventy
                </span>
              </RouterLink>
            </li>

            <!-- v-model -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/#">
                <IconUser/>
                <span class="ml-8 font-bold">
                  v-model
                </span>
              </RouterLink>
            </li>

            <!-- formularze -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/#">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Formularze
                </span>
              </RouterLink>
            </li>

            <!-- class/styles -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/#">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Klasy i style
                </span>
              </RouterLink>
            </li>

            <!-- sloty -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/#">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Sloty
                </span>
              </RouterLink>
            </li>

            <!-- provides/inject -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/#">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Provides/Inject
                </span>
              </RouterLink>
            </li>

            <!-- lifecycle Hooks -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/#">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Cykl życia
                </span>
              </RouterLink>
            </li>

            <!-- composables -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="/#">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Composables
                </span>
              </RouterLink>
            </li>
          </ul>

          <div>
            <div class="border-green-500 opacity-60 border-t-[1px] relative mb-6">
              <span class="absolute text-[12px] font-bold">Narzędzia(Tools)</span>
            </div>
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

        <!-- UPGRADE -->
        <div class="mt-auto">
          <a class="group py-6 pl-6 pr-8 my-4 bg-green-500 hover:bg-green-600 rounded-xl transition duration-200" href="#" id="upgrade">
            <div class="flex w-12 h-12 mb-4 items-center justify-center bg-green-600 group-hover:bg-green-700 rounded-xl">
              <IconDoubleArrowTop/>
            </div>
            <h5 class="block text-sm text-gray-100 mb-2 font-semibold">KNIGHT PRO</h5>
            <p class="block text-xs leading-normal font-semibold text-gray-100">Projekt w budowie. Oczywiście w wolnych chwilach.</p>
          </a>

          <a class="group flex py-5 px-6 items-center bg-gray-600 hover:bg-gray-500 rounded-xl transition duration-200" href="https://github.com/digital-knight1103">
            <div class="flex w-5 h-5 mr-2 items-center justify-center bg-gray-500 group-hover:bg-gray-600 rounded-lg">
              <img src="../assets/github-mark-white.svg" alt="github Logo"></div>
            <span class="text-sm text-gray-100 font-medium">Digital_Knight</span>
            <div class="ml-auto text-gray-400 group-hover:text-gray-300">
              <IconVerticalDots/>
            </div>
          </a>
        </div>
        <!-- FINISH upgrade -->

      </nav>
    </div>
    <div class="bg-gray-600 mx-auto lg:ml-[290px] rounded-lg">
      <RouterView />
    </div>

    <!-- TODO JESZCZE SPRAWDZIC porównać z app -->
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
  font-weight: 600;
}

#upgrade {
  display: grid;
}

/* Bez ramki routerlinki
nav a:first-of-type {
  border: 0;
}
*/

</style>