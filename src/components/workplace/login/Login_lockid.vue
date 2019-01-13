<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery join pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <h1 class="h-tit mb24">계정잠금 해제</h1>
                
                <p class="lock_id">아이디<span class="color_clr2">cyclo79</span></p>
                <p class="txt-desc">본인인증 후 서비스를 이용하실 수 있습니다.<br>안전한 사용을 위해 이용자 비밀번호를 꼭 변경해주세요.</p>

                <ul class="certList">
                    <li><a href="#" class="btn">휴대폰 인증 (법인 휴대폰 제외)<span class="ico"></span></a></li>
                    <li><a href="#" class="btn">아이핀 인증<span class="ico"></span></a></li>
                    <li><a href="#" class="btn">이메일 인증<span class="ico"></span></a></li>
                </ul>

                <ul class="guideList">
                    <li>법인 휴대폰 사용자는 아이핀 인증만 가능합니다.</li>
                    <li>입력하신 고객님의 개인정보를 안전하게 하기위해, 최선을 다하고 있으며 동의없이 제3자에게 제공되지 않으며, 개인정보 처리방침에 따라 외부 위협으로부터 안전하게 보호하고 있습니다.</li>
                    <li>고객센터:1544-9001</li>
                    <li>아이핀(i-PIN) 인증은 아이핀(i-PIN)에 회원가입된 분들에 한하며, 아직 회원으로 가입되지 않은 분들은 버튼을 클릭하여 회원가입을 먼저 진행하시기 바랍니다.</li>
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
        <slp-popup v-if="showConfirm" title="이메일 인증" cancelInput="취소" confirmInput="이메일 발송" @cancelClick="cancel" @confirmClick="confirm">
            <!-- popup body -->
            <div class="ly-cnt">
                <p>회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 발송합니다.<br>메일 내 링크를 클릭해주시면 잠금이 해제됩니다.</p>	
            </div>
            <div class="ly-info">
                <p>finedesign@mulcam.com</p>
                <p>정해민</p>
            </div>
        </slp-popup>

        <slp-popup v-if="showConfirm" title="계정장금 해제안내" confirmInput="확인" @cancelClick="cancel" @confirmClick="confirm">
            <!-- popup body -->
            <div class="ly-cnt">
                <p>회원님의 계정 잠금상태가 해제되어,정상적으로 서비스를 이용하실 수 있습니다.</p>	
            </div>
        </slp-popup>

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
