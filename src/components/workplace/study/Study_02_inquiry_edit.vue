<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_inquery pd70">
            <!-- header -->
            <div id="header" class="fixed">
            <button type="button" class="btn only close"><span class="ico">닫기</span></button>
            <p class="header_text font_18">1:1문의 수정</p>
            <p class="end color_clr2">완료</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner" style="padding-top:78px;">
                        
                        <div class="tabCnt dpb pt0" id="tab1"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                        <!-- list -->
                            <ul class="multiList type2">
                                <li>
                                    <strong class="label-tit14">제목</strong>
                                    <slp-text-field  placeholder="내용 문의합니다"></slp-text-field>
                                </li>
                                <li class="custom">
                                    <strong class="label-tit14">과정명</strong>
                                    <p class="sub-txt">이석규 교수의 마케팅 핵심원리와 실전전략</p>
                                </li>
                                <li class="pt0">
                                    <strong class="label-tit14">상담분류</strong>                                
                                    <slp-select placeholder="진도체크" width="100%">
                                        <option>진도체크</option>
                                        <option>체크</option>
                                    </slp-select>
                                </li> 
                                <li>
                                    <strong class="label-tit14">회신방법</strong>      
                                    <div class="rdoSelBox">
                                        <label class="labelRdo">
                                            <input type="radio" class="rdo" name="place-rdo" checked>
                                            <span class="ico"></span>
                                            <span class="label">이메일</span>
                                        </label>          
                                        <label class="labelRdo">
                                            <input type="radio" class="rdo" name="place-rdo">
                                            <span class="ico"></span>
                                            <span class="label">휴대전화</span>
                                        </label>        
                                    </div>
                                </li>
                                <li>
                                <strong class="label-tit14">이메일</strong>
                                <slp-text-field placeholder="Hamin.jung@multicampus.com"></slp-text-field>
                                </li>
                                <li>
                                    <strong class="label-tit14">내용</strong>
                                    <slp-text-field placeholder="해당 과정에 대해서 질문합니다. 내용은 이렇습니다."></slp-text-field>
                                </li>                                                                                            
                            </ul>
                            <strong class="label-tit16 mt36"> 첨부파일 추가</strong>
                            <ul v-show="list1.length" class="ulList type4 bot-btn">
                                <li v-for="(item, index) in list1" :key="index">
                                <div>
                                    <span class="ico img-a"></span>
                                    <span class="at-tit">Solution listup.jpg</span>
                                    <div class="fr">
                                    <span class="at-num">500KB</span>
                                    <span class="ico deletemode_20_black" @click="deleteFileList(index)"></span>
                                    </div>
                                </div>                                                             
                                </li>  
                            </ul>
                            <!-- 추가 리스트 -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <a href="#" class="btn sm add w100p" @click="addList1()" ><span class="ico plus"></span>파일 추가</a> 
            </div>
            <!-- //floatingbtn -->                
        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Study_02_inquiry_edit',
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
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 2,
      list1: [],
      realText: this.value,
      visible: true,
      isFocus: true,
      inputType: this.type,
      intSchBox: true
    }
  },
  computed: {
    rootClass () {
      return {
        'intSchBox': this.icon === 'search'
      }
    },
    wrapperClass () {
      return {
        'search-wrapper': this.clearable
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
  /* vue function */
  methods: {
    addList1 () {
      this.list1.push('tmp 어학등급 아이템')
    },
    deleteFileList (index) {
      console.log(index, '제거')
      this.list1.splice(index, 1)
    },
    onKeydown (event) {
      this.keylength = event.target.value.length
      event.target.style.height = '1px'
      event.target.style.height = (event.target.scrollHeight) + 'px'
    },
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
