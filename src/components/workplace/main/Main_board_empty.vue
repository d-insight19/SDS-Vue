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
  name: 'Main_board_empty',
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
      ]
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
