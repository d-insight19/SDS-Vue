import slpDropdown from './SlpDropdown'
import slpDropdownItem from './SlpDropdownItem'

const Plugin = {
  install (Vue) {
    Vue.component(slpDropdown.name, slpDropdown)
    Vue.component(slpDropdownItem.name, slpDropdownItem)
  }
}

export default Plugin

export {slpDropdown, slpDropdownItem}
