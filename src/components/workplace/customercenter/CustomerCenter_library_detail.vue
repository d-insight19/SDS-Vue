<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery board">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_19"> </p>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">
                    <div class="hide-inner">
                        <p class="h-tit1">
                            <strong class="q-tit">단계형 다이어그램 (자전거 길) 단계형 다이어그램 단계형 다이어그램</strong>
                        </p>
                        <div class="info">
                            <p class="article">작성자<span class="val">팀원명</span></p>
                            <p class="article">등록일<span class="val">2018.10.10</span>
                            <ul class="info_icon fr">
                                <li class="icon"><span class="comment ico"></span><span class="info_value">2,190</span></li>
                                <li class="icon"><span class="like ico"></span><span class="info_value">36</span></li>
                            </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner mb70">
                        <div>
                            <p class="inner-txt">해당 과정의 도서에대한 질문을 드립니다. 구매 방법에 대해 설명이 되어 있지 않던데 어떤 경로로 구매가 가능한지에 대해 답변해 주실 수 있을까요? </p>
                        </div>
                        <div class="notice_imgs"></div>
                        <p class="label-tit-2 mt36"><strong>첨부파일</strong></p>
                        <ul class="ulList type4">
                            <li>
                            <div>
                                <span class="ico img-a"></span>
                                <span class="at-tit">Solution listup.jpg</span>
                                <div class="fr">
                                <span class="at-num">500KB</span>
                                <span class="ico download"></span>
                                </div>
                            </div>
                            </li>
                        </ul>

                        <p class="label-tit-2 mt26"><strong>댓글</strong></p>
                        <ul class="reply_input bd_bt">
                            <li class="bd">
                                <input type="text" class="input reply" placeholder="댓글을 입력하세요." @focus="focusToggle" /><button>등록</button>
                            </li>
                        </ul>
                        <ul>
                            <li class="reply-list">
                                <p class="reply-name">
                                    <span>정*민 [작성자]</span>
                                    <span class="fr ico more"></span>
                                </p>
                                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                            </li>
                             <li class="reply-list">
                                <p class="reply-name">
                                    <span>정*민 [작성자]</span>
                                    <span class="fr ico more"></span>
                                </p>
                                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                            </li>
                        </ul>


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
                                        <textarea @keydown="onKeydown" placeholder="답글을 입력하세요."></textarea>
                                    </div>
                                    <div class="inputbottom">
                                        <span class="strlenth" >{{keylength}}/300</span>
                                        <span class="regiBtn" :class="{active: keylength}">등록</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- //inner -->
                </div>
            </div>

            <!-- floating button -->
            <slp-button class="md fixBtmBtn"><span class="ico like_32"></span>좋아요</slp-button>
            <!-- //floating button -->
        </div>
        <!-- //container -->
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Study_02_studyquestion_detail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1,
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
