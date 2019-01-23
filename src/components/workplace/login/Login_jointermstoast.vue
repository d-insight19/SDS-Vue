<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery join pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <h1 class="h-tit">회원가입</h1>

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
                    <p class="txt-desc">서비스 가입 약관에 동의해주세요.</p>
                </div>

                <!-- 동의 리스트 -->
                <div class="agreeAll">
                   <slp-checkbox>전체 동의</slp-checkbox>                  
                </div>
                <ul class="agreeList">
                  <li>
                    <slp-checkbox >개인정보 수집 및 이용 동의(필수)</slp-checkbox>
                    <a href="#" class="ico"></a>
                  </li>
                  <li>
                    <slp-checkbox>개인정보 수집 및 이용 동의(필수)</slp-checkbox>
                    <a href="#" class="ico"></a>
                  </li>
                  <li>
                    <slp-checkbox>개인정보 수집 및 이용 동의(필수)</slp-checkbox>
                    <a href="#" class="ico"></a>
                  </li>
                  <li>
                    <slp-checkbox>개인정보 마케팅 활용 동의(선택)</slp-checkbox>
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
                <li><button type="button" class="btn md">이전</button></li>
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
      value: true
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
