// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import toast from '@/package/toast/plugin'

// import button from "@/package/button/button";
// import buttonGroup from "@/package/button/button-group";

// import AIcon from "@/package/icon/icon";

// import AInput from '@/package/input/input'

// import ACollapse from "@/package/collapse/ACollapse";
// import ACollapsePanel from "@/package/collapse/ACollapsePanel";

// import col from "@/package/grid/col";
// import row from "@/package/grid/row";

// import Pager from "@/package/pager/Pager";

// import sticky from '@/package/sticky/sticky'

// Vue.components(button, 'button');
// Vue.components(buttonGroup, 'buttonGroup');

// Vue.components(AIcon, 'AIcon');

// Vue.components(AInput, 'AInput');

// Vue.components(ACollapse, 'ACollapse');
// Vue.components(ACollapsePanel, 'ACollapsePanel');

// Vue.components(col, 'col');
// Vue.components(row, 'row');

// Vue.components(Pager, 'Pager');

// Vue.components(sticky, 'sticky');

Vue.use(toast)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
