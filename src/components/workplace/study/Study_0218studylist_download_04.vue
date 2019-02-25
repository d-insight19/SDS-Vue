<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery courseware studydown pd70" style="background:#f2f2f2">

        <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div id="header" class="tab video" style="background:#fff">
            <div class="header_inner line1 ">
                <button type="button" class="btn only prev" style="display:none;"><span class="ico2 prev-wh"></span></button>
                <p class="header_text multiline line2 font_15"></p>
            </div>

            <div class="header_inner line2 tabMenu scroll-x">
                <ul class="scrollTab">
                    <li class="on"><a href="#tab1">학습현황</a></li>
                    <li><a href="#tab2">학습목차</a></li>
                    <li><a href="#tab3">학습노트</a></li>
                    <li><a href="#tab3">질문방</a></li>
                    <li><a href="#tab3">메뉴메뉴메뉴메뉴메뉴</a></li>
                </ul>
            </div>

            <!-- 스크롤 값에 따라서  left blur , right blur 감춰주기. ( header scroll tab )  -->
            <!-- <div class="blur_wrap">
                <div class="left blur"></div>
                <div class="right blur"></div>
            </div> -->


            <!-- s: 동영상 -->
            <!-- s: 동영상 -->
            <div class="player_wrap">
                <div class="player_inner">
                    <div id="contents"></div>

                    <!--  s: 연관 콘텐츠 -->
                    <div class="movie_info_list_wrap" style="display:none;">
                        <div class="movie_info_list">
                            <p class="movie_info_tit">연관 콘텐츠 추천</p>
                            <ul>
                                <li v-for="(item, index) in relatedVideoList" :key="index">
                                    <a href="#"></a>
                                    <p class="movie_tit multiline line2">{{item.title}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- e: 연관 콘텐츠 -->

                    <!-- s: 볼륨영역 -->
                    <div class="volume_wrap" style="display:none;">
                        <div class="volume_left">
                            <div class="inner"></div>
                            <div class="icon_wrap">
                                <span class="light_icon"></span>
                                <span class="light_value">75</span>
                            </div>
                        </div>
                        <div class="volume_right">
                            <div class="inner"></div>
                            <div class="icon_wrap">
                                <span class="volume_icon"></span>
                                <span class="volume_value">65</span>
                            </div>
                        </div>
                    </div>
                    <!--  e: 볼륨영역 -->

                    <!-- s: double 텝 영역 -->
                    <div class="tap_wrap" style="display:none;">
                        <div class="half_left">
                            <div class="inner"></div>
                            <div class="inner_ripple"></div>
                        </div>
                        <div class="half_right">
                            <div class="inner"></div>
                            <div class="inner_ripple"></div>
                        </div>
                    </div>
                    <!--  e: double 텝 영역 -->

                </div>
                <!-- s: btm_subtitle_area -->
                <div class="btm_subtitle_area">
                    <div class="subtitle_slide_wrap">
                        <div class="btm_subtitle_control">
                            <div>
                                <div class="subtitle_lang_wrap">
                                    <span class="lang_type">Bahasa Indonesia</span>
                                    <span class="dropdown"></span>
                                </div>
                                <span class="switch_txt">Auto Scroll</span>
                                <slp-switch :value="true"/>
                                <span class="script_close"></span>
                            </div>
                        </div>
                        <!-- s: timeline_wrapper -->
                        <div class="timeline_wrapper">
                            <p class="timeline_tit">스크립트</p>
                            <ul class="btm_subtitle_timeline">
                                <li>
                                    <!-- 현재 재생중인 영상의 자막일 때 -->
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <div class="desc">
                                            <p>이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. <span class="color_clr2">이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다.</span></p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <div class="desc">
                                            <p>[클래스 객체]</p>
                                            <p>이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에
                                            대해서 이번 차시에는 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <div class="desc">
                                            <p>이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에
                                            대해서 이번 차시에는 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번
                                            차시에는 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <div class="desc">
                                            <p>이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <div class="desc">
                                            <p>[클래스 객체]</p>
                                            <p>이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <div class="desc">
                                            <p>[클래스 객체]</p>
                                            <p>이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- e: timeline_wrapper -->
                    </div>
                </div>
                <!-- e: btm_subtitle_area -->
            </div>
            <!-- e: 동영상-->

            <div class="hide_header">

                <div class="study_title_wrap">
                    <div class="d-day_wrap">
                        <span class="d-day">D-29</span>
                        <div class="arm">
                            <span class="new"></span> <span class="icon"></span>
                        </div>
                    </div>
                    <div class="study_contens_title">
                        <p class="multiline line2">SPRINT - 구글 벤처스의 5일만에 기획부터 실행까지 끝내는 법(참고도서제공)</p>
                    </div>
                    <p class="study_date">2018.09.10 - 2018.10.10</p>

                    <div class="study_arrow_down_icon" :class="{'mask_clr2': detail_show }" @click="detail_toggle()"></div>
                </div>

                <div class="study_title_detail" v-show="detail_show">
                    <div class="s_detail_wrap detail_txt">
                        세계에서 가장 영향력 있는 CEO들의 삶과 경영스토리를 1:1 인터뷰로 만나다! 누구나 만나고 싶었지만, 쉽게 만나볼 수 없었던 세계 정상급 CEO들을 만나 칼라일그룹 CEO 루벤스타인이 날카로운 질문으로 밀착 인터뷰해 자기경영과 조직경영을 위한 리더십 인사이트를 제시합니다.
                    </div>
                    <div class="s_detail_wrap detail_goal">
                        <p class="detail_sub_title">학습목표</p>
                        <ul>
                            <li>프레젠테이션 기획의 본질을 이해하자. </li>
                            <li>단순하지만 임팩트 있는 슬라이드의 특징을 이해하고 이를 실제로 제작하고 팀원들과 의견을 공유해보자.</li>
                            <li>발표를 스킬이 아닌 콘텐츠가 중심이라는 점을 이해하고, 올바른 발표 준비 및 실전 발표 팁을 배우자</li>
                        </ul>
                    </div>
                    <div class="s_detail_wrap detail_target">
                        <p class="detail_sub_title">학습대상</p>
                        <ul>
                            <li>경쟁PT/내부보고/설명회/내부행사 등에서 프레젠테이션을 준비해야 하는 분 </li>
                            <li>실전에서 통하는 프레젠테이션의 기획/제작/발표에 대해 배우고싶은 분</li>
                        </ul>
                    </div>
                    <div class="s_detail_wrap detail_introduce">
                        <p class="detail_sub_title">강사소개</p>
                        <div class="teacher_profile">
                            <div class="teacher_img_wrap">
                                <div class="teacher_img">
                                    <img src="@/assets/img/benjamin_parker_736167_unsplash.png" class="thumImg" alt="profile img">
                                </div>
                                <p class="teacher_name">김진혁</p>
                            </div>
                            <div class="teacher_career">
                                <div class="carear_wrap">
                                    <p class="career_tit1">주요경력</p>
                                    <p class="career_sub">현)벨류스퀘어 대표 </p>
                                    <p class="career_sub">한국 인력개발학회 이사</p>
                                    <p class="career_sub">한국 강사협회 리더십 위원장</p>
                                </div>
                                <div class="carear_wrap">
                                    <p class="career_tit1">주요 강의분야</p>
                                    <p class="career_sub">변화적용 리더십, 서번트 리더쉽 등</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div id="content" class="etc" >
            <!-- <div class="cell">
                <div class="downloadCondition ml-18 mr-18">
                    <div class="w48p fl">
                        <p class="font_12 mono_50 fwb">저장공간 사용량</p>
                        <p class="font_13 mono_65 fwb">24% <span class="font_11 mono_50 fwr">(123.21 GB/512.51 GB)</span></p>
                    </div>
                    <div class="w48p fr">
                        <p class="font_12 mono_50 fwb">다운로드한 강의</p>
                        <p class="font_13 mono_65 fwb">978.21 MB</p>
                    </div>
                </div>
            </div>

            <div class="cell">
                <div class="filterArea ml-18 mr-18">
                    <p class="tar">
                        <button class="font_14 mono_65 fwr" @click="btnCancel">취소</button>
                        <button class="font_14 color_clr2 fwr ml10" @click="btnEdit">다운로드</button> <span class="badge chip_xs ml6 clr2">12</span>
                    </p>
                </div>
            </div> -->

             <div class="filterArea ml-18 mr-18" style="padding:19px;">
                    <p class="font_16 mono_80 fwb dib">전체보기</p>
                    <p class="fr">
                        <span class="ico filter" style="position:static;margin-right: 12px;"></span>
                        <span class="ico download"></span>
                    </p>
                </div>
                <p class="label-tit-18 mt19 ">데이터 특성 알아보기</p>

                <!-- list -->
                <ul class="multiList type2">
                    <li>
                        <div class="download_detail">
                            <div class="txt_wrap">
                                <p class="icon_txt color_clr3">N차시</p>
                                <p class="title">차시명 타이틀 입니다. : 16 Medium 한 줄</p>
                                <ul class="info">
                                    <li class="">
                                        <span class="ico check_14"></span>
                                        <span>학습완료</span>
                                        <span class="mono_65">2017.11.05</span>
                                    </li>
                                    <li class="">
                                        <span class="ico time"></span>
                                        <span>12:45</span>/<span class="mono_65">23:43</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span class="ico accordion_arrow"></span>
                    </li>
                    <li>
                        <div class="download_detail">
                            <div class="txt_wrap">
                                <p class="icon_txt color_clr3">N차시</p>
                                <p class="title">차시명 타이틀 입니다. : 16 Medium 두 줄 이상일 경우 행간 22</p>
                                <ul class="info">
                                    <li class="">
                                        <span class="ico check_14"></span>
                                        <span>학습완료</span>
                                        <span class="mono_65">2017.11.05</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span class="ico accordion_arrow"></span>
                    </li>
                    <li class="open">
                        <div class="download_detail border_clr1 clr1 wh">
                            <div class="txt_wrap">
                                <p class="icon_txt color_clr6">3차시</p>
                                <p class="title">차시명 타이틀 입니다. : 16 Medium 두 줄 이상일 경우 행간 22</p>
                                <ul class="info">
                                    <li>
                                        <span class="ico check_14 wh"></span>
                                        <span class="wh">진행중</span>
                                        <span class="wh mono_65">1/4</span>
                                    </li>
                                    <li>
                                        <span class="ico time wh"></span>
                                        <span class="wh">12:45</span><span class="wh">/</span><span class="wh mono_65">23:43</span>
                                    </li>
                                </ul>
                            </div>
                            <span class="ico accordion_arrow wh"></span>

                            

                        </div>
                            <div class="toast"  @click="snacToggle" v-show="snacFlag" >
                                <div class="in">
                                    <div class="download_wrap">
                                        <span class="">다운로드 중</span>
                                        <span class=""><span class="download_hilight">42%</span>(5개/총 12개)</span>
                                    </div>                    
                                    <div class="progBox">
                                        <div class="bar clr2" style="width:20%;"></div>
                                    </div>
                                    <div class="toastBtnWrap">
                                        <a href="#">전체보기</a>
                                    </div>
                                </div>
                            </div>



                            <ul>
                                <li class="open">
                                    <div class="sub_content">
                                        <p class="sub_content_title border_clr1  color_clr1 clr4">변수와 데이터 타입</p>
                                        <!-- list -->
                                        <ul class="multiList type2">
                                            <li>
                                                <div class="download_detail border_clr1 clr4 done">
                                                    <div class="icon_wrap">
                                                        <span class="ico play_28"></span>
                                                    </div>
                                                    <div class="txt_wrap">
                                                        <p class="title">LO/SO 타이틀 입니다 : 15 Medium 두 줄 이상일 경우 행간 22 동영상 VR/AR</p>
                                                        <ul class="info">
                                                            <li class="">
                                                                <span class="ico check_14"></span>
                                                                <span>학습완료</span>
                                                            </li>
                                                            <li class="">
                                                                <span class="ico time"></span>
                                                                <span class="mono_65">23:43</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="download_detail border_clr1 done clr3">
                                                    <div class="icon_wrap">
                                                        <span class="ico play_28"></span>
                                                    </div>
                                                    <div class="txt_wrap">
                                                        <p class="title">LO/SO 타이틀 입니다 : 15 Medium 두 줄 이상일 경우 행간 22 동영상 VR/AR</p>
                                                        <ul class="info">
                                                            <li class="">
                                                                <span class="ico ongoing_16"></span>
                                                                <span>진행중</span>
                                                            </li>
                                                            <li class="">
                                                                <span class="ico time"></span>
                                                                <span class="mono_65">23:43</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="download_detail border_clr1 done clr4 bottom-bd-x ">
                                                    <div class="icon_wrap">
                                                        <span class="ico ebook_28"></span>
                                                    </div>
                                                    <div class="txt_wrap">
                                                        <p class="title">LO/SO 타이틀 입니다 : 15 Medium 두 줄 이상일 경우 행간 22 E-book / HTML5</p>
                                                        <ul class="info">
                                                            <li class="">
                                                                <span class="ico ongoing_16"></span>
                                                                <span>진행중</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <!-- //list -->
                                        <p class="sub_content_title border_clr1 color_clr1 clr4">변수와 데이터 타입</p>
                                        <!-- list -->
                                        <ul class="multiList type2">
                                            <li>
                                                <div class="download_detail border_clr1 done clr4">
                                                    <div class="icon_wrap">
                                                        <span class="ico headphone_28 "></span>
                                                    </div>
                                                    <div class="txt_wrap">
                                                        <p class="title">LO/SO 타이틀 입니다 : 15 Medium 두 줄 이상일 경우 행간 22 동영상 VR/AR</p>
                                                        <ul class="info">
                                                            <li class="">
                                                                <span class="ico complete_14"></span>
                                                                <span>미진행</span>
                                                            </li>
                                                            <li class="">
                                                                <span class="ico time"></span>
                                                                <span class="mono_65">23:43</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="download_detail clr4 border_clr1">
                                                    <div class="icon_wrap">
                                                        <span class="ico play_28"></span>
                                                    </div>
                                                    <div class="txt_wrap">
                                                        <p class="title">LO/SO 타이틀 입니다 : 15 Medium 두 줄 이상일 경우 행간 22 동영상 VR/AR</p>
                                                        <ul class="info">
                                                            <li class="">
                                                                <span class="ico lock_16"></span>
                                                                <span>학습불가</span>
                                                            </li>
                                                            <li class="">
                                                                <span class="ico time"></span>
                                                                <span class="mono_65">23:43</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <!-- //list -->
                                    </div>
                                </li>
                            </ul>
                            <!--//inner list -->
                    </li>

                    <li>
                        <div class="download_detail">
                            <div class="txt_wrap">
                                <p class="icon_txt color_clr3">4차시</p>
                                <p class="title">차시명 타이틀 입니다. : 16 Medium 두 줄 이상일 경우 행간 22</p>
                                <ul class="info">
                                    <li class="">
                                        <span class="ico lock_16"></span>
                                        <span>학습불가</span>
                                    </li>
                                    <li class="">
                                        <span class="ico time"></span>
                                        <span class="mono_65">23:43</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span class="ico accordion_arrow"></span>
                    </li>
                    <li>
                        <div class="download_detail">
                            <div class="txt_wrap">
                                <p class="icon_txt color_clr3">5차시</p>
                                <p class="title">차시명 타이틀 입니다. : 16 Medium 두 줄 이상일 경우 행간 22</p>
                                <ul class="info">
                                    <li class="">
                                        <span class="ico lock_16"></span>
                                        <span>학습불가</span>
                                    </li>
                                    <li class="">
                                        <span class="ico time"></span>
                                        <span class="mono_65">23:43</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span class="ico accordion_arrow"></span>
                    </li>

                </ul>

                <p class="label-tit-18 mt26 ">데이터 특성 알아보기</p>

                <ul class="multiList type2">
                    <li>
                        <div class="download_detail done">
                            <div class="icon_wrap">
                                <span class="ico play_28"></span>
                            </div>
                            <div class="txt_wrap">
                                <p class="title">LO/SO 타이틀 입니다 : 15 Medium 두 줄 이상일 경우 행간 22 동영상 VR/AR</p>
                                <ul class="info">
                                    <li class="">
                                        <span class="ico lock_16"></span>
                                        <span>학습불가</span>
                                    </li>
                                    <li class="">
                                        <span class="ico time"></span>
                                        <span class="mono_65">23:43</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="download_detail">
                            <div class="txt_wrap">
                                <p class="icon_txt color_clr3">N차시</p>
                                <p class="title">차시명 타이틀 입니다. : 16 Medium 두 줄 이상일 경우 행간 22</p>
                                <ul class="info">
                                    <li class="">
                                        <span class="ico ongoing_16"></span>
                                        <span>진행중</span>
                                    </li>
                                    <li class="">
                                        <span class="ico time"></span>
                                        <span>12:45</span>/<span class="mono_65">23:43</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span class="ico accordion_arrow"></span>
                    </li>
                </ul>
                <!-- 리스트끝 -->

            <div class="cell">
                <div class="inner pt0">
                    <study-list :class="{'editMode' : editFlag}"></study-list>
                </div>
            </div>

        </div>

      </div>
      <!-- //container -->
    </div>
    <!-- //wrap -->
</template>

<script>
/* eslint-disable */

// 1. jquery
import $ from 'jquery'
window.$ = $
window.jQuery = $

// 2. css
import 'flowplayer/dist/skin/lo_skin.scss'
import 'flowplayer/dist/skin/stw.scss'


// 3. node_modules
import flowplayer from 'flowplayer'

// 4. plugins
import audio from 'flowplayer/dist/plugins/flowplayer.audio.min.js'
audio(flowplayer)
import vod from 'flowplayer/dist/plugins/flowplayer.vod-quality-selector.min.js'
vod(flowplayer)
import speed from 'flowplayer/dist/plugins/flowplayer.speed-menu.min.js'
speed(flowplayer)
window.flowplayer = flowplayer

// 5. 자체 제작 플레이어 JS
import 'flowplayer/dist/util_flowPlayer.js'

//Study_list
import studyList from './Study_list.vue'

export default {
    name: 'components_flowplayer',

    components: { //Study_list
		'study-list':studyList
	},

    data () {
        return {
            snacFlag: true,
            active : false,
            scriptFlag: false,         // 동영상 내 스크립트 toggle 변수
            detail_show: false,        // 동영상 하단 타이틀 디테일 toggle 변수
            relatedVideoList: [
                {title: '자바스크립트 개발 프로세스 기초'},
                {title: '모바일 게임 UI 디자인 실무'},
                {title: '만화로 배우는 알기 쉬운 경영 기초전략'},
                {title: '모바일 게임 UI 디자인 실무'},
                {title: '자바스크립트 개발 프로세스 기초1'},
                {title: '자바스크립트 개발 프로세스 기초2'},
                {title: '자바스크립트 개발 프로세스 기초3'}
            ],
            option: {
                loType: "movie", //loType : movie(동영상), audio(오디오), vr(VR)
                targetId: "contents", //div target Id
                // sources: [
                //   { type: 'video/mp4', src: require('@/assets/movie/m010102.mp4') },
                //   { type: 'video/mp4', src: require('@/assets/movie/m010102-160p.mp4') },
                //   { type: 'video/mp4', src: require('@/assets/movie/m010102-530p.mp4') },
                //   { type: 'video/mp4', src: require('@/assets/movie/m010102-720p.mp4') }
                // ],
                // src: require('@/assets/movie/m010102.mp4'), //동영상 src
                sources: [
                    { type: 'video/mp4', src: './static/movie/m010102.mp4'},
                    { type: 'video/mp4', src: './static/movie/m010102-160p.mp4'},
                    { type: 'video/mp4', src: './static/movie/m010102-530p.mp4'},
                    { type: 'video/mp4', src: './static/movie/m010102-720p.mp4'}
                ],
                src: './static/movie/m010102.mp4', //동영상 src
                // src: require('@/assets/movie/m010102.mp4'), //동영상 src
                title: "Flowplayer", //콘텐츠 제목
                isSpeeds: true, //동영상 배속 사용여부
                speeds: [1, 2, 3], //동영상 배속 설정 값
                skinClass: "flowplayer fp-fat", //동영상 스킨
                isMute: true, //음소거 사용여부
                isFullscreen: true, //전체 화면
                isShare: true, //공유 여부
                isAutoplay: false, //자동실행여부
                seekTime: 30, //콘텐츠 이어학습하기 시간 초
                isPorg: true, //콘텐츠 진도값 저장 여부
                logSaveTime: 5, //콘텐츠 진도 로그 저장 주기 (초)
                replayTime: [0, 0], //구간반속 구간 [시작, 끝]
                qualities: ["160p", "260p", "530p", "720p"], //콘텐츠 화질 설정 값
                defaultQuality: "260p", //콘텐츠 화질 초기 값
                subtitles: [
                {
                    "default": true, // note the quotes around "default"!
                    kind: "subtitles",
                    srclang: "en",
                    label: "English",
                    // src: "../../html/bc_smart_en.vtt"
                },
                {
                    "default": true, // note the quotes around "default"!
                    kind: "subtitles",
                    srclang: "ko",
                    label: "Korea",
                    // src: "../../html/bc_smart_ko.vtt"
                }
                ], //자막,
                noseek: true //timeline no
            },

            editFlag: false, //Study_list
        }
    },

    methods: {
         snacToggle() {
          this.snacFlag = !this.snacFlag
        },
        detail_toggle () {  //Study_list
            this.detail_show = !this.detail_show;
        },
        active_el () { //Study_list
            this.active = !this.active
        },

        btnEdit: function() { //Study_list
            this.editFlag = true;
        },
        btnCancel: function() { //Study_list
            this.editFlag = false;
        }
    },

    mounted () {
        var _PLAYER = new UtilFlowPlayer(this.option);
        _PLAYER.init();


        // 동영상 헤더 텍스트 입력
        $('.fp-header-txt').text("동영상 헤더 텍스트 입력.");

        var has_contents = true;
        // has_contents = false;
        if( has_contents ){
            // 연관콘텐츠가 있을경우 추가 ( 없을경우는 처리 안하면 됨)
            $(".flowplayer").addClass("has_contents");              // 해당 클래스로, 컨트롤bar 높이 재설정
            var createVidoeHtml = "";
            createVidoeHtml += '<div class="movie_info_list">';
            createVidoeHtml += '<p class="movie_info_tit">연관 콘텐츠 추천</p>';
            createVidoeHtml += '<ul>';
            createVidoeHtml += '<li><a href="#" class="thum"><div class="thumbnail"><img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt=""></div></a><p class="movie_tit multiline line2">자바스크립트 개발 프로세스 기초</p></li>';
            createVidoeHtml += '<li><a href="#" class="thum"><div class="thumbnail"><img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt=""></div></a><p class="movie_tit multiline line2">모바일 게임 UI 디자인 실무</p></li>';
            createVidoeHtml += '<li><a href="#" class="thum"><div class="thumbnail"><img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt=""></div></a><p class="movie_tit multiline line2">만화로 배우는 알기 쉬운 경영 기초전략</p></li>';
            createVidoeHtml += '<li><a href="#" class="thum"><div class="thumbnail"><img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt=""></div></a><p class="movie_tit multiline line2">모바일 게임 UI 디자인 실무</p></li>';
            createVidoeHtml += '<li><a href="#" class="thum"><div class="thumbnail"><img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt=""></div></a><p class="movie_tit multiline line2">자바스크립트 개발 프로세스 기초1</p></li>';
            createVidoeHtml += '<li><a href="#" class="thum"><div class="thumbnail"><img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt=""></div></a><p class="movie_tit multiline line2">자바스크립트 개발 프로세스 기초2</p></li>';
            createVidoeHtml += '<li><a href="#" class="thum"><div class="thumbnail"><img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt=""></div></a><p class="movie_tit multiline line2">자바스크립트 개발 프로세스 기초3</p></li>';
            createVidoeHtml += '</ul>';
            createVidoeHtml += '</div>';

            $('.fp-ui').append(createVidoeHtml);

            // 연관 콘텐츠 터치시 활성화
            $(".movie_info_list").click(function(){
                // 터치시 활성화
                $(".movie_info_list").addClass("active");
                // player에 연관콘텐츠 활성화를 알리기위해  is-open-related-contents  클래스추가
                // 단순 jQuery등을 사용해서 컨트롤 하게되면 기본 플레이어 에서 제공하는 기능들과 꼬여서 해당클래스 추가함
                $(".flowplayer").toggleClass("is-open-related-contents");

                // TODO
                // 1. 연관 콘텐츠 터치 후 활성화 되었을때 video 자동으로 ui 숨겨지는 기능 막아야함
                //      -> 동영상 pause 처리하면 될듯
                // 2. 연관 콘텐츠 터치 후 활성화 되었을때 바깥영역 터치시 play || hover 되는 기능 막아야함

            });

            //연관 콘텐츠 활성화 되었을때 X 아이콘 터치시 비활성화
            $(".fp-header .fp-closeicon").click(function(){
                $(".movie_info_list").removeClass("active");
                $(".flowplayer").toggleClass("is-open-related-contents");
            });
        }


        $('.half_left').click(function(){
            console.error("왼쪽");
        });
        $('.half_right').click(function(){
            console.error("오른쪽");
        });

        $('.fp-script , .script_close').click(function(){
            // 스크립트 펼쳤을 경우, 하단의 콘텐츠들이 존재하기때문에 더이상 스크롤을 막기 위한 body 에 스크롤방지 클래스 추가
            $('body').toggleClass("scroll-n");
            $('.fp-script').toggleClass('active');
            $('.player_wrap').toggleClass('script');
        });

        $('.fp-nextArrow').click(function()
        {
            console.error('다음 콘텐츠!')
        });
        $('.fp-prevArrow').click(function()
        {
            console.error('이전 콘텐츠!')
        });


        miniMovie();

        function miniMovie(){
            var $parent = $('.player_wrap');
            var $obj = $('.btm_subtitle_area');
            var $top = $obj.offset().top;
            var $targetH = $parent.find('#contents').height();

            $(window).scroll(function()
            {
                var $wTop = $(window).scrollTop();
                var player_height = $('.player_wrap').height();
                var $hederTab = $(".header_inner.line2.tabMenu").offset().top;

                var scroll=$(this).scrollTop()+$(this).height();
                // console.error( $wTop , $hederTab-player_height , $targetH  , scroll);
                // 수치값은 수정해야함.
                // 현재는 상세내용을 펼치지않았을때의 값이나, 상세내용을 펼쳤을땐 값을 달리줘야함
                // ( 변수처리해서 상세내용 펼쳤을때와 아닐떄의 height 값 : $hederTab - player_height)
                // fixed 클래스가 들어가면서 값이 변하기때문에 전역변수로 상수처리해야하면 될듯
                // 176 , 1004
                // if ($wTop >= $hederTab-player_height )
                if ($wTop >= 176 )
                {
                    // $parent.addClass('fixed').css({'margin-top': $targetH });
                    $parent.addClass('fixed')
                    $("#header").addClass('fixed');
                }
                else
                {
                    $parent.removeClass('fixed').attr('style', '');
                    $("#header").removeClass('fixed');
                }
            })
        }

        function scriptScroll()
        {
            var $obj = $('.timeline_wrapper');
            var $objTop = $obj.offset().top;
            var $target = $obj.find('li');
            $obj.scrollTop(0);
            $target.each(function()
            {
                var $thisTop = $(this).offset().top;
                if ($(this).hasClass('is-active'))
                {
                    console.log('$objTop' + '_' + $objTop);
                    console.log('$thisTop' + '_' + $thisTop);
                    $obj.scrollTop($thisTop - $objTop);
                    /*$obj.stop().animate({scrollTop : $thisTop - $objTop });*/
                }
            });
        }
    }
}
</script>
