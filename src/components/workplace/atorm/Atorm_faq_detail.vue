<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery Atorm_faq">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_18">아톰 FAQ 타이틀 입니다.</p>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">
                    <div class="hide-inner">
                        <p class="type color_clr3">과정제작</p>
                        <p class="h-tit1">
                            <strong class="q-tit">아톰 FAQ 타이틀 입니다.아톰 FAQ 타이틀 입니다.</strong>
                        </p>
                        <div class="info">
                            <p class="article">등록일<span class="val">2018.10.10</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">
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
                                <a href="#"><span class="ico download"></span></a>
                                </div>
                            </div>
                            </li>
                        </ul>

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
  name: 'Atorm_faq_datail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
