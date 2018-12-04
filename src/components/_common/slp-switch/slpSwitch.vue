<template>
  <label
    ref="label"
    :class="[classObject, { '-slp-switch--disabled': disabled }]"
    :disabled="disabled"
    :tabindex="disabled ? false : 0"
    class="labelBtn"
    @keydown.prevent.enter.space="$refs.label.click()"
    @mousedown="isMouseDown = true"
    @mouseup="isMouseDown = false"
    @mouseout="isMouseDown = false"
    @blur="isMouseDown = false">
    <input
      v-model="newValue"
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
    value: [String, Number, Boolean, Function, Object, Array, Symbol],
    nativeValue: [String, Number, Boolean, Function, Object, Array, Symbol],
    disabled: Boolean,
    type: String,
    name: String,
    size: String,
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
  watch: {
    /**
     * When v-model change, set internal value.
     */
    value (value) {
      this.newValue = value
    },
    /**
     * Emit input event to update the user v-model.
     */
    newValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
</style>
