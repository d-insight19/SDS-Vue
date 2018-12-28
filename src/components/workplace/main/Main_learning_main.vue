<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MainType">

        <!-- header 1단형 -->
        <div id="header" class="mainType">
            <button type="button" class="btn allMenu"><span class="ico">전체메뉴</span><span class="ico new"></span></button>
            <ul class="gnbMenu">
                <!-- selected class:on -->
                <li class="menu menu_home" :class="{'on': tabIdx == 1}" @click="onClick(1)">
                    <a href="#"><span class="ico">추천</span></a>
                </li>
                <li class="menu menu_exploration" :class="{'on': tabIdx == 2}" @click="onClick(2)">
                    <a href="#"><span class="ico">카테고리</span></a>
                </li>
                <li class="menu menu_learn" :class="{'on': tabIdx == 3}" @click="onClick(3)">
                    <a href="#"><span class="ico">학습</span></a>
                </li>
            </ul>
            <button type="button" class="btn btnSch"><span class="ico">검색</span></button>
        </div>
        <!-- //header -->

        <div id="content" class="etc">
                
          <!-- component -->
          <div class="cell">
            <div class="inner">
                <h1 class="h-tit1 fwb700 mb20">학습</h1>
                <h2 class="h-tit2 fwb600 mb10">최근 진행중인 학습</h2>
                
                <!-- list -->
                <ul class="thumList type4">
                    <li>
                        <div class="thum">
                            <span class="label big">정규</span>
                            <span class="label4">D-29</span>
                            <span class="progWrap"><em class="bar clr2" style="width:40%;"></em></span>
                            <div class="cDim"></div>
                            <div class="thumbnail">
                                <img src="@/assets/img/thum_no_L2.jpg" class="width100" alt="">
                            </div>
                        </div>
                        <div class="text">
                            <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                            <ul class="info">
                                <li class="fwb color_clr3">이러닝</li>
                                <li><strong>취득점수</strong><span><em class="">85</em>/100</span></li>
                                <li><strong>진도율</strong><span><em class="">24</em>%</span></li>
                            </ul>
                            <button type="button" title="title" class="btn xxxs mono_65 width_inherit">취소하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="thum">
                            <span class="label big">자율</span>
                            <span class="label4">D-29</span>
                            <span class="progWrap"><em class="bar clr2" style="width:20%;"></em></span>
                            <div class="cDim"></div>
                            <div class="thumbnail">
                                <img src="@/assets/img/thum_no_L2.jpg" class="width100" alt="">
                            </div>
                        </div>
                        <div class="text">
                            <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                            <ul class="info">
                                <li class="fwb color_clr3">이러닝</li>
                                <li>총 99차시</li>
                                <li>최종학습일 2018.10.18</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
            </div>
          </div>
          <!-- //component -->

        </div>
        <div class="btn-quickWrite"></div>
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Main_learning_main',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 3
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
