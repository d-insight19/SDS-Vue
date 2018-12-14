<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery findid certify pd70">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_19"></p>
        </div>
        <!-- //header -->
        
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <!-- title -->
                <div class="titleWrap">
                    <h1 class="h-tit1">이메일 인증</h1>
                    <p class="txt-desc">입력한 이메일로 인증번호를 발송합니다.</p>
                </div>
                <!-- //title -->

                <!-- list -->
                <ul class="ulList type1">
                    <li>
                        <strong class="label-tit">이름</strong>
                        <input type="text" class="input err" placeholder="이름 입력">
                        <p class="InfoChK-resultTxt err">이름을 입력해주세요.</p>
                    </li>
                    <li>
                        <strong class="label-tit">이메일</strong>
                        <div class="emailChk">
                            <input type="text" class="input err" placeholder="이메일 입력">
                            <p class="InfoChK-resultTxt err">이메일 형식에 맞지 않습니다.</p>
                            <button type="button" class="btn sm" @click="send()">인증번호 전송</button>
                        </div>
                    </li>
                    <li v-if="sendFlag">
                        <strong class="label-tit">인증번호 입력</strong>
                        <div class="emailChk">
                            <input type="text" class="input" placeholder="이메일로 인증번호를 발송했습니다.">
                            <span class="time">00:00분</span>
                        </div>
                        <p class="InfoChK-resultTxt"> 인증번호가 오지 않으면 입력하신 정보가 정확한지 확인해 주세요.</p>
                        <p class="InfoChK-resultTxt err" style="display:none"> 유효시간이 초과되었습니다. 인증번호를 다시 전송해주세요.</p>
                    </li>
                </ul>
                <!-- // list -->
            </div>
          </div>
        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md clr1">인증</button></li>
            </ul>
        </div>
        <!-- //floating button -->
        
        <!-- toastpopup -->
        <div class="toast" style="display:none;">
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
  name: 'Login_certifyemail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      sendFlag: false
    }
  },
  /* vue function */
  methods: {
    send () {
      this.sendFlag = true
    }
  }
}
</script>
