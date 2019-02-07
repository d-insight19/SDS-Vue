<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery CLIPingType">

        <!-- header -->
        <div id="header" class="tab clr1">

            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico white">이전</span></button>
                <p class="header_text font_18 mono_0">제이크 냅 직강: 기획부터 실행까지 5일만에 끝내기</p>
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
            <!-- e: 동영상 -->

            <!-- 
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico white">이전</span></button>
                <p class="header_text font_18 mono_0">제이크 냅 직강: 기획부터 실행까지 5일만에 끝내기</p>
            </div>
            <div class="hide_header" style="padding-top: 15px; height:96px; padding-left:66px; padding-right: 150px;">
                <h3 class="h-tit3 fwl multiline line3 font_15 mono_0 mb20">제이크 냅 직강: 기획부터 실행까지 5일만에 끝내기</h3>
                <div class="thum">
                    <span class="progWrap"><em class="bar clr2" style="width:70%;"></em></span>
                    <div class="cDim"></div>
                    <div class="thumbnail">
                        <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                    </div>
                </div>
            </div> -->
            <!--<div class="header_inner line2 tabMenu scroll-x">
                <ul class="fixTab">
                    <li><a href="#tab1">요약</a></li>
                    <li class="on"><a href="#tab2">댓글</a></li>
                </ul>
            </div>
            <div class="blur_wrap">
                <div class="left blur"></div>
                <div class="right blur"></div>
            </div>-->
        </div>
        <!-- //header -->

        <div id="content" class="etc">
        
          <div class="cell">
            <div class="inner">
                <!-- 댓글 -->
                <div class="txt-line mt0">
                    <span class="my-op font_16">평균평점 <span class="mono_65 fwr">총 <span>25</span>건</span></span>
                </div>

                <div class="rating_wrap mb15">
                    <fieldset class="rating">
                        <input type="radio" id="star05" name="rating" value="5" /><label class = "full" for="star05" title="Awesome - 5 stars"></label>
                        <input type="radio" id="star04" name="rating" value="4" /><label class = "full" for="star04" title="Pretty good - 4 stars"></label>
                        <input type="radio" id="star03" name="rating" value="3" /><label class = "full" for="star03" title="Meh - 3 stars"></label>
                        <input type="radio" id="star02" name="rating" value="2" /><label class = "full" for="star02" title="Kinda bad - 2 stars"></label>
                        <input type="radio" id="star01" name="rating" value="1" /><label class = "full" for="star01" title="Sucks big time - 1 star"></label>
                    </fieldset>
                    <span class="font_26 fwb" style="vertical-align: bottom; line-height: 120%;">4.5</span><span class="font_14 fwb" style="vertical-align: bottom; line-height: 150%;">점</span>
                </div>

                <ul class="reply_input bd_bt">
                    <li class="bd">                   
                        <input type="text" class="input reply" placeholder="댓글을 입력하세요." @focus="focusToggle" /><button>등록</button>
                    </li>
                </ul>
                <ul>
                    <li class="reply-list">
                        <div class="rating_wrap">
                            <fieldset class="rating">
                                <input type="radio" id="star15" name="rating" value="5" /><label class = "full" for="star15" title="Awesome - 5 stars"></label>
                                <input type="radio" id="star14" name="rating" value="4" /><label class = "full" for="star14" title="Pretty good - 4 stars"></label>
                                <input type="radio" id="star13" name="rating" value="3" /><label class = "full" for="star13" title="Meh - 3 stars"></label>
                                <input type="radio" id="star12" name="rating" value="2" /><label class = "full" for="star12" title="Kinda bad - 2 stars"></label>
                                <input type="radio" id="star11" name="rating" value="1" /><label class = "full" for="star11" title="Sucks big time - 1 star"></label>
                            </fieldset>
                        </div>
                        <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>

                        <ul class="info">
                            <li class="mono_60"><span class="info_value">이*강</span></li>
                            <li class="mono_60"><span class="info_value">2018.09.14  21:34</span></li>
                        </ul>
                    </li>
                    <li class="reply-list">
                        <div class="rating_wrap">
                            <fieldset class="rating">
                                <input type="radio" id="star25" name="rating" value="5" /><label class = "full" for="star25" title="Awesome - 5 stars"></label>
                                <input type="radio" id="star24" name="rating" value="4" /><label class = "full" for="star24" title="Pretty good - 4 stars"></label>
                                <input type="radio" id="star23" name="rating" value="3" /><label class = "full" for="star23" title="Meh - 3 stars"></label>
                                <input type="radio" id="star22" name="rating" value="2" /><label class = "full" for="star22" title="Kinda bad - 2 stars"></label>
                                <input type="radio" id="star21" name="rating" value="1" /><label class = "full" for="star21" title="Sucks big time - 1 star"></label>
                            </fieldset>
                        </div>
                        <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                        
                        <ul class="info">
                            <li class="mono_60"><span class="info_value">이*강</span></li>
                            <li class="mono_60"><span class="info_value">2018.09.14  21:34</span></li>
                        </ul>
                    </li>
                    <li class="reply-list">
                        <div class="rating_wrap">
                            <fieldset class="rating">
                                <input type="radio" id="star25" name="rating" value="5" /><label class = "full" for="star25" title="Awesome - 5 stars"></label>
                                <input type="radio" id="star24" name="rating" value="4" /><label class = "full" for="star24" title="Pretty good - 4 stars"></label>
                                <input type="radio" id="star23" name="rating" value="3" /><label class = "full" for="star23" title="Meh - 3 stars"></label>
                                <input type="radio" id="star22" name="rating" value="2" /><label class = "full" for="star22" title="Kinda bad - 2 stars"></label>
                                <input type="radio" id="star21" name="rating" value="1" /><label class = "full" for="star21" title="Sucks big time - 1 star"></label>
                            </fieldset>
                        </div>
                        <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                        
                        <ul class="info">
                            <li class="mono_60"><span class="info_value">이*강</span></li>
                            <li class="mono_60"><span class="info_value">2018.09.14  21:34</span></li>
                        </ul>
                    </li>
                    <li class="reply-list">
                        <div class="rating_wrap">
                            <fieldset class="rating">
                                <input type="radio" id="star25" name="rating" value="5" /><label class = "full" for="star25" title="Awesome - 5 stars"></label>
                                <input type="radio" id="star24" name="rating" value="4" /><label class = "full" for="star24" title="Pretty good - 4 stars"></label>
                                <input type="radio" id="star23" name="rating" value="3" /><label class = "full" for="star23" title="Meh - 3 stars"></label>
                                <input type="radio" id="star22" name="rating" value="2" /><label class = "full" for="star22" title="Kinda bad - 2 stars"></label>
                                <input type="radio" id="star21" name="rating" value="1" /><label class = "full" for="star21" title="Sucks big time - 1 star"></label>
                            </fieldset>
                        </div>
                        <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                        
                        <ul class="info">
                            <li class="mono_60"><span class="info_value">이*강</span></li>
                            <li class="mono_60"><span class="info_value">2018.09.14  21:34</span></li>
                        </ul>
                    </li>
                    <li class="reply-list">
                        <div class="rating_wrap">
                            <fieldset class="rating">
                                <input type="radio" id="star25" name="rating" value="5" /><label class = "full" for="star25" title="Awesome - 5 stars"></label>
                                <input type="radio" id="star24" name="rating" value="4" /><label class = "full" for="star24" title="Pretty good - 4 stars"></label>
                                <input type="radio" id="star23" name="rating" value="3" /><label class = "full" for="star23" title="Meh - 3 stars"></label>
                                <input type="radio" id="star22" name="rating" value="2" /><label class = "full" for="star22" title="Kinda bad - 2 stars"></label>
                                <input type="radio" id="star21" name="rating" value="1" /><label class = "full" for="star21" title="Sucks big time - 1 star"></label>
                            </fieldset>
                        </div>
                        <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                        
                        <ul class="info">
                            <li class="mono_60"><span class="info_value">이*강</span></li>
                            <li class="mono_60"><span class="info_value">2018.09.14  21:34</span></li>
                        </ul>
                    </li>
                </ul>
                <!-- 댓글 -->


                <!-- keyboard -->
                <div id="keyboard_wrap">
                    <div id="inner_dim" v-show="focusFlag" @click="focusToggle"></div>
                    <div class="keyboard_input" v-show="focusFlag">                
                        
                        <div class="bookmark_wrap" v-if="keyboard_type=='4'">
                            <span class="bookmarktxt">북마크</span>
                            <span class="fr time">01:36</span>
                        </div>
                        <div class="open_wrap" v-if="keyboard_type=='3' || keyboard_type=='4' ">
                            <span class="opentxt">공개여부</span>
                            <slp-switch :classObject="{'fr': true}"/>
                            <span class="opentxt2">비공개</span>
                        </div>

                        <div class="rating_wrap" v-if="keyboard_type=='2'">
                            <span class="ratingtxt">평점</span>                        
                            <fieldset class="fr rating">
                                <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                                <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                            </fieldset>
                        </div>

                        <div class="inputbox" >                        
                            <div class="textarea_wrap">
                                <textarea @keydown="onKeydown" placeholder="댓글을 입력하세요."></textarea>
                            </div>
                            <div class="inputbottom">
                                <span class="strlenth" >{{keylength}}/300</span>
                                <span class="regiBtn" :class="{active: keylength}">등록</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- //keyboard -->
            </div>
          </div>

        </div>

        <!-- floating button -->
        <!--<div class="fixBtmBtn">
            <ul>
                <li><slp-button class="md mono_65"><span class="ico heart_solid_32"></span>찜하기</slp-button></li>
            </ul>
        </div>-->
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

export default {
  name: 'components_flowplayer',
  data () {
    return {
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
      }
    }
  },
  methods: {
    detail_toggle () {        
        this.detail_show = !this.detail_show;
    },
    active_el () {
        this.active = !this.active
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

