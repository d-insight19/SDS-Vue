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
                    <li><a href="#tab7">학습 통계</a></li>
                    <li class="on"><a href="#tab8">학점 현황</a></li>
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
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb20">연간목표 달성 수준</h2>
                <!-- status -->
                <div class="status">
                    <div class="white big">
                        <div class="info">
                            <img src="@/assets/img/imsi_chart.png" class="" alt="">
                        </div>
                        <dl>
                            <dt>취득학점</dt>
                            <dd><strong class="font_22">74</strong> 학점</dd>
                        </dl>
                        <dl class="line">
                            <dt>목표학점</dt>
                            <dd><strong class="font_22">82</strong> 학점</dd>
                        </dl>
                    </div>
                </div>
                <!-- //status -->
                <p class="hr mb0"></p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb0">카테고리별 학점</h2>
                <!-- status -->
                <div class="status">
                    <div class="big2">
                        <dl>
                            <dt>벨류</dt>
                            <dd><strong>40/46</strong> 학점</dd>
                        </dl>
                        <dl class="line">
                            <dt>리더십</dt>
                            <dd><strong>10/14</strong> 학점</dd>
                        </dl>
                        <dl class="line">
                            <dt>프로페셔녈</dt>
                            <dd><strong>14/10</strong> 학점</dd>
                        </dl>
                        <dl class="line">
                            <dt>스페셜</dt>
                            <dd><strong>10/12</strong> 학점</dd>
                        </dl>
                    </div>
                </div>
                <!-- //status -->
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
  name: 'MySpace_credit',
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
