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
                        <li class="on"><a href="#tab1">전체</a></li><!-- selected class "on" -->
                        <li><a href="#tab2">이러닝</a></li>
                        <li><a href="#tab3">집합</a></li>
                        <li><a href="#tab3">정부지원교육</a></li>
                        <li><a href="#tab3">모바일</a></li>
                    </ul>
                </div>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">

                <div class="tabCnt dpb pt0" id="tab1"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                                <!-- list -->
                                        <h1 class="h-tit5 title_line">
                                            <span class="total_txt">총</span>
                                            <strong class="fwb600 count">12</strong><span>건</span>
                                        </h1>

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
      headerType: 2
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
