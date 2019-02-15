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
                    <div class="inner">
                        <p class="font_14 mono_65 mb16">설문 유형과 문항을 자유롭게 수정할 수 있습니다. 설문에 사용할 항목을 선택하고 확인 버튼을 누르면 적용이 완료됩니다.</p>
                        <ul class="w100List tac">
                            <li>
                                <p class="mono_50 font_14 mb5">총 문항 수</p>
                                <p class="mono_80 font_18"><span class="ico atorm_total_solid_32"></span> <span class="fwb600 mono_100 font_25">10</span>개</p>
                            </li>
                            <li>
                                <p class="mono_50 font_14 mb5">객관식</p>
                                <p class="mono_80 font_18"><span class="ico atorm_subjective_solid_32"></span> <span class="fwb600 mono_100 font_25">8</span>개</p>
                            </li>
                            <li>
                                <p class="mono_50 font_14 mb5">주관식</p>
                                <p class="mono_80 font_18"><span class="ico atorm_multiple_solid_32"></span> <span class="fwb600 mono_100 font_25">2</span>개</p>
                            </li>
                        </ul>
                        <p class="hr"></p>

                        <p class="label-tit18">객관식</p>
                        <!-- list -->
                        <ul class="surveyList">
                            <li>
                                <div class="num_wrap font_24 mono_80 pdl6">1</div>
                                <div class="con_wrap">
                                    <p class="title font_14 mono_65 fwb mb5">컨텐츠만족도<span class="ico ico_dropdown16 gr"></span><span class="fr ico more"></span></p>
                                    <textarea class="contents font_14 mono_80">내용 전달방식, 난이도, 시간, 흥미유도 등의 컨텐츠 구성이 적절했다.</textarea>
                                    <!--<p class="contents font_16">내용 전달방식, 난이도, 시간, 흥미유도 등의 컨텐츠 구성이 적절했다.</p>-->
                                </div>
                            </li>
                            <li>
                                <div class="num_wrap font_24 mono_80 pdl6">2</div>
                                <div class="con_wrap">
                                    <p class="title font_14 mono_65 fwb mb5">컨텐츠만족도<span class="ico ico_dropdown16 gr"></span><span class="fr ico more"></span></p>
                                    <p class="contents font_16">본 교육의 내용이 이해하기 적절한 수준으로 구성되어 있다.</p>
                                </div>
                            </li>
                            <li>
                                <div class="num_wrap font_24 mono_80 pdl6">3</div>
                                <div class="con_wrap">
                                    <p class="title font_14 mono_65 fwb mb5">전반적만족도<span class="ico ico_dropdown16 gr"></span><span class="fr ico more"></span></p>
                                    <p class="contents font_16">나는 본 과정에 대해 전반적으로 만족한다.</p>
                                </div>
                            </li>
                            <li>
                                <div class="num_wrap font_24 mono_80 pdl6">4</div>
                                <div class="con_wrap">
                                    <p class="title font_14 mono_65 fwb mb5">추천의향<span class="ico ico_dropdown16 gr"></span><span class="fr ico more"></span></p>
                                    <p class="contents font_16">나는 본 과정을 다른 사람들에게 추천하고 싶다.</p>
                                </div>
                            </li>
                            <li>
                                <div class="num_wrap font_24 mono_80 pdl6">5</div>
                                <div class="con_wrap">
                                    <p class="title font_14 mono_65 fwb mb5">학업성취도<span class="ico ico_dropdown16 gr"></span><span class="fr ico more"></span></p>
                                    <p class="contents font_16">나는 본 과정을 다른 사람들에게 추천하고 싶다.</p>
                                </div>
                            </li>
                            <li>
                                <div class="num_wrap font_24 mono_80 pdl6">6</div>
                                <div class="con_wrap">
                                    <p class="title font_14 mono_65 fwb mb5">현업적용도<span class="ico ico_dropdown16 gr"></span><span class="fr ico more"></span></p>
                                    <p class="contents font_16">과정 내용이 업무에 활용되면 조직 성과 개선에 도움이 될 것이라 생각한다.</p>
                                </div>
                            </li>
                            <li>
                                <div class="num_wrap font_24 mono_80 pdl6">7</div>
                                <div class="con_wrap">
                                    <p class="title font_14 mono_65 fwb mb5">조직성과기여도<span class="ico ico_dropdown16 gr"></span><span class="fr ico more"></span></p>
                                    <p class="contents font_16">과정 내용이 업무에 활용되면 조직 성과 개선에 도움이 될 것이라 생각한다.</p>
                                </div>
                            </li>
                            <li>
                                <div class="num_wrap font_24 mono_80 pdl6">8</div>
                                <div class="con_wrap">
                                    <p class="title font_14 mono_65 fwb mb5">강사만족도<span class="ico ico_dropdown16 gr"></span><span class="fr ico more"></span></p>
                                    <p class="contents font_16">튜터,강사의 평가에 대한 첨삭지도(피드백), 질의응답(Q&A) 등은 충실하게 이루어졌다.</p>
                                </div>
                            </li>
                        </ul>
                        <!-- //list -->       
                        <p class="hr"></p>

                        <p class="label-tit18">주관식</p>
                        <!-- list -->
                        <ul class="surveyList">
                            <li>
                                <div class="num_wrap font_24 mono_80 pdl6">8</div>
                                <div class="con_wrap">
                                    <p class="title font_14 mono_65 fwb mb5">장점<span class="ico ico_dropdown16 gr"></span><span class="fr ico more"></span></p>
                                    <p class="contents font_16">본 과정의 만족스러운 점을 기술해 주십시오.</p>
                                </div>
                            </li>
                            <li>
                                <div class="num_wrap font_24 mono_80 pdl6">9</div>
                                <div class="con_wrap">
                                    <p class="title font_14 mono_65 fwb mb5">학습후기 및 별점</p>
                                    <p class="contents font_16">본 과정의 만족스러운 점을 기술해 주십시오.</p>
                                </div>
                            </li>
                        </ul>
                        <!-- //list -->    
                    </div>
                </div>
            </div>
        </div>
        <!-- //container -->    

    </div>
    <!-- //wrap -->

</template>

<script>
/*eslint-disable */
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
