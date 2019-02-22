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
                    <li class="on"><a href="#tab4">다운로드</a></li>
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
            <div class="downloadCondition ml-18 mr-18">
                <div class="w48p fl">
                    <p class="font_12 mono_50 fwb">저장공간 사용량</p>
                    <p class="font_13 mono_65 fwb">24% <span class="font_11 mono_50 fwr">(123.21 GB/512.51 GB)</span></p>
                </div>
                <div class="w48p fr">
                    <p class="font_12 mono_50 fwb">다운로드한 강의</p>
                    <p class="font_13 mono_65 fwb">978.21 MB</p>
                </div>
            </div>
          </div>

          <div class="cell">
            <div class="filterArea ml-18 mr-18">
                <p class="font_15 mono_80 fwb">
                    학습 중인 과정 <span class="mono_50">4</span>
                    
                    <slp-dropdown dimmed v-model="lang" rootClass="dib">
                        <span class="ico down" slot="trigger"></span>
                        <slp-dropdown-item :value="'수강중인 과정'">수강중인 과정</slp-dropdown-item>
                        <slp-dropdown-item :value="'완료한 과정'">완료한 과정</slp-dropdown-item>
                    </slp-dropdown>
                    
                    <span class="fr">
                        <span class="font_14 color_clr2 fwr">편집</span>
                    </span>
                </p>
            </div>
          </div>

          <div class="cell">
            <div class="inner pt0 ml-18 mr-18">
                <!-- list -->
                <ul class="thumList type1">
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                            </ul>
                            <ul class="info">
                                <li class="mono_80"><span>12</span>개 다운로드됨</li>
                                <li class="mono_80"><span>232.23 MB</span></li>
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
                            <a href="#" class="tit">기초부터 예제까지, 한 달 안에 배우는 iOS 개발자...</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                            </ul>
                            <ul class="info">
                                <li class="mono_80"><span>12</span>개 다운로드됨</li>
                                <li class="mono_80"><span>232.23 MB</span></li>
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
                            <a href="#" class="tit">초보자를 위한 기술</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                            </ul>
                            <ul class="info">
                                <li class="mono_80"><span>12</span>개 다운로드됨</li>
                                <li class="mono_80"><span>232.23 MB</span></li>
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
                            <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                            </ul>
                            <ul class="info">
                                <li class="mono_80"><span>12</span>개 다운로드됨</li>
                                <li class="mono_80"><span>232.23 MB</span></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in done">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">업무에 바로 쓰는 자바 입문</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                            </ul>
                            <ul class="info">
                                <li class="mono_80"><span>12</span>개 다운로드됨</li>
                                <li class="mono_80"><span>232.23 MB</span></li>
                            </ul>
                            <p class="action center">청강기간 만료</p>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
            </div>
          </div>

        </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">
                <p class="offlineMent mono_0 tac fwl">오프라인 상태입니다</p>
            </div>
            <!-- //floatingbtn -->
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'MySpace_download_offline',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      lang: '수강중인 과정'
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
