<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery CLIPingType">

        <!-- header -->
        <div id="header" class="tab clr4">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">나승연의 글로벌 비즈니스 커뮤니케이션</p>
            </div>
            <div class="hide_header" style="padding-top: 74px; height:234px;">
                <div class="tagWrap mb10"><span>지식영상</span></div>
                <h2 class="h-tit2 fwb600 mb20 font_22 multiline line2">나승연의 글로벌 비즈니스<br/> 커뮤니케이션</h2>
                <ul class="info mb20">
                    <li class="icon fwr"><span class="star ico"></span><span>4.5</span></li>
                    <li class="fwr">총 <span>119</span>편</li>
                </ul>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="etc">
        
          
          
          <div class="cell">
            <div class="inner">
                <div class="total">
                    <span>총 <strong>119</strong>건</span>
                    <ul class="fr">
                        <li><span>최신순</span> <span class="ico down"></span></li>
                    </ul>
                </div>

                <!-- list -->
                <ul class="thumList">
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">사람과 세상을 바꾼 공동체지도 이야기</a>
                            <ul class="info">
                                <li class="icon mono_80">
                                    <span class="view ico"></span> <span class="info_value">2,190</span>
                                </li>
                                <li class="icon mono_80">
                                    <span class="heart2 ico"></span> <span class="info_value">36</span>
                                </li>
                                <li class="icon mono_80">
                                    <span class="time ico"></span> <span class="info_value">17:32</span>
                                </li>
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
                            <a href="#" class="tit">사람과 세상을 바꾼 공동체지도 이야기</a>
                            <ul class="info">
                                <li class="icon mono_80">
                                    <span class="view ico"></span> <span class="info_value">2,190</span>
                                </li>
                                <li class="icon mono_80">
                                    <span class="heart2 ico"></span> <span class="info_value">36</span>
                                </li>
                                <li class="icon mono_80">
                                    <span class="time ico"></span> <span class="info_value">17:32</span>
                                </li>
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
                            <a href="#" class="tit">사람과 세상을 바꾼 공동체지도 이야기</a>
                            <ul class="info">
                                <li class="icon mono_80">
                                    <span class="view ico"></span> <span class="info_value">2,190</span>
                                </li>
                                <li class="icon mono_80">
                                    <span class="heart2 ico"></span> <span class="info_value">36</span>
                                </li>
                                <li class="icon mono_80">
                                    <span class="time ico"></span> <span class="info_value">17:32</span>
                                </li>
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
                            <a href="#" class="tit">사람과 세상을 바꾼 공동체지도 이야기</a>
                            <ul class="info">
                                <li class="icon mono_80">
                                    <span class="view ico"></span> <span class="info_value">2,190</span>
                                </li>
                                <li class="icon mono_80">
                                    <span class="heart2 ico"></span> <span class="info_value">36</span>
                                </li>
                                <li class="icon mono_80">
                                    <span class="time ico"></span> <span class="info_value">17:32</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
            </div>
          </div>

        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li @click="active_el"><button type="button" class="btn md"><span class="ico heart_solid_32" :class="{ blue : active }"></span><span :class="{ color_clr2 : active}">찜하기</span></button></li>
                <!--<li><button type="button" class="btn md staus_crl1"><span class="ico like_32 red"></span>좋아요</button></li>-->
            </ul>
        </div>
        <!-- //floating button --> 
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>

<script>
/* eslint-disable */
export default {
  name: 'CLIPing_videoSeries_detail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
        active : false
    }
  },
  /* vue function */
  methods: {
      active_el () {
          this.active = !this.active
      }
  }
}
</script>
