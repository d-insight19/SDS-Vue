<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery eduperson_login">
        <!-- header -->
        <div id="header" class="" >
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
        </div>
        <!-- //header -->
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <p class="edu_logintitle1">멀티캠퍼스</p>
                <p class="edu_logintitle2">교육관리시스템</p>
                <p class="label-tit-20 mb18">OTP 인증 선택</p>
                <ul class="ul-block">
                  <li>
                      <label class="labelRdo">
                          <input type="radio" class="rdo" name="test-rdo">
                          <span class="ico">
                              <span class="innerCircle"></span>
                          </span>
                          <span class="label">SMS</span>
                      </label>
                  </li>
                  <li>
                      <label class="labelRdo">
                          <input type="radio" class="rdo" name="test-rdo" checked>
                          <span class="ico">
                              <span class="innerCircle"></span>
                          </span>
                          <span class="label">이메일</span>
                      </label>
                  </li>
                </ul>

                <div class="loginBtn">
                    <button type="button" class="btn md clr1">OTP 생성</button>
                </div>

                <p class="label-tit-20" style="margin-top: 60px; margin-bottom:10px;">인증번호 입력</p>

                <ul class="loginList">
                    <li stlye="position:relative">
                        <slp-text-field class="mb30" classObject="underline" error message="인증번호가 틀렸습니다"></slp-text-field>
                        <div class="time" style="position:absolute;top: 14px;right: 0px;color: rgba(0,0,0,0.25);">05:00</div>
                    </li>
                </ul>

                <div class="loginBtn">
                    <button type="button" class="btn md clr1">OTP 인증</button>
                </div>
            </div>
          </div>
        </div>



      </div>
      <!-- //container -->
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Eduperson_login',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      langFlag: false
    }
  },
  /* vue function */
  methods: {
    changeLang () {
      this.langFlag = !this.langFlag
    }
  }
}
</script>
