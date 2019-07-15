import Notification from "./notification";

let messageInstance;

function getMessageInstance () {
  return messageInstance = messageInstance || Notification.newInstance();
}

function notice({ duration = 3, content = '', type = 'info'}) {
  let instance = getMessageInstance();

  instance.add({
    content,
    duration,
    type,
  })
}

export default {
  info (options) {
    return notice(Object.assign(options, { type: 'info'}));
  },
  success (options) {
    return notice(Object.assign(options, { type: 'success'}));
  },
  error (options) {
    return notice(Object.assign(options, { type: 'error'}));
  },
  warning (options) {
    return notice(Object.assign(options, { type: 'warning'}));
  },
}