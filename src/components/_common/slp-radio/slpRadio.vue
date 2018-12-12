<template>
  <label
    ref="label"
    :class="{ '-slp-radio--disabled' : disabled}"
    :disabled="disabled"
    :tabindex="disabled ? false : 0"
    class="labelRdo"
    @keydown.prevent.enter.space="$refs.label.click()">
    <input
      v-model="computedValue"
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="nativeValue"
      type="radio"
      class="rdo">
    <span class="ico"/>
    <span class="label"><slot/></span>
  </label>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'SlpRadio',
  props: {
    value: [String, Number, Boolean, Function, Object, Array, Symbol],
    nativeValue: [String, Number, Boolean, Function, Object, Array, Symbol],
    type: String,
    disabled: Boolean,
    required: Boolean,
    name: String,
    size: String
  },
  data () {
    return {
      newValue: this.value
    }
  },
  computed: {
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
    /**
     * When v-model change, set internal value.
     */
    value (value) {
      this.newValue = value
    }
  }
}
</script>

<style scoped>
</style>
