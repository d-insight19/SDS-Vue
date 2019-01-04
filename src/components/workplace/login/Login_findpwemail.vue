<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery findid pd70">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_18"></p>
        </div>
        <!-- //header -->
        
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <h1 class="h-tit1">이메일로 찾기</h1>

                <!-- list -->
                <ul class="ulList type1">
                    <li>
                        <strong class="label-tit">아이디</strong>
                        <input type="text" class="input" placeholder="아이디 입력">
                    </li>
                    <li>
                        <strong class="label-tit">이름</strong>
                        <input type="text" class="input" placeholder="이름 입력">
                    </li>
                    <li>
                        <strong class="label-tit">이메일</strong>
                        <input type="text" class="input" placeholder="이메일 입력">
                    </li>
                </ul>
                <!-- // list -->
            </div>
          </div>
        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md clr1">확인</button></li>
            </ul>
        </div>
        <!-- //floating button -->
        
        <!-- toastpopup -->
        <div class="toast">
          <div class="in">
            입력하신 정보와 일치하는 비밀번호가 없습니다. 정확한 정보 확인 후 다시 이볅해 주세요. 비밀번호 찾기가 어려운 경우 고객센터(1544-3001)로 문의해 주세요.
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
  name: 'Login_findpwemail',
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
