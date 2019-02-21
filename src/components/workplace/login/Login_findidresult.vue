<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery findid pd70">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only close"><span class="ico">닫기</span></button>
          <p class="header_text font_18"></p>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">
                <h1 class="h-tit1 mb32">아이디찾기 결과</h1>

                <p class="txt-desc3">아이디 찾기 결과 해당 아이디가 <strong class="color_clr1">N</strong>개 존재합니다.</p>

                <div class="resultBox mt10 color_clr1">
                    <ul>
                        <li>CVC****</li>
                        <li>CVC****</li>
                        <li>CVC****</li>
                        <li>CVC****</li>
                    </ul>
                </div>

                <p class="find_result_txt_desc1">아이디 뒷자리 확인은 PC에서 확인 할 수 있습니다.</p>
                <div class="find_result_txt_desc2">
                    <span>혹시 비밀번호도 분실하셨나요?</span>
                    <a href="#" class="color_clr2 link">
                        비밀번호 찾기<span class="next_12"></span>
                    </a>
                </div>

            </div>
          </div>
        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md clr1">로그인</button></li>
            </ul>
        </div>
        <!-- //floating button -->

      </div>
      <!-- //container -->

      <!-- <slp-popup v-if="showConfirm" title="아이디 찾기 결과 안내" cancelInput="취소" confirmInput="회원가입" @cancelClick="cancel" @confirmClick="confirm">

            <div class="ly-cnt">
                <p>입력하신 정보와 일치하는 아이디가 없습니다. 정확한 정보 확인 후 다시 입력하여 주시기 바랍니다. 아이디 찾기가 불가능하실 경우, 고객센터(1544-9001)로 문의 바랍니다.<br><br>아직! 멀티캠퍼스 회원이 아니신가요? 무료 회원가입을 하시면 각종 서비스 혜택을 받으실 수 있습니다.</p>
            </div>
        </slp-popup> -->


    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Login_findidresult',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      showConfirm: true
    }
  },
  /* vue function */
  methods: {
    cancel: function () {
      this.showConfirm = false
    },
    confirm: function () {
      this.showConfirm = false
    }
  }
}
</script>
