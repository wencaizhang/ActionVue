import Alert from './main.vue';
import Vue from 'vue';

Alert.newInstance = properties => {
  const props = properties || {};

  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Alert, {
        props,
      })
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);

  const alert = Instance.$children[0];

  return {
    add (notices) {
      alert.add(notices);
    },
    remove (name) {
      alert.remove(name);
    }
  }
};

export default Alert;