<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery changepw">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only close"><span class="ico">이전</span></button>
          <p class="header_text font_19"></p>
        </div>
        <!-- //header -->
        
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                
                <!-- title -->
                <div class="titleWrap">
                    <h1 class="h-tit1 type2">비밀번호 변경</h1>
                    <ul class="txt-desc2">
                        <li>장기간 비밀번호를 변경하지 않으셨습니다.<br>개인정보 보호를 위해 지금 비밀번호를 변경해주세요.</li>
                        <li class="color_clr2">비밀번호 변경문의  1544-9001</li>
                    </ul>
                </div>
                <!-- //title -->

                
                <!-- list -->
                <ul class="ulList type2">
                    <li>
                        <strong class="label-tit">현재 비밀번호</strong>
                        <input type="password" class="input err" placeholder="현재 비밀번호 입력">
                        <!-- 아이디 체크시 결과 텍스트 -->
                        <p class="InfoChK-resultTxt err">비밀번호를 입력해 주세요.</p>
                        <!-- //아이디 체크시 결과 텍스트 -->
                    </li>
                    <li>
                        <strong class="label-tit">새 비밀번호</strong>
                        <input type="password" class="input err" placeholder="6~16자의 영소문자, 숫자 조합">
                        <!-- 아이디 체크시 결과 텍스트 -->
                        <p class="InfoChK-resultTxt err">8~12자의 영문자, 특수문자 조합만 가능합니다.</p>
                        <!-- //아이디 체크시 결과 텍스트 -->
                    </li>
                    <li>
                        <strong class="label-tit">새 비밀번호 확인</strong>
                        <input type="password" class="input err" placeholder="6~16자의 영소문자, 숫자 조합">
                        <!-- 아이디 체크시 결과 텍스트 -->
                        <p class="InfoChK-resultTxt err">비밀번호가 맞지 않습니다.</p>
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
                <!-- 비활성화시 :  disabled 추가 -->
                <li><button type="button" class="btn md">나중에 변경하기</button></li>
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
  name: 'Login_changepw',
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
