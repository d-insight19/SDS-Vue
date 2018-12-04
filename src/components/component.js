import * as components from './_common'

const slpui = {
  install (Vue, options) {
    Object.values(components).forEach(function (component) {
      Vue.use(component)
    })
  }
}

export default slpui
