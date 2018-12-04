<template>
  <slp-modal
    v-model="isModalShow"
    :prevent-outside-close="preventOutsideClose"
    modal-type="popup">
    <div class="-slp-popup__wrapper">
      <div class="-slp-popup__title-area">
        <h1 class="-slp-popup__title">{{ title }}</h1>
        <slot/>
      </div>
      <div
        class="-slp-popup__close">
        <button
          v-if="!!closeInput"
          class="-slp-popup__close-button"
          @click="onClose">{{ closeInput }}</button>
      </div>
    </div>
  </slp-modal>
</template>

<script>
export default {
  name: 'SlpPopup',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    preventOutsideClose: {
      type: Boolean,
      default: false
    },
    closeInput: {
      type: String,
      default: null
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
