<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery eduperson bpo_subjectlist">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_19"> </p>
                </div>
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">
                    <div class="hide-inner">
                        <div id="dropdown_wrap" v-show="langFlag2">
                            <div id="sheetDim" @click="changeLang2()"></div>
                            <div id="dropdown" class="more">
                                <ul @click="changeLang2()">
                                <li>휴강 등록</li>
                                <li>보강 등록</li>
                                <li>단축 요청</li>
                                <li>연장 요청</li>
                                <li>SMS 발송</li>
                                </ul>
                            </div>
                        </div>
                        <span class="chip">정규</span>
                        <p class="h-tit1">
                            <strong class="q-tit">The Complete App Design Course - UX, UI android …</strong>
                            <span class="fr ico more28" @click="changeLang2()"></span>
                        </p>
                        <div class="info-rate">
                            <span>평균 출석률</span><span class="rate">80.10%</span>
                        </div>

                    </div>
                </div>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">
                        <div id="dropdown_wrap" v-show="langFlag">
                            <div id="sheetDim" @click="changeLang()"></div>
                            <div id="dropdown" class="category">
                                <ul @click="changeLang()">
                                <li>2018.10.30</li>
                                <li>2018.09.30</li>
                                <li>2018.08.30</li>
                                </ul>
                            </div>
                        </div>

                        <div class="date_wrap">
                            <span class="date">2018.11.30</span><a href="#"><span class="ico down_blue_24" @click="changeLang()"></span> </a>
                        </div>
                        <button type="button" class="btn md clr2 width50">출석현황</button><button type="button" title="title" class="btn md width50">평가</button>
                        <p class="title_line noline mt20">
                            <span class="title_txt">학습자</span><span class="total_txt">총</span><strong class="fwb600 count">14</strong>명
                            <a href="#"><span class="fr color_clr2 attend_view">평균출석 보기</span><span class="ico check_16_blue fr"></span></a>
                        </p>
                        <div class="type_box">
                            <div class="info type1">
                            <p class="tit">출석률</p>
                            <p><span class="value">81.51</span><span class="value_sub">%</span></p>
                            </div>
                            <dl>
                                <dt>출석</dt> <dd>12</dd>
                            </dl>
                            <dl class="line">
                                <dt>결석</dt><dd>2</dd>
                            </dl>
                            <dl class="line">
                                <dt>지각</dt><dd>0</dd>
                            </dl>
                        </div>

                        <slp-button class="md attend_check">일괄 출석체크</slp-button>

                             <ul class="multiList type3">
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend">Attend<span class="time">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>
                                        <p class="detail_info">출석율 <span class="num">80.81%</span> <span class="pipe"></span> 출석 <span class="num mr4">3</span>   결석 <span class="num mr4">0</span>   기타 <span class="num">0</span> </p>
                                        <span class="ico arrow fr"></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend">Attend<span class="time">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>
                                        <p class="detail_info">출석율 <span class="num">80.81%</span> <span class="pipe"></span> 출석 <span class="num mr4">3</span>   결석 <span class="num mr4">0</span>   기타 <span class="num">0</span> </p>
                                        <span class="ico arrow fr"></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend">Attend<span class="time">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>
                                        <p class="detail_info">출석율 <span class="num">80.81%</span> <span class="pipe"></span> 출석 <span class="num mr4">3</span>   결석 <span class="num mr4">0</span>   기타 <span class="num">0</span> </p>
                                        <span class="ico arrow fr"></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend">Attend<span class="time">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>
                                        <p class="detail_info">출석율 <span class="num">80.81%</span> <span class="pipe"></span> 출석 <span class="num mr4">3</span>   결석 <span class="num mr4">0</span>   기타 <span class="num">0</span> </p>
                                        <span class="ico arrow fr"></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend">Attend<span class="time">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>
                                        <p class="detail_info">출석율 <span class="num">80.81%</span> <span class="pipe"></span> 출석 <span class="num mr4">3</span>   결석 <span class="num mr4">0</span>   기타 <span class="num">0</span> </p>
                                        <span class="ico arrow fr"></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend">Attend<span class="time">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>
                                        <p class="detail_info">출석율 <span class="num">80.81%</span> <span class="pipe"></span> 출석 <span class="num mr4">3</span>   결석 <span class="num mr4">0</span>   기타 <span class="num">0</span> </p>
                                        <span class="ico arrow fr"></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend">Attend<span class="time">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>
                                        <p class="detail_info">출석율 <span class="num">80.81%</span> <span class="pipe"></span> 출석 <span class="num mr4">3</span>   결석 <span class="num mr4">0</span>   기타 <span class="num">0</span> </p>
                                        <span class="ico arrow fr"></span>
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
export default {
  name: 'Study_02_studyquestion_detail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1,
      langFlag: false,
      langFlag2: false
    }
  },
  /* vue function */
  methods: {
    changeLang () {
      this.langFlag = !this.langFlag
    },
    changeLang2 () {
      this.langFlag2 = !this.langFlag2
    }
  }
}
</script>
