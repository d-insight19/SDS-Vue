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
                <!-- //list -->
            </div>
        </div>
        <!-- //header -->
        <div id="content" class="list">
        
          <div class="cell">
            <div class="filterArea ml-18 mr-18">
                <p class="font_15 mono_100 fwb"><span class="ico arrowback"></span> 도서요약/서평칼럼 <span class="color_clr2">468</span></p>
                <span class="ico filter"></span>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <!-- list -->
                <ul class="thumList type6">
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">나는 나로 살기로 했다 나는 나로 살기로 했다  </a>
                            <ul class="info">
                                <li class="mono_65">저자 전태성</li>
                                <li class="mono_65">출판사 제8요일</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">나는 나로 살기로 했다 나는 나로 살기로 했다</a>
                            <ul class="info">
                                <li class="mono_65">저자 전태성</li>
                                <li class="mono_65">출판사 제8요일</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">나는 나로 살기로 했다 나는 나로 살기로 했다  </a>
                            <ul class="info">
                                <li class="mono_65">저자 전태성</li>
                                <li class="mono_65">출판사 제8요일</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">나는 나로 살기로 했다 나는 나로 살기로 했다</a>
                            <ul class="info">
                                <li class="mono_65">저자 전태성</li>
                                <li class="mono_65">출판사 제8요일</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">나는 나로 살기로 했다 나는 나로 살기로 했다  </a>
                            <ul class="info">
                                <li class="mono_65">저자 전태성</li>
                                <li class="mono_65">출판사 제8요일</li>
                            </ul>
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
  name: 'search_result_book',
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
