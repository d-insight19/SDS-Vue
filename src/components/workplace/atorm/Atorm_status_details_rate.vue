<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery atorm_status">

           <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">평점 및 수강후기 보기</p>
            </div>
        <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner nopad">

                    <h2 class="label-tit16"><b>설문 응시자 수</b></h2>
                    <p class="status_detail"><span class="num">1,245</span> <span class="unit">명</span></p>

            <p class="hr" style="margin:26px -24px 22px"></p>

                <!-- 댓글 -->
                <div class="txt-line mt0">
                    <span class="my-op font_16">평균평점</span>
                </div>

                <div class="rating_wrap bd_bt">
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
                        <ul class="info6" style="display: inline;">
                            <li><span class="info_value mono_65">이현진</span></li>
                        </ul>
                    </li>
                    <li class="reply-list">
                        <div class="rating_wrap">
                            <span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20"></span><span class="ico star_20"></span>
                        </div>
                        <p class="reply-txt mb6">댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다  </p>
                        <ul class="info6" style="display: inline;">
                            <li><span class="info_value mono_65">이현진</span></li>
                        </ul>
                    </li>
                    <li class="reply-list">
                        <div class="rating_wrap">
                            <span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20"></span><span class="ico star_20"></span>
                        </div>
                        <p class="reply-txt mb6">댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다  </p>
                        <ul class="info6" style="display: inline;">
                            <li><span class="info_value mono_65">이현진</span></li>
                        </ul>
                    </li>
                    <li class="reply-list">
                        <div class="rating_wrap">
                            <span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20 gold"></span><span class="ico star_20"></span><span class="ico star_20"></span>
                        </div>
                        <p class="reply-txt mb6">댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다 댓글텍스트입니다  </p>
                        <ul class="info6" style="display: inline;">
                            <li><span class="info_value mono_65">이현진</span></li>
                        </ul>
                    </li>

                </ul>
                <!-- 댓글 -->




                    </div>
                </div>
            </div>

        </div>
        <!-- //container -->

    </div>
    <!-- //wrap -->

</template>

<script>
/*eslint-disable */
export default {
  name: 'components_tabheader',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
   data () {
    return {
      headerType: 2,
      langFlag: false,
    }
  },
  /* vue function */
  methods: {
    changeLang () {
      this.langFlag = !this.langFlag
    }
  }
}
</script>
