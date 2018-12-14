<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery join pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <h1 class="h-tit">통합회원가입</h1>

                <div class="stepper">
                    <div class="clearfix">
                        <h2 class="tit">가입 인증</h2>
                        <div class="num">
                            <strong class="color_clr2">1</strong>/<span>6</span>
                        </div>
                    </div>
                        <div class="progBox">
                        <div class="bar clr2" style="width:15%"></div>
                    </div>
                    <p class="txt-desc">다음 인증 방법 중 하나를 선택해주세요.</p>
                </div>

                <!-- 국내 사용자 -->
                <ul class="certList mt36" style="display:none1;">
                    <li><a href="#" class="btn">휴대폰 인증 (법인 휴대폰 제외)<span class="ico"></span></a></li>
                    <li><a href="#" class="btn">아이핀 인증<span class="ico"></span></a></li>
                </ul>

                <!-- 해외 사용자 -->
                <ul class="certList mt24" style="display:none;">
                    <li><a href="#" class="btn">휴대폰 인증 (법인 휴대폰 제외)<span class="ico"></span></a></li>
                    <li><a href="#" class="btn">아이핀 인증<span class="ico"></span></a></li>
                    <li><a href="#" class="btn">이메일 인증<span class="ico"></span></a></li>
                </ul>

                <ul class="guideList">
                    <li>법인 휴대폰 사용자는 아이핀 인증만 가능합니다.</li>
                    <li>입력하신 고객님의 개인정보를 안전하게 하기위해, 최선을 다하고 있으며 동의없이 제3자에게 제공되지 않으며, 개인정보 처리방침에 따라 외부 위협으로부터 안전하게 보호하고 있습니다.</li>
                </ul>

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
        
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Login_joincertify',
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
