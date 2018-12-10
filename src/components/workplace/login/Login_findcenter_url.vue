<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery findcenter">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="font_19"></p>
        </div>
        <!-- //header -->
        
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <!-- 연수원 URL 찾기의 타이틀 margin-bottom 은 36px이라  type2 클래스 추가 -->
                <h1 class="h-tit1 type2">연수원 URL로 찾기</h1>

                <!-- list -->
                <ul class="ulList type2">
                    <li>
                        <strong class="label-tit">연수원 URL</strong>
                        <input type="text" class="input" placeholder="http://">
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
  name: 'Login_findcenter_url',
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
