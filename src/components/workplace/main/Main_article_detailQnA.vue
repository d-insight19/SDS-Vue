<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery MainType">

            <!-- header -->
            <div id="header" class="fixed">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_18"> Why Artificial Intelligence is …</p>
                </div>
            </div>
            <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner mb70">
                        <p class="label-tit-20 bd_bt pb10 mb15"><strong>Q&A</strong></p>
                        <ul class="reply_input bd_bt">
                            <li class="bd">                   
                                <input type="text" class="input reply" placeholder="질문을 입력하세요." @focus="focusToggle" /><button class="clr1">등록</button>
                            </li>
                        </ul>
                        <ul>
                            <li class="reply-list">
                                <p class="reply-name">
                                    <span class="QnA_Q mr6 color_clr1 border_clr1">Q</span>
                                    <span>정*민 [작성자]</span>
                                    <span class="fr ico more"></span>
                                </p>
                                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                                <div class="reply-wrap">
                                    <span class="ico arr up"></span>
                                    <span>답변완료</span>
                                </div>
                            </li>
                            <li class="reply-list reply-list2">
                                <p class="reply-name">
                                    <span class="QnA_A mr6 clr1">A</span>
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
        </div>       
        <!-- //container --> 
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Main_article_detailQnA',
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
      keyboard_type: 3
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
