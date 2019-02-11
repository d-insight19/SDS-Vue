<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace calendar">

        <!-- header -->
        <div id="header" class="">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">2018년 9월 24일</p>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">


          <div class="cell">
            <div class="inner pdb25">
                <div class="js-calendar">

                </div>
            </div>
          </div>

          <p class="hr_2"></p>

          <div class="cell">
            <div class="inner pt0">
                <div class="tit-box">
                    <span class="font_18 fwb600 mr8">학습계획</span> <span class="font_20 color_clr2">3</span> 
                    <div class="in-chk fr"><label class="labelChk2"><input id="" type="checkbox" name="" class="chk"><span class="label"> <span class="ico plus wh"></span> 계획추가</span></label></div>
                </div>

                <h2 class="font_18 fwb600 mb0">데이터 특성 알아보기</h2>
                
                <!-- list -->
                <ul class="multiList type2">
                    <li>
                        <div class="download_detail">
                                <div class="txt_wrap">
                                    <p class="icon_txt color_clr3">1차시</p>
                                    <p class="title">학습 소개 Orientation </p>
                                </div>
                            </div>
                    </li>
                    <li>
                    <div class="download_detail">
                            <div class="txt_wrap">
                                <p class="icon_txt color_clr3">2차시</p>
                                <p class="title">제이크 냅 직강: 기획부터 실행까지 5일만에 끝내는 ‘SPRINT’ 제이크 냅 직강: 기획부터 실행까지 5일만에 끝내는 ‘SPRINT’ 제이크 냅 직강: 기획부터 실행까지 5일만에 끝내는 ‘SPRINT’</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
          </div>

          <div class="cell">
            <div class="inner pdb25">
                <h2 class="font_18 fwb600">업무에 적용해보기</h2>
                
                <!-- list -->
                <ul class="multiList type2">
                    <li class="open">
                            <div class="download_detail">
                                <div class="txt_wrap">
                                    <p class="icon_txt color_clr3">1차시</p>
                                    <p class="title">HCI 개론 언어 특성 활용하여 실제 업무에서 사용하는 방법 접하기</p>
                                </div>
                            </div>
                        <div class="sub_content">
                            <p class="sub_content_title color_clr1 clr4">변수와 데이터 타입</p>
                            <!-- list -->
                            <ul class="multiList type2">
                                <li>
                                    
                                        <div class="download_detail">
                                            <div class="icon_wrap">
                                                <span class="ico play_28"></span>
                                            </div>
                                            <div class="txt_wrap">
                                                <p class="title">데이터와 배열 활용하기</p>
                                            </div>
                                        </div>
                                    
                                </li>
                                <li>
                                    
                                        <div class="download_detail">
                                            <div class="icon_wrap">
                                                <span class="ico ebook_28"></span>
                                            </div>
                                            <div class="txt_wrap">
                                                <p class="title">실행 순서 제어하기</p>
                                            </div>
                                        </div>
                                    
                                </li>
                                <li>
                                    
                                        <div class="download_detail">
                                            <div class="icon_wrap">
                                                <span class="ico headphone_28"></span>
                                            </div>
                                            <div class="txt_wrap">
                                                <p class="title">자바의 개념에 대하여</p>
                                            </div>
                                        </div>
                                    
                                </li>
                            </ul>
                            <!-- //list -->
                            <p class="sub_content_title color_clr1 clr4">변수와 데이터 타입</p>
                            <!-- list -->
                            <ul class="multiList type2">
                                <li>
                                        <div class="download_detail">
                                            <div class="icon_wrap">
                                                <span class="ico headphone_28"></span>
                                            </div>
                                            <div class="txt_wrap">
                                                <p class="title">자바의 특징을 알아보기</p>
                                            </div>
                                        </div>
                                    
                                </li>
                            </ul>
                            <!-- //list -->
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
                <li><slp-button class="lg clr1">완료</slp-button></li>
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
  name: 'MySpace_learningjourney_add',
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
