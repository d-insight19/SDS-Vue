<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery">

        <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div id="header" class="tab video">          
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text  font_18">제이크 냅 직강: 기획부터 실행까지 5일만에 끝내기</p>
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

            <!-- 스크롤 값에 따라서  left blur , right blur 감춰주기.  -->
            <div class="blur_wrap">
                <div class="left blur"></div>
                <div class="right blur"></div>
            </div>

            
            <!-- s: 동영상 -->
            <div class="player_wrap">
                <div class="player_inner">
                    <div id="contents"></div>

                    <!--  s: 연관 콘텐츠 -->
                    <div class="movie_info_list" style="display:none">
                        <p class="movie_info_tit">연관 콘텐츠 추천</p>
                        <ul>
                            <li>
                                <a href="#"></a>
                                <p class="movie_tit multiline line2">자바스크립트 개발 프로세스 기초</p>
                                <p class="movie_info"><span class="star ico"></span>4.5</p>
                            </li>
                            <li>
                                <a href="#"></a>
                                <p class="movie_tit multiline line2">모바일 게임 UI 디자인 실무</p>
                                <p class="movie_info"><span class="star ico"></span>4.5</p>
                            </li>
                            <li>
                                <a href="#"></a>
                                <p class="movie_tit multiline line2">만화로 배우는 알기 쉬운경영 기초전략</p>
                                <p class="movie_info"><span class="star ico"></span>4.5</p>
                            </li>
                            <li>
                                <a href="#"></a>
                                <p class="movie_tit multiline line2">모바일 게임 UI 디자인 실무</p>
                                <p class="movie_info"><span class="star ico"></span>4.5</p>
                                
                            </li>
                        </ul>
                    </div>
                    <!--  e: 연관 콘텐츠 -->

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

                    <!-- s: 텝 영역 -->
                    <div class="tap_wrap">
                        <div class="half_left">
                            <div class="inner"></div>
                            <div class="inner_ripple"></div>
                        </div>
                        <div class="half_right">
                            <div class="inner"></div>
                            <div class="inner_ripple"></div>
                        </div>
                    </div>
                    <!--  e: 텝 영역 -->

                </div>
                <!-- s: btm_subtitle_area -->
                <div class="btm_subtitle_area" data-js="toggle" >
                    <div class="subtitle_slide_wrap" data-js="toggle__panel">
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
        <!-- //header -->

        <!--
            상태 관련 css (추후 아이콘 교체될 수 있음)
            stat01 : 미진행 // 아이콘 미수급 // 추후 이미지 교체 예정
            stat02 : 진행중
            stat03 : 학습완료
            stat04 : 진행불가 // 아이콘 미수급 // 추후 이미지 교체 예정

            카드 UI 아이콘 css (추후 아이콘 교체될 수 있음)

            LO
            type01 : 동영상/VR & AR
            type02 : E-BOOK/HTML5
            type03 : Audio
            type04 : 집합

            SO
            type05 : Summary, 과정OT, 목표안내, 액션플랜 과정요약집, 서약서, 간지페이지
            type06 : 사례,의견공유, 토론, 멘토링
            type07 : 음성녹음
            type08 : 평가, Poll, 과제
            type09 : 퀴즈, 설문, 시뮬레이션
            type10 : 공지
        -->

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
                <p>내용5</p>
                <p>내용6</p>
                <p>내용7</p>
                <p>내용8</p>
                <p>내용9</p>
                <p>내용10</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p>
                <p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p>
                <p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p>
                <p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p>
                <p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p><p>내용</p>

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
import 'flowplayer/dist/skin/lo_skin.css'
import 'flowplayer/dist/skin/stw.css'


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

export default {
  name: 'components_flowplayer',
  data () {
    return {
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
      scriptFlag: false,         // 동영상 내 스크립트 toggle 변수
      detail_show: false        // 동영상 하단 타이틀 디테일 toggle 변수
    }
  },
  methods: {
    detail_toggle () {
        this.detail_show = !this.detail_show;
    }
  },
  mounted () {
        var _PLAYER = new UtilFlowPlayer(this.option);
        _PLAYER.init();
        $('.fp-header-txt').text("동영상 헤더 텍스트 입력.");
        $('.fp-ratio').append('<div class="tap_wrap" style="display:none"><div class="half_left"></div><div class="half_right"></div></div>');

        $('.half_left').click(function(){
            console.error("왼쪽");
        });
        $('.half_right').click(function(){
            console.error("오른쪽");
        });

        $('.fp-script , .script_close').click(function(){
            console.error("스크립트");
            $('.fp-script').toggleClass('active');
            $('.player_wrap').toggleClass('script');
        });

        $('.fp-presec').click(function()
        {
            alert('30초이전!')
        });
        $('.fp-nextsec').click(function()
        {
            alert('30초다음!')
        });        
        var $value = 0;
        $('.fp-repeat').click(function()
        {
            if ($value == 0)
            {
                $(this).addClass('type01');
                alert('1');
                $value = 1;
            }
            else if ($value == 1)
            {
                $(this).removeClass('type01').addClass('type02');
                alert('2');
                $value = 2;
            }
            else if ($value == 2)
            {
                $(this).removeClass('type02');
                alert('3');
                $value = 0;
            }
        })
        miniMovie();

        function miniMovie(){
            var $parent = $('.player_wrap');
            var $obj = $('.btm_subtitle_area');
            var $top = $obj.offset().top;
            var $targetH = $parent.find('#contents').height();
            $(window).scroll(function()
            {
                var $wTop = $(window).scrollTop();
                var player_height = $parent.height();
                var $hederTab = $(".header_inner.line2.tabMenu").offset().top;
                console.error($wTop , $hederTab-player_height);
                // 수치값은 수정해야함.
                // 현재는 상세내용을 펼치지않았을때의 값이나, 상세내용을 펼쳤을땐 값을 달리줘야함 
                // ( 변수처리해서 상세내용 펼쳤을때와 아닐떄의 height 값 : $hederTab - player_height)
                // fixed 클래스가 들어가면서 값이 변하기때문에 상수처리해야할듯.
                // 176 , 1004
                if ($wTop > 176 )
                {
                    $parent.addClass('fixed');
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
