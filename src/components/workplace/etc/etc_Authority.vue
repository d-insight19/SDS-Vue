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

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">



            </div>
          </div>
        </div>

      </div>
      <!-- //container -->

        <!-- layer wrap -->
        <slp-popup title="앱 권한 활용 동의(선택)" cancelInput="허용안함" confirmInput="승인">
            <div class="ly-body">
                <p>‘K-SPACE’이(가) 사용자의 사진에 접근하려고 합니다. 게시판에 사진을 등록 하기 위해 사용.</p>
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
