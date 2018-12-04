<script>
export default {
  name: 'fdp-slider',
  props: {
    // v-model data comes into props.value and then copied to computed.val
    value: {
      type: [String, Number, Array, Object],
      default: 0
    },

    // common config
    vertical: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },

    // bar
    barLength: {
      type: [Number, String],
      default: ''
    },
    barThickness: {
      type: Number,
      default: 6
    },
    barColor: {
      type: String,
      default: ''
    },

    // progress bar
    progressColor: {
      type: String,
      default: ''
    },

    // handle
    handleColor: {
      // default handle color
      type: String,
      default: ''
    },

    // tooltip
    tooltipDirection: {
      type: String,
      default: 'top'
    },
    tooltipColor: {
      // default tooltip color
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      flagDrag: false,
      flagRange: false,
      initX: 0,
      initY: 0,
      initV: 0,
      offsetHeight: 0,
      offsetWidth: 0,
      p: 0
    }
  },
  watch: {
  },
  computed: {
    // v-model data control
    val: {
      get () {
        return this.value
      },
      set (val) {
        if (this.range) {
          var idx = this.flagRange ? 1 : 0
          val[idx] = Math.round((val[idx] - this.min) / this.step) * this.step
          if (val[idx] < this.min) val[idx] = this.min
          if (val[idx] > this.max) val[idx] = this.max

          if (val[0] > val[1]) {
            val[(idx + 1) % 2] = val[idx]
          }
        } else {
          val = Math.round((val - this.min) / this.step) * this.step
          if (val > this.max) val = this.max
          if (val < this.min) val = this.min
        }
        this.$emit('input', val)
      }
    },

    // calculate handle position
    px_per_val () {
      return ((this.vertical ? this.offsetHeight : this.offsetWidth) -
                this.barThickness) / (this.max - this.min)
    },
    pos () {
      if (this.range) {
        return [
          this.val[0] * this.px_per_val + this.barThickness / 2,
          this.val[1] * this.px_per_val + this.barThickness / 2
        ]
      } else {
        return this.val * this.px_per_val + this.barThickness / 2
      }
    }
  },
  methods: {
    // Settings
    bindEvents () {
      document.addEventListener('mouseup', this.moveEnd)
      window.addEventListener('resize', this.resize)
    },
    unbindEvents () {
      document.removeEventListener('mouseup', this.moveEnd)
      window.removeEventListener('resize', this.resize)
    },
    updateOffset () {
      this.offsetHeight = this.$refs.bar.offsetHeight
      this.offsetWidth = this.$refs.bar.offsetWidth
      this.p = (this.$refs.handle.offsetWidth - this.barThickness) / 2
    },

    // Handle control
    setPosition () {
      if (this.range) {
        if (this.vertical) {
          this.$refs.handle.style.top = `${this.pos[0]}px`
          this.$refs.rangeHandle.style.top = `${this.pos[1]}px`
          this.$refs.progress.style.height = `${this.pos[1] - this.pos[0] + this.barThickness}px`
          this.$refs.progress.style.top = `${this.pos[0] - this.barThickness / 2}px`
        } else {
          this.$refs.handle.style.left = `${this.pos[0]}px`
          this.$refs.rangeHandle.style.left = `${this.pos[1]}px`
          this.$refs.progress.style.width = `${this.pos[1] - this.pos[0] + this.barThickness}px`
          this.$refs.progress.style.left = `${this.pos[0] - this.barThickness / 2}px`
        }
      } else {
        if (this.vertical) {
          this.$refs.handle.style.top = `${this.pos}px`
          this.$refs.progress.style.height = `${this.pos + this.barThickness / 2}px`
        } else {
          this.$refs.handle.style.left = `${this.pos}px`
          this.$refs.progress.style.width = `${this.pos + this.barThickness / 2}px`
        }
      }
    },

    // Utils
    convert (prp) {
      return typeof prp === 'number' ? prp + 'px' : prp
    },

    // Event handlers
    moveStart (e) {
      this.flagDrag = true
      this.initV = this.val
      this.initX = e.x
      this.initY = e.y
      document.addEventListener('mousemove', this.moving)
    },
    moveStartRange1 (e) {
      this.flagRange = false
      this.moveStart(e)
    },
    moveStartRange2 (e) {
      this.flagRange = true
      this.moveStart(e)
    },
    moving (e) {
      if (this.range) {
        if (this.vertical) {
          if (this.flagRange) {
            this.val = [this.val[0], this.initV[1] + (e.y - this.initY) / this.px_per_val]
          } else {
            this.val = [this.initV[0] + (e.y - this.initY) / this.px_per_val, this.val[1]]
          }
        } else {
          if (this.flagRange) {
            this.val = [this.val[0], this.initV[1] + (e.x - this.initX) / this.px_per_val]
          } else {
            this.val = [this.initV[0] + (e.x - this.initX) / this.px_per_val, this.val[1]]
          }
        }
      } else {
        if (this.vertical) {
          this.val = this.initV + (e.y - this.initY) / this.px_per_val
        } else {
          this.val = this.initV + (e.x - this.initX) / this.px_per_val
        }
      }
      this.setPosition()
    },
    // moving: _fdpLodash.throttle(function(e) {
    //     this.val = this.initV + (e.x - this.initX) / this.px_per_val;
    //     this.setPosition();
    // },50),
    moveEnd (e) {
      this.setPosition()
      if (this.flagDrag) {
        document.removeEventListener('mousemove', this.moving)
      }
    },
    resize (e) {
      this.updateOffset()
      this.setPosition()
    }
  },
  mounted () {
    if (this.range && typeof this.value === 'number') {
      this.val = [0, this.value]
    }
    this.bindEvents()
    this.p = (this.$refs.handle.offsetWidth - this.barThickness) / 2

    this.$nextTick(() => {
      this.updateOffset()
      this.setPosition()
    })
  },
  render: function (h) {
    var vnodes = []

    const defaultHandle = h('div', {
      'class': '-fdp-slider__handle-default',
      style: {
        width: this.convert(this.barThickness + 12),
        height: this.convert(this.barThickness + 12),
        backgroundColor: this.handleColor
      }
    })
    const defaultTooltip = (v) => h('div', {
      'class': '-fdp-slider__tooltip-default',
      style: {
        backgroundColor: this.tooltipColor,
        borderColor: this.tooltipColor
      }
    }, [this.range ? this.val[v] : this.val])
    const tooltip = (v) => h('div', {
      ref: 'tooltip',
      'class': [
        '-fdp-slider__tooltip',
        `-fdp-slider__tooltip--${this.tooltipDirection}`
      ]
    }, [(v ? this.$slots.rangeTooltip : this.$slots.tooltip) || defaultTooltip(v)])

    vnodes.push(
      h('div', {
        ref: 'progress',
        'class': '-fdp-slider__progress',
        style: {
          padding: this.convert(this.barThickness / 2),
          left: this.vertical ? '' : this.convert(0),
          top: this.vertical ? this.convert(0) : '',
          backgroundColor: this.progressColor
        }
      })
    )
    vnodes.push(
      h('div',
        {
          ref: 'handle',
          'class': '-fdp-slider__handle',
          on: {mousedown: this.moveStartRange1}
        },
        [
          tooltip(0),
          this.$slots.handle || defaultHandle
        ])
    )
    if (this.range) {
      vnodes.push(
        h('div',
          {
            ref: 'rangeHandle',
            'class': '-fdp-slider__handle',
            on: {mousedown: this.moveStartRange2}
          },
          [
            tooltip(1),
            this.$slots.rangeHandle || defaultHandle
          ])
      )
    }

    const bar = h('div', {
      ref: 'bar',
      'class': [
        '-fdp-slider__bar'
      ],
      style: {
        padding: this.convert(this.barThickness / 2),
        backgroundColor: this.barColor
      }
    }, vnodes)

    return h('div', {
      'class': [
        '-fdp-slider',
        `-fdp-slider--${this.vertical ? 'vertical' : 'horizontal'}`
      ],
      style: {
        width: this.convert(this.vertical ? this.barThickness : this.barLength),
        height: this.convert(this.vertical ? this.barLength : this.barThickness),
        padding: this.convert(this.p)
      }
    }, [bar])
  },
  beforeDestroy () {
    this.unbindEvents()
  }
}
</script>

<style>
</style>
