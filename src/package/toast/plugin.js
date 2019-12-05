import Toast from './toast'
let currToast
let multiple
export default {
  install (Vue, options) {
    Vue.prototype.$toast = (options) => {
      !multiple && currToast && currToast.remove();
      currToast = createToast(Vue, options);
    }
    Vue.prototype.$toast.allowMultiple = (value = true) => {
      multiple = value;
    };
  }
}

/** helper function */
function createToast (Vue, options) {
  let propsData = typeof options === 'string' ? { message: options } : options;
  let Constructor = Vue.extend(Toast)
  let toast =  new Constructor({ propsData })
  toast.$mount()
  document.body.appendChild(toast.$el)

  return toast
}