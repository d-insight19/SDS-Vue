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
                <button type="button" class="btn only share"><span class="ico">공유하기</span></button>
                <p class="header_text font_18">모두와 같으면서 누구와도 같지 않은</p>
            </div>
            <div class="hide_header" style="padding-top: 74px; height:308px; padding-left:172px">
                <div class="tagWrap mb5"><span>도서요약</span></div>
                <h3 class="h-tit3 fwb600 multiline line2 mb5">모두와 같으면서 누구와도 같지 않은</h3>
                <dl>
                    <dt>저자</dt>
                    <dd>새뮤얼 배런디스</dd>
                </dl>
                <dl>
                    <dt>출판사</dt>
                    <dd>에코리브르</dd>
                </dl>
                <dl>
                    <dt>가격</dt>
                    <dd>22,000원</dd>
                </dl>
                <dl class="mb10">
                    <dt>출판일 </dt>
                    <dd>2018.09</dd>
                </dl>
                <ul class="info mb20">
                    <li class="icon mono_80 font_13">
                        <span class="view ico"></span> <span class="info_value">2,190</span>
                    </li>
                    <li class="icon mono_80 font_13">
                        <span class="like ico"></span> <span class="info_value">36</span>
                    </li>
                </ul>
                <div class="book">
                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                </div>
            </div>
        </div>
        <!-- //header -->
        <div id="content" class="etc">
        
          
          
          <div class="cell">
            <div class="inner">
                <p class="font_16 fwb600 mb15">도서소개</p>
                <p class="font_15 fwb mb10">저자 새뮤얼 배런디스</p>
                <p class="font_15 fwr mono_65 mb20">캘리포니아 대학교 샌프란시스코 캠퍼스 신경생물학 및 정신의학센터 소장이자 정신의학과 명예교수이다. 컬럼비아 대학교ㆍ하버드 대학교ㆍ미국국립보건원에서 정신의학과 신경과학을 공부했으며, 1970년부터 캘리포니아 대학교에서 연구해왔다. 캘리포니아 대학교 샌프란시스코 캠퍼스의 랭글리 포터 정신의학연구소 소장을 비롯해 맥나이트 신경과학기금 회장, 미국국립정신건강연구소 상담위원회 위원장 등을 역임했다. 미국의학원과 미국예술과학아카데미 회원이기도 하다. 200편이 넘는 연구 논문을 썼으며, 지은 책으로 『분자와 정신질환』, 『기분 유전자』, 『프로작보다 좋은 것』, 그리고 아이들을 위한 시집으로 『잠들기 전에』등이 있다. 현재 캘리포니아 소살리토에서 아내와 함께 살고 있다. </p>
            </div>
          </div>

        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li @click="active_el" style="width:54px; border-right:1px solid #cccccc"><slp-button class="md"><span class="ico like_solid_32" :class="{ blue : active }"></span></slp-button></li>
                <li  ><slp-button class="md"><span class="ico download_32"></span>다운로드</slp-button></li>
            </ul>
        </div>
        <!-- //floating button --> 
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>

<script>
/*eslint-disable */
export default {
  name: 'CLIPing_bookSummary_detail',
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
