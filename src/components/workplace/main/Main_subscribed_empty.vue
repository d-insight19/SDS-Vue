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
                <h1 class="h-tit1 fwb700 mb20">구독</h1>
                <h2 class="h-tit2 fwb600 mb10">Channel
                    <div class="fr color_clr2 font_14 fwl">전체보기</div>
                </h2>

                <div class="no-date">
                    <p>현재 구독 중인 채널이 없습니다</p>
                    <p>지금 다양한 분야와 전문가들의 살아있는<br/>지식을 만나보세요.</p>
                    <a href="#" class="clr2">채널 둘러보기</a>
                </div>
            </div>
          </div>


          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 mb0">Channel Keywords</h2>
                <p class="sub-tit mb10">키워드로 살펴보는 다양한 전문가 채널의 글들</p>
                <!-- list -->
                <ul class="ulList type1">
                    <li>
                        <div class="in-chk">
                        <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">#문화유산 답사 <span class="ico arrow"></span></span></label>
                        <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">#남북정상회담 <span class="ico arrow"></span></span></label>
                        <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">#Peace <span class="ico arrow"></span></span></label>
                        <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">#2018 Design Trend <span class="ico arrow"></span></span></label>
                        <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">#Interaction <span class="ico arrow"></span></span></label>
                        <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">#Big Data <span class="ico arrow"></span></span></label>
                        <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">#Technology <span class="ico arrow"></span></span></label>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
            </div>
          </div>


          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 mb0">Recommended Articles</h2>
                <p class="sub-tit mb10">꼭 한번 읽어보면 좋을 멋진 글</p>
                
                <div class="scroll-x type2">
                    <!-- list -->
                    <ul class="thumList type2">
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">만화로 배우는 알기 쉬운 경영전략</a>
                            <a href="#" class="writer">홍길동</a>
                            <ul class="info">
                                <li class="icon">
                                    <span class="view ico"></span><span class="info_value">2,190</span>
                                </li>
                                <li class="icon">
                                    <span class="like ico"></span><span class="info_value">36</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">만화로 배우는 알기 쉬운 경영전략</a>
                            <a href="#" class="writer">홍길동</a>
                            <ul class="info">
                                <li class="icon">
                                    <span class="view ico"></span><span class="info_value">2,190</span>
                                </li>
                                <li class="icon">
                                    <span class="like ico"></span><span class="info_value">36</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">만화로 배우는 알기 쉬운 경영전략</a>
                            <a href="#" class="writer">홍길동</a>
                            <ul class="info">
                                <li class="icon">
                                    <span class="view ico"></span><span class="info_value">2,190</span>
                                </li>
                                <li class="icon">
                                    <span class="like ico"></span><span class="info_value">36</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">만화로 배우는 알기 쉬운 경영전략</a>
                            <a href="#" class="writer">홍길동</a>
                            <ul class="info">
                                <li class="icon">
                                    <span class="view ico"></span><span class="info_value">2,190</span>
                                </li>
                                <li class="icon">
                                    <span class="like ico"></span><span class="info_value">36</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">만화로 배우는 알기 쉬운 경영전략</a>
                            <a href="#" class="writer">홍길동</a>
                            <ul class="info">
                                <li class="icon">
                                    <span class="view ico"></span><span class="info_value">2,190</span>
                                </li>
                                <li class="icon">
                                    <span class="like ico"></span><span class="info_value">36</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    </ul>
                    <!-- //list -->
                </div>
            </div>
          </div>

          
          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 mb0">Hey, Day Writer</h2>
                <p class="sub-tit mb10">Hey, Day 지식 창고 작가들</p>
                
                
                <div class="scroll-x type2">
                    <!-- list -->
                    <ul class="thumList type8">
                        <li>
                            <div class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </div>
                            <a href="#" class="tit">홍길동</a>
                            <a href="#" class="sub-tit">멀티캠퍼스 멀티미디어팀</a>
                        </li>
                        <li>
                            <div class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </div>
                            <a href="#" class="tit">홍길동</a>
                            <a href="#" class="sub-tit">멀티캠퍼스 멀티미디어팀</a>
                        </li>
                        <li>
                            <div class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </div>
                            <a href="#" class="tit">홍길동</a>
                            <a href="#" class="sub-tit">멀티캠퍼스 멀티미디어팀</a>
                        </li>
                        <li>
                            <div class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </div>
                            <a href="#" class="tit">홍길동</a>
                            <a href="#" class="sub-tit">멀티캠퍼스 멀티미디어팀</a>
                        </li>
                        <li>
                            <div class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </div>
                            <a href="#" class="tit">홍길동</a>
                            <a href="#" class="sub-tit">멀티캠퍼스 멀티미디어팀</a>
                        </li>
                        <li>
                            <div class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </div>
                            <a href="#" class="tit">홍길동</a>
                            <a href="#" class="sub-tit">멀티캠퍼스 멀티미디어팀</a>
                        </li>
                    </ul>
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
  name: 'Main_subscribed_empty',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 3
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
