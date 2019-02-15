<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm">

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
                    <h2 class="tit">평가제작</h2>
                    <div class="num">
                        <strong class="color_clr2">3</strong>/<span>5</span>
                    </div>
                </div>
                    <div class="progBox">
                    <div class="bar clr2" style="width:60%"></div>
                </div>
                <p class="txt-desc">학습과정을 완료한 학습자들 대상으로 평가를 할 수 있습니다.</p>
            </div>
            <p class="hr mb0"></p>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="normal">
            <div class="cell">
                <div class="inner mb40">  
                    <p class="label-tit16 w100p pdb20">
                        평가설정
                        <slp-switch class="fr" value="true"/>
                    </p>
                    <!-- list -->
                    <ul class="singleList type1">
                        <li class="btB89 pt18 pdb20 ">
                            <p class="label-tit16 w100p pb10">평가문항</p>
                            <ul class="w80List tac">
                              <li class="mono_80 font_16 tal">문항</li>
                              <li class="mono_80 font_16 tal brB89"><span class="fwb600 mono_100 font_22">10</span>개</li>
                              <li class="mono_80 font_16">배점</li>
                              <li class="mono_80 font_16"><span class="fwb600 mono_100 font_22">20</span>점</li>
                            </ul>
                        </li>
                        <li class="btB89 pt18 pdb25">
                            <p class="label-tit16 w100p pb10">평가등록내역</p>
                            <ul class="w64List tac">
                              <li class="mr40">
                                <p class="mono_50 font_14 mb5">선다형</p>
                                <p class="mb15"><span class="ico multiplechoice_32"></span> <span class="fwb600 mono_100 font_30">2</span></p>
                                <slp-button class="xxxs mono_80">추가</slp-button>
                              </li>
                              <li class="mr40">
                                <p class="mono_50 font_14 mb5">OX형</p>
                                <p class="mb15"><span class="ico ox_32"></span> <span class="fwb600 mono_100 font_30">1</span></p>
                                <slp-button class="xxxs mono_80">추가</slp-button>
                              </li>
                              <li>
                                <p class="mono_50 font_14 mb5">단답형</p>
                                <p class="mb15"><span class="ico shortanswer_32"></span> <span class="fwb600 mono_100 font_30">2</span></p>
                                <slp-button class="xxxs mono_80">추가</slp-button>
                              </li>
                            </ul>
                        </li>
                    </ul>
                    <!-- //list -->

                    <!-- list -->
                    <ul class="evaluationList">
                        <li>
                            <p class="multiline line2 font_16 mono_80">
                                <span class="ico multiplechoice_32"></span>
                                방해요소에 대한 설명이다. 틀린 것을 고르시오.
                                <span class="ico del"></span>
                            </p>
                        </li>
                        <li>
                            <p class="multiline line2 font_16 mono_80">
                                <span class="ico shortanswer_32"></span>
                                의사소통의 기본 요소 5가지를 적으시오.
                                <span class="ico del"></span>
                            </p>
                        </li>
                        <li>
                            <p class="multiline line2 font_16 mono_80">
                                <span class="ico ox_32"></span>
                                위기관리는 처음 위기 상황을 감지했을 때 미리 밝히고 해결하는게 좋다. 
                                <span class="ico del"></span>
                            </p>
                        </li>
                        <li>
                            <p class="multiline line2 font_16 mono_80">
                                <span class="ico multiplechoice_32"></span>
                                위기관리는 처음 위기 상황을 감지했을 때 미리 밝히고 해결하는게 좋다. 
                                <span class="ico del"></span>
                            </p>
                        </li>
                        <li>
                            <p class="multiline line2 font_16 mono_80">
                                <span class="ico shortanswer_32"></span>
                                리스크 분석 프로세스에 대한 설명이다. 다음 중 옳은 것을 고르시오. 
                                <span class="ico del"></span>
                            </p>
                        </li>
                    </ul>
                    <!-- //list -->        
                </div>
            </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><slp-button class="ld">이전</slp-button></li>
                <li><slp-button class="ld clr1">다음</slp-button></li>
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
  name: 'Atorm_e-learning_evaluation_2',
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
