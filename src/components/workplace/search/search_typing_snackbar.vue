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
                    <input type="text"  pattern="^\s+" class="input noline" placeholder="검색어를 입력해 주세요" value="자" />
                    <button class="close-icon" type="button"></button>
                </div>
            </div>
            <div class="header_inner line2 tabMenu scroll-x">
                <ul class="fixTab">
                    <li class="on"><a href="#tab1">자동완성 키워드</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">교육과정</a></li>
                    <li><a href="#tab3">콘텐츠</a></li>
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
                                <span class="color_clr2">자</span>바스크립트
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="color_clr2">자</span>바스크립트 ES6, ES7
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="color_clr2">자</span>바스크립트 200제 초보자를 위한 강의 
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="color_clr2">자</span>바스크립트 객체 지향 디자인 패턴 정의
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="color_clr2">자</span>바스크립트 프로그래밍 입문
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="color_clr2">자</span>바스크립트 ES6, ES7
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="color_clr2">자</span>바스크립트
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="color_clr2">자</span>바스크립트 ES6, ES7
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="color_clr2">자</span>바스크립트 200제 초보자를 위한 강의 
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line1">
                                <span class="color_clr2">자</span>바스크립트 객체 지향 디자인 패턴 정의
                            </div>
                        </div>
                        <span class="ico arrowsearch"></span>
                    </li>
                </ul>
            </div>
          </div>

        </div>
        <!-- snackbar -->
        <div class="snackbar_wrap">
            <div class="snackbar type2"><p>검색어를 2글자 이상 입력해 주세요. <span class="ico close_bold_20_white"></span></p></div>
        </div>
        <!-- //snackbar --> 
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>
<script>
export default {
  name: 'search_typing',
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
