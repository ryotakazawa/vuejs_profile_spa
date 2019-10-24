import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '../components/Top.vue'
import Profile from '../components/Profile.vue'
import Works from '../components/Works.vue'
import Skills from '../components/Skills.vue'
import Contact from '../components/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Profile
  },
  {
    path: '/works',
    name: 'works',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Works
  },
  {
    path: '/skills',
    name: 'skills',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Skills
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Contact
  },{
    path: '*',
    redirect: '/'
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) { 
    if (savedPosition) {
      return savedPosition
    } 
    if (to.hash){
      return { 
        selector: to.hash
       };
    }
    return { x: 0, y: 0 };
  }
})

export default router
