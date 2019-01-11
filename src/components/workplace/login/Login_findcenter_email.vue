<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery findcenter pd70">
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
                        <ul class="ulList type2">
                            <li>
                                <strong class="label-tit">이름</strong>
                                <slp-text-field placeholder="이름" error message="이름을 입력해주세요."></slp-text-field>
                            </li>
                            <li>
                                <strong class="label-tit">이메일</strong>
                                <slp-text-field placeholder="이메일" error message="이메일 형식에 맞지 않습니다."></slp-text-field>
                            </li>
                        </ul>
                        <!-- //list -->
                    </div>
                </div>
            </div>
                
            <!-- fixed Bottom Btn -->    
            <div class="fixBtmBtn">
                <ul>
                    <li>                            
                        <button type="button" disabled class="btn ld">다음</button>
                        <!-- 하단에 활성화 된 버튼은 임시로 display:none -->
                        <button type="button" class="btn ld clr1" style="display:none;">다음</button>
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
  name: 'Login_findcenter_email',
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
