import fdpGrid from './fdpGrid'
import fdpGridItem from './fdpGridItem'
export { fdpGrid, fdpGridItem }
fdpGrid.install = function install (Vue) {
  Vue.component(fdpGrid.name, fdpGrid)
  Vue.component(fdpGridItem.name, fdpGridItem)
}
export default fdpGrid
