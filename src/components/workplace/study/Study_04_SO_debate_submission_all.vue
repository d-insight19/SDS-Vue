<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery study_debate">
            <!-- header -->
            <div id="header" class="fixed">
            <button type="button" class="btn only close"><span class="ico">닫기</span></button>
            <p class="header_text font_19">토론</p>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">

                        <p class="h-tit5">
                            OO은 OO해야 합니다. 의견공유 텍스트 질문 영역입니다.  당신의 의견은 어떻습니까?
                        </p>
                        <div class="txt-line">
                            <div id="dropdown_wrap" v-show="langFlag">
                            <div id="sheetDim" @click="changeLang()"></div>
                            <div id="dropdown" style="right: 0;">
                                <ul  @click="changeLang()">
                                <!--
                                    position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력
                                -->
                                    <li @click="sortAgree(1)">전체의견</li>
                                    <li @click="sortAgree(2)">찬성의견</li>
                                    <li @click="sortAgree(3)">반대의견</li>
                                </ul>
                            </div>
                            </div>
                            <p class="tar"  @click="changeLang()">
                                <span>전체의견</span>
                                <span class="ico down_blue_24"></span>
                            </p>
                        </div>
                        <p class="line01"></p>
                        <ul class="multiList type3 dif">
                            <li>
                                <p class="reply-name mt20">
                                    <span class="chip type2 type2 agree-x agree">찬성</span>
                                    <span>정*민 [작성자]</span>
                                    <span class="fr ico more"></span>
                                </p>
                                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                                <div class="reply-wrap">
                                    <span class="ico arr down" :class="{ up : replyFlag } " @click="toggleReply"></span>
                                    <span @click="toggleReply">답글 4</span>
                                    <p class="fr reply-num">
                                        <label>
                                            <input type="checkbox"
                                            @click="toggleLike(1)"
                                            >
                                            <span v-if="good">
                                                <span class=" ico like_32" ></span>
                                                <span class="">{{goodcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico like_32 blue" ></span>
                                                <span class="">{{goodcnt +1}}</span>
                                            </span>
                                        </label>

                                        <label>
                                            <input type="checkbox"
                                            @click="toggleLike(2)"
                                            >
                                            <span v-if="bad">
                                                <span class=" ico unlike_32" ></span>
                                                <span class="">{{badcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico unlike_32 red" ></span>
                                                <span class="">{{badcnt +1}}</span>
                                            </span>
                                        </label>
                                    </p>
                                </div>
                                <ul class="replyList" v-if="replyFlag">
                                    <li class="left_pd" >
                                        <p class="reply-name mt20">
                                            <span class="ico indent n-ml18"></span>
                                            <span class="chip type2 type2 agree-x">반대</span>
                                            <span>김*영</span>
                                        </p>
                                        <p class="reply-txt">최대한 쉽고 재미있게 기본개념을 설명해주셨네요.</p>
                                        <p><span class="reply-date">2018.09.14  21:34</span></p>
                                        <div class="reply-wrap">
                                            <p class="fr reply-num">
                                                <label>
                                                    <input type="checkbox"
                                                    @click="toggleLike5(1)"
                                                    >
                                                    <span v-if="good5">

                                                        <span class=" ico like_32" ></span>
                                                        <span class="">{{goodcnt}}</span>
                                                    </span>
                                                    <span v-else="">
                                                        <span class=" ico like_32 blue" ></span>
                                                        <span class="">{{goodcnt +1}}</span>
                                                    </span>
                                                </label>

                                                <label>
                                                    <input type="checkbox"
                                                    @click="toggleLike5(2)"
                                                    >
                                                    <span v-if="bad5">
                                                        <span class=" ico unlike_32" ></span>
                                                        <span class="">{{badcnt}}</span>
                                                    </span>
                                                    <span v-else="">
                                                        <span class=" ico unlike_32 red" ></span>
                                                        <span class="">{{badcnt +1}}</span>
                                                    </span>
                                                </label>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="left_pd" >
                                        <p class="reply-name mt20">
                                            <span class="ico indent n-ml18"></span>
                                            <span class="chip type2 type2 agree-x">반대</span>
                                            <span>이*우</span>
                                        </p>
                                        <p class="reply-txt">최대한 쉽고 재미있게 기본개념을 설명해주셨네요.</p>
                                        <p><span class="reply-date">2018.09.14  21:34</span></p>
                                        <div class="reply-wrap">
                                            <p class="fr reply-num">
                                                <label>
                                                    <input type="checkbox"
                                                    @click="toggleLike6(1)"
                                                    >
                                                    <span v-if="good6">
                                                        <span class=" ico like_32" ></span>
                                                        <span class="">{{goodcnt}}</span>
                                                    </span>
                                                    <span v-else="">
                                                        <span class=" ico like_32 blue" ></span>
                                                        <span class="">{{goodcnt +1}}</span>
                                                    </span>
                                                </label>

                                                <label>
                                                    <input type="checkbox"
                                                    @click="toggleLike6(2)"
                                                    >
                                                    <span v-if="bad6">
                                                        <span class=" ico unlike_32" ></span>
                                                        <span class="">{{badcnt}}</span>
                                                    </span>
                                                    <span v-else="">
                                                        <span class=" ico unlike_32 red" ></span>
                                                        <span class="">{{badcnt +1}}</span>
                                                    </span>
                                                </label>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="left_pd" >
                                        <p class="reply-name mt20">
                                            <span class="ico indent n-ml18"></span>
                                            <span class="chip type2 type2 agree-x agree">찬성</span>
                                            <span>이*우</span>
                                        </p>
                                        <p class="reply-txt">최대한 쉽고 재미있게 기본개념을 설명해주셨네요.</p>
                                        <p><span class="reply-date">2018.09.14  21:34</span></p>
                                        <div class="reply-wrap">
                                            <p class="fr reply-num">
                                                <label>
                                                    <input type="checkbox"
                                                    @click="toggleLike7(1)"
                                                    >
                                                    <span v-if="good7">
                                                        <span class=" ico like_32" ></span>
                                                        <span class="">{{goodcnt}}</span>
                                                    </span>
                                                    <span v-else="">
                                                        <span class=" ico like_32 blue" ></span>
                                                        <span class="">{{goodcnt +1}}</span>
                                                    </span>
                                                </label>

                                                <label>
                                                    <input type="checkbox"
                                                    @click="toggleLike7(2)"
                                                    >
                                                    <span v-if="bad7">
                                                        <span class=" ico unlike_32" ></span>
                                                        <span class="">{{badcnt}}</span>
                                                    </span>
                                                    <span v-else="">
                                                        <span class=" ico unlike_32 red" ></span>
                                                        <span class="">{{badcnt +1}}</span>
                                                    </span>
                                                </label>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="top_bottom_pd">
                                <div class="infoChk pr0">
                                    <input type="text" placeholder="답글을 입력하세요" class="input type2"><button type="button" class="btn sm clr1 w17p">등록</button>
                                </div>
                            </li>
                            <li >
                                <p class="reply-name mt20">
                                    <span class="chip type2 type2 agree-x">반대</span>
                                    <span>김*소</span>
                                </p>
                                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                                <div class="reply-wrap">
                                    <span class="ico arr down"></span>
                                    <span>답글 4</span>
                                    <p class="fr reply-num">
                                        <label>
                                            <input type="checkbox"
                                            @click="toggleLike2(1)"
                                            >
                                            <span v-if="good2">
                                                <span class=" ico like_32" ></span>
                                                <span class="">{{goodcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico like_32 blue" ></span>
                                                <span class="">{{goodcnt +1}}</span>
                                            </span>
                                        </label>

                                        <label>
                                            <input type="checkbox"
                                            @click="toggleLike2(2)"
                                            >
                                            <span v-if="bad2">
                                                <span class=" ico unlike_32" ></span>
                                                <span class="">{{badcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico unlike_32 red" ></span>
                                                <span class="">{{badcnt +1}}</span>
                                            </span>
                                        </label>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <p class="reply-name mt20">
                                    <span class="chip type2 type2 agree-x">반대</span>
                                    <span>박*환</span>
                                </p>
                                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                                <div class="reply-wrap">
                                    <span class="ico arr down"></span>
                                    <span>답글 4</span>
                                    <p class="fr reply-num">
                                        <label>
                                            <input type="checkbox"
                                            @click="toggleLike3(1)"
                                            >
                                            <span v-if="good3">
                                                <span class=" ico like_32" ></span>
                                                <span class="">{{goodcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico like_32 blue" ></span>
                                                <span class="">{{goodcnt +1}}</span>
                                            </span>
                                        </label>

                                        <label>
                                            <input type="checkbox"
                                            @click="toggleLike3(2)"
                                            >
                                            <span v-if="bad3">
                                                <span class=" ico unlike_32" ></span>
                                                <span class="">{{badcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico unlike_32 red" ></span>
                                                <span class="">{{badcnt +1}}</span>
                                            </span>
                                        </label>
                                    </p>
                                </div>
                            </li>
                            <li class="bottom-bd">
                                <p class="reply-name mt20">
                                    <span class="chip type2 type2 agree-x agree">찬성</span>
                                    <span>정*민</span>
                                </p>
                                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                                <div class="reply-wrap">
                                    <span class="ico arr down"></span>
                                    <span>답글 4</span>
                                    <p class="fr reply-num">
                                        <label>
                                            <input type="checkbox"
                                            @click="toggleLike4(1)"
                                            >
                                            <span v-if="good4">
                                                <span class=" ico like_32" ></span>
                                                <span class="">{{goodcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico like_32 blue" ></span>
                                                <span class="">{{goodcnt +1}}</span>
                                            </span>
                                        </label>

                                        <label>
                                            <input type="checkbox"
                                            @click="toggleLike4(2)"
                                            >
                                            <span v-if="bad4">
                                                <span class=" ico unlike_32" ></span>
                                                <span class="">{{badcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico unlike_32 red" ></span>
                                                <span class="">{{badcnt +1}}</span>
                                            </span>
                                        </label>
                                    </p>
                                </div>
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
/* eslint-disable */
  name: 'Study_04_SO_debate_submission_all',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
        langFlag: false,
        replyFlag: false,
        goodcnt: 12,
        badcnt: 3,
        good : true,
        bad : true,
        good2 : true,
        bad2 : true,
        good3 : true,
        bad3 : true,
        good4 : true,
        bad4 : true,
        good5 : true,
        bad5 : true,
        good6 : true,
        bad6 : true,
        good7 : true,
        bad7 : true
    }
  },
  /* vue function */
  methods: {
    toggleReply () {
        this.replyFlag = !this.replyFlag
    },
    toggleLike (el) {
        if( el == 1 ) {
            this.good = !this.good || this.bad == ''
        } else if( el == 2 ) {
            this.bad = !this.bad || this.good ==''
        }
    },
    toggleLike2 (el) {
        if( el == 1 ) {
            this.good2 = !this.good2 || this.bad2 == ''
        } else if( el == 2 ) {
            this.bad2 = !this.bad2 || this.good2 ==''
        }
    },
    toggleLike3 (el) {
        if( el == 1 ) {
            this.good3 = !this.good3 || this.bad3 == ''
        } else if( el == 2 ) {
            this.bad3 = !this.bad3 || this.good3 ==''
        }
    },
    toggleLike4 (el) {
        if( el == 1 ) {
            this.good4 = !this.good4 || this.bad4 == ''
        } else if( el == 2 ) {
            this.bad4 = !this.bad4 || this.good4 ==''
        }
    },
    toggleLike5 (el) {
        if( el == 1 ) {
            this.good5 = !this.good5 || this.bad5 == ''
        } else if( el == 2 ) {
            this.bad5 = !this.bad5 || this.good5 ==''
        }
    },
    toggleLike6 (el) {
        if( el == 1 ) {
            this.good6 = !this.good6 || this.bad6 == ''
        } else if( el == 2 ) {
            this.bad6 = !this.bad6 || this.good6 ==''
        }
    },
    toggleLike7 (el) {
        if( el == 1 ) {
            this.good7 = !this.good7 || this.bad7 == ''
        } else if( el == 2 ) {
            this.bad7 = !this.bad7 || this.good7 ==''
        }
    },
    changeLang () {
        this.langFlag = !this.langFlag
    }
  }
}
</script>
