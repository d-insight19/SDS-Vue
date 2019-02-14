<template>
 <!-- eslint-disable -->
  <!-- wrap -->
  <div id="wrap" class="mainType colorCode2">

    <!-- container -->
    <div id="container" class="mediaquery">
      <div id="content" class="etc">
        <!-- 일반 댓글 -->
        <div class="txt-line">
          <span class="my-op">나의 의견</span>
          <p class="total-op"> 
            <span class="total-val color_clr2">전체보기</span>                                
            <span class="total-num color_clr2">26</span>                      
          </p> 
        </div>
        <p class="line01"></p>
        <p class="label-tit-2 mt26"><strong>댓글</strong></p>
        <ul class="reply_input bd_bt">
            <li class="bd">                   
                <input type="text" class="input reply" placeholder="댓글을 입력하세요." /><button>등록</button>
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
                <div class="reply-wrap mb0">
                  <span class="ico arr down"></span>
                  <span>답글 4</span>
                  <p class="fr reply-num">
                  <span class=" ico like_32 blue"></span>
                  <span class="">12</span>
                  <span class=" ico unlike_32 red"></span>
                  <span class="">3</span>
                  </p>
                </div>
            </li>
            <li class="reply-list">
                <p class="reply-name">
                    <span>정*민 [작성자]</span>
                    <span class="fr ico more"></span>
                </p>
                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                <p><span class="reply-date">2018.09.14  21:34</span></p>
                <div class="reply-wrap mb0">
                  <span class="ico arr down"></span>
                  <span>답글 4</span>
                  <p class="fr reply-num">
                  <span class=" ico like_32"></span>
                  <span class="">12</span>
                  <span class=" ico unlike_32"></span>
                  <span class="">3</span>
                  </p>
                </div>
            </li>
        </ul>
        <!-- // 일반 댓글 -->

        <br/><br/>

        <!-- Q&A 댓글 -->
        
        <p class="label-tit-20 bd_bt pb10 mb15"><strong>Q&A</strong></p>
        <ul class="reply_input bd_bt">
            <li class="bd">                   
                <input type="text" class="input reply" placeholder="질문을 입력하세요."/><button class="clr1">등록</button>
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
                <div class="reply-wrap mb0">
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
        <!-- // Q&A 댓글 -->


        <br/><br/>
        
        <!-- 별 댓글 -->
        <div class="txt-line mt0">
            <span class="my-op font_16">평균평점 <span class="mono_65 fwr">총 <span>25</span>건</span></span>
        </div>

        <!--
        <div class="rating_wrap mb15">
            <fieldset class="rating">
                <input type="radio" id="star05" name="rating" value="5" /><label class = "full" for="star05" title="Awesome - 5 stars"></label>
                <input type="radio" id="star04" name="rating" value="4" /><label class = "full" for="star04" title="Pretty good - 4 stars"></label>
                <input type="radio" id="star03" name="rating" value="3" /><label class = "full" for="star03" title="Meh - 3 stars"></label>
                <input type="radio" id="star02" name="rating" value="2" /><label class = "full" for="star02" title="Kinda bad - 2 stars"></label>
                <input type="radio" id="star01" name="rating" value="1" /><label class = "full" for="star01" title="Sucks big time - 1 star"></label>
            </fieldset>
            <span class="font_26 fwb" style="vertical-align: bottom; line-height: 120%;">4.5</span><span class="font_14 fwb" style="vertical-align: bottom; line-height: 150%;">/5.0</span>
        </div>

        <ul class="reply_input bd_bt">
            <li class="bd">                   
                <input type="text" class="input reply" placeholder="댓글을 입력하세요." /><button>등록</button>
            </li>
        </ul>
        -->

        <div class="rating_wrap bd_bt mb20">
            <fieldset class="rating">
                <input type="radio" id="star05" name="rating" value="5" /><label class = "full" for="star05" title="Awesome - 5 stars"></label>
                <input type="radio" id="star04" name="rating" value="4" /><label class = "full" for="star04" title="Pretty good - 4 stars"></label>
                <input type="radio" id="star03" name="rating" value="3" /><label class = "full" for="star03" title="Meh - 3 stars"></label>
                <input type="radio" id="star02" name="rating" value="2" /><label class = "full" for="star02" title="Kinda bad - 2 stars"></label>
                <input type="radio" id="star01" name="rating" value="1" /><label class = "full" for="star01" title="Sucks big time - 1 star"></label>
            </fieldset>
            <span class="font_26 fwb mr2" style="vertical-align: bottom; line-height: 120%;">3.0</span><span class="font_18" style="vertical-align: bottom; line-height: 150%;">/5.0</span>
        </div>

        <ul>                    
            <li class="reply-list">
                <div class="rating_wrap">
                    <span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20"></span><span class="ico star_20"></span>
                </div>
                <p class="reply-txt mb6">댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다  </p>
                <ul class="info">
                    <li class="mono_65"><span class="info_value">이*강</span></li>
                    <li class="mono_65"><span class="info_value">2018.09.14  21:34</span></li>
                </ul>
            </li>
            <li class="reply-list">
                <div class="rating_wrap">
                    <span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20"></span><span class="ico star_20"></span>
                </div>
                <p class="reply-txt mb6">댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다  </p>
                <ul class="info">
                    <li class="mono_65"><span class="info_value">이*강</span></li>
                    <li class="mono_65"><span class="info_value">2018.09.14  21:34</span></li>
                </ul>
            </li>
            <li class="reply-list">
                <div class="rating_wrap">
                    <span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20"></span><span class="ico star_20"></span>
                </div>
                <p class="reply-txt mb6">댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다  </p>
                <ul class="info">
                    <li class="mono_65"><span class="info_value">이*강</span></li>
                    <li class="mono_65"><span class="info_value">2018.09.14  21:34</span></li>
                </ul>
            </li>
            <li class="reply-list">
                <div class="rating_wrap">
                    <span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20"></span><span class="ico star_20"></span>
                </div>
                <p class="reply-txt mb6">댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다  </p>
                <ul class="info">
                    <li class="mono_65"><span class="info_value">이*강</span></li>
                    <li class="mono_65"><span class="info_value">2018.09.14  21:34</span></li>
                </ul>
            </li>
        </ul>
        <!-- // 별 댓글 -->
      </div>
    </div>
    <!-- //container -->
  </div>
  <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_reply',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
