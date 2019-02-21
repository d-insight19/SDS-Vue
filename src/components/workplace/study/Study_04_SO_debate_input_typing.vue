<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
        <div id="container" class="mediaquery study_debate pd70">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand wh debate-head-bg">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico2 prev-wh"></span></button>
                    <div class="page-btn">
                        <span class="ico back-wh"></span>
                        <div class="num "><span>03</span>/<span>36</span>p</div>
                        <span class="ico next-wh"></span>
                    </div>
                    <p class="header_text font_19"></p>
                </div>
                <div class="hide_header" style="background-color:rgba(0,0,0,0.45); padding-top:66px; padding-bottom:28px">
                    <div class="hide-inner">
                        <span class="chip wh">토론</span>
                        <p class="h-tit1 mt0">대통령 가족에 대한 정보공개와 경호예우 찬반 토론</p>
                        <p class="h-tit5 sm">
                            <span>총 6문항</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- //header -->


            <!-- header + 확장형 + tab  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '2'" id="header" class="tab">
                <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_19"> </p>
                </div>
                <div class="header_inner line2 tabMenu">
                    <ul class="fixTab">
                    <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">이미지투데이</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    </ul>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:56px; padding-bottom:26px">
                    <div class="head-inner">
                        <span class="chip">FAQ</span>
                        <p class="h-tit1">공지사항 타이틀 영역입니다. 공지사항 타이틀</p>
                        <p class="ico-group">
                            <span class="ico clip"></span>
                            <span>2,190</span>
                            <span class="pipe"></span>
                            <span class="ico view"></span>
                            <span>첨부파일</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- //header -->


            <!-- header scroll 헤더  작업중-->
            <div v-if="headerType == '3'" id="header" class="tab">

                <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_19"> </p>
                </div>
                <div class="header_inner line2 tabMenu scroll-x">
                    <ul class="scrollTab">
                    <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">이미지투데이</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    </ul>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:56px; padding-bottom:26px">
                    <div class="head-inner">
                        <span class="chip">FAQ</span>
                        <p class="h-tit1">공지사항 타이틀 영역입니다. 공지사항 타이틀</p>
                        <p class="ico-group">
                            <span class="ico clip"></span>
                            <span>2,190</span>
                            <span class="pipe"></span>
                            <span class="ico view"></span>
                            <span>첨부파일</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- //header -->
            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">
                        <p class="inner-txt">토론을 통해 정해진 주제에 대한 자신의 주장을 공유하고 다양한 의견을 들어보세요. 5분정도 걸리는 간단한 주제입니다. </p>
                        <p class="line02"></p>
                        <p class="txt-tit">다음 지문에 대하여 찬성 혹은 반대를 선택하고 의견을 작성하세요. </p>
                        <button class="btn-md">작성가이드</button>
                        <p class="inner-txt op65">태양계에는 항성인 태양과 그 가까이로부터 수성, 금성, 지구, 화성, 즉 지구형 행성이 순서대로 나열되어 있으며 그 다음에 유성대(asteroid belt)가 존재한다. </p>
                        <ul class="cir-box">
                            <li class="inb-box fl">
                                <div class="labelRdo type2">
                                    <input type="radio" name="radio" value="click_me" checked="checked" v-model="checked" id="click_me">
                                    <label for="click_me" class="big-cir">찬성</label>
                                </div>
                            </li>
                            <li class="inb-box">
                                <div class="labelRdo type2 oppose fr">
                                    <input type="radio" name="radio" value="or_me" v-model="checked" id="or_me"/>
                                    <label for="or_me" class="big-cir">반대</label>
                                </div>
                            </li>
                        </ul>
                        <input @input.prevent="e => keylength = e.target.value.length" @focus="focusToggle"  type="text" class="input01" placeholder="의견을 입력해 주세요">
                        <label class="inputbottom inp-num">
                            <span class="strlenth" ><span v-text="keylength"></span>/300</span>
                        </label>


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


            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">
                <button type="button" class="btn md" :class="{ clr1 : keylength && checked  }">제출</button>
            </div>
            <!-- //floatingbtn -->
        </div>
        <!-- //container -->
    </div>
    <!-- //wrap -->
</template>

<script>
/*
  headerType
  1 : 기본헤더 + 확장 ,  2 : 헤더 + 확장 + 텝  or  헤더 + 텝 ,  3 : 헤더 + 확장 + 스크롤텝
*/
export default {
  name: 'Study_04_SO_debate_input_normal',
  props: {
  },
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
      checked: '',
      focusFlag: false,
      value: [],
      keyboard_type: 1
    }
  },
  /* vue function */
  methods: {
    focusToggle () {
      this.focusFlag = !this.focusFlag
    },
    addClass (el) {
      if (this.value === true) {
        console.log(this.value)
      }
    },
    onKeydown (event) {
      this.keylength = event.target.value.length
      event.target.style.height = '1px'
      event.target.style.height = (event.target.scrollHeight) + 'px'
    }
  }
}
</script>
