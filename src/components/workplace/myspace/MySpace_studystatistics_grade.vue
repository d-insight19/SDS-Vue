<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace">

        <!-- header -->
        <div id="header" class="fixed tab">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">나의 공간</p>
            </div>
            <div class="header_inner line2 tabMenu scroll-x">
                <ul class="scrollTab">
                    <li><a href="#tab1">정규 학습</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">자율 학습</a></li>
                    <li><a href="#tab3">학습 계획</a></li>
                    <li><a href="#tab4">다운로드</a></li>
                    <li><a href="#tab5">나의 지식 CLIPing</a></li>
                    <li><a href="#tab6">학습 관리</a></li>
                    <li class="on"><a href="#tab7">학습 통계</a></li>
                    <li><a href="#tab8">학점 현황</a></li>
                    <li><a href="#tab9">포인트 현황</a></li>
                    <li><a href="#tab10">쿠폰 관리</a></li>
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
            <div class="filterArea ml-18 mr-18">
                <p class="font_15 mono_80 fwb">
                    나의 성적 <span class="ico down"></span>
                </p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <!-- column -->
                <h2 class="label-tit20 w100p">정규학습</h2>
                <ul class="diagram_wrap type2 tar">
                    <li class="type1">나의 점수</li>
                    <li class="square o40 type1">회사 평균</li>          
                </ul>
                <div class="tac">
                    <img src="@/assets/img/img_column01.png" class="w100p" alt="">
                </div>
                <!-- //column -->
                <p class="hr mb0"></p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <!-- column -->
                <h2 class="label-tit20 w100p">자율학습</h2>
                <ul class="diagram_wrap type2 tar">
                    <li class="type3">나의 학습시간</li>
                    <li class="square o40 type3">회사 평균</li>          
                </ul>
                <div class="tac">
                    <img src="@/assets/img/img_column02.png" class="w100p" alt="">
                </div>
                <!-- //column -->
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
  name: 'MySpace_studystatistics_grade',
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
