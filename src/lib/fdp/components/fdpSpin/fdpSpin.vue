<template>
  <div class="-fdp-spin">
    <button type="button" class="-fdp-spin__button -fdp-spin--minus" @click="onStep('minus')" :disabled="localValue===min">-</button>
    <input type="number" class="-fdp-spin__input" :value="localValue"
           @input="onInput" @blur="onBlur" ref="spinInput" :readonly="readonly">
    <button type="button" class="-fdp-spin__button -fdp-spin--plus" @click="onStep('plus')" :disabled="localValue===max">+</button>
  </div>
</template>

<script>
export default {
  name: 'fdp-spin',
  props: {
    value: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 1000
    },
    min: {
      type: Number,
      default: 0
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      localValue: this.value
    }
  },
  mounted () {
    this.localValue = this.checkNumber(this.value)
  },
  watch: {
    localValue (newValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    onInput (param) {
      this.localValue = this.checkNumber(param.target.value)
    },
    onBlur () {
      if (this.$refs.spinInput.value !== this.localValue) {
        this.$refs.spinInput.value = this.localValue
      }
    },
    checkNumber (targetNum) {
      targetNum = Number(targetNum)
      if (isNaN(targetNum) || targetNum < this.min) {
        targetNum = this.min
      } else if (targetNum > this.max) {
        targetNum = this.max
      }
      return Number(targetNum.toFixed(1))
    },
    onStep (type) {
      if (type === 'plus') {
        this.localValue = this.checkNumber(this.localValue + this.step)
      } else {
        this.localValue = this.checkNumber(this.localValue - this.step)
      }
    }
  }

}
</script>

<style>

</style>
