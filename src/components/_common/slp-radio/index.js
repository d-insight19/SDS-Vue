import slpModule from './slpRadio'
slpModule.install = function install (Vue) {
  Vue.component(slpModule.name, slpModule)
}
export default slpModule
