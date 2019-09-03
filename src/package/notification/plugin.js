import notification from "./main";

let instance;
export default {
  install (Vue) {
    Vue.prototype.$notify = (options) => {
      let instance = getInstance(Vue)
      instance.add(options);
    }
  }
}

function createInstance (Vue) {
  let Ctrl = Vue.extend(notification);
  let notice = new Ctrl()
  
  notice.$mount();
  document.body.appendChild(notice.$el);
  console.log(notice);
  return notice;
}

function getInstance (Vue) {
  return instance = instance || createInstance(Vue)
}