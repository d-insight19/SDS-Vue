<template>
    <div :class="['-fdp-personal-number', wrapperClasses]">
        <input v-if="!isMobile"
            type="text"
            v-model="encryptedText"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :maxlength="maxlength"
            ref="refInput"
            @keypress="stopPress"
            @keydown="stopDeleteDown"
            @keyup="inputText"
            @focus="isFocus = true"
            @blur="isFocus = false"
            :class="['-fdp-personal-number__input']"/>
        <div v-else style="height: 100%;">
          <!-- 임시로 모바일인 경우 가상키패드 생성 -->
          <div class="-fdp-personal-number__virtual-keypad-activator" @click="isFocus = !isFocus"> {{encryptedText}} </div>
          <div v-show="isFocus" class="-fdp-personal-number__virtual-keypad">
            <table>
              <tbody>
                <tr>
                  <td v-for="i of 5" :key="i" class="-fdp-personal-number__virtual-key" @click="onVirtualKey($event.target.innerText)">{{i}}</td>
                  <td class="-fdp-personal-number__virtual-key -fdp-personal-number__virtual-key--function" @click="onVirtualKey($event.target.innerText)">X</td>
                </tr>
                <tr>
                  <td v-for="i of 4" :key="i+5" class="-fdp-personal-number__virtual-key" @click="onVirtualKey($event.target.innerText)">{{i+5}}</td>
                  <td class="-fdp-personal-number__virtual-key" @click="onVirtualKey($event.target.innerText)">0</td>
                  <td class="-fdp-personal-number__virtual-key -fdp-personal-number__virtual-key--function -fdp-personal-number__virtual-key--x"
                      @click="onVirtualKey($event.target.innerText)">삭제</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'fdp-personal-number',
  props: {
    value: String,
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    mobile: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [Number, String],
      default: 100
    }
  },
  data () {
    return {
      isFocus: false,
      encryptedText: '',
      realText: '',
      isMobile: this.$fdpUtil.isMobile() || this.mobile
    }
  },
  computed: {
    wrapperClasses () {
      return {
        '-fdp-personal-number--focus': this.isFocus,
        '-fdp-personal-number--readonly': this.readonly
      }
    }
  },
  watch: {
    realText (newValue) {
      this.$emit('input', newValue)
    },
    isFocus (newValue) {
      if (!newValue) {
        if (this.encryptedText && this.encryptedText.length > 1) {
          this.encryptedText = this.encryptedText.substring(0, this.encryptedText.length - 1) + '●'
        }
      }
    }
  },
  methods: {
    stopDeleteDown (event) {
      console.log('keydown')
      if (event.keyCode === 8 || event.keyCode === 46) {
        // backspace, delete
        event.preventDefault()
      }
    },
    stopPress (event) {
      // 누르고 있는 이벤트 막기
      console.log('keypress')
      event.preventDefault()
    },
    inputText (event) {
      console.log('keyup')
      this.moveCursorEnd(event.target)

      if (event.ctrlKey && event.key === 'v') {
        // 복붙 막기
        this.encryptedText = ''
        this.realText = ''
        return
      }
      if (event.keyCode === 8) {
        this.encryptedText = this.encryptedText.substring(0, this.encryptedText.length - 1)
        this.realText = this.realText.substring(0, this.realText.length - 1)
      } else {
        if ((event && !this.checkNumber(event.key)) || this.encryptedText.length >= Number(this.maxlength)) {
          event.preventDefault()
          return
        }
        let inputNumber = event.key
        if (inputNumber) {
        // 숫자 추가
          this.realText = this.realText + inputNumber
          this.encryptedText = this.encryptedText + inputNumber

          if (this.encryptedText && this.encryptedText.length > 2) {
            this.encryptedText = this.encryptedText.substring(0, this.encryptedText.length - 2) + '●' + inputNumber
          }
        } else {
        // 숫자 삭제
          this.realText = this.realText.substring(0, this.realText.length - 1)
          this.encryptedText = this.encryptedText.substring(0, this.encryptedText.length - 1)
        }

        this.$refs.refInput.innerHTML = this.encryptedText
      }
    },
    /* 커서 맨뒤로 이동 */
    moveCursorEnd (eventTarget) {
      eventTarget.setSelectionRange(eventTarget.value.length, eventTarget.value.length)
    },
    /* 숫자인지 체크 */
    checkNumber (targetText) {
      let regex = /^[0-9]*$/
      return regex.test(targetText)
    },
    /* 가상키 클릭 */
    // 임시로 만듬. 추후 보안 가상키패드 사용
    onVirtualKey (key) {
      if (this.checkNumber(key) && this.encryptedText.length < this.maxlength) {
        this.realText = this.realText + key
        this.encryptedText = this.encryptedText + key

        if (this.encryptedText && this.encryptedText.length > 2) {
          this.encryptedText = this.encryptedText.substring(0, this.encryptedText.length - 2) + '●' + key
        }
      } else if (key === '삭제') {
        this.encryptedText = this.encryptedText.substring(0, this.encryptedText.length - 1)
        this.realText = this.realText.substring(0, this.realText.length - 1)
      } else {
        this.isFocus = false
      }
    }
  }
}
</script>

<style>
</style>
