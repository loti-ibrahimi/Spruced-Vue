import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cuts from '@/components/Cuts'
import Barbers from '@/components/Barbers'
import Cut from '@/components/Cut'
import Barber from '@/components/Barber'
import About from '@/components/About'
import Contact from '@/components/Contact'
import EditCut from '@/components/EditCut'

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
    },
    {
      path: '/cut',
      name: 'Cut',
      component: Cut
    },
    {
      path: '/barber',
      name: 'Barber',
      component: Barber
    },
    {
      path: '/edit',
      name: 'EditCut',
      component: EditCut,
      props: true
    }
  ]
})
