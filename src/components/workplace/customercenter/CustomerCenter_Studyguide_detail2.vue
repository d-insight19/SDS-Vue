<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery">

            <!-- header -->
            <div v-if="headerType == '2'" id="header" class="tab fixed noline">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text font_18">학습가이드</p>
                </div>
                <div class="header_inner line2 tabMenu scroll-x">
                    <ul class="scrollTab">
                        <li><a href="#tab1">나의 공간 안내</a></li>
                        <li><a href="#tab2">학습 홈 안내</a></li><!-- selected class "on" -->
                        <li class="on"><a href="#tab3">학습방법 안내</a></li>
                    </ul>
                </div>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">
                        <div class="studyguide_box">
                            <div class="img_wrap guide1"><div class="guideimg img1"></div></div>
                            <h2 class="studyguide_title">01.이어학습 </h2>
                            <p class="studyguide_desc">학습홈에서 이어학습을 통해 학습 종료시점에서 바로 이어서 학습을 시작할 수 있습니다.</p>
                        </div>
                        <p class="hr" style="margin:26px -24px 22px"></p>
                        <div class="studyguide_box">
                            <div class="img_wrap guide2"><div class="guideimg img2"></div></div>
                            <h2 class="studyguide_title">02.학습진행 </h2>
                            <p class="studyguide_desc">학습창에서 학습을 진행하고 완료 시 다음페이지로 이동하여 주
                            세요. 학습창을 닫아 학습을 종료하여도 다음 학습시 해당 페이
                            지에서 이어학습이 가능합니다.</p>
                        </div>
                        <p class="hr" style="margin:26px -24px 22px"></p>
                        <div class="studyguide_box">
                            <div class="img_wrap guide3"><div class="guideimg img3"></div></div>
                            <h2 class="studyguide_title">03.스크립트 </h2>
                            <p class="studyguide_desc">동영상, 오디오의 경우 해당 스크립트를 확인할 수 있습니다.</p>
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
