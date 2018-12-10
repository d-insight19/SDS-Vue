<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery join">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <h1 class="h-tit mb26">계정잠금 해제</h1>
                
                <p class="lock_id">잠금상태 ID<span class="color_clr2">cyclo79</span></p>
                <p class="txt-desc">안전한 사용을 위해 본인인증 후 비밀번호를 꼭 변경해주세요.</p>

                <ul class="certList">
                    <li><a href="#" class="btn">휴대폰 인증 (법인 휴대폰 제외)<span class="ico"></span></a></li>
                    <li><a href="#" class="btn">아이핀 인증<span class="ico"></span></a></li>
                    <li><a href="#" class="btn">이메일 인증<span class="ico"></span></a></li>
                </ul>

                <ul class="guideList">
                    <li>법인 휴대폰 사용자는 아이핀 인증만 가능합니다.</li>
                    <li>입력하신 고객님의 개인정보를 안전하게 하기위해, 최선을 다하고 있으며 동의없이 제3자에게 제공되지 않으며, 개인정보 처리방침에 따라 외부 위협으로부터 안전하게 보호하고 있습니다.</li>
                    <li>고객센터:1544-9001</li>
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

        <!-- layer wrap -->
        <div class="layerWrap">
            <div class="ly-in">
                <div class="ly-hd">이메일 인증</div>
                <div class="ly-body">
                    <div class="ly-cnt">
                        <p>회원정보에 등록된 이메일로 휴면계정을 해제할 수 있는 링크를 발송합니다. 메일 내 링크를 클릭해주시면 잠금이해제됩니다.</p>
                    </div>
                    <div class="ly-info">
                        <p>finedesign@mulcam.com</p>
                        <p>정해민</p>
                    </div>
                </div>
            
                <div class="ly-btn">
                    <button type="button" class="btn">취소</button>
                    <button type="button" class="btn color_clr2">이메일 발송</button>
                </div>

            </div>
        </div>
        <!-- //layer wrap -->

        <!-- layer wrap -->
        <div class="layerWrap" style="display:none">
            <div class="ly-in">
                <div class="ly-hd">계정장금 해제안내</div>
                <div class="ly-body">
                    <div class="ly-cnt">
                        <p>회원님의 계정 잠금상태가 해제되어,정상적으로 서비스를 이용하실 수 있습니다.</p>
                    </div>
                </div>
            
                <div class="ly-btn">
                    <button type="button" class="btn color_clr2">확인</button>
                </div>

            </div>
        </div>
        <!-- //layer wrap -->

        <div id="dim"></div>

    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Login_lockid',
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
