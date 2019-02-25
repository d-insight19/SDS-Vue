<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery" style="display: flex;align-items: center;background: black;min-height:100vh">

        <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div id="header" class="tab video">          
            <!-- audioFlag true 시 display:none; -->
            <div class="header_inner line1 clr1" :class="{ 'audio' : audioFlag }" > 
                <button type="button" class="btn only prev fixed"><span class="ico2 prev-wh"></span></button>
                <p class="header_text multiline line2 font_15">제이크 냅 직강: 기획부터 실행까지 5일만에 끝내기</p>
            </div>


            
            <!-- s: 동영상 -->
            <div class="player_wrap" :class="{ 'audio' : audioFlag }">
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
               
            </div>
            <!-- e: 동영상-->
            
            <!-- <div class="kukudocs_area_wrap">

                <div class="kukudocs_area">
                    <div class="box_shadow"></div>
                    <div class="kukudocs"></div>
                    <a href="#"><div class="fp-prevArrow"></div></a>
                    <a href="#"><div class="fp-nextArrow"></div></a>
                    <div class="button_wrap">
                        <button type="button" class="play"><span class="ico playIcon"></span>학습하기
                        <p class="fp_Icon_txt">1/10</p></button>
                    </div>
                </div>

            </div> -->

            
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
  name: 'components_flowplayer',
  data () {
    return {
        audioFlag:'',
        innerRipple: false,
        halfRight: false,
        halfLeft: false,
        none: true,
        left: true,
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
        loType: "audio", //loType : movie(동영상), audio(오디오), vr(VR)
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
    detail_toggle () {        
        this.detail_show = !this.detail_show;
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
    },
    typeAudio () {
        if( this.option.loType === 'audio'){
            console.log(audio)
            this.audioFlag = true
        } else {
            console.log(movie)
            this.audioFlag = false
        }
    }
  },
  created () {
         this.typeAudio();
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