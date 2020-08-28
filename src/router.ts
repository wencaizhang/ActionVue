import { createWebHashHistory, createRouter } from "vue-router"

import Home from './views/Home.vue'
import Docs from './views/Docs.vue'
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/docs', component: Docs, children: [
      { path: "", component: DocDemo },
      { path: "switch", component: SwitchDemo },
      { path: "button", component: ButtonDemo },
      { path: "dialog", component: DialogDemo },
      { path: "tabs", component: TabsDemo },
    ]},
  ]
})
