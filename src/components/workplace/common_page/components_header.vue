<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery">
        <!-- header -->
        <div id="header" class="fixed2" style="display:none;">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
        </div>
        <!-- //header -->


        <!-- header 버튼있는경우 ::  header_text에 type2 클래스 추가-->
        <div id="header" class="fixed" style="display:none;">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_19 type2"> 스크롤시  header 에 fixed 클래스 추가</p>
          <p class="end">
              <span class="end_btn1 color_clr2">임시저장</span>
              <span class="end_btn2 color_clr2">제출</span>
          </p>
        </div>
        <!-- //header -->

        <!-- header :: 검색 input 있는 경우 -->
        <div id="header" class="fixed" style="display:none1;">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <div class="search-wrapper">
              <input type="text"  pattern="^\s+" class="input noline" placeholder="검색어를 입력해 주세요" />
              <button class="close-icon" type="button"></button>
          </div>
        </div>
        <!-- //header -->


        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
            </div>
          </div>
        </div>

      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'components_header',
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
