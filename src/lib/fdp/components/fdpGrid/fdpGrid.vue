<script>
// import fdpGridItem from './fdpGridItem'

export default {
  name: 'fdp-grid',
  props: {
    col: {default: 3},
    row: {default: 1},
    gap: {default: 10},
    vsize: null
  },
  data: function () {
    return {

    }
  },
  methods: {
    genItems: function () {
      var items = []
      const length = (this.$slots.default || []).length
      for (let i = 0; i < length; i++) {
        const vnode = this.$slots.default[i]
        if (vnode.componentOptions) {
          switch (vnode.componentOptions.Ctor.options.name) {
            case 'fdp-grid-item':
              var nodeProps = vnode.componentOptions.propsData
              // modify props... (Can I?)
              nodeProps.gap = parseInt(this.gap)
              nodeProps.col = parseInt(this.col)
              nodeProps.row = parseInt(this.row)
              nodeProps.vsize = parseInt(this.vsize)

              items.push(vnode)
              break
            default: // ###. Didn't decided how to controll it, yet.
          }
        } else {
          // ###. items.push(vnode) ???
        }
      }
      return items
    }
  },
  render: function (h) {
    var args = {}
    args.staticClass = '-fdp-grid'
    return h('div', args, this.genItems())
  }
}

</script>

<style>
</style>
