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
                    <h2 class="tit">완료</h2>
                    <div class="num">
                        <strong class="color_clr2">4</strong>/<span>4</span>
                    </div>
                </div>
                    <div class="progBox">
                    <div class="bar clr2" style="width:100%"></div>
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
                        <div class="confirm_item_detail_inner pdb25">
                            <!-- list -->
                            <ul>
                                <li>
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
                                                <tr>
                                                    <td class="fwb pdt20">과정코드</td>
                                                    <td class="pdt20">K1111</td>
                                                </tr>
                                                <tr>
                                                    <td class="fwb">학습시간</td>
                                                    <td>3시간</td>
                                                </tr>
                                                <tr>
                                                    <td class="fwb">학습기간</td>
                                                    <td>3일(Days)</td>
                                                </tr>
                                        </thead>
                                    </table>
                                </li>                                                                                     
                            </ul>
                            <!-- //list -->
                        </div>
                    </li>
                    <li @click="toggleMenu($event)">
                        <span>선택정보</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner pt12">
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

                    <li class="open" @click="toggleMenu($event)">
                        <span>학습목차 및 구성컨텐츠</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner">
                            <div class="title_line mt12 mb16">
                                <h3 class="label-tit16 fwb600">사전학습</h3>
                            </div>
                            <div class="atorm_complete pdb25">                                
                                <div class="complete_title mb13"> 
                                    <div class="txt_wrap pt2">
                                        <p class="title font_18 fwb">데이터 특성 알아보기</p></p>
                                    </div>
                                </div>
                                <!-- list -->
                                <ul class="">
                                    <li>
                                        <div class="complete_detail pt5 pdb5">
                                            <div class="txt_wrap">
                                                <p class="title color_clr1 font_13 fwb">아이템학습</p>
                                            </div>
                                        </div>
                                        
                                        <ul class="pt6 pdb12">
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
                                            <div class="txt_wrap">
                                                <p class="title color_clr1 font_13 fwb">레포트</p>
                                            </div>
                                        </div>
                                        
                                        <ul class="pt6 pdb12">
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico poll_line_28"></span>
                                                    </div>
                                                    <div class="txt_wrap pt2">
                                                        <p class="title mono_80 font_14">데이터와 배열 활용하기</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico poll_line_28"></span>
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
                                                <p class="color_clr1 font_13 fwb">평가</p>
                                            </div>
                                            <div class="txt_wrap tar">
                                                <p class="title font_13 pdr6">
                                                  <span class="mono_100 fwb">문항 배점</span> <span class="mono_65"><span class="font_15">10</span> 점</span>
                                                  <span class="brB89 ml6 mr6"></span>
                                                  <span class="mono_100 fwb">총점</span> <span class="mono_65"><span class="font_15">100</span> 점</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="complete_detail white_bg bbB92 btw0 pt5 pdb5">
                                            <div class="txt_wrap fwb">
                                                <p class="title font_13 pl16">선다형 <span>3</span></p>
                                            </div>
                                        </div>
                                        <ul class="pt12 pdb12 bbB85">
                                            <li>
                                                <div class="complete_sub_detail pt5 pdb5">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">1</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">기획의 본질을 이해하자. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt5 pdb5">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">2</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">프레젠테이션 기획의 본질을 이해하자. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt5 pdb5">
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

                            <div class="title_line mt12 mb16">
                                <h3 class="label-tit16 fwb600">집합</h3>
                            </div>
                            <div class="atorm_complete pdb25">                                
                                <div class="complete_title mb13">                               
                                    <div class="icon_wrap">
                                        <span class="chip clr1 font_12 mono_0 fwl">모듈</span>
                                    </div>
                                    <div class="txt_wrap pt2">
                                        <p class="title font_18 fwb">데이터 특성 알아보기</p></p>
                                    </div>
                                </div>
                                <!-- list -->
                                <ul class="">
                                    <li>
                                        <div class="complete_detail pt5 pdb5">
                                            <div class="txt_wrap">
                                                <p class="title color_clr1 font_13 fwb">1차시<span class="ml6 mono_80 fwr">데이터와 배열 활용하기</span></p>
                                            </div>
                                        </div>
                                        
                                        <ul class="pt6 pdb12">
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
                                            <div class="txt_wrap">
                                                <p class="title color_clr1 font_13 fwb">2차시<span class="ml6 mono_80 fwr">데이터와 배열 활용하기</span></p>
                                            </div>
                                        </div>
                                        
                                        <ul class="pt6 pdb12">
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
                                            <div class="txt_wrap">
                                                <p class="title color_clr1 font_13 fwb">레포트</p>
                                            </div>
                                        </div>
                                        
                                        <ul class="pt6 pdb12">
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico poll_line_28"></span>
                                                    </div>
                                                    <div class="txt_wrap pt2">
                                                        <p class="title mono_80 font_14">데이터와 배열 활용하기</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico poll_line_28"></span>
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
                                                <p class="color_clr1 font_13 fwb">평가</p>
                                            </div>
                                            <div class="txt_wrap tar">
                                                <p class="title font_13 pdr6">
                                                  <span class="mono_100 fwb">문항 배점</span> <span class="mono_65"><span class="font_15">10</span> 점</span>
                                                  <span class="brB89 ml6 mr6"></span>
                                                  <span class="mono_100 fwb">총점</span> <span class="mono_65"><span class="font_15">100</span> 점</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="complete_detail white_bg bbB92 btw0 pt5 pdb5">
                                            <div class="txt_wrap fwb">
                                                <p class="title font_13 pl16">선다형 <span>3</span></p>
                                            </div>
                                        </div>
                                        <ul class="pt12 pdb12">
                                            <li>
                                                <div class="complete_sub_detail pt5 pdb5">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">1</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">기획의 본질을 이해하자. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt5 pdb5">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">2</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">프레젠테이션 기획의 본질을 이해하자. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt5 pdb5">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">3</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">단순하지만 임팩트 있는 슬라이드의 특징</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="complete_detail white_bg bbB92 pt5 pdb5">
                                            <div class="txt_wrap fwb">
                                                <p class="title font_13 pl16">선다형 <span>3</span></p>
                                            </div>
                                        </div>
                                        <ul class="pt12 pdb12 bbB85">
                                            <li>
                                                <div class="complete_sub_detail pt5 pdb5">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">1</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">기획의 본질을 이해하자. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt5 pdb5">
                                                    <div class="icon_wrap tac"><p class="mono_65 font_14">2</p></div>
                                                    <div class="txt_wrap">
                                                        <p class="title mono_80 font_14">프레젠테이션 기획의 본질을 이해하자. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt5 pdb5">
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

                            <div class="title_line mt12 mb16">
                                <h3 class="label-tit16 fwb600">사후학습</h3>
                            </div>
                            <div class="atorm_complete pdb25">                                
                                <div class="complete_title mb13"> 
                                    <div class="txt_wrap pt2">
                                        <p class="title font_18 fwb">데이터 특성 알아보기</p></p>
                                    </div>
                                </div>
                                <!-- list -->
                                <ul class="">                                   
                                    <li>
                                        <div class="complete_detail pt5 pdb5">
                                            <div class="txt_wrap">
                                                <p class="title color_clr1 font_13 fwb">레포트</p>
                                            </div>
                                        </div>
                                        
                                        <ul class="pt6 pdb12">
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico poll_line_28"></span>
                                                    </div>
                                                    <div class="txt_wrap pt2">
                                                        <p class="title mono_80 font_14">데이터와 배열 활용하기</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="complete_sub_detail pt3 pdb3">
                                                    <div class="icon_wrap tac">
                                                        <span class="ico poll_line_28"></span>
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
                        <span>수료기준</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner">
                            <!-- list -->
                            <div class="title_line pt12">
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
  name: 'Atorm_group_flip_complete_flip3',
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
