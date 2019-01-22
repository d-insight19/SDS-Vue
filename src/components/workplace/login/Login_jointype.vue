<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery join_type">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_18"></p>
        </div>
        <!-- //header -->
        
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <h1 class="h-tit1">회원가입</h1>

                <div class="joinTypeBox">
                  <dl>
                    <dt>개인회원 가입하기</dt>
                    <dd>
                      <p class="w80p">멀티 캠퍼스는 통합 ID 하나로 모든 서비스를 한번에 이용하실 수 있습니다.</p>
                      <p class="color_clr2">(멀티 캠퍼스, OPIc, SERI Pro)</p>
                      <div class="btmBtn">
                        <button type="button" class="btn md clr1">일반회원 가입하기</button>
                      </div>
                    </dd>
                  </dl>

                  <dl>
                    <dt>기업회원 문의하기</dt>
                    <dd>
                      <p class="w80p">기업회원은 문의게시판에서 필요한 내용을 확인한 뒤 회원가입을 진행해 주시기 바랍니다.</p>
                      <div class="btmBtn">
                        <button type="button" class="btn md clr1">기업회원 가입하기</button>
                      </div>
                    </dd>
                  </dl>
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
  name: 'Login_jointype',
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
