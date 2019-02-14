<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm status_rate">

        <!-- header  -->
        <div id="header" class="fixed">          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_18">평점 및 수강후기 보기</p>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner pdb20">
                <!-- 댓글 -->
                <div class="txt-line mt0">
                    <p class="my-op font_16">설문 응시자 수</p>
                    <p class="my-op font_14"><span class="num">1,245</span>명</p>
                </div>
                <p class="hr"></p>
                <p class="font_16">평균 평점</p>
                <div class="rating_wrap mb15">
                    <fieldset class="rating">
                        <input type="radio" id="star05" name="rating" value="5" /><label class = "full" for="star05" title="Awesome - 5 stars"></label>
                        <input type="radio" id="star04" name="rating" value="4" /><label class = "full" for="star04" title="Pretty good - 4 stars"></label>
                        <input type="radio" id="star03" name="rating" value="3" /><label class = "full" for="star03" title="Meh - 3 stars"></label>
                        <input type="radio" id="star02" name="rating" value="2" /><label class = "full" for="star02" title="Kinda bad - 2 stars"></label>
                        <input type="radio" id="star01" name="rating" value="1" /><label class = "full" for="star01" title="Sucks big time - 1 star"></label>
                    </fieldset>
                    <span class="l-num">3.0</span><span class="r-num mono_80">/5.0</span>
                </div>

                <ul>
                    <li class="reply-list">
                        <div class="rating_wrap">
                            <span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20"></span><span class="ico star_20"></span>
                        </div>
                        <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>

                        <ul class="info">
                            <li class="mono_60"><span class="info_value">이*강</span></li>
                            
                        </ul>
                    </li>
                    <li class="reply-list">
                        <div class="rating_wrap">
                            <span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20"></span><span class="ico star_20"></span>
                        </div>
                        <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                        
                        <ul class="info">
                            <li class="mono_60"><span class="info_value">이*강</span></li>
                            
                        </ul>
                    </li>
                </ul>
                <!-- 댓글 -->

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <button type="button" class="btn clr1 ld">완료</button>
        </div>
        <!-- //floating button --> 
      </div>
      <!-- //container -->    

    </div>
    <!-- //wrap -->

</template>

<script>
/*eslint-disable */
export default {
  name: 'Atorm_status_details_rate',
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
