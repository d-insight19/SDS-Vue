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
        
          <!-- //component -->
          <div class="cell">
            <div class="inner">
                <h1 class="h-tit1 mb20">탐색</h1>
                <h2 class="h-tit2 mb10">경영·리더십</h2>
                <div class="scroll-x type2">
                
                    <div class="inner2">
                        <a href="#" class="category">MBA <span class="ico next_16_80"></span></a>
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
                                </ul>
                                <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                                </div>
                            </li>
                            <li>
                                <div class="in">
                                <a href="#" class="thum">
                                    <span class="label">자율</span>
                                    <div class="thumbnail">
                                        <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                    </div>
                                </a>

                                <a href="#" class="tit">업무에 바로 쓰는 경영 경제 입문 과정</a>
                                <ul class="info">
                                    <li><span class="star ico"></span>4.5</li>
                                </ul>
                                <div class="tagWrap"></div>
                                </div>
                            </li>
                        </ul>
                        <!-- //list -->
                    </div>
                    <div class="inner2">
                        <a href="#" class="category">비즈니스 리더십 <span class="ico next_16_80"></span></a>
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
                                </ul>
                                <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                                </div>
                            </li>
                            <li>
                                <div class="in">
                                <a href="#" class="thum">
                                    <span class="label">자율</span>
                                    <div class="thumbnail">
                                        <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                    </div>
                                </a>

                                <a href="#" class="tit">업무에 바로 쓰는 경영 경제 입문 과정</a>
                                <ul class="info">
                                    <li><span class="star ico"></span>4.5</li>
                                </ul>
                                <div class="tagWrap"></div>
                                </div>
                            </li>
                        </ul>
                        <!-- //list -->
                    </div>
                </div>
            </div>
          </div>

                
          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 mb10">외국어</h2>
                <div class="scroll-x type2">
                    <div class="inner2">
                        <a href="#" class="category">영어 <span class="ico next_16_80"></span></a>
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
                                <a href="#" class="tit">예제로 배우는 실전 토익 문제풀이</a>
                                <ul class="info">
                                    <li class="color_clr3">이러닝</li>
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
                                        <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                    </div>
                                </a>
                                <a href="#" class="tit">예제로 배우는 실전 토익 문제풀이</a>
                                <ul class="info">
                                    <li class="color_clr3">이러닝</li>
                                    <li><span class="star ico"></span>4.5</li>
                                </ul>
                                <div class="tagWrap"></div>
                                </div>
                            </li>
                        </ul>
                        <!-- //list -->
                    </div>
                    <div class="inner2">
                        <a href="#" class="category">중국어 <span class="ico next_16_80"></span></a>
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
                                <a href="#" class="tit">예제로 배우는 실전 토익 문제풀이</a>
                                <ul class="info">
                                    <li class="color_clr3">이러닝</li>
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
                                        <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                    </div>
                                </a>
                                <a href="#" class="tit">예제로 배우는 실전 토익 문제풀이</a>
                                <ul class="info">
                                    <li class="color_clr3">이러닝</li>
                                    <li><span class="star ico"></span>4.5</li>
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
          <!-- //component -->

        </div>
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Main_browse_main',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 2
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
