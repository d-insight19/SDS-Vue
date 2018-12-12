<template>
  <label
    ref="label"
    :disabled="disabled"
    :tabindex="disabled ? false : 0"
    :class="classObject"
    class="labelBtn"
    @keydown.prevent.enter.space="$refs.label.click()"
    @mousedown="isMouseDown = true"
    @mouseup="isMouseDown = false"
    @mouseout="isMouseDown = false"
    @blur="isMouseDown = false">
    <input
      v-model="computedValue"
      :disabled="disabled"
      :name="name"
      :value="nativeValue"
      :true-value="trueValue"
      :false-value="falseValue"
      type="checkbox"
      class="chk"
      @click.stop>
    <div class="chk_box">
      <span class="ball"/>
      <ul class="txt">
        <li class="m1"/>
        <li class="m2"/>
      </ul>
    </div>
  </label>
</template>

<script>
export default {
  name: 'SlpSwitch',
  props: {
    value: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol],
      default: null
    },
    nativeValue: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol],
      default: false
    },
    classObject: {
      type: Object,
      default: () => {
        return {
          'fr': false
        }
      }
    }
  },
  data () {
    return {
      newValue: this.value,
      isMouseDown: false
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
    value (value) {
      this.newValue = value
    }
  }
}
</script>

<style scoped>
</style>
