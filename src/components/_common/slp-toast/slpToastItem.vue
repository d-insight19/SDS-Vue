<template>
  <transition name="-slp-toast-item-fade">
    <div
      v-show="visible"
      class="-slp-toast-item">
      <p class="-slp-toast-item__content">{{ content }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SlpToastItem',
  props: {
    value: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: null
    },
    duration: {
      type: Number,
      default: 3500
    }
  },
  data () {
    return {
      visible: this.value,
      message: this.content,
      localDuration: this.duration,
      timer: null,
      destroyTimer: null
    }
  },
  mounted () {
    this.startTimer()
  },
  methods: {
    startTimer () {
      if (this.localDuration > 0) {
        let _this = this
        this.timer = setTimeout(() => {
          _this.visible = false
          this.destroyElement()
        }, this.localDuration)
      }
    },
    destroyElement () {
      let _this = this
      this.destroyTimer = setTimeout(() => {
        _this.$emit('change', _this._uid)
      }, 500)

      this.$emit('isDestroyed')
    }
  }
}
</script>
