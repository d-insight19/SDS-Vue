<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery findid pd70">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only close"><span class="ico">닫기</span></button>
          <p class="header_text font_18"></p>
        </div>
        <!-- //header -->
        
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <h1 class="h-tit1 mb32">아이디찾기 결과</h1>

                <p class="txt-desc3">아이디 찾기 결과 해당 아이디가 <strong class="color_clr1">4개</strong> 존재합니다.</p>

                <div class="resultBox mt10 color_clr1">
                    <ul>
                        <li>Cbsgstqw1562****</li>
                        <li>CVC_agg011****</li>
                        <li>tko11****</li>
                        <li>CVC244****</li>
                    </ul>
                </div>

                <div class="txt-desc">
                    <span>혹시 비밀번호도 분실하셨나요?</span>
                    <a href="#" class="color_clr2 link fwb" style="margin-left:10px;">
                        비밀번호 찾기<span class="ico arr"></span>
                    </a>
                </div>
                
            </div>
          </div>
        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md clr1">로그인 하기</button></li>
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
  name: 'Login_findidresult',
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
