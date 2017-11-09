import Vue from 'vue'
import ToastComponent from './toast'

let ToastConstructor = Vue.extend(ToastComponent)
let toastPool = {}

// init toast instance
let initInstance = () => {
  let instance = new ToastConstructor({
    el: document.createElement('div')
  })
  document.body.appendChild(instance.$el)
  return instance
}

let notice = (options, msgType) => {
  let instance = initInstance()
  let toastId = new Date().getTime()
  toastPool[toastId] = instance

  let msgInfo = {
    msg: '正在加载中...',
    type: 'success',
    id: toastId
  }
  let duration = 2000

  if (typeof options === 'string') {
    msgInfo.msg = options
  } else {
    msgInfo.msg = options.content
    duration = options.duration
  }

  if (msgType) {
    msgInfo.type = msgType
  }
  instance.msgInfo = msgInfo

  if (msgType !== 'loading') {
    setTimeout(() => {
      document.body.removeChild(instance.$el)
    }, duration)
  }
  return toastId
}

export default {
  name: 'Toast',
  success(options) {
    return notice(options, 'success')
  },
  error(options) {
    return notice(options, 'error')
  },
  loading(options) {
    return notice(options, 'loading')
  },
  closeLoading(id) {
    document.body.removeChild(document.getElementById(id))
  }
}
