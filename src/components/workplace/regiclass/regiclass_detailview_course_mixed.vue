<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass">   

        <!-- header -->
        <div id="header" class="tab video">
            <div class="video_area">

            </div>
            <div class="header_inner line1 clr1">
                <button type="button" class="btn only prev"><span class="ico2 prev-wh"></span></button>
                <p class="header_text multiline line2 font_15">변화와 성과를 이끄는 프레젠테이션과 이를 실제 업무에 적용하기</p>
            </div>
            
            <div class="header_inner line2 tabMenu scroll-x" style="border-top:1px solid #eaeaea">
                <ul class="scrollTab">
                    <li><a href="#tab1">과정소개</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">과정요약</a></li>
                    <li class="on"><a href="#tab3">과정목차</a></li>
                    <li><a href="#tab4">수강후기</a></li>
                </ul>
            </div>

            <!-- s: 동영상 -->
            <div class="player_wrap">
                <div class="player_inner">
                    <div id="contents"></div>

                    <!-- s: 볼륨영역  임시 display:none 처리 및 이벤트 막음 -->
                    <div class="volume_wrap" style="display:none;pointer-events:none">
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

                    <!-- s: double 텝 영역  임시 display:none 처리 및 이벤트 막음 -->
                    <div class="tap_wrap" style="display:none;pointer-events:none">
                        <v-touch v-on:swipeup="prevTen" v-on:swipedown="prevTen" v-on:doubletap="prevTen">
                          <div class="half_left" v-bind:class="{'halfLeft': halfLeft}">
                              <div class="inner" style="background: rgba(255, 255, 255, 0);"></div>
                              <div class="inner_ripple" v-bind:class="{'innerRipple': !innerRipple}"></div>
                          </div>
                        </v-touch>
                        <v-touch v-on:swipeup="nextTen" v-on:swipedown="nextTen" v-on:doubletap="nextTen">
                            <div class="half_right" v-bind:class="{'halfRight': halfRight}">
                                <div class="inner" style="background: rgba(255, 255, 255, 0.0);"></div>
                                <div class="inner_ripple" v-bind:class="{'innerRipple': !innerRipple}"></div>
                            </div>
                        </v-touch>                            
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
            
            <div class="hide_header" style="padding-top: 24px; padding-bottom:2px; position: relative;">
                <p class="h-tit2 fwb600 mb8" style="padding-right: 40px;">변화와 성과를 이끄는 프레젠테이션과 이를 실제 업무에 적용하기</p>
                <button type="button" class="btn share" style="top: 24px;"><span class="ico"></span></button>
                <div>
                    <ul class="info mb5">
                        <li class="icon type2 fwb">
                            <span class="star ico" style="vertical-align:1px;"></span><span class="info_value mono_80">4.5</span><span class="info_value mono_80">(후기 999개)</span>
                        </li>
                        <li class="fwb">
                            <span class="info_value color_clr1">1,135,000원</span>
                            <span class="info_value mono_50">(VAT 없음)</span>
                        </li>
                    </ul>
                    <p class="mb26"><span class="chip">교재</span> <span class="chip">이벤트</span></p>
                </div>
            </div>
        </div>
        <!-- //header -->
        

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <p class="mono_60 font_14">
                    총 강의 <span class="mono_100 fwb">6</span>
                    <span class="fr">총 학습시간 <span class="mono_100 fwb">25:32:32</span></span>
                </p>
            </div>
          </div>
        
          <div class="cell">
            <div class="inner mb20">
                <p class="label-tit18 fwb600 mb0 pb10 bbB60">사전학습 모듈명</p>
                <ul class="multiList type5">
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                학습 소개 Orientation 
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                제이크 냅 직강: 기획부터 실행까지 5일만에 끝내는 ‘SPRINT’ 정복하기
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                한 눈에 살펴보는 자바의 기본, 자바 기본 개념 바로 세우기
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                한 눈에 살펴보는 자바의 기본, 자바 기본 개념 바로 세우기
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
          

          <div class="cell">
            <div class="inner mb40">
                <p class="label-tit18 fwb600 mb0 pb10 bbB60">집합강의 모듈명</p>
                <ul class="multiList type5">
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                학습 소개 Orientation 
                            </div>
                            <ul class="info">
                                <li class="fwb color_clr3">1일차 <span class="fwb600">09:00 ~ 12:00</span></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                한 눈에 살펴보는 자바의 기본, 자바 기본 개념 바로 세우기
                            </div>
                            <ul class="info">
                                <li class="fwb color_clr3">1일차 <span class="fwb600">09:00 ~ 12:00</span></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                한 눈에 살펴보는 자바의 기본, 자바 기본 개념 바로 세우기
                            </div>
                            <ul class="info">
                                <li class="fwb color_clr3">1일차 <span class="fwb600">09:00 ~ 12:00</span></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
          </div>

        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><slp-button class="md">희망과정 등록</slp-button></li>
                <li><slp-button class="md clr1">수강신청</slp-button></li>
            </ul>
        </div>
        <!-- //floating button --> 
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

import Vue from 'vue'
import VueTouch from 'vue-touch'

VueTouch.registerCustomEvent('singletap', {
  type: 'tap',
  taps: 1,
})

VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2,
})

Vue.use(VueTouch, {name: 'v-touch'})

export default {
  name: 'regiclass_detailview_course_mixed',
  data () {
    return {
        active : false,
        innerRipple: false,
        halfRight: false,
        halfLeft: false,
        none: true,
        left: true,
        scriptFlag: false,         // 동영상 내 스크립트 toggle 변수
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
      }
    }
  },
  methods: {
    active_el () {
        this.active = !this.active
    },
    prevTen() {
        console.error("왼쪽");
        this.halfRight = true
        this.innerRipple = true
        // $('.inner_ripple').css('display', 'block');
        // $('.half_right').css('display', 'none');
        var vm = this
        setTimeout(
            function(){
              vm.halfRight = false
              vm.innerRipple = false
                // $('.inner_ripple').css('display', 'none'); 
                // $('.half_right').css('display', 'block');
            }, 600);       
    },
    nextTen() {
        console.error("오른쪽");
        this.halfLeft = true
        this.innerRipple = true
        // $('.inner_ripple').css('display', 'block');
        // $('.half_left').css('display', 'none');
        var vm = this
        setTimeout(
            function(){
              vm.halfLeft = false
              vm.innerRipple = false
                // $('.inner_ripple').css('display', 'none'); 
                // $('.half_left').css('display', 'block');
            }, 600);       
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

        

        $('.fp-script , .script_close').click(function(){
            // 스크립트 펼쳤을 경우, 하단의 콘텐츠들이 존재하기때문에 더이상 스크롤을 막기 위한 body 에 스크롤방지 클래스 추가
            $('body').toggleClass("scroll-n");
            $('.fp-script').toggleClass('active');
            $('.player_wrap').toggleClass('script');
        });

        $('.fp-nextArrow').click(function()
        {
            $('.half_right').css('display', 'block');
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
                console.error( $wTop , $hederTab-player_height , $targetH  , scroll);   
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

<style scoepd>
.innerRipple {
  display: none;
}
.halfRight {
  display: none;
}
.halfLeft {
  display: none;
}
.display {
  display: block;
}
.none {
  display: none;
}
</style>