<template>
  <div class="-fdp-stepper" :class="{'-fdp-stepper--vertical': vertical}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'fdp-stepper',
  props: {
    value: {
      type: Number,
      default: 1
    },
    clickable: {
      type: Boolean,
      default: false
    },
    space: {
      type: Number,
      default: 30
    },
    divider: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentStep: this.value
    }
  },
  created () {
    this.$on('step-click', this.stepClicked)
  },
  watch: {
    value (newValue) {
      this.currentStep = newValue
    }
  },
  methods: {
    stepClicked (step) {
      this.$emit('input', step)
    }
  }
}
</script>

<style>
</style>
