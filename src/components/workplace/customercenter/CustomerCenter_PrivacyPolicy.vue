<template>
<!-- eslint-disable -->
  <!-- container -->
  <div id="container" class="mediaquery drawer privacypolicy CLIPingType">

    <slp-app-bar>

      <template slot="scroll">
        <button type="button" class="btn only prev" @click="goPrePage"><span class="ico">이전</span></button>
        <p class="header_text font_18">개인정보 처리방침</p>
      </template>

      <template slot="default">
        <p class="label-tit24">개인정보 처리방침</p>
      </template>

    </slp-app-bar>

                <div id="content" class="normal">
                <div class="cell">
                    <div class="inner pt0">
                        <p class="label-tit18">01 개인정보 처리방침 타이틀 </p>
                        <p class="contents14">관련 본문 내용 개인정보 처리방침 관련 본문 내용 개인정보 처리방침
                        관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침  관련 본문 내용
                        개인정보 처리방침  관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침
                        관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침  . </P>

                        <p class="label-tit18 mt20">02 개인정보 처리방침 타이틀 </p>
                        <p class="contents14">관련 본문 내용 개인정보 처리방침 관련 본문 내용 개인정보 처리방침
                        관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침  관련 본문 내용
                        개인정보 처리방침  관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침
                        관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침 관련 본문 내용
                        관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침  관련 본문 내용
                        개인정보 처리방침  관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침
                        관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침 관련 본문 내용
                        관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침  관련 본문 내용
                        개인정보 처리방침  관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침
                        관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침 관련 본문 내용
                        관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침 관련 본문 내용
                        관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침  관련 본문 내용
                        개인정보 처리방침  관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침
                        관련 본문 내용 개인정보 처리방침  관련 본문 내용 개인정보 처리방침 관련 본문 내용
                        </P>
                    <div class="select_wrap">
                        <select class="select"><option>2017년 12월 19일 시행일자 기준</option></select>
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
  name: 'ComponentsAppBar',
  /* vue data */
  data () {
    return {
      langType: 'en',
      langTypeName: '영어',
      title: '',
      date: ''
    }
  },
  /* vue lifecycle */
  created () {
    this.initInfo()
  },
  mounted () {
  },
  /* vue function */
  methods: {
    // 초기 설정
    initInfo () {
      if (typeof this.$route !== 'undefined' && typeof this.$route.params !== 'undefined' && typeof this.$route.params.data !== 'undefined') {
        var paramData = this.$route.params.data
        this.langType = paramData.langType
        this.langTypeName = paramData.langTypeName
        this.title = paramData.title
        this.date = paramData.date
      }
    },
    // 이전 페이지 이동
    goPrePage () {
      this.$router.back()
    },
    setLanguageIcon () {
      var images = require.context('@/assets/img/', false, /\.(png|jpe?g|gif|svg)(\?.*)?$/)
      switch (this.langType) {
        case 'en':
          return images('./img_usa.png')
        case 'jp':
          return images('./img_japan.png')
        case 'cn':
          return images('./img_china.png')
        default:
          return images('./img_usa.png')
      }
    }
  }
}
</script>
