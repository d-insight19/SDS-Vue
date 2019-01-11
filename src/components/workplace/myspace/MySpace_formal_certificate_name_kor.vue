<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace" style="background-color:#fff">

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
              <h2 class="h-tit2 fwb600 mb5">국문 이름 입력</h2>
              <p class="font_14 mono_65 mb25">수료증에 표시될 이름을 입력해주세요.</p>
              <!-- list -->
              <ul class="ulList type2">
                <li>
                <strong class="label-tit">성</strong>
                <slp-text-field></slp-text-field>
                </li>
                <li>
                <strong class="label-tit">이름</strong>
                <slp-text-field></slp-text-field>
                </li>
              </ul>
              <!-- //list -->
            </div>
          </div>

        </div>
        
        <!-- floatingbtn -->
        <div class="fixBtmBtn abs">  
            <button type="button" class="btn md clr1">다음</button>
        </div>
        <!-- //floatingbtn -->
        
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'MySpace_formal_certificate_name_kor',
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
