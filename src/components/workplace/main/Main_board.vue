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
                <h2 class="h-tit2 fwb600 mb10">공통 게시판</h2>
                <!-- cBox -->
                <div class="cBox">
                    <!-- tab -->
                    <div class="tabWrap type2">
                        <div  class="tabMenu">
                        <ul>
                            <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                            <li><a href="#tab2">이미지투데이</a></li>
                            <li><a href="#tab3">인문학이야기</a></li>
                        </ul>
                        </div>

                        <div class="tabCnt dpb" id="tab1"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                        <!-- list -->
                        <ul class="ulList2">
                            <li v-if="!boardList.length" class="no-date"><p><span class="ico"></span>작성된 게시글이 없습니다</p></li>
                            <li v-for="item in boardList" :key="item.id"><a href="#"><span class="cate color_clr1">{{item.cate}}</span><p class="txt">{{item.title}}</p></a></li>
                        </ul>
                        <!-- //list -->
                        </div>
                    </div>
                    <!-- //tab -->
                </div>
                <!-- //cBox -->
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
  name: 'Main_board',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 1,
      boardList: [
        {cate: '이벤트', title: '고현숙의 코칭 리더십-팀 성과 향상을 위한 코칭'},
        {cate: '안내', title: 'LEAP(Leadership Acceleration Program)'},
        {cate: '이벤트', title: '마켓 트레블러 황성욱의 트렌드 센싱'}
      ]
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
