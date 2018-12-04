import slpModule from './slpLineChart'
slpModule.install = function install (Vue) {
  Vue.component(slpModule.name, slpModule)
}
export default slpModule
