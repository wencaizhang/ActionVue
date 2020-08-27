import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from "vue-router"

import Hello from './components/Hello.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Hello }
  ]
})
createApp(App).mount('#app')
