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
                    <li class="open" @click="toggleMenu($event)">
                        <span>필수정보</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner">
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
                        
                        <div class="confirm_item_detail_inner">
                            <!-- list -->
                            <div class="atorm_status_table">
                                <table class="detail_table2">
                                    <tbody>                                   
                                    <tr>
                                        <td class="fwb vt" style="width:95px">과정분류</td> 
                                        <td class="data">경영 리더십<span class="ico next_line_12 ml6 mr6"></span>비지니스 리더십<span class="ico next_line_12 ml6 mr6"></span>커뮤니케이션</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb">문의방법</td> 
                                        <td class="data">012-3456-7890</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb">학습대상</td> 
                                        <td class="data">전체</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb">난이도</td> 
                                        <td class="data">하</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb">강사명</td> 
                                        <td class="data">정해민</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb">TAG</td> 
                                        <td class="data">데이터 분석, 통계분석</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb">역량</td> 
                                        <td class="data">커뮤니케이션<span class="ico next_line_12 ml6 mr6"></span>의사결정</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb vt">학습목표</td> 
                                        <td class="data">데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. 데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. </td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb vt">과정소개</td> 
                                        <td class="data pdb25">데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. 데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. </td> 
                                    </tr>
                                    </tbody>
                                </table> 
                            </div>
                            <!-- //list -->
                        </div>
                    </li>
                    <li @click="toggleMenu($event)">
                        <span class="mt15">
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
                        
                        <div class="confirm_item_detail_inner">
                            <!-- list -->
                            <table class="detail_table2">
                                <tbody>
                                <tr>
                                    <td class="fwb vt" style="width:95px">평가설정</td> 
                                    <td class="data">선택함</td> 
                                </tr>
                                <tr>
                                    <td class="fwb">수료기준</td> 
                                    <td class="data"><span class="fwr font_15">80</span> 점 이상 <span class="mono_50">(100점기준)</span></td> 
                                </tr>
                                <tr>
                                    <td class="fwb bbB89">평가문항</td> 
                                    <td class="data bbB89"><span class="fwr font_15">12</span> 문항 <span class="brB89 ml6 mr6"></span> <span class="fwr font_15">30</span> 점</td> 
                                </tr>
                                </tbody>
                            </table>

                            <div class="title_line mt26">
                                <h3 class="label-tit15"><b>평가 등록 내역</b></h3>
                            </div>
                            
                            <div class="atorm_complete pdb25">
                                <!-- list -->
                                <ul class="">
                                    <li>
                                        <div class="complete_detail white_bg bbB92 btw0 pt5 pdb5">
                                            <div class="txt_wrap fwb">
                                                <p class="title font_13">선다형 <span>3</span></p>
                                            </div>
                                        </div>
                                        
                                        <ul class="pdb12">
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">1</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">기획의 본질을 이해하자. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">2</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">프레젠테이션 기획의 본질을 이해하자. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">3</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">단순하지만 임팩트 있는 슬라이드의 특징</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div class="complete_detail white_bg bbB92 pt5 pdb5">
                                            <div class="txt_wrap fwb">
                                                <p class="title font_13">단답형 <span>3</span></p>
                                            </div>
                                        </div>
                                        <ul class="pdb12">
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">1</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">기획의 본질을 이해하자. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">2</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">프레젠테이션 기획의 본질을 이해하자. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">3</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">단순하지만 임팩트 있는 슬라이드의 특징</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <!-- //list -->
                            </div>
                            <!-- // list -->
                        </div>
                    </li>
                    <li @click="toggleMenu($event)">
                        <span>수료기준</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner">
                            <!-- list -->
                            <div class="title_line">
                                <h3 class="label-tit15"><b>기본수료기준</b></h3>
                            </div>
                            <ul class="multiList type_1">
                                <li style="border-top:0">
                                    <div class="in">
                                        <span class="label-tit14">출석률</span>
                                        <span class="status_data fr"><span class="status_value mr4">80%</span>이상 </span>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <span class="label-tit14">총점</span>
                                        <span class="status_data fr"><span class="status_value">5</span>점 이상 </span>
                                    </div>
                                </li>
                            </ul>
                            
                            <div class="title_line mt26">
                                <h3 class="label-tit15"><b>총점 평가항목 및 점수반영 비율</b></h3>
                            </div>
                            <ul class="multiList type_1">
                                <li style="border-top:0">
                                    <div class="in">
                                        <span class="label-tit14">진도율</span>
                                        <span class="status_data fr"><span class="status_value mr4">80%</span></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <span class="label-tit14">최종평가점수</span>
                                        <span class="status_data fr"><span class="status_value">35%</span></span>
                                    </div>
                                </li>
                            </ul>
                            
                            <div class="title_line mt26">
                                <h3 class="label-tit15"><b>기타 설정</b></h3>
                            </div>
                            <ul class="multiList type_1">
                                <li style="border:0">
                                    <div class="in">
                                        <span class="label-tit14">설문 및 별점</span>
                                    </div>
                                </li>
                            </ul>
                            <!-- //list -->
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
