<template>
  <div :class="rootClass">
    <div :class="wrapperClass">
      <input
        ref="refInput"
        :class="[computedClass, classObject]"
        :type="inputType"
        :value="realText"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :pattern="pattern"
        class="input"
        @input="inputText($event.target.value)"
        @focus="slpTextFieldFocused"
        @blur="slpTextFieldBlur"
        @keyup ="slpTextFieldKeyup">
      <!-- search icon이 존재하는 경우에만 x 버튼 노출 // 2019-01-07 publishing  -->
      <button
        v-if="icon && clearable"
        class="close-icon"
        type="button"
        @click="toggleIcon"/>
    </div>
    <a
      v-if="icon === 'search'"
      href="#"
      class="btn"
      @click="toggleIcon($event, 'search')"><span class="ico"/></a>
    <a
      v-if="type === 'password'"
      v-show="realText"
      :class="{'eye_slash': !isPasswordVisible}"
      href="#"
      class="btn eye r12"
      @click="togglePasswordVisibility"><span class="ico"/>
    </a>
    <p
      v-if="success && message"
      class="succ-msg">{{ message }}</p>
    <p
      v-if="error && message"
      class="error-msg">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'SlpTextField',
  props: {
    value: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: null
    },
    maxlength: {
      type: [Number, String],
      default: 100
    },
    classObject: {
      type: [String, Object],
      default: null
    }
  },
  data: function () {
    return {
      realText: this.value,
      visible: false,
      isFocus: false,
      isPasswordVisible: false,
      inputType: this.type
    }
  },
  computed: {
    rootClass () {
      return {
        'intSchBox': this.icon === 'search' || this.type === 'password'
      }
    },
    wrapperClass () {
      return {
        'search-wrapper': this.clearable || this.type === 'password'
      }
    },
    computedClass () {
      return {
        'succ': this.success,
        'error': this.error
      }
    },
    pattern () {
      if (this.clearable) {
        return ''
      } else {
        return null
      }
    }
  },
  watch: {
    value (v) {
      if (this.realText !== v) {
        this.inputText(v)
      }
    }
  },
  mounted () {
    this.inputText(this.value)
  },
  methods: {
    inputText (inputValue) {
      this.realText = inputValue
      this.$emit('input', this.realText)
    },
    setFocus () {
      this.$refs.refInput.focus()
    },
    toggleIcon: function (event, iconName) {
      if (this.icon && iconName) {
        this.$emit('click', this.realText)
      } else if (this.clearable) {
        this.realText = ''
        this.$emit('input', '')
      }
    },
    togglePasswordVisibility () {
      this.isPasswordVisible = !this.isPasswordVisible
      this.inputType = this.isPasswordVisible ? 'text' : 'password'
      this.$nextTick(() => {
        this.$refs.refInput.focus()
      })
    },
    slpTextFieldKeyup (event) {
      this.$emit('keyup', event)
    },
    slpTextFieldFocused (event) {
      if (this.isFocus) return
      this.isFocus = true
      this.$emit('focus', event)
    },
    slpTextFieldBlur (event) {
      this.isFocus = false
      this.$emit('blur', event)
    }
  }
}
</script>

<style>
</style>
