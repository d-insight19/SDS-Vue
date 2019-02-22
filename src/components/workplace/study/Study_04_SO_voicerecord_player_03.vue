<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
        <div id="container" class="mediaquery voice ">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <div class="page-btn">
                        <span class="ico back"></span>
                        <div class="num"><span>17</span>/<span>36</span></div>
                        <span class="ico next"></span>
                    </div>
                    <p class="header_text  font_19"> </p>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">
                    <div class="hide-inner">
                        <p class="chip">
                            <span >음성녹음</span>
                        </p>
                        <p class="h-tit1">음성녹음 타이틀 영역입니다 녹음 타이틀 영역입니다</p>
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
                        <p class="font_15">
                            음성녹음에 대한 소개와 방법을 설명합니다. 음성녹음에 대한 소개텍스트를 기입합니다.
                        </p>
                        <p class="line01" style="margin-top:26px; margin-bottom:26px;"></p>
                        <p class="font_16 fwb mb12">1. 다음의 내용을 듣고, 답변을 등록해 주세요.</p>
                        <p class="inner-txt">
                            태양계에는 항성인 태양과 그 가까이로부터 수성, 금성, 지구, 화성, 즉 지구형 행성이 순서대로 나열되어 있으며 그 다음에 유성대(asteroid belt)가 존재한다.
                        </p>
                        <div class="play_wrap mt20 mb40">
                            <ul>
                                <li style="padding-right:14px;"><img src="@/assets/img/ic_record_play_blue_40.png" alt=""></li>
                                <li style="padding-right:8px;">
                                    <span class="num">00:00</span>
                                </li>
                                <li class="record_wrap" style="padding-right:8px;">
                                    <div class="record_bar">
                                    </div>
                                    <span class="record_ball"></span>
                                </li>
                                <li>
                                    <span class="num">03:20</span>
                                </li>
                            </ul>

                        </div>
                        <p class="inner-txt fwb mb8">답변 녹음하기</p>
                        <div class="record_box">
                            <ul class="record_tb">
                                <li>
                                    <button class="btn-md fwr w76 mb0">초기화</button>
                                </li>
                                <li>
                                    <div class="circle">
                                        <img src="@/assets/img/ic_record_pause_40.png" alt="">
                                    </div>
                                </li>
                                <li>
                                    <button class="btn-md  fwr mb0 clr2 clr_wh">등록</button>
                                </li>
                            </ul>
                            <div class="record_time mt12">
                                <div class="play_wrap mt20">
                                    <ul>
                                        <li style="padding-right:8px;">
                                            <span class="num">00:00:35</span>
                                        </li>
                                        <li class="record_wrap" style="padding-right:8px;">
                                            <div class="record_bar playing">
                                            </div>
                                            <span class="record_ball" style="left:19%;"></span>
                                        </li>
                                        <li>
                                            <span class="num">00:03:20</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //contents -->

            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">
                <button type="button" class="btn md clr1">제출</button>
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
