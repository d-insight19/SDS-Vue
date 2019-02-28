<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery atorm flip pd70">

        <!-- header  -->
        <div id="header" class="expand">
          <!--<div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_18">이러닝 제작</p>
          </div>-->
          <div class="hide_header pl18 pr18" style="padding-top:36px;">
            <p class="label-tit30 pdb12">플립러닝 제작</p>
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
            <div class="inner pdb20">

                <ul class="confirm_item_detail">
                    <li class="open" @click="toggleMenu($event)">
                        <span>사전학습</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner">
                            <!-- 사전학습 상세 -->
                            <div class="atorm_material">
                                <slp-text-field class="underline_parents mb26" classObject="underline" value="데이터 특성 알아보기"></slp-text-field>
                                <ul>
                                    <li>
                                        <div class="main_content mt26">
                                            <h2 class="label-tit16 color_clr1 fwb600">아이템학습</h2>
                                        </div>
                                        <!-- list add item -->
                                        <ul class="sub_content_list">
                                            <li>
                                                <div class="icon_wrap">
                                                    <span class="ico play_28"></span>
                                                </div>
                                                <div class="txt_wrap">
                                                    <p class="title">데이터와 배열 활용하기</p>
                                                </div>
                                                <div class="del_wrap">
                                                    <span class="ico deletemode_20"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="icon_wrap">
                                                    <span class="ico play_28"></span>
                                                </div>
                                                <div class="txt_wrap">
                                                    <p class="title">실행 순서 제어하기</p>
                                                </div>
                                                <div class="del_wrap">
                                                    <span class="ico deletemode_20"></span>
                                                </div>
                                            </li>
                                        </ul>
                                        <!-- //list add item -->
                                        <div class="sub_content_add">
                                            <span class="chip clr2 font_14">+ 아이템 추가</span>
                                        </div>
                                    </li>
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
                                        <div class="sub_content_type">
                                            <ul class="score_list">
                                                <li class="label-tit16">문항배점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                                </li>
                                                    <li class="label-tit16">총점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                                </li>
                                            </ul>
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
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- 사전학습 상세 -->
                        </div>
                    </li>

                    <li @click="toggleMenu($event)">
                        <span>집합강의</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner">
                            <!-- 집합강의 상세 -->
                            <div class="atorm_material">
                                <slp-text-field class="underline_parents mb26" classObject="underline" placeholder="집합강의명을 입력하세요"></slp-text-field>
                                <ul>
                                    <li>
                                        <div class="main_content">
                                            <h2 class="label-tit16 color_clr1 fwb600">아이템학습</h2>
                                        </div>
                                        <ul class="sub_content_list"></ul>
                                        <div class="sub_content_add">
                                            <span class="chip clr2 font_14">+ 아이템 추가</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="main_content">
                                            <h2 class="label-tit16 color_clr1 fwb600">아이템학습</h2>
                                        </div>
                                        <ul class="sub_content_list"></ul>
                                        <div class="sub_content_add">
                                            <span class="chip clr2 font_14">+ 아이템 추가</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="main_content">
                                            <h2 class="label-tit16 color_clr1 fwb600">평가</h2>
                                        </div>
                                        <div class="sub_content_type">
                                            <ul class="score_list">
                                                <li class="label-tit16">문항배점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                                </li>
                                                    <li class="label-tit16">총점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                                </li>
                                            </ul>
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
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- // 집합강의 상세 -->
                        </div>
                    </li>

                    <li @click="toggleMenu($event)">
                        <span>사후학습</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner">
                            <!-- 사후학습 상세 -->
                            <div class="atorm_material">
                                <slp-text-field class="underline_parents mb26" classObject="underline" placeholder="사후학습명을 입력하세요"></slp-text-field>
                                <ul>
                                    <li>
                                        <div class="main_content">
                                            <h2 class="label-tit16 color_clr1 fwb600">아이템학습</h2>
                                        </div>
                                        <ul class="sub_content_list"></ul>
                                        <div class="sub_content_add">
                                            <span class="chip clr2 font_14">+ 아이템 추가</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="main_content">
                                            <h2 class="label-tit16 color_clr1 fwb600">아이템학습</h2>
                                        </div>
                                        <ul class="sub_content_list"></ul>
                                        <div class="sub_content_add">
                                            <span class="chip clr2 font_14">+ 아이템 추가</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="main_content">
                                            <h2 class="label-tit16 color_clr1 fwb600">평가</h2>
                                        </div>
                                        <div class="sub_content_type">
                                            <ul class="score_list">
                                                <li class="label-tit16">문항배점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                                </li>
                                                <li class="label-tit16">총점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                                </li>
                                            </ul>
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
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- // 사후학습 상세 -->
                        </div>
                    </li>
                </ul>

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
  name: 'Atorm_group_flip_add_item',
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
