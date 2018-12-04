import slpModule from './slpTextField'
slpModule.install = function install (Vue) {
  Vue.component(slpModule.name, slpModule)
}
export default slpModule
