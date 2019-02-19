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
            <p class="header_text font_18">쿠폰 등록</p>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="normal">

            <div class="cell">
                <div class="inner pdt38">
                    <h2 class="h-tit2 fwb600 mt0 mb10 font_24">쿠폰 번호를 입력해주세요.</h2>
                    <p class="font_16 mono_100 pdt16 pb10">쿠폰번호</p>
                    <slp-text-field placeholder="쿠폰 번호를 입력하세요"></slp-text-field>
                    <p class="font_12 mono_50 mt4">*-을 제외하고 입력해 주세요.</p>
                </div>
            </div>
            
        </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md clr1">등록하기</button>
            </div>
            <!-- //floatingbtn -->
      </div>
      <!-- //container -->     
    </div>                                        
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'MySpace_coupon_register',
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
