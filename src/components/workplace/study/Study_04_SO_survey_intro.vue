<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery study_survey bg">
            <!-- op-bg -->
            <div class="op-bg" style="background-color:rgba(0,0,0,0.45); height:100vh">
            <!-- header -->
            <div id="header" class="wh">
                <div class="header_inner line1"><button type="button" class="btn only prev"><span class="ico2 prev-wh"></span></button> <div class="page-btn"><span class="ico back-wh"></span> <div class="num "><span>03</span> / <span>36</span></div> <span class="ico next-wh"></span></div> <p class="header_text  font_19"> 스크롤시  header 에 fixed 클래스 추가</p></div>
                <div class="page-btn">
                    <span class="ico back-wh"></span>
                    <div class="num"><span>03</span> / <span>36</span></div>
                    <span class="ico next-wh"></span>
                </div>
            </div>
            <!-- //header -->
            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner wh" style="padding-top:50px;">
                        <span class="chip wh">설문</span>
                        <p class="h-tit1">삶의 만족도 진단 다면평가</p> 
                        <p class="txt-tit-2">자신의 삶의 만족도가 어느 정도인지 진단해 볼까요?</p>
                        <p class="h-tit5">총 문항 <span class="fwb600">10개</span></p> 
                    </div>
                </div>
            </div>

            <!-- floatingbtn -->
            <ul class="btmBtn"><li><button type="button" class="btn">응시하기<span class="ico gray_next"></span></button></li> </ul>
            <!-- //floatingbtn -->

            </div>
            <!-- op-bg -->
        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Study_04_SO_survey_intro',
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
