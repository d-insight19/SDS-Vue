<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
        <div id="container" class="mediaquery study_survey_sub bg-gr">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <div class="page-btn">
                        <span class="ico back"></span>
                        <div class="num"><span>03</span>/<span>36</span>p</div>
                        <span class="ico next"></span>
                    </div>
                    <p class="header_text  font_19"> </p>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">
                    <div class="hide-inner">
                        <p class="h-tit5">
                            <span class="ico chk"></span>
                            <span >제출 완료!</span>
                        </p>
                        <p class="h-tit1">삶의 만족도 지수 조사</p>
                    </div>
                </div>
            </div>
            <!-- //header -->


            <!-- header + 확장형 + tab  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '2'" id="header" class="tab">
                <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_19"> </p>
                </div>
                <div class="header_inner line2 tabMenu">
                    <ul class="fixTab">
                    <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">이미지투데이</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    </ul>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">
                    <div class="head-inner">
                        <span class="chip">FAQ</span>
                        <p class="h-tit1">질문 타이틀 영역 질문 타이틀 영역 질문 타이틀 영역</p>
                        <p class="ico-group">
                            <span>동영상</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- //header -->


            <!-- header scroll 헤더  작업중-->
            <div v-if="headerType == '3'" id="header" class="tab">

                <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_19"> </p>
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
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">
                    <div class="head-inner">
                        <span class="chip">FAQ</span>
                        <p class="h-tit1">질문 타이틀 영역 질문 타이틀 영역 질문 타이틀 영역</p>
                        <p class="ico-group">
                            <span>동영상</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">
                        <div>
                            <p class="survey-tit">당신의 행복지수는 <span class="color_clr2">80</span>점입니다.</p>
                            <p class="survey-txt">전체 평균 점수보다 2점 높아요.전체 참여자 중 9.1% 가  나랑 점수가 비슷해요. 평균 수준의 행복지수입니다. 혹시 요즘 인생이 무료하게 느껴지나요? 반복되는 일상에 지쳤다면 여행을 떠나보는 것이 어떨까요?</p>
                        </div>

                    </div>
                </div>
            </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">
                <button type="button" class="btn md clr1">완료</button>
            </div>
            <!-- //floatingbtn -->
        </div>
        <!-- //container -->
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Study_04_SO_survey_submission',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
