<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MainType">

        <!-- header -->
        <div id="header" class="tab bg_wh_287 clr4">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">홍길동</p>
            </div>
            <div class="header_inner line2 tabMenu line-top">
                <ul class="fixTab">
                    <li><a href="#tab1">채널목록</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">게시글</a></li>
                    <li class="on"><a href="#tab3">작가이력</a></li>
                </ul>
            </div>
            <div class="hide_header" style="padding-top: 115px; padding-bottom:46px; height:380px;">
                <h1 class="h-tit1 mb0">홍길동</h1>
                <p class="fwl mono_50 mb10">멀티캠퍼스 마케팅팀</p>
                <ul class="info mb20">
                    <li class="fwr">운영채널 <span>18</span></li>
                    <li class="fwr">구독 <span>1,524</span></li>
                </ul>
                <p class="fwr mono_65">홍길동입니다. 저는 이런 분야 전문가입니다. 국내 누구보다 전문적 지식을 갖추고 있다고 자부합니다. 홍길동입니다. 저는 이런 분야 전문가입니다. 국내 누구보다 전문적 지식을 갖추고 있다고 자부합니다. </p>
                <div class="circle">
                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                </div>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
        
          <div class="cell">
            <div class="inner">
                <div class="">
                    <img src="@/assets/img/thum_no_L.jpg" class="thumImg" alt="" style="width: 100%;">
                </div>
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
  name: 'Main_writer_history',
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
