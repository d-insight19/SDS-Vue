<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery study_qpqa ">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_19"> </p>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">
                    <div class="hide-inner">
                        <span class="chip">Quick Poll/Answer</span>
                        <p class="h-tit1">
                            <strong class="q-tit">Quick Poll/Answer 타이틀 영역입니다 타이틀 영역입니다</strong>
                        </p>
                        <p class="info-group ">
                            <span class="color_clr3 mr6 fwb">진행중</span>
                            <span class="fwr">2018.10.10 - 2018.11.18</span>
                        </p>
                        <div class="ico-group">
                            <span class="fwr op80">정해민</span>
                            <span class="pipe"></span>
                            <span class="fwb">45/99명</span>
                        </div>
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
                        <p class="txt-tit">Q. 다음의 학습 과정을 읽고 개선이 필요해 보이는 부분에 대해 간략히 의견을 작성해 주세요.</p>
                        <p class="label-tit16"><strong>결과</strong> <span class="pipe"></span>
                        <span class="total">총 <span class="total-num">45명</span> 참여</span></p>
                        <ul class="ulList type4">
                            <li>
                                <p class="reply-txt">이 주인공이 동료들과 함께 화성으로 탐사를 떠났다가 사고로 혼자 화성에 남겨지고 다시 구조될 때 까지 고군분투하는 과정을 그리고 있다. 이 영화는 주인공이 동료와 함께 한다.</p>
                                <p class="reply-txt-2">정*민</p>
                            </li>
                            <li>
                                <p class="reply-txt">제대로 쓰여진 글만이 신뢰와 재미를 줄 수 있다.</p>
                                <p class="reply-txt-2">홍*동</p>
                            </li>
                            <li>
                                <p class="reply-txt">속에 얼마나 구하기 이것이다. 듣기만 아니한 크고 것이다.역사를 할지니, 이성은 쓸쓸하랴?</p>
                                <p class="reply-txt-2">이*재</p>
                            </li>
                            <li>
                                <p class="reply-txt">이 주인공이 동료들과 함께 화성으로 탐사를 떠났다가 사고로 혼자 화성에 남겨지고 다시 구조될 때 까지 군분투하는 과정을 그리고 있다. 이 영화는 주인공이 동료와 함께 한다.</p>
                                <p class="reply-txt-2">지*이</p>
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
export default {
  name: 'Study_02_qpqa_result_02',
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
