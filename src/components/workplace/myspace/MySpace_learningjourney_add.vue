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
                <p class="header_text font_18">학습계획 추가</p>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">


          <div class="cell">
            <div class="inner pdb25">
                <h2 class="h-tit2 fwb600 mb0">9월 16일 학습 계획</h2>
                <p class="mono_65 font_14">학습 알림을 받고 싶은 콘텐츠를 선택해주세요.</p>
                <p class="mono_65 font_14">설정한 학습 일에 맞춰 선택한 수단으로 학습알림을 받을 수 있습니다.</p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <slp-checkbox><h2 class="h-tit2 fwb600 mb0">데이터 특성 알아보기</h2></slp-checkbox>
                
                <!-- list -->
                <ul class="multiList type2">
                    <li>
                        <slp-checkbox value="true">
                            <div class="download_detail">
                                <div class="txt_wrap">
                                    <p class="icon_txt color_clr3">1차시</p>
                                    <p class="title">학습 소개 Orientation </p>
                                </div>
                            </div>
                        </slp-checkbox>
                    </li>
                    <li>
                        <slp-checkbox value="true">
                            <div class="download_detail">
                                <div class="txt_wrap">
                                    <p class="icon_txt color_clr3">2차시</p>
                                    <p class="title">제이크 냅 직강: 기획부터 실행까지 5일만에 끝내는 ‘SPRINT’ 제이크 냅 직강: 기획부터 실행까지 5일만에 끝내는 ‘SPRINT’ 제이크 냅 직강: 기획부터 실행까지 5일만에 끝내는 ‘SPRINT’</p>
                                </div>
                            </div>
                        </slp-checkbox>
                    </li>
                </ul>
            </div>
          </div>

          <div class="cell">
            <div class="inner pdb25">
                <slp-checkbox><h2 class="h-tit2 fwb600 mb0">업무에 적용해보기</h2></slp-checkbox>
                
                <!-- list -->
                <ul class="multiList type2">
                    <li class="open">
                        <slp-checkbox value="">
                            <div class="download_detail">
                                <div class="txt_wrap">
                                    <p class="icon_txt color_clr3">1차시</p>
                                    <p class="title">HCI 개론 언어 특성 활용하여 실제 업무에서 사용하는 방법 접하기</p>
                                </div>
                            </div>
                        </slp-checkbox>
                        <div class="sub_content">
                            <p class="sub_content_title color_clr1 clr4 ml38">변수와 데이터 타입</p>
                            <!-- list -->
                            <ul class="multiList type2">
                                <li>
                                    <slp-checkbox class="" value="true">
                                        <div class="download_detail">
                                            <div class="icon_wrap">
                                                <span class="ico play_28"></span>
                                            </div>
                                            <div class="txt_wrap">
                                                <p class="title">데이터와 배열 활용하기</p>
                                            </div>
                                        </div>
                                    </slp-checkbox>
                                </li>
                                <li>
                                    <slp-checkbox class="" value="true">
                                        <div class="download_detail">
                                            <div class="icon_wrap">
                                                <span class="ico ebook_28"></span>
                                            </div>
                                            <div class="txt_wrap">
                                                <p class="title">실행 순서 제어하기</p>
                                            </div>
                                        </div>
                                    </slp-checkbox>
                                </li>
                                <li>
                                    <slp-checkbox class="" value="true">
                                        <div class="download_detail">
                                            <div class="icon_wrap">
                                                <span class="ico headphone_28"></span>
                                            </div>
                                            <div class="txt_wrap">
                                                <p class="title">자바의 개념에 대하여</p>
                                            </div>
                                        </div>
                                    </slp-checkbox>
                                </li>
                            </ul>
                            <!-- //list -->
                            <p class="sub_content_title color_clr1 clr4 ml38">특성 활용하기</p>
                            <!-- list -->
                            <ul class="multiList type2">
                                <li>
                                    <slp-checkbox class="" value="">
                                        <div class="download_detail">
                                            <div class="icon_wrap">
                                                <span class="ico play_28"></span>
                                            </div>
                                            <div class="txt_wrap">
                                                <p class="title">자바의 특징을 알아보기</p>
                                            </div>
                                        </div>
                                    </slp-checkbox>
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
                <li><slp-button class="lg clr1">적용하기</slp-button></li>
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
