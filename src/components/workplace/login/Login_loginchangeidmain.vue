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

                <!-- list -->
                <ul class="ulList type2">
                  <li>
                    <strong class="label-tit">아이디</strong>
                    <div class="infoChk">
                      <input type="text" class="input succ" placeholder="6~16자의 영 소문자 및 숫자 ">
                      <button type="button" class="btn sm">중복확인</button>
                    </div>
                    <!-- 아이디 체크시 결과 텍스트 -->
                    <p class="succ-msg">사용 가능한 아이디입니다.</p>
                    <p class="error-msg" style="display:2e;">띄어쓰기 없이 6~10자의 영문자와 숫자 조합만 가능합니다.</p>
                    <!-- //아이디 체크시 결과 텍스트 -->
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
                <li><button type="button" class="btn md clr1">확인</button></li>
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
