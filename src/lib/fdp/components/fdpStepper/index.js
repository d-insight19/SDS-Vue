import fdpStepper from './fdpStepper'
import fdpStep from './fdpStep'
const components = {
  fdpStepper,
  fdpStep
}
fdpStepper.install = function install (Vue) {
  for (let component in components) {
    Vue.component(component, components[component])
  }
}
export default fdpStepper
