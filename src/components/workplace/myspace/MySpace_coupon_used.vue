<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace gray_bg">

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
                    <li><a href="#tab7">학습 통계</a></li>
                    <li><a href="#tab8">학점 현황</a></li>
                    <li><a href="#tab9">포인트 현황</a></li>
                    <li class="on"><a href="#tab10">쿠폰 관리</a></li>
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
                    사용 내역 <span class="mono_50">6</span> <span class="ico down"></span>
                    <span class="ico addcoupon"></span>
                </p>
            </div>
          </div>

          <div class="cell">
            <div class="inner pt0">
                <ul class="couponList">
                    <li>
                        <div class="in">
                            <div class="summary">
                                <p><span class="font_32">45</span>%</p>
                                <span class="chip">기간만료</span>
                            </div>
                            <div class="detail">
                                <p class="title">[기간한정] 특별 교육 대상자 추가 할인 쿠폰</p>
                                <p class="term">유효기간 <span>2018.10.01 - 2018.10.31</span></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <div class="summary">
                                <p><span class="font_32">45</span>%</p>
                                <span class="chip">사용완료</span>
                            </div>
                            <div class="detail">
                                <p class="title">[기간한정] 특별 교육 대상자 추가 할인 쿠폰</p>
                                <p class="term">유효기간 <span>2018.10.01 - 2018.10.31</span></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <div class="summary">
                                <p class="">무료강의</p>
                            </div>
                            <div class="detail">
                                <p class="title">[무료] 한글날 특별 이벤트 무료 교육 대상자 무료강의 쿠...</p>
                                <p class="term">유효기간 <span>2018.10.01 - 2018.10.31</span></p>
                            </div>
                        </div>
                    </li>
                </ul>
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
  name: 'MySpace_coupon_used',
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
