import fdpValidator from './fdpValidator'
import fdpFormWrapper from './fdpFormWrapper'
const components = {
  fdpValidator,
  fdpFormWrapper
}

fdpValidator.install = function install (Vue) {
  for (let component in components) {
    Vue.component(component, components[component])
  }
}
export default fdpValidator
