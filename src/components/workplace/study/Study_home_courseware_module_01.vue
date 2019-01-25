<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery courseware " style="background:#f2f2f2">   
        
        <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div id="header" class="tab video" style="background:#fff">          
            <div class="header_inner line1 ">
                <button type="button" class="btn only prev" style="display:none;"><span class="ico2 prev-wh"></span></button>
                <p class="header_text multiline line2 font_15">제이크 냅 직강: 기획부터 실행까지 5일만에 끝내기</p>
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

        <div id="content" class="etc" style="padding:0;">
        
          <div class="cell">
            <div class="inner pt0">
                
                <div class="filterArea ml-18 mr-18" style="padding:19px;">
                    <p class="font_15 mono_80 fwb dib">전체보기</p>
                    <p class="fr">
                        <span class="ico filter" style="position:static;margin-right: 12px;"></span>
                        <span class="ico download"></span>
                    </p>                    
                </div>                
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
                                        <span>2017.11.05</span>
                                    </li>
                                    <li class="">
                                        <span class="ico time"></span>
                                        <span>12:45</span>/<span>23:43</span>
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
                                        <span>2017.11.05</span>
                                    </li>
                                    <li class="">
                                        <span class="ico time"></span>
                                        <span>12:45</span>/<span>23:43</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span class="ico accordion_arrow"></span>
                    </li>
                    <li>
                        <div class="download_detail clr1 wh">
                            <div class="txt_wrap">
                                <p class="icon_txt color_clr3">N차시</p>
                                <p class="title">차시명 타이틀 입니다. : 16 Medium 두 줄 이상일 경우 행간 22</p>
                                <ul class="info">
                                    <li>
                                        <span class="ico check_14 wh"></span>
                                        <span class="wh">학습완료</span>
                                        <span class="wh">2017.11.05</span>
                                    </li>
                                    <li>
                                        <span class="ico time wh"></span>
                                        <span class="wh">12:45</span><span class="wh">/</span><span class="wh">23:43</span>
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
                                        <span class="ico ongoing_16"></span>
                                        <span>진행중</span>
                                    </li>
                                    <li class="">
                                        <span class="ico time"></span>
                                        <span>12:45</span>/<span>23:43</span>
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
                                        <span class="ico complete_14"></span>
                                        <span>미진행</span>
                                    </li>
                                    <li class="">
                                        <span class="ico time"></span>
                                        <span>23:43</span>
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
                                        <span class="ico lock_16"></span>
                                        <span>학습불가</span>
                                    </li>
                                    <li class="">
                                        <span class="ico time"></span>
                                        <span>23:43</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span class="ico accordion_arrow"></span>
                    </li>
                </ul>

                <div class="bot-wrap ml-18 mr-18">
                    <h2 class="h-tit2 fwb600" style="margin-top:4px; margin-bottom:15px;">연관 콘텐츠 추천</h2>
                    <div class="scroll-x type2">
                        <!-- list -->
                        <ul class="thumList type2">
                            <li>
                                <div class="in">
                                <a href="#" class="thum">
                                    <div class="thumbnail">
                                        <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                    </div>
                                </a>
                                <a href="#" class="tit">만화로 배우는 알기 쉬운 경영 기초전략</a>
                                </div>
                            </li>                        
                            <li>
                                <div class="in">
                                <a href="#" class="thum">
                                    <div class="thumbnail">
                                        <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                    </div>
                                </a>
                                <a href="#" class="tit">만화로 배우는 알기 쉬운 경영 기초전략</a>
                                </div>
                            </li>                        
                            <li>
                                <div class="in">
                                <a href="#" class="thum">
                                    <div class="thumbnail">
                                        <img src="@/assets/img/thum_no_m.jpg" class="thumImg" alt="">
                                    </div>
                                </a>
                                <a href="#" class="tit">만화로 배우는 알기 쉬운 경영 기초전략</a>
                                </div>
                            </li>                        
                        </ul>
                        <!-- //list -->
                    </div>
                </div>

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
/* eslint-disable */
  name: 'CLIPing_videodetail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
        active : false
    }
  },
  /* vue function */
  methods: {
      active_el () {
          this.active = !this.active
      }
  }
}
</script>
