<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
        <div id="container" class="mediaquery study_pledge_sub">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_19"> </p>
                    <div class="page-btn">
                        <span class="ico back"></span>
                        <div class="num"><span>03</span>/<span>36</span>p</div>
                        <span class="ico next"></span>
                    </div>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">
                    <div class="hide-inner">
                        <p class="h-tit5">
                            <span class="ico chk"></span>
                            <span >제출 완료</span>
                        </p>
                        <p class="h-tit1">서약서 타이틀 영역입니다 서약서 타이틀 영역입니다</p>
                    </div>
                </div>
            </div>
            <!-- //header -->

            <!-- header -->
            <div v-if="headerType == '2'" id="header">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
              <div class="page-btn">
                <span class="ico back"></span>
                <div class="num"><span>03</span>/<span>36</span>p</div>
                <span class="ico next"></span>
              </div>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">
                        <p class="pledge-tit">
                            <span class="pledge-date">2018.03.24 15:41</span><br/>
                            <span class="color_clr2">서약서</span>를 제출하였습니다.
                        </p>
                        <p class="pledge-txt">
                            <span>접근 IP</span>
                            <span class="pledge-ip">201.114.17.289</span>
                        </p>

                    </div>
                </div>
            </div>
            <!-- //content -->

            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">
                <button type="button" class="btn md clr1">제출</button>
            </div>
            <!-- //floatingbtn -->

        </div>
        <!-- //container -->
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Study_04_SO_pledge_submission',
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
