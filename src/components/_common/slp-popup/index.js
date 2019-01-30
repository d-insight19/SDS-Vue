import slpPopup from './slpPopUp'
import slpModal from './slpModal'

const Plugin = {
  install (Vue) {
    Vue.component(slpPopup.name, slpPopup)
    Vue.component(slpModal.name, slpModal)
  }
}

export default Plugin
