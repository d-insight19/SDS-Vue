<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery study_quiz_ox bg intro">
            <!-- op-bg -->
            <div class="op-bg" style="background-color:rgba(0,0,0,0.45); height:100vh">
            <!-- header -->
            <div id="header" class="wh">
                <div class="header_inner line1"><button type="button" class="btn only prev"><span class="ico2 prev-wh"></span></button> <div class="page-btn"><span class="ico back-wh"></span> <div class="num "><span>03</span>/<span>36</span>p</div> <span class="ico next-wh"></span></div> <p class="header_text  font_19"> 스크롤시  header 에 fixed 클래스 추가</p></div>
                <div class="page-btn">
                    <span class="ico back-wh"></span>
                    <div class="num"><span>03</span>/<span>36</span>p</div>
                    <span class="ico next-wh"></span>
                </div>
            </div>
            <!-- //header -->
            
            <div id="content" class="etc_30">
                <div class="cell">
                    <div class="inner wh" style="padding-top:50px;">
                        <span class="chip wh">퀴즈</span>
                        <p class="h-tit1">자바의 특성과 개념 중간 퀴즈</p> 
                        <p class="txt-tit-2">얼마나 배웠는지 Quiz를 통해 알아볼까요?</p>
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
  name: 'Study_04_SO_quiz_intro',
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
