<template>
    <fdp-modal v-model="isModalShow" :prevent-outside-close="preventOutsideClose">
      <div class="-fdp-confirm">
          <div class="-fdp-confirm__message-wrapper">
              <div class="-fdp-confirm__message">{{ message }}</div>
          </div>
          <div class="-fdp-confirm__button-area">
              <button v-if="!!negativeButtonLabel" type="button" @click="onNegativeBtn"
                      class="-fdp-confirm__button--negative">{{ negativeButtonLabel }}</button>
              <button v-if="!!positiveButtonLabel" type="button" @click="onPositiveBtn"
                      class="-fdp-confirm__button--positive">{{ positiveButtonLabel }}</button>
          </div>
      </div>
    </fdp-modal>
</template>

<script>
export default {
  name: 'fdp-confirm',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
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

<style>

</style>
