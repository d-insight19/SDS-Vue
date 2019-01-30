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
                    검색어 통계 <span class="ico down"></span>
                    <span class="ico filter"></span>
                </p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb14"> 내 검색어 TOP 10 </h2>
                <!-- keyword -->
                <ul class="keyword">
                    <li>
                        <p class="contents"><span class="number color_clr2">1</span>세바시</p>
                    </li>
                    <li>
                        <p class="contents"><span class="number color_clr2">2</span>모바일웹</p>
                    </li>
                    <li>
                        <p class="contents"><span class="number color_clr2">3</span>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십</p>
                    </li>
                    <li>
                        <p class="contents"><span class="number color_clr2">4</span>야나두</p>
                    </li>
                    <li>
                        <p class="contents"><span class="number color_clr2">5</span>지속성장</p>
                    </li>
                    <li>
                        <p class="contents"><span class="number color_clr2">6</span>AI</p>
                    </li>
                    <li>
                        <p class="contents"><span class="number color_clr2">7</span>빅데이터</p>
                    </li>
                    <li>
                        <p class="contents"><span class="number color_clr2">8</span>성과향상</p>
                    </li>
                    <li>
                        <p class="contents"><span class="number color_clr2">9</span>파고나</p>
                    </li>
                    <li>
                        <p class="contents"><span class="number color_clr2">10</span>UX</p>
                    </li>
                </ul>
                <!-- //keyword -->
                <p class="hr mb0"></p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb14"> 나의 관심 키워드 </h2>
                <!-- activity -->
                <div class="w100p mb18">
                    <img src="@/assets/img/thum_no_L.jpg" class="w100p" alt="">
                </div>
                <p class="hr mb0"></p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb14"> 임직원 관심 키워드 </h2>
                <div class="w100p mb18">
                    <img src="@/assets/img/thum_no_L.jpg" class="w100p" alt="">
                </div>
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
  name: 'MySpace_studystatistics_keyword',
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
