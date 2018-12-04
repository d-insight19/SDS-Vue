<template>
    <div :class="['-fdp-text-field',wrapperClasses]">
        <input :type="inputType"
            v-model="txtField"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :maxlength="maxlength"
            ref="refInput"
            @input="inputText($event.target.value)"
            @focus="isFocus = true"
            @blur="isFocus = false"
            :class="['-fdp-text-field__input',inputClasses]"/>
        <div class="-fdp-text-field__input__toggle-icon" v-show="withIcon">
            <div :class="['-fdp-text-field__img',iconClasses]" @click="toggleIcon"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'fdp-text-field',
  props: {
    value: String,
    placeholder: {
      type: String
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
    mask: {
      type: String,
      default: null
    },
    password: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [Number, String],
      default: 100
    },
    noIcon: {
      type: Boolean,
      default: false
    },
    fixedIcon: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      txtField: '',
      realText: '',
      visible: false,
      isFocus: false,
      predefinedMasks: {
      /* phone : ### - #### or #### - #### */
        'phone': '### - ####',
        'full-phone': '### - ### - ####',
        'credit-card': '#### - #### - #### - ####',
        'date': '####-##-##',
        'date-with-time': '####-##-## ##:##',
        'social': '###-##-####',
        'time': '##:##',
        'time-with-seconds': '##:##:##',
        'number': '###############'
      },
      allowedMasks: {
        '#': {
          test: char => char.match(/[0-9]/),
          convert: char => char
        },
        'A': {
          test: char => char.match(/[A-Z]/i),
          convert: char => char.toUpperCase()
        },
        'a': {
          test: char => char.match(/[a-z]/i),
          convert: char => char.toLowerCase()
        },
        'N': {
          test: char => char.match(/[0-9A-Z]/i),
          convert: char => char.toUpperCase()
        },
        'n': {
          test: char => char.match(/[0-9a-z]/i),
          convert: char => char.toLowerCase()
        }
      }
    }
  },
  computed: {
    inputType () {
      if (this.password && this.visible === false) {
        return 'password'
      }
      return 'text'
    },
    withIcon () {
      if (!this.noIcon && ((this.password && !this.clearable) || (this.clearable && this.txtField) || this.fixedIcon)) {
        return true
      }
      return false
    },
    iconClasses () {
      if (this.fixedIcon) {
        return {'-fdp-text-field__fixed-icon': true}
      } else if (this.clearable) {
        return {'-fdp-text-field__img--clearable': true}
      } else if (this.password) {
        if (this.visible) {
          return {'-fdp-text-field__img--password': true}
        } else {
          return {'-fdp-text-field__img--password-visible': true}
        }
      }

      return ''
    },
    wrapperClasses () {
      return {
        '-fdp-text-field--focus': this.isFocus,
        '-fdp-text-field--readonly': this.readonly
      }
    },
    inputClasses () {
      return {
        '-fdp-text-field__input--with-icon': this.withIcon,
        '-fdp-text-field__input--right': this.mask === 'won'
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
  methods: {
    inputText (inputValue) {
      if (this.mask) {
        if (this.mask === 'won') {
          inputValue = this.onlyNums(inputValue)
          this.realText = inputValue
          this.txtField = this.numberWithCommas(inputValue)
          this.$emit('input', this.realText)
        } else {
          if (this.mask === 'phone') {
            inputValue = this.onlyNums(inputValue)
            if (inputValue.length < 8) {
              this.predefinedMasks['phone'] = '### - ####'
            } else {
              this.predefinedMasks['phone'] = '#### - ####'
            }
          } else if (this.mask === 'full-phone') {
            inputValue = this.onlyNums(inputValue)
            if (inputValue.length < 11) {
              this.predefinedMasks['full-phone'] = '### - ### - ####'
            } else {
              this.predefinedMasks['full-phone'] = '### - #### - ####'
            }
          } else if (this.mask === 'number') {
            let numberMask = ''
            for (let i = 0; i < this.maxlength; i++) {
              numberMask = numberMask + '#'
            }
            this.predefinedMasks['number'] = numberMask
          }
          this.txtField = this.applyMask(inputValue, this.mask)
          this.$emit('input', String(this.realText))
        }
      } else {
        this.txtField = inputValue
        this.realText = inputValue
        this.$emit('input', this.realText)
      }
    },
    onlyNums (text) {
      let ret = ''
      for (var i = 0; i < text.length; i++) {
        if (this.allowedMasks['#'].test(text[i])) { ret += text[i] }
      }
      return ret
    },
    applyMask (text, mask) {
      const predefined = this.predefinedMasks[mask]
      const masks = predefined || mask
      const masked = masks.split('')
      let textIdx = 0
      let maskIdx = 0
      let maskedText = ''
      this.realText = ''
      while (maskIdx < masked.length && textIdx < text.length) {
        let m = masked[maskIdx]
        let c = text[textIdx]
        if (this.isMask(m)) {
          if (this.allowedMasks[m].test(c)) {
            textIdx++
            maskIdx++
            this.realText += c
            maskedText += this.allowedMasks[m].convert(c)
          } else {
            return maskedText
          }
        } else {
          if (m === '[') {
            maskIdx++
            m = masked[maskIdx]
          }
          if (c === m) {
            textIdx++
          }
          maskIdx++
          maskedText += m
        }
      }
      return maskedText
    },
    isMask: function (mask) {
      return this.allowedMasks.hasOwnProperty(mask)
    },
    toggleIcon: function () {
      if (this.fixedIcon) {
        this.$emit('click')
      } else if (this.clearable) {
        this.txtField = ''
        this.$emit('input', '')
      } else if (this.password) {
        this.visible = !this.visible
      }
    },
    numberWithCommas (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    setFocus () {
      this.$refs.refInput.focus()
    }
  },
  mounted () {
    this.inputText(this.value)
  }
}
</script>

<style>
</style>
