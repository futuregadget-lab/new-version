import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/HomePage'

import BBSPage from '@/components/BBSPage'
import BBSComments from '@/components/BBSPage/BBSComments'
import BBSAdmin from '@/components/BBSPage/BBSAdmin'

import AboutPage from '@/components/AboutPage'
import RoadPage from '@/components/AboutPage/RoadPage'
import LabmenPage from '@/components/AboutPage/LabmenPage'
import StrengthPage from '@/components/AboutPage/StrengthPage'
import SitePage from '@/components/AboutPage/SitePage'

import GadgetsPage from '@/components/GadgetsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/about',
      component: AboutPage,
      children: [
        { path: '', component: RoadPage },
        { path: 'labmen', component: LabmenPage },
        { path: 'strength', component: StrengthPage },
        { path: 'site', component: SitePage }
      ]
    }, {
      path: '/gadgets',
      name: 'GadgetsPage',
      component: GadgetsPage
    }, {
      path: '/bbs',
      component: BBSPage,
      children: [
        { path: '', component: BBSComments },
        { path: 'admin', component: BBSAdmin }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return (!savedPosition) ? { x: 0, y: 0 } : savedPosition
  }
})
