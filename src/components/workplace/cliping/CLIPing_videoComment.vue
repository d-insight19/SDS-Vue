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
                <p class="header_text font_18 mono_0"></p>
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
            </div>
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
                            <span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20"></span><span class="ico star_20"></span>
                        </div>
                        <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>

                        <ul class="info">
                            <li class="mono_60"><span class="info_value">이*강</span></li>
                            <li class="mono_60"><span class="info_value">2018.09.14  21:34</span></li>
                        </ul>
                    </li>
                    <li class="reply-list">
                        <div class="rating_wrap">
                            <span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20"></span><span class="ico star_20"></span>
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
export default {
  name: 'CLIPing_videoComment',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      keylength: 0,
      focusFlag: false,
      keyboard_type: 2
    }
  },
  /* vue function */
  methods: {
    focusToggle () {
      this.focusFlag = !this.focusFlag
    },
    onKeydown (event) {
      this.keylength = event.target.value.length
      event.target.style.height = '1px'
      event.target.style.height = (event.target.scrollHeight) + 'px'
    }
  }
}
</script>
