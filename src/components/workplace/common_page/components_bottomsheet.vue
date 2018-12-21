<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery join basicinfo pd70">

        <!-- header -->
        <div id="header">
        <button type="button" class="btn only prev"><span class="ico">이전</span></button>
        <p class="header_text font_19"></p>
        </div>
        <!-- //header -->

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">              
                <h1 class="h-tit">통합회원가입</h1>
                <div class="stepper">
                    <div class="clearfix">
                        <h2 class="tit">아이디 생성</h2>
                        <div class="num">
                            <strong class="color_clr2">2</strong>/<span>6</span>
                        </div>
                    </div>
                        <div class="progBox">
                        <div class="bar clr2" style="width:50%"></div>
                    </div>
                    <p class="txt-desc" style="display:none1;">이름, 생년원일, 성별은 가입 후<br>변경이 불가하니 정확히 입력해주세요.</p>
                </div>
            </div>
          </div>
        </div>


        <!-- Bottom Sheet -->
        <div id="bottomsheet_wrap">
          <div id="sheetDim"></div>
          <div id="bottomsheet">            
            <ul>
              <!-- 
                현재 아이콘이 이미지라 문의했지만, 순수  css로 바꿔야한다면 
                <span class="ico check_24_blue"></span> -> <span class="checkIcon"></span>
                 
              -->
              <li class="">첫번째 메뉴<span class="ico check_24_blue"></span></li>
              <li class="">두번째 메뉴<span class="ico check_24_blue"></span></li>
              <li class="">세번째 메뉴<span class="ico check_24_blue"></span></li>
              <li class="">네번째 메뉴<span class="ico check_24_blue"></span></li>
              <li class="">선택한 메뉴<span class="ico check_24_blue"></span></li>
              <li class="active">기존에 선택된 메뉴<span class="ico check_24_blue"></span></li>
            </ul>
            <div class="bottomsheetBtn">              
              <span class="ico close_24_black"></span>
              취소
            </div>
          </div>
        </div>
        <!-- // Bottom Sheet -->


      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_bottomsheet',
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
