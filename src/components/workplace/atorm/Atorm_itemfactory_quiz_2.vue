<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm">

        <!-- header -->
        <div id="header" class="fixed">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text font_18">퀴즈</p><button type="button" class="btn16 color_clr2">저장</button>
        </div>
        <!-- //header -->
        <div id="content" class="normal">
            <div class="cell">
                <div class="inner">  
                    <p class="label-tit20 fwb600">
                        공개여부
                        <slp-switch class="fr" value="true"/>
                        <p class="font_14 mono_65">공개하시면  다른 사람이 내 아이템을 활용하여 과정을 만들 수 있습니다.</p>
                        <p class="hr mb0"></p>
                    </p>
                    <!-- list -->
                    <ul class="singleList type1">
                        <li class="pt18 pdb20 ">
                            <p class="label-tit14">아이템명 <span class="tit_essential"></span></p>
                            <slp-text-field value="Multismart" class="mt6"></slp-text-field>
                        </li>
                        <li class="btB89 pt18 pdb25">
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
      </div>
      <!-- //container -->    

    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Atorm_itemfactory_quiz_1',
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
