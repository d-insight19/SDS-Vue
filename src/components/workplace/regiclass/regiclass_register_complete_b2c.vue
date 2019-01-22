<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass complete">

        <!-- header -->
        <div id="header" class="tab clr4">
            <div class="header_inner line1 pr18">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">라이센스 신청</p>
            </div>
            <div class="hide_header" style="padding-top: 78px; padding-bottom: 26px;">
                <h2 class="h-tit2 fwb" style="width:52.5%">수강신청이 완료되었습니다.</h2>
            </div>
        </div>
        <!-- //header -->
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
            
            <ul class="thumList">
                <li class="bottom-bd-x pdb0">
                    <div class="in">
                        <a href="#" class="thum">                     
                            <div class="thumbnail">
                                <img class="thumnail" src="@/assets/img/itemfactory_url_img.jpg" alt="">
                            </div>
                        </a>
                        <a href="#" class="tit">[혁신성장청년인재] 자율주행을 위한 스마트카 시스템 개발 전문가 과정</a>
                        <a href="#" class="date">수강기간 <span class="pipe"></span><span class="mono_65 fwr">2018.12.01 ~ 2019.05.31</span></a>                        
                        <ul class="info">
                            <li class="fwb info-num-2 color_clr1">0원</li>
                        </ul>
                    </div>
                </li>
            </ul> 
            
            </div>
          </div>
        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><slp-button class="md">나의공간</slp-button></li>
                <li><slp-button class="md clr1">학습시작</slp-button></li>
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
  name: 'regiclass_register_complete',
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
