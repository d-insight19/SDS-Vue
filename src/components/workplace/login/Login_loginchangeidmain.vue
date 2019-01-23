<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery change_id main pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <h1 class="h-tit">아이디 변경</h1>
                <p class="tit-desc">아이디를 변경하셔야 로그인이 가능합니다.</p>

                <!-- list -->
                <ul class="ulList type2">
                  <li>
                    <strong class="label-tit">아이디</strong>
                    <div class="infoChk">
                      <slp-text-field placeholder="6~16자의 영 소문자 및 숫자"></slp-text-field>
                      <button type="button" class="btn sm fwr">중복확인</button>
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
                <li><button type="button" class="btn md">취소</button></li>
                <li><button type="button" class="btn md clr1">아이디 변경</button></li>
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
  name: 'Login_loginchangeidmain',
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
