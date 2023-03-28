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
      component: () => import('../views/CompositionView.vue')
    },
    {
      path: '/atomicdesign',
      name: 'atomicdesign',
      component: () => import('../views/AtomicDesignView.vue')
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

  ]
})

export default router
