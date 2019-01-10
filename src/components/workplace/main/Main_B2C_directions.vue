<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MainType">

        <!-- header 1단형 아이콘 -->
        <div id="header" class="mainType">
            <div class="header_inner line1">
                <button type="button" class="btn allMenu"><span class="ico">전체메뉴</span><span class="ico new"></span></button>
                <ul class="gnbMenu">
                    <!-- selected class:on -->
                    <li class="menu menu_home" :class="{'on': tabIdx == 1}" @click="onClick(1)">
                        <a href="#" class="menu_icon"><span class="ico"></span></a>
                        <a href="#" class="menu_txt">추천</a>
                    </li>
                    <li class="menu menu_exploration" :class="{'on': tabIdx == 2}" @click="onClick(2)">
                        <a href="#" class="menu_icon"><span class="ico"></span></a>
                        <a href="#" class="menu_txt">탐색</a>
                    </li>
                    <li class="menu menu_subscription" :class="{'on': tabIdx == 3}" @click="onClick(3)">
                        <a href="#" class="menu_icon"><span class="ico"></span></a>
                        <a href="#" class="menu_txt">구독</a>
                    </li>
                    <li class="menu menu_learn" :class="{'on': tabIdx == 4}" @click="onClick(4)" style="display:none;">
                        <a href="#" class="menu_icon"><span class="ico"></span></a>
                        <a href="#" class="menu_txt">학습</a>
                    </li>                
                </ul>
                <p class="main_tit_txt">타이틀</p>
                <button type="button" class="btn btnSch"><span class="ico">검색</span></button>
            </div>
            <div class="header_inner line2">
                <ul class="gnbMenu">
                    <!-- selected class:on -->
                    <li class="menu menu_home on">
                        <a href="#" class="menu_icon"><span class="ico"></span></a>
                        <a href="#" class="menu_txt">추천</a>
                    </li>
                    <li class="menu menu_exploration">
                        <a href="#" class="menu_icon"><span class="ico"></span></a>
                        <a href="#" class="menu_txt">탐색</a>
                    </li>
                    <li class="menu menu_subscription">
                        <a href="#" class="menu_icon"><span class="ico"></span></a>
                        <a href="#" class="menu_txt">구독</a>
                    </li>
                    <li class="menu menu_learn">
                        <a href="#" class="menu_icon"><span class="ico"></span></a>
                        <a href="#" class="menu_txt">학습</a>
                    </li>
                </ul>
            </div>
        </div>

        <div id="content" class="list">
        
          <!-- //component -->
          <div class="cell">
            <div class="inner">
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
                            <a href="#" class="tit">경기빅데이터 전문가 과정(기술과 분석편)</a>
                            <ul class="info">
                                <li class="color_clr3 fwb">이러닝</li>
                                <li><span class="star ico"></span>4.5</li>
                            </ul>
                            <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
                <p class="hr mb0"></p>
            </div>
          </div>

                
          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb10">찾아오시는 길</h2>
                <p class="font_14">서울특별시 강남구 테헤란로 212 (역삼동 718-5번지)</p>
                <p class="font_14 mb10">멀티캠퍼스 교육센터 (멀티스퀘어)</p>
                
                <div class="">
                    <img src="@/assets/img/thum_no_L.jpg" class="w100p" alt="">
                </div>
                <p class="hr mb0"></p>
            </div>
          </div>

                
          <div class="cell">
            <div class="inner directions">
                <div class="fl width50 pr18">
                    <h2 class="h-tit2 fwb600 mb8">1:1 문의</h2>
                </div>
                <div class="fr width50 pl18">
                    <h2 class="h-tit2 fwb600 mb8">고객센터</h2>
                </div>

                <div class="fl width50 pr18 br">
                    <p class="font_14 mono_65">사이트/과정 문의에</p>
                    <p class="font_14 mono_65">필요한 모든것을</p>
                    <p class="font_14 mono_65 mb25">알려드립니다.</p>
                    <slp-button class="sm">문의하기</slp-button>
                </div>
                
                <div class="fr width50 pl18">
                    <p class="font_14 mono_80">평일 08:00 - 20:00</p>
                    <p class="font_14 mono_80 mb5">휴일 09:00 - 18:00</p>
                    <p class="font_14 mono_50">휴일 점심시간 </p>
                    <p class="font_14 mono_50 mb5">12:00 - 13:00 제외</p>
                    <p class="font_26 color_clr2">1544-9001</p>
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
  name: 'Main_B2C_directions',
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
