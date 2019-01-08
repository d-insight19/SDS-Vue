<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer inquiry">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">설문</p>
            </div>
            <!-- //header -->
       
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

              

            </div>
          </div>
        </div>

      </div>
      <!-- //container --> 

        <!-- layer wrap -->
        <slp-popup title="최신버전 업데이트" cancelInput="앱 종료" confirmInput="업데이트">
            <div class="ly-body">
                <p>업데이트 버전이 있습니다.<br>
                최신버전으로 업데이트해주세요.</p>
            </div>
        </slp-popup>
        <!-- //layer wrap -->

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
      headerType: 2
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
