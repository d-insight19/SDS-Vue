<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace">

        <!-- header -->
        <div id="header" class="fixed">
            <div class="header_inner line1">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
            <p class="header_text font_18">임시 수료확인증 조회</p>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">

          <div class="cell">
            <div class="inner">
                <img src="@/assets/img/thum_no_L.jpg" class="width100" alt="">
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
  name: 'MySpace_formal_tempcertificate',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      langFlag1: false,
      langFlag2: false,
      langFlag3: false
    }
  },
  /* vue function */
  methods: {
    changeLang1 () {
      this.langFlag1 = !this.langFlag1
    },
    changeLang2 () {
      this.langFlag2 = !this.langFlag2
    },
    changeLang3 () {
      this.langFlag3 = !this.langFlag3
    }
  }
}
</script>
