<template>
    <fdp-modal v-model="isModalShow"
               :prevent-outside-close="preventOutsideClose"
               modal-type="popup">
      <div class="-fdp-popup__wrapper">
        <div class="-fdp-popup__title-area">
          <h1 class="-fdp-popup__title">{{title}}</h1>
          <div class="-fdp-popup__close">
            <button class="-fdp-popup__close-button" @click="onClose"></button>
          </div>
        </div>
        <slot></slot>
      </div>
    </fdp-modal>
</template>

<script>
export default {
  name: 'fdp-popup',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    preventOutsideClose: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isModalShow: this.value
    }
  },
  watch: {
    isModalShow (newValue) {
      this.$emit('input', newValue)
    },
    value () {
      this.isModalShow = this.value
    }
  },
  methods: {
    onClose () {
      this.$emit('input', false)
    }
  }
}
</script>

<style>

</style>
