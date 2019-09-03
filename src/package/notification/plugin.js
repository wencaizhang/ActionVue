import notification from "./main";

export default {
  install (Vue, options) {
    Vue.prototype.$notify = () => {
      createInstance(Vue, options)
    }
  }
}

function createInstance (Vue, options) {

  let Ctrl = Vue.extend(notification);
  let notice = new Ctrl()

  notice.$mount();
  document.body.appendChild(notice.$el);
}