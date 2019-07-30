/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueECharts from 'vue-echarts' //注册图表

import '../.vuepress/public/css/index.css'

import Amessage     from '../../src/package/message/message';
import AToast       from '../../src/package/toast/plugin';
import AButton      from '../../src/package/button/button';
import AButtonGroup from '../../src/package/button/button-group';
import ASkeleton    from '../../src/package/skeleton/skeleton';
import ACol         from '../../src/package/Grid/col';
import ARow         from '../../src/package/Grid/row';
import ASticky      from '../../src/package/sticky/sticky'
import APager       from '../../src/package/pager/pager';
import AImage       from '../../src/package/Image/main';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(VueHighlightJS)
  Vue.use(Element)
  
  Vue.use(AToast)
  Vue.component('AButton', AButton);
  Vue.component('AButtonGroup', AButtonGroup);
  Vue.component('ACol', ACol);
  Vue.component('ARow', ARow);
  Vue.component('ASkeleton', ASkeleton);
  Vue.component('ASticky', ASticky);
  Vue.component('APager', APager);
  Vue.component('AImage', AImage);

  Vue.prototype.$message = Amessage;
  // Vue.component('chart', VueECharts)
}