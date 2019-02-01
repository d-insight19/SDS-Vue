<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm_elearning">

        <!-- header  -->
        <div id="header" class="expand">          
          <!--<div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_18">이러닝 제작</p>
          </div>-->
          <div class="hide_header pl18 pr18" style="padding-top:30px;">
            <p class="font_30 fwb">이러닝 제작</p>
            <div class="stepper mb30">
                <div class="clearfix">
                    <h2 class="tit">과정구성</h2>
                    <div class="num">
                        <strong class="color_clr2">2</strong>/<span>5</span>
                    </div>
                </div>
                    <div class="progBox">
                    <div class="bar clr2" style="width:40%"></div>
                </div>
                <p class="txt-desc">제작하는 학습과정에 원하는 아이템을 추가하여 과정을 구성합니다.</p>
            </div>
            <p class="hr mb0"></p>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="etc">

          <div class="cell">
            <div class="inner pdb20">
                <div class="mb10">
                    <span class="chip clr1 mono_0 font_13 mb0 bw0">모듈 1</span>
                    <span class="fr ico deletemode_20"></span>
                </div>

                <h2 class="h-tit2 fwb600 bbB85 mb0">예제와 함께 자바스크립트 데이터 특성 알아보기</h2>
                
                <!-- list -->
                <ul class="multiList type2">
                    <li class="open">
                        <div class="download_detail">
                            <div class="txt_wrap">
                                <p class="icon_txt color_clr3">1차시 
                                    <span class="fr ico deletemode_20"></span>
                                </p>
                                <p class="title">처음 시작하는 개발자를 위한 자바스크립트 기초 문법 </p>
                            </div>
                        </div>
                        <div class="sub_content">
                            <!-- list -->
                            <ul class="multiList type2">
                                <li>
                                    <div class="download_detail">
                                        <div class="icon_wrap">
                                            <span class="ico play_28"></span>
                                        </div>
                                        <div class="txt_wrap">
                                            <p class="title">10분만에 배워보는 데이터와 배열 활용하기</p>
                                        </div>
                                        <span class="fr ico deletemode_20"></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="download_detail">
                                        <div class="icon_wrap">
                                            <span class="ico play_28"></span>
                                        </div>
                                        <div class="txt_wrap">
                                            <p class="title">실행 순서 제어하기</p>
                                        </div>
                                        <span class="fr ico deletemode_20"></span>
                                    </div>
                                </li>
                            </ul>
                            <!-- //list -->
                            <div class="sub_content_add">
                                <span class="chip clr2 mono_0 font_14 mb0 bw0">+ 아이템 추가</span>
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
                <!-- //list -->
                <p class="hr mb0"></p>
            </div>
          </div>

        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
              <li><button type="button" class="btn ld">이전</button></li>
              <li><button type="button" class="btn ld clr1">다음</button></li>
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
  name: 'Atorm_e-learning_material',
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
    toggleMenu (event) {
      if (event.target.classList.contains('open')) {
        event.target.classList.remove('open')
      } else {
        event.target.classList.add('open')
      }
    }
  }
}
</script>
