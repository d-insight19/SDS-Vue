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
                <h2 class="h-tit2 fwb600 mb0">등록한 콘텐츠 <span class="fr font_13 mono_50 fwr">업데이트일 <span>2018.10.31</span></span></h2>
                <!-- status -->
                <div class="status">
                    <div class="white">
                        <div class="info">
                            <p>총 <strong>120</strong> 개</p>
                        </div>
                        <dl>
                            <dt>과정</dt>
                            <dd><strong>105</strong> 개</dd>
                        </dl>
                        <dl class="line">
                            <dt>차시</dt>
                            <dd><strong>15</strong> 개</dd>
                        </dl>
                    </div>
                </div>
                <!-- //status -->
                <p class="hr mb0"></p>
            </div>
          </div>
          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mt0 mb10">내가 찜한 콘텐츠</h2>

                <!-- list -->
                <ul class="cardList type2 x100">
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">기초부터 예제까지 iOS 개발자를 위한 업무에 바로 쓰는 스플래...</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                                <li>2018.10.10</li>
                                <li><span class="star ico"></span>4.5</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                                <div class="tagWrap"></div>
                            </a>
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li class="fwb">5차시</li>
                                <li>2018.10.10</li>
                                <li><span class="star ico"></span>4.5</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">자바 스크립트 기획부터 실행까지 기본기를 정리하는 시간</a>
                            <ul class="info">
                                <li>2018.10.10</li>
                                <li><span class="star ico"></span>4.5</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                                <div class="tagWrap"></div>
                            </a>
                            <a href="#" class="tit">구글 벤처스의 5일 만에 실행</a>
                            <ul class="info">
                                <li class="fwb">2차시</li>
                                <li>2018.10.10</li>
                                <li><span class="star ico"></span>4.5</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">기초부터 예제까지 iOS 개발자를 위한 업무에 바로 쓰는 스플래...</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                                <li>2018.10.10</li>
                                <li><span class="star ico"></span>4.5</li>
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
  name: 'MySpace_learningjourney_like',
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
