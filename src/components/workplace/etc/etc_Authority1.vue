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
        <slp-popup title="알림" confirmInput="닫기">
            <div class="ly-body">
                <p>QR코드를 인식하기 위해 카메라를 사용합니다. 설정에서 승인 해주세요.</p>
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
