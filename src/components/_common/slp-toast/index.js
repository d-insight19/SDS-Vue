import slpModule from './slpToast'
slpModule.install = function install (Vue) {
  Vue.component(slpModule.name, slpModule)
}
export default slpModule
