import Toast from './toast'
export default {
  install (Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          closeButton: toastOptions.closeButton
        }
      })
      toast.$slots.default = [ message ]
      toast.$mount()

      document.body.appendChild(toast.$el)
    }
  }
}
