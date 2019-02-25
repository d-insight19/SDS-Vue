<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
        <div id="container" class="mediaquery study_summary">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_19"> </p>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:32px">
                    <div class="hide-inner">
                        <span class="chip">요약집</span>
                        <p class="h-tit1">요약집 타이틀 영역입니다 요약집 타이틀 영역입니다</p>
                    </div>
                </div>
            </div>
            <!-- //header -->


            <!-- header + 확장형 + tab  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '2'" id="header" class="tab">
                <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_19"> </p>
                </div>
                <div class="header_inner line2 tabMenu">
                    <ul class="fixTab">
                    <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">이미지투데이</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    </ul>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:56px; padding-bottom:26px">
                    <div class="head-inner">
                        <span class="chip">FAQ</span>
                        <p class="h-tit1">공지사항 타이틀 영역입니다. 공지사항 타이틀</p>
                        <p class="ico-group">
                            <span class="ico clip"></span>
                            <span>2,190</span>
                            <span class="pipe"></span>
                            <span class="ico view"></span>
                            <span>첨부파일</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- //header -->


            <!-- header scroll 헤더  작업중-->
            <div v-if="headerType == '3'" id="header" class="tab">

                <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_19"> </p>
                </div>
                <div class="header_inner line2 tabMenu scroll-x">
                    <ul class="scrollTab">
                    <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">이미지투데이</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    </ul>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:56px; padding-bottom:26px">
                    <div class="head-inner">
                        <span class="chip">FAQ</span>
                        <p class="h-tit1">공지사항 타이틀 영역입니다. 공지사항 타이틀</p>
                        <p class="ico-group">
                            <span class="ico clip"></span>
                            <span>2,190</span>
                            <span class="pipe"></span>
                            <span class="ico view"></span>
                            <span>첨부파일</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- //header -->
            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">
                        <p class="inner-txt op80">설명 입니다. 설명 입니다. 설명 입니다. Admin에서 등록된 내용 출력 (선택사항) </p>
                        <p class="empty_img">
                            <img src="" alt="">
                        </p>
                        <p class="inner-txt op65">본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 </p>

                        <div class="reminderListBlock">
                            <ul class="reminderList">
                                <li class="reminderList-item">
                                    <a href="" class="reminderList-link">
                                        <div class="d_flex align_items_center">
                                            <div class="d_flex_col">
                                                <em class="ico headphone_28 mr6"></em>
                                            </div>
                                            <div class="d_flex_col flex_1">
                                                데이터와 배열 활용하기 데이터와 배열 활용하기 데이터와 배열 활용하기데이터와 배열 활용하기데이터와 배열 활용하기
                                            </div>
                                            <div class="d_flex_col">
                                                <em class="ico next_16 ml12"></em>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="reminderList-item">
                                    <a href="" class="reminderList-link">
                                        <div class="d_flex align_items_center">
                                            <div class="d_flex_col">
                                                <em class="ico play_28 mr6"></em>
                                            </div>
                                            <div class="d_flex_col flex_1">
                                                데이터와 배열 활용하기 데이터와 배열 활용하기 데이터와 배열 활용하기데이터와 배열 활용하기데이터와 배열 활용하기
                                            </div>
                                            <div class="d_flex_col">
                                                <em class="ico next_16 ml12"></em>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="reminderList-item">
                                    <a href="" class="reminderList-link">
                                        <div class="d_flex align_items_center">
                                            <div class="d_flex_col">
                                                <em class="ico ebook_28 mr6"></em>
                                            </div>
                                            <div class="d_flex_col flex_1">
                                                데이터와 배열 활용하기 데이터와 배열 활용하기 데이터와 배열 활용하기데이터와 배열 활용하기데이터와 배열 활용하기
                                            </div>
                                            <div class="d_flex_col">
                                                <em class="ico next_16 ml12"></em>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <p class="label-tit-2 mt36">
                            <strong>첨부파일</strong>
                        </p>
                        <ul class="ulList type4">
                            <li>
                            <div>
                                <span class="ico img-a"></span>
                                <span class="at-tit">Solution listup.jpg</span>
                                <div class="fr">
                                <span class="at-num">500KB</span>
                                <span class="ico download"></span>
                                </div>
                            </div>
                            </li>
                            <li>
                            <div>
                                <span class="ico ppt-a"></span>
                                <span class="at-tit">20180101_AD_Draft.ppt</span>
                                <div class="fr">
                                <span class="at-num">4.5M</span>
                                <span class="ico download"></span>
                                </div>
                            </div>
                            </li>
                            <li>
                            <div>
                                <span class="ico ppt-a"></span>
                                <span class="at-tit">20180101_AD_Draft.ppt</span>
                                <div class="fr">
                                <span class="at-num">4.5M</span>
                                <span class="ico download"></span>
                                </div>
                            </div>
                            </li>
                        </ul>

                    </div>
                    <!-- //inner -->
                </div>
            </div>
        </div>
        <!-- //container -->
    </div>
    <!-- //wrap -->
</template>

<script>
/*
  headerType
  1 : 기본헤더 + 확장 ,  2 : 헤더 + 확장 + 텝  or  헤더 + 텝 ,  3 : 헤더 + 확장 + 스크롤텝
*/
export default {
  name: 'Study_02_faq_detail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
