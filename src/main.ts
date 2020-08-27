import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from "vue-router"

import Hello from './components/Hello.vue'
import Bar from './components/Bar.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Hello },
    { path: '/bar', component: Bar },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
