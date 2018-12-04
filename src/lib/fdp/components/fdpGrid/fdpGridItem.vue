<script>
export default {
  name: 'fdp-grid-item',
  props: {
    x: {default: 0},
    y: {default: 0},
    w: {default: 1},
    h: {default: 1},
    vsize: {default: null},
    zidx: null,
    gap: Number,
    col: Number,
    row: Number,
    clazz: String
  },
  methods: {
    getContents: function () {
      var $CE = this.$createElement
      var zidx = this.zidx
      var args = {}
      args.staticClass = '-fdp-grid__item-cont ' + this.clazz
      var style = args.style = {}
      if (zidx) { style['z-index'] = zidx }
      return $CE('div', args, this.$slots.default)
    }
  },
  render: function ($CE) {
    // 1. prepare variable
    var x = this.x
    var y = this.y
    var w = this.w
    var h = this.h
    var col = this.col
    var row = this.row
    var gap = this.gap
    var vsize = this.vsize
    var thGap = gap * (col - 1)
    var tvGap = gap * (row - 1)
    var hGap = gap * (w - 1)
    var vGap = gap * (h - 1)

    // 2. build arguments
    var args = {}
    // 2.1 static class
    args.staticClass = '-fdp-grid__item'
    // 2.2 style
    var style = args.style = {}
    style['width'] = 'calc(((100% - ' + thGap + 'px) / ' + col + ') * ' + w + ' + ' + hGap + 'px)'
    if (row === 1 && vsize) {
      style['height'] = ((vsize + gap) * h - gap) + 'px'
    } else {
      style['height'] = 'calc(((100% - ' + tvGap + 'px) / ' + row + ') * ' + h + ' + ' + vGap + 'px)'
    }
    style['left'] = 'calc((100% - ' + thGap + 'px)' + ' * ' + x + ' / ' + col + ' + ' + (gap * x) + 'px)'
    if (row === 1 && vsize) {
      style['top'] = ((vsize + gap) * y) + 'px'
    } else {
      style['top'] = 'calc((100% - ' + tvGap + 'px)' + ' * ' + y + ' / ' + row + ' + ' + (gap * y) + 'px)'
    }
    // 2.3 on?!
    args.on = this.$listeners

    return $CE('div', args, [this.getContents()])
  }

}
</script>

<style>
</style>
