/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueECharts from 'vue-echarts' //注册图表

import '../.vuepress/public/css/index.css'

import Amessage from "../../src/package/message/alert";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(VueHighlightJS)
  Vue.use(Element)

  Vue.prototype.$message = Amessage;
  // Vue.component('chart', VueECharts)
}