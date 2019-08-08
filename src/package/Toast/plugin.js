import Toast from './toast'
export default {
  install (Vue, options) {
    Vue.prototype.$toast = (options) => {
      let propsData = typeof options === 'string' ? { message: options } : options;
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({ propsData })
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
