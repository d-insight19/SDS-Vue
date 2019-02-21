<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery search">

        <!-- header -->
        <div id="header" class="fixed">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <div class="search-wrapper">
                    <input type="text"  pattern="^\s+" class="input noline" placeholder="검색어를 입력해 주세요" value="자하하" />
                    <button class="close-icon" type="button"></button>
                </div>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
        
          <div class="cell">
            <div class="nodata_area">
                <img src="@/assets/img/img_nosearch_line_64.png" class="nodata_img" alt="">
                <p class="font_16"><span class="color_danger">‘자하하’</span>에 대한 검색결과가 없습니다.</p>
                <p class="font_14 mono_50">입력하신 검색어를 다시 확인해 주세요.</p>
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
  name: 'search_result_nodata',
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
