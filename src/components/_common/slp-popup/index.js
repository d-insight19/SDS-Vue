import slpModule from './slpPopUp'
slpModule.install = function install (Vue) {
  Vue.component(slpModule.name, slpModule)
}
export default slpModule
