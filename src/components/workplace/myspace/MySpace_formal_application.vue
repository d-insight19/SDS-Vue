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
                    <li class="on"><a href="#tab1">정규 학습</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">자율 학습</a></li>
                    <li><a href="#tab3">학습 계획</a></li>
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
                <p class="font_15 mono_80 fwb">학습 신청 중 <span class="mono_50">3</span> <span class="ico down"></span></p>
                <span class="ico filter"></span>
            </div>
          </div>
        
          <div class="cell">
            <div class="inner pt0">

                <!-- list -->
                <ul class="cardList type1">
                    <li>
                        <div class="thum">
                            <slp-dropdown dimmed v-model="lang">
                                <span class="moredot" slot="trigger"></span>
                                <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
                                <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
                                <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
                                <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
                            </slp-dropdown>
                            <span class="label2">사전학습</span>
                            <div class="cDim"></div>
                            <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                        </div>
                        <div class="text">
                            <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3">이러닝</li>
                                <li class="mono_80">승인중</li>
                                <li class="mono_80">교재배송 준비 중</li>
                            </ul>
                            <ul class="card_buttons">
                                <li><a href="#" >취소하기</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="thum">
                            <slp-dropdown dimmed v-model="lang">
                                <span class="moredot" slot="trigger"></span>
                                <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
                                <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
                                <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
                                <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
                            </slp-dropdown>
                            <span class="label2">사전진단 <span>D-10</span></span>
                            <div class="cDim"></div>
                                <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                        </div>
                        <div class="text">
                            <a href="#" class="tit">기초부터 튼튼히 업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3">이러닝</li>
                                <li class="mono_80">승인중</li>
                                <li class="mono_80">교재배송 준비 중</li>
                            </ul>
                            <ul class="card_buttons">
                                <li><a href="#" >학습변경</a></li>                    
                                <li><a href="#" >결재 재상신</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="thum">
                            <slp-dropdown dimmed v-model="lang">
                                <span class="moredot" slot="trigger"></span>
                                <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
                                <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
                                <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
                                <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
                            </slp-dropdown>
                            <span class="label2">사전학습</span>
                            <div class="cDim"></div>
                            <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                        </div>
                        <div class="text">
                            <a href="#" class="tit">업무에 바로 쓰는 파이썬 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3">이러닝</li>
                                <li class="danger">승인반려</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
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
  name: 'MySpace_formal_application',
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
