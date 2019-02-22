<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery drawer">

            <!-- header -->
            <div v-if="headerType == '2'" id="header" class="tab noline">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text font_18"> FAQ</p>
                </div>
                <div class="header_inner line2 tabMenu scroll-x">
                    <ul class="scrollTab">
                        <li><a href="#tab1">전체</a></li>
                        <li class="on"><a href="#tab2">집합</a></li><!-- selected class "on" -->
                        <li><a href="#tab3">이러닝</a></li>
                    </ul>
                </div>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">
                        <div id="dropdown_wrap" v-show="langFlag">
                            <div id="sheetDim" @click="changeLang()"></div>
                            <div id="dropdown" class="category">
                                <ul  @click="changeLang()">
                                <!--
                                    position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력
                                -->
                                <li>동영상</li>
                                <li>이벤트</li>
                                <li>리포트</li>
                                <li>평가</li>
                                <li>로그인</li>
                                <li>도서</li>
                                <li>기타</li>
                                </ul>
                            </div>
                        </div>

                        <div class="tabCnt dpb pt0" id="tab1"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                            <!-- list -->
                            <div class="title_line">
                                <div class="category_txt" @click="changeLang()">
                                <span>동영상<span class="num">12</span>건</span>
                                <span class="ico down"></span>
                                </div>
                            </div>

                            <ul class="multiList type3">
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <a href="#">공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.
                                        <span class="ico arrow"></span></a>
                                        </div>
                                        <ul class="info">
                                        <li class="fwb color_clr3">동영상</li>
                                        <li class="icon"><span class="date">2018.10.10</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <a href="#">공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.
                                        <span class="ico arrow"></span></a>
                                        </div>
                                        <ul class="info">
                                        <li class="fwb color_clr3">동영상</li>
                                        <li class="icon"><span class="date">2018.10.10</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <a href="#">공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.
                                        <span class="ico arrow"></span></a>
                                        </div>
                                        <ul class="info">
                                        <li class="fwb color_clr3">동영상</li>
                                        <li class="icon"><span class="date">2018.10.10</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <a href="#">공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.
                                        <span class="ico arrow"></span></a>
                                        </div>
                                        <ul class="info">
                                        <li class="fwb color_clr3">동영상</li>
                                        <li class="icon"><span class="date">2018.10.10</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <a href="#">공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.
                                        <span class="ico arrow"></span></a>
                                        </div>
                                        <ul class="info">
                                        <li class="fwb color_clr3">동영상</li>
                                        <li class="icon"><span class="date">2018.10.10</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <a href="#">공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.
                                        <span class="ico arrow"></span></a>
                                        </div>
                                        <ul class="info">
                                        <li class="fwb color_clr3">동영상</li>
                                        <li class="icon"><span class="date">2018.10.10</span></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <!-- //list -->
                        </div>
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
  name: 'components_tabheader',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 2,
      langFlag: false
    }
  },
  /* vue function */
  methods: {
    changeLang () {
      this.langFlag = !this.langFlag
    }
  }
}
</script>
