<template>
  <label
    ref="label"
    :disabled="disabled"
    :class="labelClass"
    @keydown.prevent.enter.space="$refs.label.click()">
    <input
      v-model="computedValue"
      :disabled="disabled"
      type="checkbox"
      class="chk">
    <span
      v-if="type === 'check'"
      class="ico"/>
    <span
      v-if="!!Object.keys($slots).length"
      class="label"><slot/></span>
  </label>
</template>

<script>
export default {
  name: 'SlpCheckbox',
  props: {
    value: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'check'
    }
  },
  data () {
    return {
      newValue: this.value
    }
  },
  computed: {
    labelClass () {
      if (this.type === 'button') {
        return 'labelChk2'
      } else {
        return 'labelChk'
      }
    },
    computedValue: {
      get () {
        return this.newValue
      },
      set (value) {
        this.newValue = value
        this.$emit('input', value)
      }
    }
  },
  watch: {
    value (value) {
      this.newValue = value
    }
  }
}
</script>

<style scoped>
</style>
