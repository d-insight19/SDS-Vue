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
                        <p class="txt-tit">Q. 본 교육과정의 수업방식에 대해 전반적으로 만족 하십니까?</p>
                        <p class="label-tit16"><strong>결과</strong> <span class="pipe"></span>
                        <span class="total">총 <span class="total-num">45명</span> 참여</span></p>

                        <div class="progBox mt20">
                            <div class="bar clr2" style="width: 17%; height:8px; border-radius: 100px; "></div>
                        </div>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt">매우 아니다.</p>
                            <div class="fr">
                                <span class="part-num"><span>8</span>명</span>
                                <span class="pipe"></span>
                                <span class="part-num-2"><span>17</span>%</span>
                            </div>
                        </div>
                        <div class="progBox mt24">
                            <div class="bar clr2" style="width: 24%; height:8px; border-radius: 100px;"></div>
                        </div>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt">아니다.</p>
                            <div class="fr">
                                <span class="part-num"><span>10</span>명</span>
                                <span class="pipe"></span>
                                <span class="part-num-2"><span>24</span>%</span>
                            </div>
                        </div>
                        <div class="progBox mt24">
                            <div class="bar clr2" style="width: 31%; height:8px; border-radius: 100px;"></div>
                        </div>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt">보통이다.</p>
                            <div class="fr">
                                <span class="part-num"><span>14</span>명</span>
                                <span class="pipe"></span>
                                <span class="part-num-2"><span>31</span>%</span>
                            </div>
                        </div>
                        <div class="progBox mt24">
                            <div class="bar clr2" style="width: 16%; height:8px; border-radius: 100px;"></div>
                        </div>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt">그렇다.</p>
                            <div class="fr">
                                <span class="part-num"><span>7</span>명</span>
                                <span class="pipe"></span>
                                <span class="part-num-2"><span>16</span>%</span>
                            </div>
                        </div>
                        <div class="progBox mt24">
                            <div class="bar clr2" style="width: 12%; height:8px; border-radius: 100px;"></div>
                        </div>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt">매우 그렇다.</p>
                            <div class="fr">
                                <span class="part-num"><span>5</span>명</span>
                                <span class="pipe"></span>
                                <span class="part-num-2"><span>12</span>%</span>
                            </div>
                        </div>
                        <!-- //txt-wrap -->
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
  name: 'Study_02_qpqa_result',
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
