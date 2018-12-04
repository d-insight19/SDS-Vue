<template>
  <slp-modal
    v-model="isModalShow"
    :prevent-outside-close="preventOutsideClose">
    <div class="-slp-confirm">
      <div class="-slp-confirm__title-area">
        <h1 class="-slp-confirm__title">{{ title }}</h1>
      </div>
      <div class="-slp-confirm__contents-wrapper">
        <div class="-slp-confirm__message-wrapper">
          <div class="-slp-confirm__message">{{ message }}</div>
        </div>

        <div class="-slp-confirm__info-wrapper">
          <slot name="info"/>
        </div>

      </div>
      <div
        class="-slp-confirm__button-area">
        <button
          v-if="!!negativeButtonLabel"
          type="button"
          class="-slp-confirm__button--negative"
          @click="onNegativeBtn">{{ negativeButtonLabel }}</button>
        <button
          v-if="!!positiveButtonLabel"
          type="button"
          class="-slp-confirm__button--positive"
          @click="onPositiveBtn">{{ positiveButtonLabel }}</button>
      </div>
    </div>
  </slp-modal>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SlpConfirm',
  props: {
    title: {
      type: String,
      default: null
    },
    value: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: null
    },
    positiveButtonLabel: {
      type: String,
      default: null
    },
    negativeButtonLabel: {
      type: String,
      default: null
    },
    preventOutsideClose: {
      type: Boolean,
      default: false
    },
    custom: {
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
    onNegativeBtn () {
      this.$emit('input', false)
      this.$emit('on-negative')
    },
    onPositiveBtn () {
      this.$emit('input', false)
      this.$emit('on-positive')
    }
  }
}
</script>
