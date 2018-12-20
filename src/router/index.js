import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cuts from '@/components/Cuts'
import Barbers from '@/components/Barbers'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cuts',
      name: 'Cuts',
      component: Cuts
    },
    {
      path: '/barbers',
      name: 'Barbers',
      component: Barbers
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
