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
                            <slp-text-field placeholder="아이템명을 입력하세요" class="mt6"></slp-text-field>
                        </li>
                        <li class="btB89 pt18 pdb25">
                            <ul class="w64List tac">
                                <li class="mr40">
                                    <p class="mono_50 font_14 mb5">선다형</p>
                                    <p class="mb15"><span class="ico multiplechoice_32"></span> <span class="fwb600 mono_100 font_30">0</span></p>
                                    <slp-button class="xxxs mono_80">추가</slp-button>
                                </li>
                                <li class="mr40">
                                    <p class="mono_50 font_14 mb5">OX형</p>
                                    <p class="mb15"><span class="ico ox_32"></span> <span class="fwb600 mono_100 font_30">0</span></p>
                                    <slp-button class="xxxs mono_80">추가</slp-button>
                                </li>
                                <li>
                                    <p class="mono_50 font_14 mb5">단답형</p>
                                    <p class="mb15"><span class="ico shortanswer_32"></span> <span class="fwb600 mono_100 font_30">0</span></p>
                                    <slp-button class="xxxs mono_80">추가</slp-button>
                                </li>
                            </ul>
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
