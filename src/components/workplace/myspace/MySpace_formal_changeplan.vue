<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace">

        <!-- header -->
        <div id="header" class="fixed">
            <div class="header_inner line1">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
            <p class="header_text font_18">학습 일정 변경</p>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="normal">

          <div class="cell">
<<<<<<< HEAD
            <div class="inner mb40">
                <ul class="thumList type4 block">
=======
            <div class="inner">
                <ul class="cardList type1">
>>>>>>> 1e23e6fce5dcb0b8b75c3694fbfdc359f5994cf8
                    <li>
                        <div class="thum">
                            <div class="cDim"></div>
                            <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                        </div>
                        <div class="text" style="border: 1px solid #e3e3e3;">
                            <a href="#" class="tit">기초부터 튼튼히 업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                            <ul class="info">
                                <li class="fwb color_clr3">이러닝</li>
                                <li class="mono_80"><strong>취득점수</strong><span><em class="">85</em>/100</span></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
        
          <div class="cell">
            <div class="inner mb40">
                <p class="font_14 fwb mb5">학습일 선택</p>
                <slp-select placeholder="2018.10.01 ~ 2018.10.31" width="100%">
                    <option>2018.10.01 ~ 2018.10.31</option>
                    <option>2018.10.01 ~ 2018.10.31</option>
                    <option>2018.10.01 ~ 2018.10.31</option>
                </slp-select>
            </div>
          </div>

        </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md clr1">변경하기</button>
            </div>
            <!-- //floatingbtn -->
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'MySpace_formal_changeplan',
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
