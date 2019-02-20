<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery findid certify pd70">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_18">이메일 인증</p>
        </div>
        <!-- //header -->
        
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <!-- title -->
                <div class="titleWrap">
                    <h1 class="h-tit1">이메일 인증</h1>
                    <p class="txt-desc">이메일 인증을 하기 위해서는 콜센터로 문의 후 휴대폰 번호를 등록해주세요.</p>
                </div>
                <!-- //title -->

                <!-- list -->
                <ul class="ulList type1">
                    <li>
                        <strong class="label-tit">법인 휴대폰 번호</strong>
                        <slp-text-field placeholder="법인 휴대폰 번호를 입력하세요"></slp-text-field>
                    </li>
                    <li>
                        <strong class="label-tit">성명</strong>
                        <div class="infoChk">
                            <slp-text-field placeholder="성명을 입력하세요" ></slp-text-field>
                        </div>
                        <button type="button" class="btn sm fwr" style="margin-top:8px">확인</button>
                    </li>
                    <li>
                        <strong class="label-tit">이메일</strong>
                        <div class="emailChk">
                          <slp-text-field placeholder="이메일을 입력하세요" value="multi12@mulcam.com"></slp-text-field>
                          <button type="button" class="btn sm" @click="send()">인증번호 전송</button>
                        </div>
                    </li>
                    <li v-show="sendFlag">
                        <strong class="label-tit">인증번호</strong>
                        <!-- 기존 디폴트 텍스트 노출의 경우 컴포넌트가 없어 임의로 메시지 노출 해놨습니다.-->
                        <div class="emailChk">
                            <slp-text-field placeholder="인증번호를 입력하세요"></slp-text-field>
                            <!-- <span class="time">
                              <span class="num">00:00</span>분
                            </span> -->
                        </div>
                        <p class="InfoChK-resultTxt" style="display:none"> 인증번호가 오지 않으면 입력하신 정보가 정확한지 확인해 주세요.</p>
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
  name: 'Login_certifyemail_corporate',
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
