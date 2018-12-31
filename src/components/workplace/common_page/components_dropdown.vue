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


        <!-- Dropdown -->
        <div id="dropdown_wrap">
          <div id="sheetDim"></div>
          <div id="dropdown">            
            <ul>
              <!-- 
                position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력             
              -->
              <li>첫번째 메뉴</li>
              <li>두번째 메뉴</li>
              <li>세번째 메뉴</li>
              <li>네번째 메뉴</li>
              <li>선택한 메뉴</li>
            </ul>
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
  name: 'components_dropdown',
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
