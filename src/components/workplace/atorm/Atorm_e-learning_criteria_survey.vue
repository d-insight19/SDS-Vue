<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery atorm">

            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">설문 문항 설정</p><button type="button" class="btn16 color_clr2">저장</button>
            </div>
            <!-- //header -->
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner mb40">
                        <p class="font_14 mono_65 mb16">설문 유형과 문항을 자유롭게 수정할 수 있습니다. 설문에 사용할 항목을 선택하고 확인 버튼을 누르면 적용이 완료됩니다.</p>
                        <ul class="w80List tac">
                            <li class="mr40">
                                <p class="mono_50 font_14 mb5">총 문항 수</p>
                                <p class="mono_80 font_18"><span class="ico atorm_total_solid_32"></span> <span class="fwb600 mono_100 font_25">10</span>개</p>
                            </li>
                            <li class="mr40">
                                <p class="mono_50 font_14 mb5">객관식</p>
                                <p class="mono_80 font_18"><span class="ico atorm_subjective_solid_32"></span> <span class="fwb600 mono_100 font_25">8</span>개</p>
                            </li>
                            <li>
                                <p class="mono_50 font_14 mb5">주관식</p>
                                <p class="mono_80 font_18"><span class="ico atorm_multiple_solid_32"></span> <span class="fwb600 mono_100 font_25">2</span>개</p>
                            </li>
                        </ul>
                        <p class="hr mb0"></p>

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
  name: 'Atorm_e-learning_criteria_survey',
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
