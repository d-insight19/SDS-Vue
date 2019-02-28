<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery atorm flip pd70">

        <!-- header  -->
        <div id="header" class="expand">
          <div class="hide_header pl18 pr18" style="padding-top:36px;">
            <p class="label-tit30 pdb12">집합 제작</p>
            <div class="stepper mb30">
                <div class="clearfix">
                    <h2 class="tit">과정구성</h2>
                    <div class="num">
                        <strong class="color_clr2">2</strong>/<span>4</span>
                    </div>
                </div>
                    <div class="progBox">
                    <div class="bar clr2" style="width:50%"></div>
                </div>
                <p class="txt-desc">제작하는 학습과정에 원하는 아이템을 추가하여 과정을 구성합니다.</p>
            </div>
            <p class="hr mb0"></p>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">
                <!-- atorm_material -->
                <div class="atorm_material">
                    <div class="mb12">
                        <span class="chip clr1 font_13">모듈 1</span>
                        <span class="fr ico deletemode_20"></span>
                    </div>
                    <slp-text-field class="underline_parents" classObject="underline" placeholder="모듈명을 입력하세요"></slp-text-field>
                    <h2 class="label-tit16 color_clr1 fwb600 mt16">커리큘럼</h2>
                    <ul>
                        <li>
                            <div class="main_content mt13">
                                <span class="label-tit16 color_clr1 fwb600">1일차</span>
                                <span class="fr ico deletemode_20"></span>
                            </div>
                            <ul class="sub_content_add_txt">
                                <li class="mb24">
                                    <p class="label-tit13 color_clr1 fwb600">1교시 <span class="fr ico deletemode_20"></span></p>
                                    <slp-text-field classObject="underline none_bg" placeholder="학습 목표를 입력하세요"></slp-text-field>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <slp-button class="sm add w100p mt16 mb20" @click="addList1()" ><span class="ico"></span>일자 추가</slp-button>
                    <ul>
                        <li>
                            <div class="main_content">
                                <h2 class="label-tit16 color_clr1 fwb600">레포트</h2>
                            </div>
                            <ul class="sub_content_list"></ul>
                            <div class="sub_content_add">
                                <span class="chip clr2 font_14">+ 레포트 추가</span>
                            </div>
                        </li>
                        <li>
                            <div class="main_content">
                                <h2 class="label-tit16 color_clr1 fwb600">평가</h2>
                            </div>
                            <div class="sub_content_type2">
                                <ul class="score_list">
                                    <li class="label-tit16">문항배점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                    </li>
                                    <li class="label-tit16">총점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                    </li>
                                </ul>
                                <ul class="w64List tac pdb32">
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
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- //atorm_material -->
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
  name: 'Atorm_group_flip_material',
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
