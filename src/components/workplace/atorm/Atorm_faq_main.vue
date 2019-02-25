<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery atorm_faq">

        <!-- header -->
        <div id="header" class="fixed">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text font_18"> FAQ</p>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">
                <div class="tabCnt dpb pt0" id="tab1"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->

                    <h1 class="h-tit5 title_line">
                        <span class="total_txt">총</span>
                        <strong class="fwb600 count">12</strong><span>건</span>

                        <div class="status_txt fr" @click="changeLang()">
                        <span>전체</span>
                        <span class="ico down"></span>
                        </div>
                    </h1>

                    <ul class="multiList type3">
                        <li>
                            <div class="in">
                                <div class="multiline contents">
                                    <a href="#">FAQ 타이틀 영역입니다.FAQ 타이틀 영역입니다. FAQ 타이틀 영역입니다.<span class="ico arrow"></span></a>
                                </div>
                                <ul class="info">
                                    <li class="fwb color_clr3">과정제작</li>
                                    <li><span class="date">2018.10.10</span></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <div class="multiline contents">
                                    <a href="#">FAQ 타이틀 영역입니다.FAQ 타이틀 영역입니다. FAQ 타이틀 영역입니다.<span class="ico arrow"></span></a>
                                </div>
                                <ul class="info">
                                    <li class="fwb color_clr3">과정제작</li>
                                    <li><span class="date">2018.10.10</span></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <div class="multiline contents">
                                    <a href="#">FAQ 타이틀 영역입니다.FAQ 타이틀 영역입니다. FAQ 타이틀 영역입니다.<span class="ico arrow"></span></a>
                                </div>
                                <ul class="info">
                                    <li class="fwb color_clr3">이러닝</li>
                                    <li><span class="date">2018.10.10</span></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <div class="multiline contents">
                                    <a href="#">FAQ 타이틀 영역입니다.FAQ 타이틀 영역입니다. FAQ 타이틀 영역입니다.<span class="ico arrow"></span></a>
                                </div>
                                <ul class="info">
                                    <li class="fwb color_clr3">이러닝</li>
                                    <li><span class="date">2018.10.10</span></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <div class="multiline contents">
                                    <a href="#">FAQ 타이틀 영역입니다.FAQ 타이틀 영역입니다. FAQ 타이틀 영역입니다.<span class="ico arrow"></span></a>
                                </div>
                                <ul class="info">
                                    <li class="fwb color_clr3">평가</li>
                                    <li><span class="date">2018.10.10</span></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <div class="multiline contents">
                                    <a href="#">FAQ 타이틀 영역입니다.FAQ 타이틀 영역입니다. FAQ 타이틀 영역입니다.<span class="ico arrow"></span></a>
                                </div>
                                <ul class="info">
                                    <li class="fwb color_clr3">기타</li>
                                    <li><span class="date">2018.10.10</span></li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                <!-- //list -->
                </div>

            </div>
          </div>
        </div>

      </div>
      <!-- //container -->
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Atorm_faq_main',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      langFlag: false
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
