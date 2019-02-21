<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery join pd70">

        <div id="content" class="normal">
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
                    <!-- 해외 사용자 -->
                    <p class="txt-desc mb0">해외 사용자는 이메일 인증을 진행해주세요.</p>
                    <p class="txt-desc txt-desc2">(입력하신 고객님의 개인정보를 안전하게 하기 위해 최선을 다하고 있으며, 고객님의 동의없이 제 3자에게 제공되지 않으며, 개인정보 처리방침에 따라외부 위협으로부터 안전하게 보호하고 있습니다.)</p>
                </div>
                <!-- 해외 사용자 -->
                <ul class="certList mt54">
                    <li><a href="#" class="btn">이메일 인증<span class="ico"></span></a></li>
                </ul>

                <ul class="guideList">
                    <li>이름, 생년월일, 성별은 가입 후에 변경이 불가합니다. 추후 본인확인을 위해 정확하게 가입 부탁드립니다.</li>
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
