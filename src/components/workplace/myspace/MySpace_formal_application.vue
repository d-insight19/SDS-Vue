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
                    <li class="on"><a href="#tab1">정규 학습</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">자율 학습</a></li>
                    <li><a href="#tab3">학습 게획</a></li>
                    <li><a href="#tab4">다운로드</a></li>
                    <li><a href="#tab5">나의 지식 CLIPing</a></li>
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
                <ul class="thumList type4">
                    <li>
                        <div class="thum">
                            <span class="label5">사전학습</span>
                            <div class="cDim"></div>
                            <div class="thumbnail">
                                <img src="@/assets/img/thum_no_L2.jpg" class="width100" alt="">
                            </div>
                        </div>
                        <div class="text">
                            <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3">이러닝</li>
                                <li class="mono_80">승인중</li>
                                <li class="mono_80">교재배송 준비 중</li>
                            </ul>
                            <button type="button" title="title" class="btn xxxs mono_65 width_inherit mt8">취소하기</button>
                        </div>
                        <span class="moredot" @click="changeLang1()"></span>
                        <div class="dropdown_wrap" v-show="langFlag1" >
                            <div class="sheetDim" @click="changeLang1()"></div>
                            <div class="dropdown">            
                                <ul  @click="changeLang1()">
                                <!-- 
                                    position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력             
                                -->
                                <li>나의 지식 CLIPing</li>
                                <li>나의 지식 CLIPing</li>
                                <li>내가 본 콘텐츠</li>
                                <li>관심 CLIPing</li>
                                <li>나의 지식 CLIPing 활동 이력</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="thum">
                            <span class="label5">사전진단 <span>D-10</span></span>
                            <div class="cDim"></div>
                            <div class="thumbnail">
                                <img src="@/assets/img/thum_no_L2.jpg" class="width100" alt="">
                            </div>
                        </div>
                        <div class="text">
                            <a href="#" class="tit">기초부터 튼튼히 업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3">이러닝</li>
                                <li class="mono_80">승인중</li>
                                <li class="mono_80">교재배송 준비 중</li>
                            </ul>
                            <button type="button" title="title" class="btn xxxs mono_65 width_inherit mt8">학습변경</button>
                            <button type="button" title="title" class="btn xxxs mono_65 width_inherit mt8">결제 재상신</button>
                        </div>
                        <span class="moredot" @click="changeLang2()"></span>
                        <div class="dropdown_wrap" v-show="langFlag2" >
                            <div class="sheetDim" @click="changeLang2()"></div>
                            <div class="dropdown">            
                                <ul  @click="changeLang2()">
                                <!-- 
                                    position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력             
                                -->
                                <li>나의 지식 CLIPing</li>
                                <li>나의 지식 CLIPing</li>
                                <li>내가 본 콘텐츠</li>
                                <li>관심 CLIPing</li>
                                <li>나의 지식 CLIPing 활동 이력</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="thum">
                            <span class="label5">사전학습</span>
                            <div class="cDim"></div>
                            <div class="thumbnail">
                                <img src="@/assets/img/thum_no_L2.jpg" class="width100" alt="">
                            </div>
                        </div>
                        <div class="text">
                            <a href="#" class="tit">업무에 바로 쓰는 파이썬 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3">이러닝</li>
                                <li class="color_danger">승인반려</li>
                            </ul>
                        </div>
                        <span class="moredot" @click="changeLang3()"></span>
                        <div class="dropdown_wrap" v-show="langFlag3" >
                            <div class="sheetDim" @click="changeLang3()"></div>
                            <div class="dropdown">            
                                <ul  @click="changeLang3()">
                                <!-- 
                                    position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력             
                                -->
                                <li>나의 지식 CLIPing</li>
                                <li>나의 지식 CLIPing</li>
                                <li>내가 본 콘텐츠</li>
                                <li>관심 CLIPing</li>
                                <li>나의 지식 CLIPing 활동 이력</li>
                                </ul>
                            </div>
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
      langFlag1: false,
      langFlag2: false,
      langFlag3: false
    }
  },
  /* vue function */
  methods: {
    changeLang1 () {
      this.langFlag1 = !this.langFlag1
    },
    changeLang2 () {
      this.langFlag2 = !this.langFlag2
    },
    changeLang3 () {
      this.langFlag3 = !this.langFlag3
    }
  }
}
</script>
