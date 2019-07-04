import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'

import button from '@/package/button/demo'
import input from '@/package/input/demo'

import icon from '@/package/icon/demo'
import toast from '@/package/toast/demo'
import grid from '@/package/Grid/demo'
import pager from '@/package/pager/demo'
import collapse from '@/package/collapse/demo'

import sticky from "@/package/sticky/demo";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: '/button',
          name: 'button',
          component: button,
        },
        {
          path: '/input',
          name: 'input',
          component: input,
        },
        {
          path: '/icon',
          name: 'icon',
          component: icon,
        },
        {
          path: '/toast',
          name: 'toast',
          component: toast,
        },
        {
          path: '/pager',
          name: 'pager',
          component: pager,
        },
        {
          path: '/grid',
          name: 'grid',
          component: grid,
        },
        {
          path: '/collapse',
          name: 'collapse',
          component: collapse,
        },
        {
          path: '/sticky',
          name: 'sticky',
          component: sticky,
        },
      ]
    }
  ]
})
