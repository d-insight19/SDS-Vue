<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass">

        <!-- header -->
        <div id="header" class="tab clr4">
            <div class="header_inner line1 pr18">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">라이센스 신청</p>
            </div>
            <div class="hide_header" style="padding-top: 78px; padding-bottom: 25px;">
                <h2 class="h-tit2 fwb600 multiline line2 mb5 font_22">라이센스 신청</h2>
                <p class="font_16">본 과정은 제휴사 라이센스 신청 후 </p>
                <p class="font_16">학습 가능합니다.</p>
            </div>
        </div>
        <!-- //header -->
        <div id="content" class="etc">
          
          <div class="cell">
            <div class="inner">
                <p class="font_15 fwr mono_65 mb20">본 과정은 라이센스 신청 후 학습이 가능하며, 
유효기간 동안 제휴사의 모든 콘텐츠 학습이 
가능합니다. 장기간 미 활용시 회수 될 수 있으며, 
차기 신청에 제한이 있을 수 있습니다. </p>
                <p class="font_15 fwr mono_65 mb20">본 과정은 해외 콘텐츠사 과정으로, 해외 콘텐츠사에서 
제공되는 모든 과정은 글로벌 언어로 제작하였으니,
학습에 참고하시기 바랍니다.</p>
            </div>
          </div>


          <div class="cell">
            <div class="inner">
                <p class="font_16 fwb600 mb10 underline">라이센스를 신청 하시겠습니까?</p>
                <dl>
                    <dt>과정명</dt>
                    <dd>변화와 성과를 이끄는 프레젠테이션</dd>
                </dl>
                <dl>
                    <dt>제휴사</dt>
                    <dd class="color_clr2">Skillsoft</dd>
                </dl>
                <dl>
                    <dt>유효기간</dt>
                    <dd>2018.11.10 ~ 2018.11.30</dd>
                </dl>
            </div>
          </div>

        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><slp-button class="md">취소</slp-button></li>
                <li><slp-button class="md clr1">신청</slp-button></li>
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
  name: 'regiclass_detailview_licence',
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
