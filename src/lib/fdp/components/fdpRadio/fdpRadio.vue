<template>
  <div class="-fdp-radio" :class="{ '-fdp-radio--disabled' : disabled}" @click="onClick">
    <div class="-fdp-radio__icons" :class="{ '-fdp-radio--checked' : this.clicked, '-fdp-radio--unchecked': !this.clicked }"/>
    <div class="-fdp-radio__label"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'fdp-radio',
  model: {
    prop: 'checked'
  },
  props: {
    checked: {
      type: [Boolean, String],
      default: false
    },
    value: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    clicked () {
      return (typeof (this.value) === 'boolean') ? this.checked : (this.checked === this.value)
    }
  },
  methods: {
    onClick: function () {
      this.$emit('input', (typeof (this.value) === 'boolean') ? !this.checked : this.value)
    }
  }
}
</script>

<style>
</style>
