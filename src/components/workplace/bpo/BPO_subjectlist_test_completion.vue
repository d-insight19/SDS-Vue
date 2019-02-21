<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery drawer bpo_completion">

            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">이전</span></button>
                <p class="header_text font_18">홍길동</p><button type="button" class="btn14 color_clr2">저장</button>
            </div>
            <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">
                <div id="dropdown_wrap" v-show="langFlag">
                    <div id="sheetDim" @click="changeLang()"></div>
                    <div id="dropdown" class="category">
                        <ul @click="changeLang()">
                        <li>11월 평가</li>
                        <li>10월 평가</li>
                        <li>09월 평가</li>
                        </ul>
                    </div>
                </div>

                <div class="tabCnt dpb pt0"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->

                        <div class="name_wrap">
                            <strong class="label-tit15 mr4">12월 평가</strong><a href="#"><span class="ico down_blue_24" @click="changeLang()"></span> </a>
                            <div class="calender">2018.11.15 <a href="#"><span class="ico calender_24 fr"></span></a></div>
                        </div>

                        <p class="hr"></p>

                        <p class="label-tit18"><strong>수업평가</strong> <span class="label-tit18">(Class Evaluation) </span>
                        </p>
                        <!-- list -->
                        <ul class="multiList type2 mt20">
                            <li class="mb20">
                                <strong class="label-tit14">이해도</strong> <span class="font_regular">(Comprehension)</span>
                                <slp-text-field placeholder="20점 만점"></slp-text-field>
                            </li>
                            <li class="mb20">
                                <strong class="label-tit14">말하기</strong> <span class="font_regular">(Speaking)</span>
                                <slp-text-field placeholder="20점 만점"></slp-text-field>
                            </li>
                            <li class="mb20">
                                <strong class="label-tit14">표현력</strong> <span class="font_regular">(Expression)</span>
                                <slp-text-field placeholder="20점 만점"></slp-text-field>
                            </li>
                             <li class="mb20">
                                <strong class="label-tit14">유창성 </strong> <span class="font_regular">(Fluency)</span>
                                <slp-text-field placeholder="20점 만점"></slp-text-field>
                            </li>
                            <li class="mb20">
                                <strong class="label-tit14">어휘력 </strong> <span class="font_regular">(Vocabulary)</span>
                                <slp-text-field placeholder="20점 만점"></slp-text-field>
                            </li>
                        </ul>

                        <div class="total_grade_wrap"><strong>총 점</strong> (Total Score) <p class="total_grade"><span class="grade">80</span>점</p>
                        </div>

                        <p class="hr"></p>

                        <p class="label-tit18"><strong>강사의견</strong> <span class="label-tit18">(Instructor Opinion) </span>
                        </p>
                        <!-- list -->
                        <ul class="multiList type2 mt20">
                            <li class="mb20">
                                <strong class="label-tit14">수업 내용</strong> <span class="font_regular"> (Contents of Class)</span>
                                <slp-text-field placeholder="내용입력"></slp-text-field>
                            </li>
                            <li class="mb20">
                                <strong class="label-tit14">교재 </strong> <span class="font_regular">(Textbook &amp; hand-out)</span>
                                <slp-text-field placeholder="내용입력"></slp-text-field>
                            </li>
                            <li class="mb20">
                                <strong class="label-tit14">학습자 태도 및 실력 </strong> <span class="font_regular">(Learner’s Attitude and Proficiency)</span>
                                <slp-text-field placeholder="내용입력"></slp-text-field>
                            </li>
                             <li class="mb20">
                                <strong class="label-tit14">기타 특이사항 </strong> <span class="font_regular">(Special Note) </span>
                                <slp-text-field placeholder="내용입력"></slp-text-field>
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
