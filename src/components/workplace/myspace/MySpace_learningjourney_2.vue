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
                    <li class="on"><a href="#tab3">학습 계획</a></li>
                    <li><a href="#tab4">다운로드</a></li>
                    <li><a href="#tab5">나의 지식 CLIPing</a></li>
                    <li><a href="#tab6">학습 관리</a></li>
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
                <p class="font_15 mono_80 fwb"> 나의 학습 계획 <span class="ico down"></span></p>
            </div>
          </div>
        
          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb0">전체 학습 계획 <span class="color_clr2 fwr">60</span></h2>
                <!-- basic bar -->
                <ul class="progBox_wrap mb30">
                    <li>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt mono_65">계획달성률 <span class="mono_100">50%</span></p>
                        </div>
                        <div class="progBox">
                            <div class="clr2" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                </ul>
                <!-- //basic bar -->
                <p class="hr mt0 mb0"></p>
            </div>
          </div>
          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mt0 mb10">3분기 학습 계획</h2>
                <div class="mb15">
                    <span class="mr6">법정필수 <span class="color_clr2">1</span></span>
                    <span class="mr6">역량계획 <span class="color_clr2">3</span></span>
                    <span class="mr6">희망과정 <span class="color_clr2">3</span></span>
                    <span class="ico filter fr"></span>
                </div>
                <p class="hr mt0 mb20" style="height: 1px;"></p>
                <!-- list -->
                <ul class="cardList type2 x100">
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                                <li>역량계획</li>
                            </ul>
                            <p class="mt6 font_13 mono_80">
                                <span class="mono_50 mr6">신청기간</span><span>2018.10.31</span> - <span>2018.10.31</span>
                            </p>
                        </div>
                        <slp-dropdown dimmed v-model="lang">
                            <span class="moredot" slot="trigger"></span>
                            <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
                            <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
                            <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
                            <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
                        </slp-dropdown>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                                <div class="tagWrap"></div>
                            </a>

                            <a href="#" class="tit">기초부터 예제까지 iOS 개발자를 위한 업무에 바로 쓰는 스플...</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                                <li>역량계획</li>
                            </ul>
                            <p class="mt6 font_13 mono_80">
                                <span>학습중</span>
                            </p>
                        </div>
                        <slp-dropdown dimmed v-model="lang">
                            <span class="moredot" slot="trigger"></span>
                            <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
                            <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
                            <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
                            <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
                        </slp-dropdown>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">집합</li>
                                <li>역량계획</li>
                                <li>1-8차시</li>
                            </ul>
                            <p class="mt6 font_13 mono_80">
                                <span class="mono_50 mr6">신청기간</span><span>2018.10.31</span> - <span>2018.10.31</span>
                            </p>
                        </div>
                        <slp-dropdown dimmed v-model="lang">
                            <span class="moredot" slot="trigger"></span>
                            <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
                            <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
                            <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
                            <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
                        </slp-dropdown>
                    </li>
                </ul>
                <!-- //list -->
                <p class="hr mb0"></p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mt0 mb10">수립하신 학습 계획의 연관과정 추천</h2>
                <div class="scroll-x type2">
                    <!-- list -->
                    <ul class="thumList type2">
                        <li>
                            <div class="in">
                                <a href="#" class="thum">
                                    <span class="label">정규</span>
                                    <div class="thumbnail">
                                        <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                    </div>
                                </a>
                                <a href="#" class="tit">만화로 배우는 알기 쉬운 경영 기초전략</a>
                                <ul class="info">
                                    <li class="color_clr3">이러닝</li>
                                    <li><span class="star ico"></span>4.5</li>
                                    <li><span>40,000</span>원</li>
                                </ul>
                                <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <a href="#" class="thum">
                                    <span class="label">정규</span>
                                    <div class="thumbnail">
                                        <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                    </div>
                                </a>

                                <a href="#" class="tit">만화로 배우는 알기 쉬운 경영 기초전략</a>
                                <ul class="info">
                                    <li><span class="star ico"></span>4.5</li>
                                    <li><span>40,000</span>원</li>
                                </ul>
                                <div class="tagWrap"></div>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <a href="#" class="thum">
                                    <span class="label">정규</span>
                                    <div class="thumbnail">
                                        <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                    </div>
                                </a>
                                <a href="#" class="tit">만화로 배우는 알기 쉬운 경영 기초전략</a>
                                <ul class="info">
                                    <li class="color_clr3">이러닝</li>
                                    <li><span class="star ico"></span>4.5</li>
                                    <li><span>40,000</span>원</li>
                                </ul>
                                <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                            </div>
                        </li>
                    </ul>
                    <!-- //list -->
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
  name: 'MySpace_learningjourney_2',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      lang: '한국어'
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
