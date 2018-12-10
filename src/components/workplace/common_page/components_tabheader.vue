<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery">
        <!-- header  고정 헤더 -->
        <div id="header" class="tab" style="display:none;">
          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
          </div>            
          <div class="header_inner line2 tabMenu">
              <ul class="fixTab">
                <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                <li><a href="#tab2">이미지투데이</a></li>
                <li><a href="#tab3">인문학이야기</a></li>
                <li><a href="#tab3">인문학이야기</a></li>
                <li><a href="#tab3">인문학이야기</a></li>
              </ul>
          </div>          
        </div>
        <!-- //header -->


        <!-- header scroll 헤더  작업중-->
        <div id="header" class="tab" style="display:non1e;">
          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
          </div>            
          <div class="header_inner line2 tabMenu scroll-x">
              <ul class="scrollTab">
                <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                <li><a href="#tab2">이미지투데이</a></li>
                <li><a href="#tab3">인문학이야기</a></li>
                <li><a href="#tab3">인문학이야기</a></li>
                <li><a href="#tab3">인문학이야기</a></li>
              </ul>
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
  name: 'components_tabheader',
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
