<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery CLIPingType">   

        <!-- header -->
        <div id="header" class="tab ">
            <div class="video_area">

            </div>
            <div class="header_inner line1">
            </div>
            <div class="hide_header" style="padding-top: 74px; padding-bottom:42px;">
                <p class="h-tit1 fwb600 mb12">사람과 세상을 바꾼 공동체지도 이야기</p>
                <p class="h-tit5 mb8">경영전략/혁신</p>
                <div>
                    <ul class="info mb26">
                        <li class="icon type2">
                            <span class="star ico" style="vertical-align:1px;"></span><span class="info_value">4.5</span>
                        </li>
                        <li class="icon type2">
                            <span class="time ico"></span><span class="info_value">16:07</span>
                        </li>
                        <li class="icon type2">
                            <span class="view ico"></span><span class="info_value">46</span>
                        </li>
                        <li class="icon type2">
                            <span class="like ico"></span><span class="info_value">36</span>
                        </li>
                        <li class="icon type2">
                            <span class="heart2 ico"></span><span class="info_value">32</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="header_inner line2 tabMenu scroll-x" style="border-top:1px solid #eaeaea">
                <ul class="fixTab">
                    <li class="on"><a href="#tab1">소개</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">댓글</a></li>
                </ul>
            </div>
        </div>
        <!-- //header -->
        

        <div id="content" class="normal">
        
          
          
          <div class="cell">
            <div class="inner">
                <p class="font_16 fwb600 mb15">요약내용</p>
                <p class="font_15 fwr mono_65 mb20">지난해 미국 북동부를 강타한 허리케인 ‘샌디’ 재난 때의 일이었습니다. 저는 남미계 이민자 가정 고등학생들과 함께 커뮤니티 매핑(공동체지도만들기) 작업을 진행하고 있었습니다. 태풍 피해 상황에서 우리는 발빠르게 커뮤니티 매핑 작업을 통해 피해지역에서 이용 가능한 주유소 지도를 만들어 온라인으로 제공했습니다. 태풍으로 모든 전기와 난방시설의 작동이 중단된 상태에서 석유는 필수생존물품이었기 때문입니다. 그리고 우리가 제공하는 지도 정보는 미국재난방지국, 구글재난지도, 연방에너지국 등에 의해 활용될 정도로 미국 내에서 유일한 리소스였습니다. 사람과 세상을 바꾼 커뮤니티 매핑과 그 가능성에 대해 자세히 말씀드리겠습니다. </p>
            </div>
          </div>

        </div>

        <!-- floating button -->
        <div class="fixBtmBtn zin1">
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
export default {
/* eslint-disable */
  name: 'CLIPing_videodetail',
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
