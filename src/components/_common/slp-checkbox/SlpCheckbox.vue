<template>
  <label
    :for="id"
    :class="{ '-slp-checkbox--disabled' : disabled}"
    :disabled="disabled"
    class="labelChk">
    <input
      :id="id"
      :name="id"
      :disabled="disabled"
      type="checkbox"
      class="chk"
      @click="onClick()">
    <span class="ico"/>
    <span
      v-if="!!Object.keys($slots).length"
      class="label"><slot/></span>
  </label>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SlpCheckbox',
  model: {
    prop: 'checked'
  },
  props: {
    id: [String],
    checked: [Number, Boolean, String, Array],
    value: {
      type: [Number, String, Boolean, Array, Object],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      strTypeClicked: false
    }
  },
  computed: {
    clicked () {
      if (typeof (this.value) === 'boolean') {
        if (typeof (this.checked) === 'boolean') {
          return this.checked
        } else {
          return this.checked === 'Y'
        }
      } else if (typeof (this.value) === 'number' && typeof (this.checked) !== 'object') {
        return this.checked
      } else {
        if (typeof (this.checked) === 'object') {
          return (this.checked.indexOf(this.value) >= 0)
        } else {
          return this.strTypeClicked
        }
      }
    }
  },
  methods: {
    onClick () {
      if (typeof (this.value) === 'boolean') {
        if (typeof (this.checked) === 'boolean') {
          this.$emit('input', !this.checked)
        } else {
          this.$emit('input', this.checked === 'Y' ? 'N' : 'Y')
        }
      } else {
        if (typeof (this.checked) === 'object') {
          if (this.checked.indexOf(this.value) >= 0) {
            this.$emit('input', this.checked.filter(item => item !== this.value))
          } else {
            this.$emit('input', this.checked.concat(this.value))
          }
        } else {
          this.$emit('input', this.strTypeClicked ? '' : this.value)
          this.strTypeClicked = !this.strTypeClicked
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
