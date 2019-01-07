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
                    <input type="text"  pattern="^\s+" class="input noline" placeholder="검색어를 입력해 주세요" />
                    <button class="close-icon" type="button"></button>
                </div>
            </div>
            <div class="header_inner line2 tabMenu scroll-x">
                <ul class="fixTab">
                    <li class="on"><a href="#tab1">최근 검색 키워드</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">추천 키워드</a></li>
                </ul>
            </div>
            <div class="blur_wrap">
                <div class="left blur"></div>
                <div class="right blur"></div>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">
        
          <div class="cell">
            <div class="inner pt0">

                <ul class="searchList">
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="ico time"></span> 이러닝
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="ico time"></span> 소통리더
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="ico time"></span> 나는 나로 살기로 했다 나는 나로 살기로 결심했다
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="ico time"></span> 야나두
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="ico time"></span> 자바 스크립트
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="ico time"></span> 마케팅
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="ico time"></span> 사업 계획서
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                </ul>
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
  name: 'search_enter',
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
