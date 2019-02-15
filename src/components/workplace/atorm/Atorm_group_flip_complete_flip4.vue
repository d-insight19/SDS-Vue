<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm atorm_confirmlist_detail pd70">

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
                    <h2 class="tit">완료</h2>
                    <div class="num">
                        <strong class="color_clr2">4</strong>/<span>4</span>
                    </div>
                </div>
                    <div class="progBox">
                    <div class="bar clr2" style="width:20%"></div>
                </div>
                <p class="txt-desc">제작한 학습과정을 확인 후 완료합니다.</p>
            </div>
            <p class="hr mb0"></p>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner pdb20">

                <ul class="confirm_item_detail">
                    <li @click="toggleMenu($event)">
                        <span>필수정보</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner pt0">
                            <!-- list -->
                            <ul>
                                <li class="mb20">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>
                                                    <div class="thum">
                                                        <div class="thumbnail">
                                                            <!--<img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">-->
                                                        </div>
                                                        <!--<div class="circle">
                                                            <span class="ico photo_16"></span>
                                                        </div>-->
                                                    </div>
                                                </td>
                                                <td class="txt-desc">
                                                    <strong class="label-tit15 mono_100">과정명</strong>
                                                    <p>1%의 핵심인재를 내사람으로 만들어 보템이 되기</p>
                                                </td>
                                            </tr>
                                        </thead>
                                    </table>
                                </li>
                                <li class="mb7">                                    
                                    <table class="essential_table">
                                        <tr>
                                            <td class="mono_100 fwb">과정코드</td>
                                            <td class="pl10">K1111</td>
                                        </tr> 
                                        <tr>
                                            <td class="mono_100 fwb">학습시간</td>
                                            <td class="pl10">3시간</td>
                                        </tr>
                                        <tr>
                                            <td class="mono_100 fwb">학습기간</td>
                                            <td class="pl10">3일(Days)</td>
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
                            <!-- list -->
                            <div class="atorm_status_table">
                                <table class="detail_table2">
                                    <tbody>                                   
                                    <tr>
                                        <td class="fwb" style="width:95px">과정분류</td> 
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
                                        <td class="fwb">교재유무</td> 
                                        <td class="data">교재있음</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb">교재 제공여부</td> 
                                        <td class="data">제공함</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb">교재명</td> 
                                        <td class="data">천하 시대의 시간은 사람이다.</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb">저자</td> 
                                        <td class="data">홍길동, 홍길순</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb">출판사</td> 
                                        <td class="data">민음사</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb">TAG</td> 
                                        <td class="data">데이터 분석, 통계분석</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb">강사명</td> 
                                        <td class="data">김길동, 김철순</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb" style="width:95px">과정분류</td> 
                                        <td class="data">커뮤니케이션<span class="ico next_line_12 ml6 mr6"></span>의사결정</td> 
                                    </tr>
                                    <tr>
                                        <td class="fwb vt">강사소개</td> 
                                        <td class="data">데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. 데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. </td> 
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
                        <span>학습목차 및 구성컨텐츠</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner pt0">
                            <!-- list -->
                            <ul class="singleList type1">
                                <li class="mb20">
                                    <strong class="label-tit14">학습분류</strong>
                                    <slp-select placeholder="대분류" width="100%" class="mt8">
                                        <option>전체</option>
                                    </slp-select>
                                    <slp-select placeholder="중분류" width="100%" class="mt8">
                                        <option>전체</option>
                                    </slp-select>
                                    <slp-select placeholder="소분류" width="100%" class="mt8">
                                        <option>전체</option>
                                    </slp-select>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">문의방법</strong>
                                    <div class="rdoSelBox mt8">    
                                        <slp-radio name="question">연락처</slp-radio>
                                        <slp-radio name="question">이메일</slp-radio>
                                    </div>
                                    <slp-text-field placeholder="연락처, 이메일 선택 후 정보를 입력하세요" class="mt8"></slp-text-field>
                                </li>
                                <li class="mb20">
                                    <p class="label-tit14">학습대상</p>
                                    <slp-select placeholder="전체" width="100%" class="mt8">
                                        <option>전체</option>
                                    </slp-select>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">난이도</strong>
                                    <slp-select placeholder="선택안함" width="100%" class="mt8">
                                        <option>전체</option>
                                    </slp-select>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">교재 유무</strong>
                                    <div class="rdoSelBox mt8">    
                                        <slp-radio name="question">교재 없음</slp-radio>
                                        <slp-radio name="question">교재 있음</slp-radio>
                                    </div>
                                    <slp-button class="sm add w100p mt8" @click="addList1()" ><span class="ico"></span>교재 정보 추가</slp-button>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">교재 제공 여부</strong>
                                    <div class="rdoSelBox mt8">    
                                        <slp-radio name="question">제공 안함</slp-radio>
                                        <slp-radio name="question">제공 함</slp-radio>
                                    </div>                                    
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">강사명</strong>
                                    <slp-text-field placeholder="강사명을 입력하세요" class="mt6"></slp-text-field>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">강사소개</strong>
                                    <slp-text-field placeholder="강사소개를 입력하세요" class="mt6"></slp-text-field>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">역량</strong>
                                    
                                    <ul class="fixTab mt10">
                                        <li>
                                            <slp-select placeholder="선택" width="100%" class="mr8">
                                                <option>전체</option>
                                            </slp-select>
                                        </li>
                                        <li>
                                            <slp-select placeholder="선택" width="100%">
                                                <option>전체</option>
                                            </slp-select>
                                        </li>
                                    </ul>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">학습목표</strong>
                                    <slp-text-field placeholder="학습 목표를 입력하세요" class="mt6"></slp-text-field>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">과정 소개</strong>
                                    <slp-text-field placeholder="과정 소개를 입력하세요" class="mt6"></slp-text-field>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">TAG</strong>
                                    <slp-text-field placeholder="예시) 의사소통, 커뮤니케이션" class="mt8"></slp-text-field>
                                </li>
                            </ul>
                            <!-- //list -->
                        </div>
                    </li>

                    <li class="open" @click="toggleMenu($event)">
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
                                <span class="label-tit14">출석률</span>
                                <span class="status_data fr"><span class="status_value mr4">80%</span></span>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <span class="label-tit14">레포트 점수 <span class="mono_50">(집합, 사후)</span></span>
                                <span class="status_data fr"><span class="status_value">35%</span></span>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <span class="label-tit14">평가 점수 <span class="mono_50">(사전, 집합, 사후)</span></span>
                                <span class="status_data fr"><span class="status_value">15%</span></span>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <span class="label-tit14">아이템 학습 <span class="mono_50">(사후)</span></span>
                                <span class="status_data fr"><span class="status_value">20%</span></span>
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
              <li><button type="button" class="btn ld">이전</button></li>
              <li><button type="button" class="btn ld clr1">완료</button></li>
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
  name: 'Atorm_e-learning_basic_1',
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
