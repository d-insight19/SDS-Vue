<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery join">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <h1 class="h-tit">통합회원가입</h1>

                <div class="stepper">
                    <div class="clearfix">
                        <h2 class="tit">가입 동의</h2>
                        <div class="num">
                            <strong class="color_clr2">2</strong>/<span>6</span>
                        </div>
                    </div>
                        <div class="progBox">
                        <div class="bar clr2" style="width:33.3%"></div>
                    </div>
                    <p class="txt-desc">서비스 가입 약관 확인 후 동의해주세요.</p>
                </div>

                <!-- 동의 리스트 -->
                <div class="agreeAll"><label class="labelChk"><input id="" type="checkbox" class="chk" name=""><span class="ico"></span><span class="label">전체 동의</span></label></div>
                <ul class="agreeList">
                  <li>
                    <label class="labelChk"><input id="" type="checkbox" class="chk" name=""><span class="ico"></span><span class="label">개인정보 수집 및 이용 동의(필수)</span></label>
                    <a href="#" class="ico"></a>
                  </li>
                  <li>
                    <label class="labelChk"><input id="" type="checkbox" class="chk" name=""><span class="ico"></span><span class="label">개인정보 수집 및 이용 동의(필수)</span></label>
                    <a href="#" class="ico"></a>
                  </li>
                  <li>
                    <label class="labelChk"><input id="" type="checkbox" class="chk" name=""><span class="ico"></span><span class="label">개인정보 수집 및 이용 동의(필수)</span></label>
                    <a href="#" class="ico"></a>
                  </li>
                  <li>
                    <label class="labelChk"><input id="" type="checkbox" class="chk" name=""><span class="ico"></span><span class="label">개인정보 마케팅 활용 동의(선택)</span></label>
                    <a href="#" class="ico"></a>
                  </li>
                  <li>
                    <label class="labelChk"><input id="" type="checkbox" class="chk" name=""><span class="ico"></span><span class="label">개인정보 마케팅 활용 동의(선택)</span></label>
                    <a href="#" class="ico"></a>
                  </li>
                </ul>
                <!-- //동의 리스트 -->

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md">통합가입 취소</button></li>
                <li><button type="button" class="btn md clr1">다음</button></li>
            </ul>
        </div>
        <!-- //floating button -->
        <!-- toastpopup -->
        <div class="toast">
          <div class="in">
            필수 항목에 동의해주세요.
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
  name: 'Login_jointerms',
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
