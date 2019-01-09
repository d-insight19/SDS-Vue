<template>
<div class="Eduperson_Operation">
  <h2 class="label-tit-20">교육현황</h2>
  <div class="tb_wrap">
    <table>
      <tr>
        <td class="right-bd right-pd op80">반 출석률</td>
        <td class="left-pd op80">학습일수</td>
      </tr>
      <tr>
        <td class="right-bd  right-pd"><span class="tb-state">87.04</span><span class="tb-txt op80">%</span></td>
        <td class="left-pd"><span class="tb-state">24(40)</span><span class="tb-txt op80">일</span></td>
      </tr>
    </table>
  </div>
  <p class="hr" style="margin-top:26px; margin-bottom:22px;"></p>
  <h2 class="label-tit-20">교육결과</h2>
  <div class="js-chart-wrap mb40">
    <div class="js-chart">

    </div>
  </div>
  <p class="hr" style="margin-top:26px; margin-bottom:22px;"></p>
  <h2 class="label-tit-20">설문 만족도</h2>
  <div class="rating_wrap">
      <p class="rating-total">
        <span class="rating-tit frb">종합</span>
        <span class="star-group">
          <span class="ico star_30"></span>
          <span class="ico star_30"></span>
          <span class="ico star_30"></span>
          <span class="ico star_30"></span>
          <span class="ico star_30"></span>
        </span>
        <span class="rating-num frb">4.5</span>
        <span class="rating-txt frb">점</span>
      </p>
      <p class="line01"></p>
      <ul>
        <li class="rating-list" v-for="item in ratingList" :key="item.id" style="padding-bottom:20px;">
          <span class="rating-tit ">{{item.title}}</span>
          <span class="fr">
            <span v-for="i in starList" :key="i.id" class="star-group">
              <span v-html="i.star"></span>
            </span>
            <span class="rating-num">{{item.num}}</span>
            <span class="rating-txt">점</span>
          </span>
        </li>
      </ul>
  </div>

  <p class="hr" style="margin-top:26px; margin-bottom:22px;"></p>
  <h2 class="label-tit-20">교육비 현황</h2>
  <div class="js-chart-wrap mb40">
      <div class="js-chart">

      </div>
      <ul class="chart-list type2">
        <li>
            <p class="chart-txt">
              <span>총 교육비</span>
              <span class="fr chart-num">2,000,000<span class="per">원</span></span>
            </p>
        </li>
        <li>
            <p class="chart-txt">
              <span>환급금(예상)</span>
              <span class="fr chart-num">1,000,000<span class="per">원</span></span>
            </p>
        </li>
        <li>
            <p class="chart-txt">
              <span>총 교육비</span>
              <span class="fr chart-num">1,000,000<span class="per">원</span></span>
            </p>
        </li>
        <li class="bottom-bd-x">
            <p class="chart-txt">
              <span>1인당 교육비</span>
              <span class="fr chart-num">100,000<span class="per">원</span></span>
            </p>
        </li>
      </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Eduperson_operation_set_graph',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      ratingList: [
        {title: '시스템 만족도', num: '4.1'},
        {title: '운영서비스 만족도', num: '3.8'},
        {title: '조직성과 기여도', num: '4.0'},
        {title: '현업 적응도', num: '4.6'},
        {title: '학업 성취도', num: '4.4'},
        {title: '추천 의향', num: '4.0'},
        {title: '전반적 만족도', num: '4.8'}
      ],
      starList: [
        {star: '<span class="ico star_20"></span>', id: 1},
        {star: '<span class="ico star_20"></span>', id: 2},
        {star: '<span class="ico star_20"></span>', id: 3},
        {star: '<span class="ico star_20"></span>', id: 4},
        {star: '<span class="ico star_20"></span>', id: 5}
      ]
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
