<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery CLIPingType">

        <!-- header -->
        <div id="header" class="fixed">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">This meeting is quite disorganized.  Who is in</p>
            </div>
            <div class="hide_header" style="padding-top: 60px; height:188px; padding-left:66px">
                <h3 class="h-tit3 fwb multiline line2 font_22 mb20">This meeting is quite disorganized.  Who is in</h3>
                <ul class="info mb20">
                    <li class="mono_80">
                        <span class="info_value">2018.09.14</span>
                    </li>
                </ul>
                <div class="national_flag">
                    <img src="@/assets/img/img_usa.png" class="" alt="">
                </div>
            </div>
        </div>
        <!-- //header -->
        <div id="content" class="normal">
        
          
          
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
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'CLIPing_languageClubDetail01_scroll',
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
