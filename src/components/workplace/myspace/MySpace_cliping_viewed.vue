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
                    <li class="on"><a href="#tab5">나의 지식 CLIPing</a></li>
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
                <p class="font_15 mono_80 fwb">
                    내가 본 콘텐츠 <span class="ico down"></span>
                    <span class="ico filter"></span>
                </p>
            </div>
          </div>

          <div class="cell">
            <div class="inner ml-18 mr-18 pt0">
                <!-- list -->
                <ul class="cardList type2">
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="label clr2">시리즈</div>
                                <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                            </a>
                            <a href="#" class="tit">인공지능 시대, 불안 대신 자유를 누리는 방법</a>
                            <p class="font_12 mono_80">세상을 바꾸는 시간 15분: 라이프타임 입…</p>
                            <ul class="info">
                                <li class="color_clr3 fwb">지식영상</li>
                                <li>2018.10.10</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                            </a>
                            <a href="#" class="tit">그것이 나만은 아니기를: 내 밖에 있는 나 아닌 모든 것에 대하여...</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">도서요약</li>
                                <li>2018.10.10</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                            </a>
                            <a href="#" class="tit">가나가와 치히로의 경영 성공철학 100가지 비법</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">도서요약</li>
                                <li>2018.10.10</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                            </a>
                            <a href="#" class="tit">글쓰기가 뭐라고</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">서평칼럼</li>
                                <li>2018.10.10</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                            </a>
                            <a href="#" class="tit">ISO 국제규격 양식</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">Paper Pro</li>
                                <li>2018.10.10</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="label clr2">시리즈</div>
                                <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                            </a>
                            <a href="#" class="tit">입신의 경지에 이르다</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">지식영상</li>
                                <li>2018.10.10</li>
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
  name: 'MySpace_cliping_viewed',
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
