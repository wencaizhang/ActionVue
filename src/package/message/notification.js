import Message from './main.vue';
import Vue from 'vue';

Message.newInstance = properties => {
  const props = properties || {};

  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Message, {
        props,
      })
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);

  const msg = Instance.$children[0];

  return {
    add (notices) {
      msg.add(notices);
    },
    remove (name) {
      msg.remove(name);
    }
  }
};

export default Message;