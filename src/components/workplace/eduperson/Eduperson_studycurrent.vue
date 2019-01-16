<template>
  <div>
    <p class="edu_study_date">2018.11</p>

    <div class="edu_studycurrent_wrap">
      <div class="type_title_wrap">
        <span class="fl type_title">이러닝</span>
        <span class="fr color_clr2 type_more">자세히보기</span>
      </div>

      <div class="type_box">
        <div class="info type3">
          <p class="tit">수료율</p>
          <p><span class="value">89.91</span><span class="value_sub">%</span></p>
        </div>
        <dl>
          <dt>총인원</dt> <dd>2,360</dd>
        </dl>
        <dl>
          <dt>수료인원</dt><dd>327</dd>
        </dl>
        <dl>
          <dt>미수료인원</dt><dd>33</dd>
        </dl>
      </div>

      <ul class="progBox_wrap">
        <h2 class="tit">학습자 진도율</h2>
        <li>
          <p>0%<span class="fr">101명</span></p>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData1"
              :options="basicBarOpt"
              css-classes="basicBar" />
          </div>
        </li>
        <li>
          <p>10%~20%<span class="fr">314명</span></p>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData2"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <p>21%~40%<span class="fr">245명</span> </p>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData3"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <p>41%~60%<span class="fr">187명</span></p>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData4"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <p>61%~80%<span class="fr">124명</span></p>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData5"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <strong><p>81%~100%<span class="fr">327명</span></p></strong>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData6"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
      </ul>
    </div>

    <div class="edu_studycurrent_wrap">
      <div class="type_title_wrap">
        <span class="fl type_title">집합과정</span>
        <span class="fr color_clr2 type_more">자세히보기</span>
      </div>

      <div class="type_box">
        <div class="info type2">
          <p class="tit">개설과정수</p>
          <p><span class="value">32</span><span class="value_sub">개</span></p>
        </div>
        <dl>
          <dt>신청인원</dt> <dd>3,812</dd>
        </dl>
        <dl class="line">
          <dt>입과인원</dt><dd>2,174</dd>
        </dl>
      </div>

      <ul class="progBox_wrap">
        <h2 class="tit">학습자 진도율</h2>
        <li>
          0%<span class="fr">101명</span>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData11"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <p>10%~20%<span class="fr">314명</span></p>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData12"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <p>21%~40%<span class="fr">245명</span> </p>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData13"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <p>41%~60%<span class="fr">187명</span></p>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData14"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <p>61%~80%<span class="fr">124명</span></p>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData15"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <strong><p>81%~100%<span class="fr">327명</span></p></strong>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData16"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="edu_studycurrent_wrap">
      <div class="type_title_wrap">
        <span class="fl type_title">자율</span>
        <span class="fr color_clr2 type_more">자세히보기</span>
      </div>

      <div class="type_box">
        <div class="info type2">
          <p class="tit">학습편수</p>
          <p><span class="value">68</span><span class="value_sub">개</span></p>
        </div>
        <dl>
          <dt>학습인원</dt> <dd>3,812</dd>
        </dl>
        <dl class="line">
          <dt>학습시간</dt><dd>23:40:16</dd>
        </dl>
      </div>

      <ul class="progBox_wrap">
        <h2 class="tit">분류별 학습현황</h2>
        <li>
          <p>경영·리더십<span class="fr">101명</span></p>
          <div class="progBox">
            <barStack
              :chart-data="basicBarData21"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <p>전문직무<span class="fr">314명</span></p>
          <div class="progBox">
            <bar-stack
              :chart-data="basicBarData22"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <p>자격대비<span class="fr">245명</span> </p>
          <div class="progBox">
            <bar-stack
              :chart-data="basicBarData23"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <strong>외국어<span class="fr">187명</span></strong>
          <div class="progBox">
            <bar-stack
              :chart-data="basicBarData24"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
        <li>
          <p>글로벌 비즈니스<span class="fr">124명</span></p>
          <div class="progBox">
            <bar-stack
              :chart-data="basicBarData25"
              :options="basicBarOpt"
              class="basicBar"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import {Bar, HorizontalBar, Doughnut, mixins} from 'vue-chartjs'
const {reactiveProp} = mixins

const barStack = {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: ['options'],
  mounted: function () {
    this.renderChart( this.chartData, this.options )
  }
}

const barChart = {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['options'],
  mounted: function () {
    this.renderChart( this.chartData, this.options )
  }
}
export default {
  name: 'Eduperson_studycurrent',
  components: {
    'barStack': barStack,
    'barChart': barChart
  },
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      basicBarOpt: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {display: false, color: 'rgba(0, 0, 0, 0)', scaleLineColor: 'rgba(0, 0, 0, 0)', drawBorder: false},
            ticks: { display: false, min: 0, max: 100 }
          }],
          yAxes: [{
            barThickness: 8,
            gridLines: {display: false, color: 'rgba(0, 0, 0, 0)', scaleLineColor: 'rgba(0, 0, 0, 0)', drawBorder: false},
            ticks: {display: false}
          }]
        }
      },
      basicBarData1: {
        datasets: [{ backgroundColor: '#00b3c4', data: [30] }]
      },
      basicBarData2: {
        datasets: [{ backgroundColor: '#00b3c4', data: [50] }]
      },
      basicBarData3: {
        datasets: [{ backgroundColor: '#00b3c4', data: [70] }]
      },
      basicBarData4: {
        datasets: [{ backgroundColor: '#00b3c4', data: [50] }]
      },
      basicBarData5: {
        datasets: [{ backgroundColor: '#00b3c4', data: [40] }]
      },
      basicBarData6: {
        datasets: [{ backgroundColor: '#ff726D', data: [100] }]
      },

      basicBarData11: {
        datasets: [{ backgroundColor: '#00b3c4', data: [30] }]
      },
      basicBarData12: {
        datasets: [{ backgroundColor: '#00b3c4', data: [50] }]
      },
      basicBarData13: {
        datasets: [{ backgroundColor: '#00b3c4', data: [70] }]
      },
      basicBarData14: {
        datasets: [{ backgroundColor: '#ff726D', data: [80] }]
      },
      basicBarData15: {
        datasets: [{ backgroundColor: '#00b3c4', data: [40] }]
      },
      basicBarData16: {
        datasets: [{ backgroundColor: '#00b3c4', data: [20] }]
      },

      basicBarData21: {
        datasets: [{ backgroundColor: '#ffba00', data: [30] }]
      },
      basicBarData22: {
        datasets: [{ backgroundColor: '#32667d', data: [50] }]
      },
      basicBarData23: {
        datasets: [{ backgroundColor: '#00b3c4', data: [30] }]
      },
      basicBarData24: {
        datasets: [{ backgroundColor: '#ff726D', data: [80] }]
      },
      basicBarData25: {
        datasets: [{ backgroundColor: '#00b6e8', data: [20] }]
      }
    }
  },
  /* vue function */
  methods: {
  }
}
</script>

<style>
.basicBar {
  height: 18px;
}
</style>