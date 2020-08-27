import { createWebHashHistory, createRouter } from "vue-router"

import Home from './views/Home.vue'
import Docs from './views/Docs.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/docs', component: Docs },
  ]
})
