<template>
<div class=""> 
  <div>
    <nav class="lg:hidden flex items-center justify-between p-8 bg-gray-700 mb-3">
      <div class="w-full xl:w-auto px-2 xl:mr-12">
        <div class="flex items-center justify-between">
          <!-- <RouterLink 
            to="/"
            class="inline-flex items-center h-8"
          >
            <img src="../assets/htmlknight.svg" alt="knight vue logo">
          </RouterLink> -->
          <a class="inline-flex items-center h-8" href="/">
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
          <!-- <RouterLink 
          to="/"
          class="inline-flex items-center h-8"
          >
            <img class="h-20" src="../assets/htmlknight.svg" alt="logo knight vue">
          </RouterLink> -->

          <a class="flex justify-center mb-4" href="/">
            <img class="h-20" src="../assets/htmlknight.svg" alt="logo knight vue">
          </a>

          <ul class="mb-8">
            <!-- Intro -->
            <!-- <li class="mb-2">
              <a class="flex items-center p-4 text-white bg-green-500 rounded-xl" href="home">
                <IconOverview />
                <span class="ml-8 text-sm font-semibold">Wstęp</span>
              </a>
            </li> -->

            <li class="mb-2">
              <RouterLink to='/introduction' class="flex items-center p-4 text-white bg-green-500 rounded-xl">
                <IconOverview />
                <span class="ml-8 text-sm font-semibold">Wstęp</span>
              </RouterLink>
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

            <!-- Ref/Reactive -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="ref">
                <IconRef />
                <span class="ml-8 font-bold">
                  Ref / Reactive
                </span>
              </RouterLink>
            </li>

            <!-- Computed -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="computed">
                <IconComputed />
                <span class="ml-8 font-bold">
                  Computed
                </span>
              </RouterLink>
            </li>

            <!-- watch -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="watch">
                <IconWatch />
                <span class="ml-8 font-bold">
                  Watch
                </span>
              </RouterLink>
            </li>

            <!-- conditional rendering -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="if">
                <IconIf />
                <span class="ml-8 font-bold">
                  Conditional rendering
                </span>
              </RouterLink>
            </li>

            <!-- Props/Emits -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="propsemits">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Props / Emits
                </span>
              </RouterLink>
            </li>

            <!-- Events -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="events">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z" fill="currentColor" data-path="0.0.2.0.1.0.0"/>
                </svg>
                <span class="ml-8 font-bold">
                  Eventy
                </span>
              </RouterLink>
            </li>

            <!-- v-model -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="vmodel">
                <IconUser/>
                <span class="ml-8 font-bold">
                  v-model
                </span>
              </RouterLink>
            </li>

            <!-- formularze -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="forms">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z" fill="currentColor" data-path="0.0.2.0.0.0.0"/>
                </svg>
                <span class="ml-8 font-bold">
                  Formularze
                </span>
              </RouterLink>
            </li>

            <!-- class/styles -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="styles">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Klasy i style
                </span>
              </RouterLink>
            </li>

            <!-- sloty -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="slots">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Sloty
                </span>
              </RouterLink>
            </li>

            <!-- provides/inject -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="provideinject">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Provides/Inject
                </span>
              </RouterLink>
            </li>

            <!-- lifecycle Hooks -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="lifecyclehooks">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Cykl życia (Hooks)
                </span>
              </RouterLink>
            </li>

            <!-- composables -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="composables">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Composables
                </span>
              </RouterLink>
            </li>

            <!-- Dynamic Component -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="dynamic">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Dynamic Component
                </span>
              </RouterLink>
            </li>

            <!-- TESTOWA -->
            <li class="mb-8">
              <RouterLink class='text-green-300 hover:bg-gray-800 rounded-xl' to="test">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Test
                </span>
              </RouterLink>
            </li>

            <div class="border-green-500 opacity-60 border-t-[1px] relative mb-10">
              <span class="absolute text-[12px] font-bold">Dodatki</span>
            </div>

            <!-- Routing -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="routing">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Routing
                </span>
              </RouterLink>
            </li>

            <!-- state -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="pinia">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Pinia (state)
                </span>
              </RouterLink>
            </li>

            <!-- state -->
            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="firebase">
                <IconUser/>
                <span class="ml-8 font-bold">
                  Firebase
                </span>
              </RouterLink>
            </li>

            <li class="mb-2">
              <RouterLink class='text-gray-300 hover:bg-gray-800 rounded-xl' to="vueuse">
                <IconUser/>
                <span class="ml-8 font-bold">
                  VueUse
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

        <div class="border-green-500 opacity-60 border-t-[1px] relative mb-6">
          <span class="absolute text-[12px] font-bold">Ustawienia</span>
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

          <TimerVisit/>
        </div>
        <!-- FINISH upgrade -->

      </nav>
    </div>

    <div class="mx-auto lg:ml-[290px] rounded-lg mt-8">
      <RouterView v-slot="{ Component }">
        <!-- ref value name -->
        <Transition :name="anim" mode="out-in">
          <Component :is="Component"/>
        </Transition>
      </RouterView>
    </div>
  
    <!-- TODO JESZCZE SPRAWDZIC porównać z app -->
    <!-- <RouterView /> -->
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconRef from '../assets/icons/IconRef.vue'
import IconComputed from '../assets/icons/IconComputed.vue'
import IconWatch from '../assets/icons/IconWatch.vue'
import IconIf from '../assets/icons/IconIf.vue'
import IconOverview from '../assets/icons/IconOverview.vue'
import IconBurger from '../assets/icons/IconBurger.vue'
import IconAnalitics from '../assets/icons/IconAnalitics.vue'
import IconOrder from '../assets/icons/IconOrder.vue'
import IconUser from '../assets/icons/IconUser.vue'
import IconSetting from '../assets/icons/IconSetting.vue'
import IconLogout from '../assets/icons/IconLogout.vue'
import IconArrowDown from '../assets/icons/IconArrowDown.vue'
import IconSuitcase from '../assets/icons/IconSuitcase.vue'
import IconVerticalDots from '../assets/icons/IconVerticalDots.vue'
import IconDoubleArrowTop from '../assets/icons/IconDoubleArrowTop.vue'
import TimerVisit from '../components/atoms/TimerVisit/TimerVisit.vue'

    const anim = ref('fade')

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

nav a:first-of-type {
  border: 8px;
}

/* Fade animation */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

/* Slide animation */
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease;
}

/* Slide-down animation */
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(300px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: 0.3s ease;
}

/* Grow-in animation */
.grow-in-enter-from,
.grow-in-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.grow-in-enter-active,
.grow-in-leave-active {
  transition: 0.3s ease;
}

/* Grow-out animation */
.grow-out-enter-from,
.grow-out-leave-to {
  opacity: 0;
  transform: scale(1.5);
}

.grow-out-enter-active,
.grow-out-leave-active {
  transition: 0.3s ease;
}

</style>