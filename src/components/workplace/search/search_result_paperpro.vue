<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery search">

        <!-- header -->
        <div id="header" class="fixed tab">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <div class="search-wrapper">
                    <input type="text"  pattern="^\s+" class="input noline" placeholder="검색어를 입력해 주세요" value="자바스크립트" />
                    <button class="close-icon" type="button"></button>
                </div>
            </div>
            <div class="header_inner line2 scroll-x">
                <!-- list -->
                <ul class="ulList type1 pl18">
                    <li>
                        <div class="in-chk">
                            <slp-checkbox type="button">지식과정</slp-checkbox>
                            <slp-checkbox type="button" value="true">부가서비스</slp-checkbox>
                            <slp-checkbox type="button">교육안내</slp-checkbox>
                            <slp-checkbox type="button">학습노트</slp-checkbox>
                        </div>
                    </li>
                </ul>
                <!-- //list --> value="true"
            </div>
        </div>
        <!-- //header -->
        <div id="content" class="list">
        
          <div class="cell">
            <div class="filterArea ml-18 mr-18">
                <p class="font_15 mono_100 fwb"><span class="ico arrowback"></span> Paper Pro <span class="color_clr2">122</span></p>
                <span class="ico filter"></span>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <!-- list -->
                <ul class="thumList">
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">현장 생산품 검수 보고서 (입고 내역 통계)</a>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">현장 생산품 검수 보고서 (입고 내역 통계)</a>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">현장 생산품 검수 보고서 (입고 내역 통계)</a>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">현장 생산품 검수 보고서 (입고 내역 통계)</a>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">현장 생산품 검수 보고서 (입고 내역 통계)</a>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
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
  name: 'search_result_paperpro',
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
