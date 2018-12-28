<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery eduperson_login">
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div class="edu_lang"  @click="changeLang()">
                    <span>한국어</span>
                    <span class="ico"></span>
                </div>
                <p class="edu_logintitle1">멀티캠퍼스</p>
                <p class="edu_logintitle2">교육관리시스템</p>

                <fieldset class="loginBox">
                    <legend>아이디 비밀번호 입력</legend>
                    <ul class="loginList">
                        <li>
                            <slp-text-field classObject="underline" placeholder="아이디"></slp-text-field>
                        </li>
                        <li>
                            <slp-text-field classObject="underline" type="password" placeholder="비밀번호" clearable></slp-text-field>
                        </li>
                    </ul>

                    <div class="loginChk">
                        <slp-checkbox>아이디 저장</slp-checkbox>
                        <slp-checkbox>자동 로그인</slp-checkbox>
                    </div>

                    <div class="loginBtn">
                        <button type="button" class="btn md clr1">로그인</button>
                    </div>
                </fieldset>

                <ul class="loginEtcBtn">
                    <li><a href="#">아이디찾기</a></li>
                    <li><a href="#">비밀번호 찾기</a></li>
                </ul>

            </div>
          </div>
        </div>
        
        <div id="dropdown_wrap" v-show="langFlag">
          <div id="sheetDim" @click="changeLang()"></div>
          <div id="dropdown">            
            <ul  @click="changeLang()">
              <!-- 
                position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력             
              -->
              <li>한국어</li>
              <li>중국어</li>
              <li>베트남어</li>
            </ul>
          </div>
        </div>
        <!-- // Bottom Sheet -->

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
