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
                <h2 class="h-tit2 fwb600 mb10">정부 무료과정</h2>

                <ul class="multiList banner mb15">
                    <li class="bg_CLIPingMain">
                        <div class="in">
                            <p class="font_18 mono_0">혁신성장 청년인재</p>
                        </div>
                        <span class="ico arrow"></span>
                    </li>
                    <li class="bg_CLIPingMain">
                        <div class="in">
                            <p class="font_18 mono_0">4차산업혁명 선도인력양성</p>
                        </div>
                        <span class="ico arrow"></span>
                    </li>
                    <li class="bg_CLIPingMain">
                        <div class="in">
                            <p class="font_18 mono_0">경기 빅데이터 교육</p>
                        </div>
                        <span class="ico arrow"></span>
                    </li>
                    <li class="bg_CLIPingMain">
                        <div class="in">
                            <p class="font_18 mono_0">청년취업 아카데미</p>
                        </div>
                        <span class="ico arrow"></span>
                    </li>
                    <li class="bg_CLIPingMain">
                        <div class="in">
                            <p class="font_18 mono_0">정부 무료과정 타이틀</p>
                        </div>
                        <span class="ico arrow"></span>
                    </li>
                </ul>
            </div>
          </div>


          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb10">운영자 추천과정</h2>
                <!-- list -->
                <ul class="thumList">
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>

                            <a href="#" class="tit">경기빅데이터 전문가 과정(기술과 분석편)</a>
                            <ul class="info">
                                <li><span class="star ico"></span>4.5</li>
                            </ul>
                            <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>

                            <a href="#" class="tit">경기빅데이터 전문가 과정(기술과 분석편)</a>
                            <ul class="info">
                                <li><span class="star ico"></span>4.5</li>
                            </ul>
                            <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>

                            <a href="#" class="tit">경기빅데이터 전문가 과정(기술과 분석편)</a>
                            <ul class="info">
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
  name: 'Main_B2C_freeCourse2',
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
