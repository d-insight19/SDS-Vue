<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery findid certify pd70">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_18"></p>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">
                <!-- title -->
                <div class="titleWrap">
                    <h1 class="h-tit1">이메일 인증</h1>
                    <p class="txt-desc">입력한 이메일로 인증번호를 발송합니다.</p>
                </div>
                <!-- //title -->

                <!-- list -->
                <ul class="ulList type1">
                    <li>
                        <strong class="label-tit">성명</strong>
                        <slp-text-field @input="pushKey(1)"  placeholder="성명을 입력하세요" error message="성명을 입력하세요."></slp-text-field>
                    </li>
                    <li>
                        <strong class="label-tit">이메일</strong>
                        <div class="emailChk">
                          <slp-text-field @input="pushKey(2)" placeholder="이메일을 입력하세요" ></slp-text-field>
                          <button type="button" class="btn sm" @click="send()">인증번호 재전송</button>
                        </div>
                        <!-- 인증번호까지 입력해야 버튼에 배경색이 들어옵니다 -->
                    </li>
                    <li v-show="sendFlag">
                        <strong class="label-tit">인증번호</strong>
                        <!-- 기존 디폴트 텍스트 노출의 경우 컴포넌트가 없어 임의로 메시지 노출 해놨습니다.-->
                        <div class="emailChk">
                            <slp-text-field @input="pushKey(3)"  placeholder="인증번호를 입력하세요" error></slp-text-field>
                            <span class="time">
                              <span class="num">15:00</span>분
                            </span>
                        </div>
                        <p class="InfoChK-resultTxt">이메일로 인증번호를 발송했습니다. 인증번호가 오지 않으면 입력하신 정보가 정확한지 확인해 주세요.</p>
                        <p class="InfoChK-resultTxt err" style="display:none"> 유효시간이 초과되었습니다. 인증번호를 다시 전송해주세요.</p>
                    </li>
                </ul>
                <!-- // list -->
            </div>
          </div>
        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md " :class="{ clr1 : keylength && keylength2 && keylength3 }">인증</button></li>
            </ul>
        </div>
        <!-- //floating button -->

        <!-- toastpopup -->
        <div class="toast" style="display:none;">
          <div class="in">
            입력하신 정보와 일치하는 비밀번호가 없습니다. 정확한 정보 확인 후 다시 이볅해 주세요. 비밀번호 찾기가 어려운 경우 고객센터(1544-3001)로 문의해 주세요.
          </div>
        </div>
        <!-- //toastpopup -->

      </div>
      <!-- //container -->


    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  /*eslint-disable */
  name: 'Login_certifyemail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      sendFlag: false,
      keylength: '',
      keylength2: '',
      keylength3: ''
    }
  },
  /* vue function */
  methods: {
    send () {
      this.sendFlag = true
    },
    pushKey (el) {
      if( el == 1) {
        this.keylength = event.target.value.length
      } else if ( el == 2) {
        this.keylength2 = event.target.value.length
      } else if ( el == 3) {
        this.keylength3 = event.target.value.length
      }
    }
  }
}
</script>
