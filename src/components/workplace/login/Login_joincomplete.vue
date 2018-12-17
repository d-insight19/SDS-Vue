<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery join complete pd70">
          
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">

                        <h1 class="h-tit">회원가입이<br>완료되었습니다.</h1>
                        <p class="txt-desc">신분증과 동일한 정보를 입력하시면 고용보험과정의<br>본인확인이 용이합니다.</p>


                        <div class="joinComp-tit clearfix mt42">
                          <strong class="tit fl">나의 회원정보</strong>
                          <a href="#" class="btn fr">개인정보수정<span class="ico"></span></a>
                        </div>
                        
                        <caption>나의 회원정보</caption>
                        <colgroup>
                        <col style="width:100px;">
                        <col style="width:auto;">
                        </colgroup>

                        <div class="hr"></div>
                        
                        <!-- table -->
                        <table class="joinComp-tbl">  
                          <tbody>
                            <tr>
                              <th scope="row">아이디</th>
                              <td>hamin.jung</td>
                            </tr>
                            <tr>
                              <th scope="row">이름</th>
                              <td>홍길동</td>
                            </tr>
                            <tr>
                              <th scope="row">성별</th>
                              <td>여</td>
                            </tr>
                            <tr>
                              <th scope="row">생년월일</th>
                              <td>1986.05.29</td>
                            </tr>
                            <tr>
                              <th scope="row">이메일</th>
                              <td>hamin.jujg@multicampus.com</td>
                            </tr>
                            <tr>
                              <th scope="row">휴대전화</th>
                              <td>010-1234-5678</td>
                            </tr>
                            <tr>
                              <th scope="row">주소</th>
                              <td>[05214]서울특별시 강남구 역삼로 15 402호</td>
                            </tr>
                          </tbody>
                        </table>
                        <!-- //table -->


                    </div>
                </div>
            </div>

            <!-- fixed Bottom Btn -->    
            <div class="fixBtmBtn">
                <ul>
                    <li>                            
                        <button type="button" disabled class="btn ld" >확인</button>
                        <!-- 하단에 활성화 된 버튼은 임시로 display:none -->
                        <button type="button" class="btn ld clr1" style="display:none;">확인</button>
                    </li>
                </ul>                    
            </div>
            <!-- //fixed Bottom Btn --> 
            
            
        </div>
        <!-- //container -->   

    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Login_joincomplete',
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
