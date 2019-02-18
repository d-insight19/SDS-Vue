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
          <div class="hide_header pl18 pr18" style="padding-top:30px;">
            <p class="font_30 fwb">이러닝 제작</p>
            <div class="stepper mb30">
                <div class="clearfix">
                    <h2 class="tit">완료</h2>
                    <div class="num">
                        <strong class="color_clr2">5</strong>/<span>5</span>
                    </div>
                </div>
                    <div class="progBox">
                    <div class="bar clr2" style="width:100%"></div>
                </div>
                <p class="txt-desc">제작한 학습과정을 확인 후 완료합니다.</p>
            </div>
            <p class="hr_2 mb0"></p>
          </div>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner pdb20" style="padding-top:0;">

                <ul class="confirm_item_detail">
                    <li @click="toggleMenu($event)">
                        <span>필수정보</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner pt0">
                            <!-- list -->
                            <ul class="singleList type1">
                                <li class="mb20">
                                    <table>
                                            <tr>
                                                <td>
                                                    <div class="thum">
                                                        <div class="thumbnail">
                                                            <!--<img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">-->
                                                        </div>
                                                        <!--<div class="circle">
                                                            <span class="ico atorm_photo_edit_solid_16"></span>
                                                        </div>-->
                                                    </div>
                                                </td>
                                                <td class="txt-desc">
                                                    <strong class="label-tit14">과정명</strong>
                                                    <p>1%의 핵심인재를 내사람으로 만들어 보템이 되기</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>과정코드</td>
                                                <td class="fwr">K1111</td>
                                            </tr>
                                            <tr>
                                                <td>학습시간</td>
                                                <td class="fwr">3시간</td>
                                            </tr>
                                            <tr>
                                                <td>학습기간</td>
                                                <td class="fwr">3일(Days)</td>
                                            </tr>
                                            <tr>
                                                <td>학습순서</td>
                                                <td class="fwr">순차학습</td>
                                            </tr>
                                    </table>
                                </li>
                            </ul>
                            <!-- //list -->
                        </div>
                    </li>
                    <li @click="toggleMenu($event)">
                        <span>선택정보</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner pt0">
                            
                        </div>
                    </li>
                    <li class="open" @click="toggleMenu($event)">
                        <span class="mt10">
                            학습목차 및 구성컨텐츠<br/>
                            <span class="mono_65 font_13 fwr">모듈 2</span> <span class="mono_65 font_13 fwr">차시 4</span>
                        </span>
                        <span class="accordion_arrow"></span>
                        
                        
                        
                        <div class="confirm_item_detail_inner">
                            <div class="atorm_complete pdb25">
                                <div class="complete_title mb13">
                                    <div class="icon_wrap">
                                        <span class="chip clr1 font_12 mono_0 fwl">모듈 1</span>
                                    </div>
                                    <div class="txt_wrap pt2">
                                        <p class="title font_18 fwb">데이터 특성 알아보기</p></p>
                                    </div>
                                </div>
                                <!-- list -->
                                <ul class="">
                                    <li>
                                        <div class="complete_detail pt5 pdb5">
                                            <div class="icon_wrap tac">
                                                <p class="color_clr1 font_13 fwb">1차시</p>
                                            </div>
                                            <div class="txt_wrap">
                                                <p class="title mono_80 font_14">데이터와 배열 활용하기</p>
                                            </div>
                                        </div>
                                        
                                        <ul class="pdb12">
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico play_28"></span>
                                                    </div>
                                                    <div class="txt_wrap pt2">
                                                        <p class="title mono_80 font_14">데이터와 배열 활용하기</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico play_28"></span>
                                                    </div>
                                                    <div class="txt_wrap pt2">
                                                        <p class="title mono_80 font_14">실행 순서 제어하기</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div class="complete_detail pt5 pdb5">
                                            <div class="icon_wrap tac">
                                                <p class="color_clr1 font_13 fwb">2차시</p>
                                            </div>
                                            <div class="txt_wrap">
                                                <p class="title mono_80 font_14">데이터와 배열 활용하기</p>
                                            </div>
                                        </div>
                                        
                                        <ul class="pdb12">
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico play_28"></span>
                                                    </div>
                                                    <div class="txt_wrap pt2">
                                                        <p class="title mono_80 font_14">데이터와 배열 활용하기</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico play_28"></span>
                                                    </div>
                                                    <div class="txt_wrap pt2">
                                                        <p class="title mono_80 font_14">실행 순서 제어하기</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <!-- //list -->
                            </div>
                            <div class="atorm_complete pdb25">
                                <div class="complete_title mb13">
                                    <div class="icon_wrap">
                                        <span class="chip clr1 font_12 mono_0 fwl">모듈 2</span>
                                    </div>
                                    <div class="txt_wrap pt2">
                                        <p class="title font_18 fwb">실제 예제로 알아보는 자바스크립트의 문법 특성</p></p>
                                    </div>
                                </div>
                                <!-- list -->
                                <ul class="">
                                    <li>
                                        <div class="complete_detail pt5 pdb5">
                                            <div class="icon_wrap tac">
                                                <p class="color_clr1 font_13 fwb">1차시</p>
                                            </div>
                                            <div class="txt_wrap">
                                                <p class="title mono_80 font_14">데이터와 배열 활용하기</p>
                                            </div>
                                        </div>
                                        
                                        <ul class="pdb12">
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico play_28"></span>
                                                    </div>
                                                    <div class="txt_wrap pt2">
                                                        <p class="title mono_80 font_14">데이터와 배열 활용하기</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico play_28"></span>
                                                    </div>
                                                    <div class="txt_wrap pt2">
                                                        <p class="title mono_80 font_14">실행 순서 제어하기</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div class="complete_detail pt5 pdb5">
                                            <div class="icon_wrap tac">
                                                <p class="color_clr1 font_13 fwb">2차시</p>
                                            </div>
                                            <div class="txt_wrap">
                                                <p class="title mono_80 font_14">데이터와 배열 활용하기</p>
                                            </div>
                                        </div>
                                        
                                        <ul class="pdb12">
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico play_28"></span>
                                                    </div>
                                                    <div class="txt_wrap pt2">
                                                        <p class="title mono_80 font_14">데이터와 배열 활용하기</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico play_28"></span>
                                                    </div>
                                                    <div class="txt_wrap pt2">
                                                        <p class="title mono_80 font_14">실행 순서 제어하기</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <!-- //list -->
                            </div>
                        </div>
                    </li>
                    <li @click="toggleMenu($event)">
                        <span>평가제작</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner pt0">
                            
                        </div>
                    </li>
                    <li @click="toggleMenu($event)">
                        <span>수료기준</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner pt0">
                            
                        </div>
                    </li>
                </ul>

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md">이전</button></li>
                <li><button type="button" class="btn md clr1">완료</button></li>
            </ul>
        </div>
        
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
/*eslint-disable */
export default {
  name: 'Atorm_e-learning_complete_1',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
     toggleFlag: true
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
