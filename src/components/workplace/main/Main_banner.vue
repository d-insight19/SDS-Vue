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
                <ul class="banner_list mr-18 ml-18">
                    <li>
                        <div class="banner_area">
                            <div class="banner_image">
                                <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                            </div>
                            <div class="banner_pager">
                                <p>01/18</p>
                            </div>
                            <div class="banner_content">
                                <p>
                                    <strong class="font_20">블록체인과 비즈니스 혁신</strong><br/>
                                    비즈니스, 기술, 자기 계발 분야에서 능력을 키우세요
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="banner_area">
                            <div class="banner_image">
                                <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                            </div>
                            <div class="banner_pager">
                                <p>01/18</p>
                            </div>
                            <div class="banner_content">
                                <p>
                                    <strong class="font_20">블록체인과 비즈니스 혁신</strong><br/>
                                    비즈니스, 기술, 자기 계발 분야에서 능력을 키우세요
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
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
                                <span class="label">자율</span>
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

                
          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb10">임직원 필수 교육 추천과정</h2>
                <div class="scroll-x type2">
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
                            <div class="tagWrap"></div>
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
                            <a href="#" class="tit">만화로 배우는 알기 쉬운 경영 기초전략</a>
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
  name: 'Main_banner',
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
