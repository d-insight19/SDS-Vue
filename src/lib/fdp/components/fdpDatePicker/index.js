import fdpModule from './fdpDatePicker'
fdpModule.install = function install (Vue) {
  Vue.component(fdpModule.name, fdpModule)
}
export default fdpModule
