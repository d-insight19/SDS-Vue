<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery">

        <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div id="header" class="expand">          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_19"> 스크롤시가</p>
          </div>  
            <!-- s: 동영상 -->
            <div class="player_wrap">
                <div class="player_inner">
                    <div id="contents"></div>
                    <!-- s: 동영상 재생 후 나오는 영상리스트 -->
                    <div class="movie_info_list" style="display:none">
                        <ul>
                            <li>
                                <a href="#">
                                    <span class="text">마케팅이란?마케팅이란?마케팅이란?</span>
                                    <em>
                                        <i></i> 6:34 </em>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="text">마케팅이란?</span>
                                    <em>
                                        <i></i> 6:34 </em>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="text">마케팅이란?</span>
                                    <em>
                                        <i></i> 6:34 </em>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="text">마케팅이란?</span>
                                    <em>
                                        <i></i> 6:34 </em>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- e: 동영상 재생 후 나오는 영상리스트 -->
                </div>
                <!-- s: btm_subtitle_area -->
                <div class="btm_subtitle_area" data-js="toggle">
                    <button type="button" class="subtitle_title" data-js="toggle__anchor">Transcript
                        <i>
                            <span class="sr-only">자막 보기/숨김</span>
                        </i>
                    </button>
                    <div class="subtitle_slide_wrap" data-js="toggle__panel">
                        <div class="btm_subtitle_control">
                            <span class="toggle_checkbox right">
                                <input id="toggle_checked2" type="checkbox" class="auto_scroll_chk">
                                <label for="toggle_checked2" class="auto_scroll_label">자동스크롤</label>
                            </span>
                            <div class="combobox" data-js="combobox">
                                <select name="guide" id="guide" title="guide">
                                    <option>한국어</option>
                                    <option>영어</option>
                                    <option>중국어</option>
                                </select>
                            </div>
                        </div>
                        <!-- s: timeline_wrapper -->
                        <div class="timeline_wrapper">
                            <ul class="btm_subtitle_timeline">
                                <li>
                                    <!-- 현재 재생중인 영상의 자막일 때 -->
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에
                                            대해서 이번 차시에는 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에
                                            대해서 이번 차시에는 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번
                                            차시에는 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li class="is-active">
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="time">0:24</span>
                                        <span class="desc">
                                            <strong>[클래스 객체]</strong> 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 학습하도록 하겠습니다. 이번 차시에는 배열 활용에 대해서 이번 차시에는 </span>
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
            <div class="hide_header" style="background:#e3e3e3;padding-top:100px;">
                <p>111</p>
                <p>asdfasdf</p>
                <p>asdfasdf</p>
                <p>asdfasdf</p>
                <p>asdfasdf</p>
                <p>asdfasdf</p>
                <p>asdfasdf</p>
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
        // src: './static/movie/m010102.mp4', //동영상 src
        src: require('@/assets/movie/m010102.mp4'), //동영상 src
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
    miniMovie() {
        var $parent = $('.player_wrap');
        var $obj = $('.btm_subtitle_area');
        var $top = $obj.offset().top;
        var $targetH = $parent.find('#contents').height();
        $(window).scroll(function()
        {
            var $wTop = $(window).scrollTop();
            if ($wTop >= $top)
            {
                $parent.addClass('fixed').css('margin-top', $targetH);
            }
            else
            {
                $parent.removeClass('fixed').attr('style', '');
            }
        })
    }
  },
  mounted () {
        var _PLAYER = new UtilFlowPlayer(this.option);
        _PLAYER.init();
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
                if ($wTop >= $top)
                {
                    $parent.addClass('fixed').css('margin-top', $targetH);
                }
                else
                {
                    $parent.removeClass('fixed').attr('style', '');
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
