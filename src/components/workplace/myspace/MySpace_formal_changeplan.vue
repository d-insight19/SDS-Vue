<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace gray_bg">

        <!-- header -->
        <div id="header" class="fixed tab">
            <div class="header_inner line1">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
            <p class="header_text font_18">수료증 조회</p>
            </div>
            <div class="header_inner line2 tabMenu scroll-x">
                <ul class="fixTab">
                    <li class="on"><a href="#tab1">국문</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">영문</a></li>
                </ul>
            </div>
            <div class="blur_wrap">
                <div class="left blur"></div>
                <div class="right blur"></div>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">
        
          <div class="cell">
            <div class="inner">
                <img src="@/assets/img/thum_no_L.jpg" class="w100p" alt="">
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
  name: 'MySpace_formal_studying',
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
