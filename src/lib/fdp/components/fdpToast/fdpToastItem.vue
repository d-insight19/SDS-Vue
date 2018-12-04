<template>
  <transition name="-fdp-toast-item-fade">
    <div v-show="visible" class="-fdp-toast-item">
        <p class="-fdp-toast-item__content">{{ content }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'fdp-toast-item',
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
      default: 3000
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
    }
  }
}
</script>

<style>

</style>
