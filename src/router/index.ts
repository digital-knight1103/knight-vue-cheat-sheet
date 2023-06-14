import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Main 
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/introduction',
      name: 'introduction',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/IntroductionView.vue')
    },
    {
      path: '/compositionAPI',
      name: 'compositionAPI',
      component: () => import('../views/CompositionView.vue'),
    },
    {
      path: '/atomicdesign',
      name: 'atomicdesign',
      component: () => import('../views/AtomicDesignView.vue'),
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/ComponentsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    // Knowledge
    {
      path: '/tabs',
      name: 'tabs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TabsView.vue')
    },
    {
      path: '/avatar',
      name: 'avatar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TheAvatarView.vue')
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TestView.vue')
    },
    // Knowleadge Parts
    {
      path: '/propsemits',
      name: 'propsemits',
      component: () => import('../views/PropsEmitsView.vue')
    },
    {
      path: '/ref',
      name: 'ref',
      component: () => import('../views/RefView.vue')
    },
    {
      path: '/Computed',
      name: 'Computed',
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/WatchView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/vmodel',
      name: 'vmodel',
      component: () => import('../views/V-ModelView.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('../views/FormsView.vue')
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('../views/SlotsView.vue')
    },
    {
      path: '/provideinject',
      name: 'provideinject',
      component: () => import('../views/ProvideAndInjectView.vue')
    },
    {
      path: '/lifecyclehooks',
      name: 'lifecyclehooks',
      component: () => import('../views/LifecycleHooksView.vue')
    },
    {
      path: '/styles',
      name: 'styles',
      component: () => import('../views/ClassAndStylesView.vue')
    },
    {
      path: '/composables',
      name: 'composables',
      component: () => import('../views/ComposablesView.vue')
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: () => import('../views/DynamicComponentView.vue')
    },
    // extras
    {
      path: '/typescript',
      name: 'typescript',
      component: () => import('../views/TypeScriptView.vue')
    },
    {
      path: '/routing',
      name: 'routing',
      component: () => import('../views/RoutingView.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/PiniaView.vue')
    },
    {
      path: '/firebase',
      name: 'firebase',
      component: () => import('../views/FirebaseView.vue')
    },
    {
      path: '/vueuse',
      name: 'vueuse',
      component: () => import('../views/VueUseView.vue')
    },
  ]
})

export default router
