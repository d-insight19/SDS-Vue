import Vue from 'vue'
import slpToast from './slpToast'
import Toast from './Toast'

const ToastComponent = {
  show (params) {
    let message
    if (typeof params === 'string') message = params

    const defaultParam = { message }
    const propsData = Object.assign(defaultParam, params)

    // const vm = typeof window !== 'undefined' && window.vue ? window.vue : Vue
    const ToastComponent = Vue.extend(Toast)
    return new ToastComponent({
      el: document.createElement('div'),
      propsData
    })
  }
}

const Plugin = {
  install (Vue) {
    Vue.component(slpToast.name, slpToast)
    Vue.prototype['$toast'] = ToastComponent
  }
}

export default Plugin

export { ToastComponent as Toast }
