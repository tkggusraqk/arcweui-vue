import Vue from 'vue'
import Msg from './msg.vue'

let MsgConstructor = Vue.extend(Msg)
let msgPool = {}

// init msg instance
let initInstance = () => {
  let instance = new MsgConstructor({
    el: document.createElement('div')
  })
  document.body.appendChild(instance.$el)
  return instance
}

let notice = (options, msgType) => {
  let instance = initInstance()
  let toastId = new Date().getTime()
  let duration = 2000
  msgPool[toastId] = instance

  let msgInfo = {}
  if (typeof options === 'string') {
    msgInfo.msg = options
  } else {
    msgInfo.msg = options.content
    duration = options.duration
  }

  if (msgType) {
    msgInfo.type = msgType
  }
  instance.message = msgInfo

  setTimeout(() => {
    document.body.removeChild(instance.$el)
  }, duration)
}

export default {
  name: 'Msg',
  info(options) {
    return notice(options, 'success')
  },
  error(options) {
    return notice(options, 'error')
  }
}
