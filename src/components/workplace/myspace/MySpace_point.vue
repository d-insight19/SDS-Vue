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
                    <li><a href="#tab3">학습 계획</a></li>
                    <li><a href="#tab4">다운로드</a></li>
                    <li><a href="#tab5">나의 지식 CLIPing</a></li>
                    <li><a href="#tab6">학습 관리</a></li>
                    <li><a href="#tab7">학습 통계</a></li>
                    <li><a href="#tab8">학점 현황</a></li>
                    <li class="on"><a href="#tab9">포인트 현황</a></li>
                    <li><a href="#tab10">쿠폰 관리</a></li>
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
            <div class="inner mr-18 ml-18 pt18 gray_bg ">
                <div class="scroll-x">
                    <ul class="point_area">
                        <li>
                            <div class="in">
                                <p class="title">나의 순위 <span class="fr font_14 mono_50 fwr">2018.10 기준</span></p>
                                <p class="score"><span class="ico trophy_64"></span><strong>39</strong>위</p>
                                <p class="rank">전체 43,218 명</p>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <p class="title">나의 등급 <span class="fr ico info blue"></span></p>
                                <p class="score mb5"><span class="ico grade_64 gold"></span> GOLD</p>
                                <p class="grade1">342 P</p>
                                <ul class="progBox_wrap">
                                    <li>
                                        <div class="progBox">
                                            <div class="bar2" style="width:20%; height:8px;"></div>
                                        </div>
                                    </li>
                                </ul>
                                <p class="grade2">PLATINUM 등급까지 500P 남았습니다</p>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <p class="title">나의 포인트 현황</p>
                                <p class="score"><span class="ico coin_64"></span><strong>2,542</strong>P</p>
                                <ul class="point_list">
                                    <li>
                                        <p class="point_title">학습</p>
                                        <p class="point_score"><span>2,325</span> P</p>
                                    </li>
                                    <li>
                                        <p class="point_title">커뮤니티</p>
                                        <p class="point_score"><span>325</span> P</p>
                                    </li>
                                    <li>
                                        <p class="point_title">과정제작</p>
                                        <p class="point_score"><span>325</span> P</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <ul class="pager_list">
                    <li class="active">
                        <span class="dot"></span>
                    </li>
                    <li>
                        <span class="dot"></span>
                    </li>
                    <li>
                        <span class="dot"></span>
                    </li>
                </ul>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="label-tit15 w100p">
                    포인트 적립 내역
                    <span class="fr ico filter"></span>
                </h2>
                <ul class="multiList type1">
                    <li>
                        <div class="in">
                            <div class="multiline line3">
                                4차 산업혁명, 이것만 알면 다 된다! - 인공지능 편 [스마트러닝] 학습
                            </div>
                            <ul class="info">
                                <li class="fwb color_clr3">학습포인트</li>
                                <li class="">포인트 적립일 2018.10.10</li>
                            </ul>
                        </div>
                        <span class="metatxt color_clr2">+230P</span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line3">
                                세상을 바꾸는 제 4차 산업혁명의 미래, 노트공유 포인트 획득 
                            </div>
                            <ul class="info">
                                <li class="fwb color_clr3">학습포인트</li>
                                <li class="">포인트 적립일 2018.10.10</li>
                            </ul>
                        </div>
                        <span class="metatxt color_clr2">+15P</span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line3">
                                업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정 - 한 눈에 살펴 보는 자바의 기본, 자바 기본 개념 프로그래밍 입문 과정 프로그래밍 입문 과정
                            </div>
                            <ul class="info">
                                <li class="fwb color_clr3">학습포인트</li>
                                <li class="">포인트 적립일 2018.10.10</li>
                            </ul>
                        </div>
                        <span class="metatxt color_clr2">+230P</span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line3">
                                4차 산업혁명, 이것만 알면 다 된다! - 인공지능 편 [스마트러닝] 학습
                            </div>
                            <ul class="info">
                                <li class="fwb color_clr3">학습포인트</li>
                                <li class="">포인트 적립일 2018.10.10</li>
                            </ul>
                        </div>
                        <span class="metatxt color_clr2">+20P</span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line3">
                                4차 산업혁명, 이것만 알면 다 된다!
                            </div>
                            <ul class="info">
                                <li class="fwb color_clr3">학습포인트</li>
                                <li class="">포인트 적립일 2018.10.10</li>
                            </ul>
                        </div>
                        <span class="metatxt color_clr2">+230P</span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line3">
                                업무에 바로 쓰는 자바 스크립트 프로
그래밍 입문 과정 - 한 눈에 살펴보는 
자바의 기본, 자바 기본 개념 
                            </div>
                            <ul class="info">
                                <li class="fwb color_clr3">학습포인트</li>
                                <li class="">포인트 적립일 2018.10.10</li>
                            </ul>
                        </div>
                        <span class="metatxt color_clr2">+230P</span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line3">
                                업무에 바로 쓰는 자바 스크립트 프로
그래밍 입문 과정 - 한 눈에 살펴보는 
자바의 기본, 자바 기본 개념 
                            </div>
                            <ul class="info">
                                <li class="fwb color_clr3">학습포인트</li>
                                <li class="">포인트 적립일 2018.10.10</li>
                            </ul>
                        </div>
                        <span class="metatxt color_clr2">+230P</span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line3">
                                업무에 바로 쓰는 자바 스크립트 프로
그래밍 입문 과정 - 한 눈에 살펴보는 
자바의 기본, 자바 기본 개념 
                            </div>
                            <ul class="info">
                                <li class="fwb color_clr3">학습포인트</li>
                                <li class="">포인트 적립일 2018.10.10</li>
                            </ul>
                        </div>
                        <span class="metatxt color_clr2">+5P</span>
                    </li>
                </ul>
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
  name: 'MySpace_point',
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
