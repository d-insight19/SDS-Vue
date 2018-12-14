<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery integration pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <h1 class="h-tit">통합 아이디 생성</h1>
                <p class="txt-desc">아래 검색된 아이디중에서 통합 아이디로<br>사용하실 아이디를 선택 혹은 입력해주세요.</p>
                

                <!-- list -->
                <ul class="ulList type2 mt36">
                  <li>
                    <strong class="label-tit">멀티캠퍼스 이러닝/집합</strong>
                    <ul class="ul-block">
                      <li><label class="labelRdo"><input type="radio" class="rdo" name="test-rdo"><span class="ico"><span class="innerCircle"></span></span><span class="label">CRD_abc1234</span></label></li>
                      <li><label class="labelRdo"><input type="radio" class="rdo" name="test-rdo"><span class="ico"><span class="innerCircle"></span></span><span class="label">QMultisos1</span></label></li>
                      <li><label class="labelRdo"><input type="radio" class="rdo" name="test-rdo"><span class="ico"><span class="innerCircle"></span></span><span class="label">Multisos1</span></label></li>
                    </ul>
                  </li>
                  <li>
                    <strong class="label-tit">OPIc</strong>
                    <ul class="ul-block">
                      <li><label class="labelRdo"><input type="radio" class="rdo" disabled name="test-rdo"><span class="ico"><span class="innerCircle"></span></span><span class="label">미가입</span></label></li>
                    </ul>
                  </li>
                  <li>
                    <strong class="label-tit">SERI Pro</strong>
                    <ul class="ul-block">
                      <li><label class="labelRdo"><input type="radio" class="rdo" name="test-rdo"><span class="ico"><span class="innerCircle"></span></span><span class="label">Defg90</span></label></li>
                      <li><label class="labelRdo"><input type="radio" class="rdo" name="test-rdo"><span class="ico"><span class="innerCircle"></span></span><span class="label">Defg9Defg90</span></label></li>
                    </ul>
                  </li>
                  <li>
                    <strong class="label-tit">통합 아이디 직접 입력</strong>
                    <div class="rdoInfoChK">
                      <label class="labelRdo">
                        <input type="radio" class="rdo" name="test-rdo"><span class="ico"><span class="innerCircle"></span></span>
                      </label>
                      <div class="infoChk2">
                        <input type="text" class="input underline" placeholder="6~16자의 영 소문자 및 숫자 ">
                        <button type="button" class="btn sm">중복확인</button>
                      </div>
                      <!-- 아이디 체크시 결과 텍스트 -->
                      <p class="succ-msg">사용 가능한 아이디입니다.</p>
                      <p class="error-msg" style="display:2e;">이미 사용중인 아이디입니다.</p>
                      <!-- //아이디 체크시 결과 텍스트 -->
                    </div>
                  </li>
                </ul>
                <!-- //list -->


            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md">이전</button></li>
                <li><button type="button" class="btn md clr1">다음</button></li>
            </ul>
        </div>
        <!-- //floating button -->
        
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Login_loginintegrationid',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
