<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery CLIPingType">

        <!-- header -->
        <div id="header" class="tab clr4">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <button type="button" class="btn only share"><span class="ico">공유하기</span></button>
                <p class="header_text font_18">단계형 다이어그램 (자전거 길) 단계형 다이어그램 단계형 다이어그램</p>
            </div>
            <div class="hide_header" style="padding-top: 74px; height:324px;">
                <div class="tagWrap mb10"><span>Paper Pro</span></div>
                <h2 class="h-tit2 fwb600 mb20 font_22 multiline line2">단계형 다이어그램 (자전거 길) 단계형 다이어그램 단계형 다이어그램</h2>
                <dl>
                    <dt>예스폼</dt>
                    <dd>www.yesform.com</dd>
                </dl>
                <dl class="mb10">
                    <dt>등록일 </dt>
                    <dd>2018. 03. 16</dd>
                </dl>

                <ul class="info mb20">
                    <li class="icon">
                        <span class="view ico"></span><span class="info_value">2,190</span>
                    </li>
                    <li class="icon">
                        <span class="like ico"></span><span class="info_value">36</span>
                    </li>
                    <li class="icon">
                        <span class="heart2 ico"></span><span class="info_value">36</span>
                    </li>
                </ul>
            </div>
            <div class="header_inner line2 tabMenu scroll-x">
                <ul class="fixTab">
                    <li><a href="#tab1">설명</a></li><!-- selected class "on" -->
                    <li class="on"><a href="#tab2">댓글</a></li>
                </ul>
            </div>
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
        <div class="fixBtmBtn">
            <ul>
                <li style="width:54px; border-right:1px solid #cccccc"><slp-button class="md"><span class="ico heart_solid_32"></span></slp-button></li>
                <li style="width:54px; border-right:1px solid #cccccc"><slp-button class="md"><span class="ico like_solid_32"></span></slp-button></li>
                <li><slp-button class="md"><span class="ico download_32"></span>다운로드</slp-button></li>
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
  name: 'CLIPing_paperProDetailComment',
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
