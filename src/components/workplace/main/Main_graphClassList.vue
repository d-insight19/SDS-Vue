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
                <li class="menu menu_subscription" :class="{'on': tabIdx == 3}" @click="onClick(3)">
                    <a href="#"><span class="ico">나의공간</span></a>
                </li>
            </ul>
            <button type="button" class="btn btnSch"><span class="ico">검색</span></button>
        </div>
        <!-- //header -->

        <div id="content" class="list">
                
          <!-- component -->
          <div class="cell">
            <div class="inner">
                <h1 class="h-tit1 fwb700 mb20">추천</h1>
                <h2 class="h-tit2 fwb600 mb10">학습목록</h2>

                <div class="scroll-x type2">
                    <!-- list -->
                    <ul class="thumList type4">
                        <li>
                            <div class="thum">
                                <span class="label">D-29</span>
                                <span class="progWrap"><em class="bar clr2" style="width:40%;"></em></span>
                                <div class="cDim"></div>
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                                </div>
                            </div>
                            <div class="text">
                                <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                                <ul class="info">
                                    <li class="fwb color_clr3">이러닝</li>
                                    <li><strong>취득점수</strong><span><em class="">85</em>/100</span></li>
                                    <li><strong>진도율</strong><span><em class="">24</em>%</span></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="thum">
                                <span class="label">D-29</span>
                                <span class="progWrap"><em class="bar clr2" style="width:40%;"></em></span>
                                <div class="cDim"></div>
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                                </div>
                            </div>
                            <div class="text">
                                <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                                <ul class="info">
                                    <li class="fwb color_clr3">이러닝</li>
                                    <li><strong>취득점수</strong><span><em class="">85</em>/100</span></li>
                                    <li><strong>진도율</strong><span><em class="">24</em>%</span></li>
                                </ul>
                            </div>
                        </li>
                        <div class="moreBtnWrap">
                            <div class="moreBtn">
                            <div class="moreIcon"></div>
                            <p>전체목록 이동</p>
                            </div>
                        </div>
                    </ul>
                    <!-- //list -->
                </div>
            </div>
          </div>

              
          <div class="cell">  
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb10">'마케팅직무'를 위한 추천과정</h2>
                <!-- list -->
                <ul class="thumList">
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <span class="label">정규</span>
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                                <li><span class="star ico"></span>4.5</li>
                            </ul>
                            <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <span class="label">정규</span>
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                                <div class="tagWrap"></div>
                            </a>

                            <a href="#" class="tit">기초부터 예제까지 iOS 개발자를 위한 업무에 바로 쓰는 스플...</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                                <li><span class="star ico"></span>4.5</li>
                            </ul>
                            <div class="tagWrap"></div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <span class="label">정규</span>
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>

                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                                <li><span class="star ico"></span>4.5</li>
                            </ul>
                            <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
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
  name: 'Main_graphClassList',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 1
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
