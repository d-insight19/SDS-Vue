<template>
<!-- eslint-disable -->
  <!-- container -->
  <div id="container" class="mediaquery CLIPingType">

    <slp-app-bar>

      <template slot="scroll">
        <button type="button" class="btn only prev" @click="goPrePage"><span class="ico">이전</span></button>
        <p class="header_text font_18">This meeting is quite disorganized. Who is in</p>
      </template>

      <template slot="default">
        <h3 class="h-tit3 fwb multiline line2 font_22 mb20">This meeting is quite disorganized. Who is in</h3>
        <ul class="info mb20">
         <li class="mono_80">
            <span class="info_value">2018.09.14</span>
          </li>
        </ul>
        <div class="national_flag">
          <img :src="setLanguageIcon()">
        </div>
      </template>

    </slp-app-bar>

    <!-- header -->
    <!-- <div id="header" class="tab clr4" style="backgroundColor:#E6EAF5">
      <div class="header_inner line1">
        <button type="button" class="btn only prev" @click="goPrePage"><span class="ico">이전</span></button>
        <p class="header_text font_18">This meeting is quite disorganized. Who is in</p>
      </div>
      <div class="hide_header" style="padding-top: 60px; height:188px; padding-left:66px">
        <h3 class="h-tit3 fwb multiline line2 font_22 mb20">This meeting is quite disorganized. Who is in</h3>
        <ul class="info mb20">
          <li class="mono_80">
            <span class="info_value">2018.09.14</span>
          </li>
        </ul>
        <div class="national_flag">
          <img :src="setLanguageIcon()" class="" :alt='langTypeName + " 국기"' />
        </div>
      </div>
    </div> -->
    <!-- //header -->

    <div id="content" class="etc">
      <div class="cell">
        <div class="inner">
          <div class="pl25 mb25">
            <p class="font_15 mb0"><strong class="speaker color_clr1">A</strong>What are you doing?</p>
            <p class="font_15 mono_50 mb20">뭐하고 있어?</p>

            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I was just having coffee and reading some newspaper.</p>
            <p class="font_15 mono_50 mb20">그냥 커피 마시면서 신문을 읽고 있었어. </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">A</strong>What section did you read first? </p>
            <p class="font_15 mono_50 mb20">어떤 면을 제일 먼저 읽었어? </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I love pursuing the entertainment section. </p>
            <p class="font_15 mono_50 mb20">나는 연예면을 자세히 읽는 것을 좋아해. </p>
            
            <p class="font_15 mb0"><strong class="speaker color_clr1">A</strong>What are you doing?</p>
            <p class="font_15 mono_50 mb20">뭐하고 있어?</p>

            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I was just having coffee and reading some newspaper.</p>
            <p class="font_15 mono_50 mb20">그냥 커피 마시면서 신문을 읽고 있었어. </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">A</strong>What section did you read first? </p>
            <p class="font_15 mono_50 mb20">어떤 면을 제일 먼저 읽었어? </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I love pursuing the entertainment section. </p>
            <p class="font_15 mono_50 mb20">나는 연예면을 자세히 읽는 것을 좋아해. </p>
            <p class="font_15 mb0"><strong class="speaker color_clr1">A</strong>What are you doing?</p>
            <p class="font_15 mono_50 mb20">뭐하고 있어?</p>

            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I was just having coffee and reading some newspaper.</p>
            <p class="font_15 mono_50 mb20">그냥 커피 마시면서 신문을 읽고 있었어. </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">A</strong>What section did you read first? </p>
            <p class="font_15 mono_50 mb20">어떤 면을 제일 먼저 읽었어? </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I love pursuing the entertainment section. </p>
            <p class="font_15 mono_50 mb20">나는 연예면을 자세히 읽는 것을 좋아해. </p>
            
            <p class="font_15 mb0"><strong class="speaker color_clr1">A</strong>What are you doing?</p>
            <p class="font_15 mono_50 mb20">뭐하고 있어?</p>

            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I was just having coffee and reading some newspaper.</p>
            <p class="font_15 mono_50 mb20">그냥 커피 마시면서 신문을 읽고 있었어. </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">A</strong>What section did you read first? </p>
            <p class="font_15 mono_50 mb20">어떤 면을 제일 먼저 읽었어? </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I love pursuing the entertainment section. </p>
            <p class="font_15 mono_50 mb20">나는 연예면을 자세히 읽는 것을 좋아해. </p>
            <p class="font_15 mb0"><strong class="speaker color_clr1">A</strong>What are you doing?</p>
            <p class="font_15 mono_50 mb20">뭐하고 있어?</p>

            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I was just having coffee and reading some newspaper.</p>
            <p class="font_15 mono_50 mb20">그냥 커피 마시면서 신문을 읽고 있었어. </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">A</strong>What section did you read first? </p>
            <p class="font_15 mono_50 mb20">어떤 면을 제일 먼저 읽었어? </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I love pursuing the entertainment section. </p>
            <p class="font_15 mono_50 mb20">나는 연예면을 자세히 읽는 것을 좋아해. </p>
            
            <p class="font_15 mb0"><strong class="speaker color_clr1">A</strong>What are you doing?</p>
            <p class="font_15 mono_50 mb20">뭐하고 있어?</p>

            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I was just having coffee and reading some newspaper.</p>
            <p class="font_15 mono_50 mb20">그냥 커피 마시면서 신문을 읽고 있었어. </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">A</strong>What section did you read first? </p>
            <p class="font_15 mono_50 mb20">어떤 면을 제일 먼저 읽었어? </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I love pursuing the entertainment section. </p>
            <p class="font_15 mono_50 mb20">나는 연예면을 자세히 읽는 것을 좋아해. </p>
            <p class="font_15 mb0"><strong class="speaker color_clr1">A</strong>What are you doing?</p>
            <p class="font_15 mono_50 mb20">뭐하고 있어?</p>

            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I was just having coffee and reading some newspaper.</p>
            <p class="font_15 mono_50 mb20">그냥 커피 마시면서 신문을 읽고 있었어. </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">A</strong>What section did you read first? </p>
            <p class="font_15 mono_50 mb20">어떤 면을 제일 먼저 읽었어? </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I love pursuing the entertainment section. </p>
            <p class="font_15 mono_50 mb20">나는 연예면을 자세히 읽는 것을 좋아해. </p>
            
            <p class="font_15 mb0"><strong class="speaker color_clr1">A</strong>What are you doing?</p>
            <p class="font_15 mono_50 mb20">뭐하고 있어?</p>

            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I was just having coffee and reading some newspaper.</p>
            <p class="font_15 mono_50 mb20">그냥 커피 마시면서 신문을 읽고 있었어. </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">A</strong>What section did you read first? </p>
            <p class="font_15 mono_50 mb20">어떤 면을 제일 먼저 읽었어? </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I love pursuing the entertainment section. </p>
            <p class="font_15 mono_50 mb20">나는 연예면을 자세히 읽는 것을 좋아해. </p>
            <p class="font_15 mb0"><strong class="speaker color_clr1">A</strong>What are you doing?</p>
            <p class="font_15 mono_50 mb20">뭐하고 있어?</p>

            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I was just having coffee and reading some newspaper.</p>
            <p class="font_15 mono_50 mb20">그냥 커피 마시면서 신문을 읽고 있었어. </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">A</strong>What section did you read first? </p>
            <p class="font_15 mono_50 mb20">어떤 면을 제일 먼저 읽었어? </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I love pursuing the entertainment section. </p>
            <p class="font_15 mono_50 mb20">나는 연예면을 자세히 읽는 것을 좋아해. </p>
            
            <p class="font_15 mb0"><strong class="speaker color_clr1">A</strong>What are you doing?</p>
            <p class="font_15 mono_50 mb20">뭐하고 있어?</p>

            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I was just having coffee and reading some newspaper.</p>
            <p class="font_15 mono_50 mb20">그냥 커피 마시면서 신문을 읽고 있었어. </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">A</strong>What section did you read first? </p>
            <p class="font_15 mono_50 mb20">어떤 면을 제일 먼저 읽었어? </p>
            
            <p class="font_15  mb0"><strong class="speaker color_clr1">B</strong>I love pursuing the entertainment section. </p>
            <p class="font_15 mono_50 mb20">나는 연예면을 자세히 읽는 것을 좋아해. </p>
          </div>
          <div class="alert pa15">
            <p class="font_14 mb5"> love pursuing the ____ section. </p>
            <p class="font_14 mb20 color_primary">_____면을 자세히 읽는 것을 좋아해요.</p>
            
            <p class="font_14">entertainment : <span class="color_primary">연예면</span></p>
          </div>
        </div>
      </div>

    </div>
  </div>
  <!-- //container -->
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
