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
                        <h2 class="tit">가입 인증</h2>
                        <div class="num">
                            <strong class="color_clr2">1</strong>/<span>6</span>
                        </div>
                    </div>
                        <div class="progBox">
                        <div class="bar clr2" style="width:15%"></div>
                    </div>
                    <p class="txt-desc" style="display:none1">다음 인증 방법 중 하나를 선택해주세요.</p>
                </div>

                <!-- 국내 사용자 -->
                <ul class="certList mt45">
                    <li><a href="#" class="btn">휴대폰 인증<span class="ico"></span></a></li>
                    <li><a href="#" class="btn">아이핀 인증<span class="ico"></span></a></li>
                </ul>

                <ul class="guideList">
                    <li>입력하신 고객님의 개인정보를 안전하게 하기 위해 최선을 다하고 있으며, 고객님의 동의없이 제 3자에게 제공되지 않으며, 개인정보 처리방침에 따라 외부 위협으로부터 안전하게 보호하고 있습니다.</li>
                    <li>고객센터 : 1544-9001</li>
                    <li>법인 휴대폰 사용자는 이메일 인증 버튼을 클릭하여 회원가입을 진행하시기 바랍니다. </li>
                    <li class="guide_link color_clr2">
                        <a><span>이메일 인증</span><span class="next_12"></span></a>
                    </li>
                    <li>아이핀(i-PIN) 인증은 아이핀(i-PIN)에 회원가입된 분들에 한하며, 아직 회원으로 가입되지 않은 분들은 버튼을  클릭하여 회원가입을 먼저 진행하시기 바랍니다.</li>
                    <li class="guide_link color_clr2">
                        <a><span>아이핀 가입 바로가기</span><span class="next_12"></span></a>
                    </li>
                </ul>



            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md clr1">취소</button></li>
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
