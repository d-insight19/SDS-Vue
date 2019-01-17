<template>
<!-- eslint-disable -->
  <!-- wrap -->
  <div
    id="wrap"
    class="colorCode2">

    <!-- container -->
    <div
      id="container"
      class="mediaquery sample_page">
      <div
        id="content"
        class="list">
        <div class="cell">
          <div class="inner">
            <h2> charts </h2>
            <br>

            <div>
              <p> basic bar </p>
              <!-- basic bar -->
              <h2 class="label-tit20 w100p">분류별 접수 현황</h2>
              <ul class="progBox_wrap">
                <li>
                  <p>신청/취소<span class="fr">101명</span> </p>
                  <div class="progBox">
                    <h-bar-chart style="margin-left:-1%"
                      :chart-data="basicBarData1"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                </li>
                <li>
                  <p>학습<span class="fr">180명</span> </p>
                  <div class="progBox">
                    <barStack style="margin-left:-2%"
                      :chart-data="basicBarData2"
                      :options="basicBarOpt"
                      class="basicBar"/>
                  </div>
                </li>
                <li>
                  <strong>평가<span class="fr">245명</span> </strong>
                  <div class="progBox">
                    <barStack style="margin-left:-3%"
                      :chart-data="basicBarData3"
                      :options="basicBarOpt"
                      class="basicBar"/>
                  </div>
                </li>
                <li>
                  <p>수료<span class="fr">297명</span></p>
                  <div class="progBox">
                    <barStack
                      :chart-data="basicBarData4"
                      :options="basicBarOpt"
                      class="basicBar"/>
                  </div>
                </li>
                <li>
                  <p>기타<span class="fr">124명</span> </p>
                  <div class="progBox">
                    <barStack
                      :chart-data="basicBarData5"
                      :options="basicBarOpt"
                      class="basicBar"/>
                  </div>
                  <p class="desc">기타의견 : 0 명</p>
                </li>
              </ul>
              <!-- //basic bar -->
            </div>
            <br>

            <div>
              <p> basic bar2 </p>
              <!-- basic bar2 -->
              <h2 class="label-tit18 w100p">월별 학습시간</h2>
              <ul class="diagram_wrap type2 tar">
                <li class="type1">이러닝</li>
                <li class="type4">지식</li>
                <li class="type5">집합</li>
              </ul>
              <ul class="progBox_wrap">
                <li>
                  <p>1월<span class="fr">총 10시간 30분</span></p>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData21"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData22"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData23"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                </li>
                <li>
                  <p>2월<span class="fr">총 2시간 30분</span></p>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData21"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData22"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData23"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                </li>
                <li>
                  <p>3월<span class="fr">총 2시간 30분</span></p>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData21"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData22"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData23"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                </li>
              </ul>
              <!-- //basic bar2 -->
            </div>
            <br>

            <div>
              <p> basic bar3 </p>
              <!-- basic bar3 -->
              <h2 class="label-tit18 fwb w100p">1. 좋아하는 커피브랜드 1개이상 선택해주세요.</h2>
              <p class="person">참여인원 <span>100</span>명</p>
              <ul class="progBox_wrap">
                <li>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData31"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                  <div class="txt-wrap clearfix">
                    <p class="prog-txt">스타벅스</p>
                    <div class="tar">
                      <span class="part-num"><span>38</span>명</span>
                      <span class="pipe"/>
                      <span class="part-num-2"><span>38</span>%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData32"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                  <div class="txt-wrap clearfix">
                    <p class="prog-txt">탐앤탐스 <span class="chip color1">나의 선택</span></p>
                    <div class="tar">
                      <span class="part-num"><span>29</span>명</span>
                      <span class="pipe"/>
                      <span class="part-num-2"><span>29</span>%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData33"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                  <div class="txt-wrap clearfix">
                    <p class="prog-txt">이디야</p>
                    <div class="tar">
                      <span class="part-num"><span>22</span>명</span>
                      <span class="pipe"/>
                      <span class="part-num-2"><span>22</span>%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData34"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                  <div class="txt-wrap clearfix">
                    <p class="prog-txt">할리스</p>
                    <div class="tar">
                      <span class="part-num"><span>11</span>명</span>
                      <span class="pipe"/>
                      <span class="part-num-2"><span>11</span>%</span>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- //basic bar3 -->
            </div>
            <br>

            <div>
              <p> basic bar4 </p>
              <!-- basic bar4 -->
              <h2 class="label-tit20 fwb w100p">주요 학습분야</h2>
              <ul class="progBox_wrap">
                <li>
                  <h3 class="label-tit16 fwb w100p">2017년</h3>
                  <div
                    class="progBox"
                    style="height: 10px !important;">
                    <barStack
                      :chart-data="basicBar41Data"
                      :options="barStackOpt"
                      class="basicBar41"/>
                  </div>
                  <div class="txt-wrap clearfix">
                    <ul class="diagram_wrap type2">
                      <li class="type1 w48p">기타 <span class="fwb">20%</span></li>
                      <li class="type2 w48p">직무 <span class="fwb">20%</span></li>
                      <li class="type3 w48p">리더십 <span class="fwb">40%</span></li>
                      <li class="type4 w48p">외국어 <span class="fwb">20%</span></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <h3 class="label-tit16 fwb w100p">2018년</h3>

                  <div
                    class="progBox"
                    style="height: 10px !important;">
                    <barStack
                      :chart-data="basicBar42Data"
                      :options="barStackOpt"
                      class="basicBar42"/>
                  </div>
                  <div class="txt-wrap clearfix">
                    <ul class="diagram_wrap type2">
                      <li class="type1 w48p">기타 <span class="fwb">10%</span></li>
                      <li class="type2 w48p">직무 <span class="fwb">30%</span></li>
                      <li class="type3 w48p">리더십 <span class="fwb">20%</span></li>
                      <li class="type4 w48p">외국어 <span class="fwb">40%</span></li>
                    </ul>
                  </div>
                </li>
              </ul>
              <!-- //basic bar4 -->
            </div>
            <br>

            <div>
              <p> basic bar5 </p>
              <!-- basic bar5 -->
              <div class="txt-wrap clearfix">
                <p class="fl good-ex"><span class="ico agree"/> 찬성</p>
                <p class="fr bad-ex">반대</p>

              </div>
              <div class="progBox bg-x">
                <barStack
                  :chart-data="basicBar5Data"
                  :options="barStackOpt"
                  class="basicBar5"/>
              </div>
              <div class="txt-wrap clearfix">
                <p class="prog-txt"/>
                <div class="fl">
                  <span class="part-num-2"><span>64</span>%</span>
                  <span class="pipe"/>
                  <span class="part-num"><span>32</span>명</span>
                </div>
                <div class="fr">
                  <span class="part-num"><span>18</span>명</span>
                  <span class="pipe"/>
                  <span class="part-num-2"><span>36</span>%</span>
                </div>
              </div>
              <!-- //basic bar5 -->
            </div>
            <br>

            <div>
              <p> stacked bar </p>
              <!-- stacked bar -->

              <!-- //stacked bar -->
            </div>
            <br>

            <div class="MainType">
              <p> basic donut </p>
              <!-- basic donut -->

              <div class="status">
                <div class="white big">
                  <div class="info">
                    <imsiChart
                      :chart-data="imsiChartData"
                      :options="imsiChartOpt"
                      class="imsiChart"/>
                  </div>
                  <dl>
                    <dt>취득학점</dt>
                    <dd><strong>59</strong> 학점</dd>
                  </dl>
                  <dl class="line">
                    <dt>목표학점</dt>
                    <dd><strong>80</strong> 학점</dd>
                  </dl>
                </div>
              </div>
              <!-- //basic donut -->
            </div>
            <br>

            <div>
              <p> stacked donut - circle </p>
              <!-- stacked donut -->
              <h2 class="label-tit20 w100p">Q. 질문 1 입니다.</h2>
              <ul class="diagram_wrap">
                <div class="diagram2">
                  <stackedDoghnut01
                    :data="stackedDoghnut01.data"
                    class="doughnut01"/>
                </div>
                <li class="type1">
                  <p>직무과정<span class="percent fr"><span class="num">36</span>%(52명)</span></p>
                </li>
                <li class="type4">
                  <p>경영 리더십<span class="percent fr"><span class="num">25</span>%(12명)</span></p>
                </li>
                <li class="type5">
                  <p>외국어 과정<span class="percent fr"><span class="num">28</span>%(36명)</span></p>
                </li>
                <li class="type2">
                  <p>금융과정<span class="percent fr"><span class="num">14</span>%(8명)</span></p>
                </li>
                <li class="type3">
                  <p>교육과정<span class="percent fr"><span class="num">5</span>%(6명)</span></p>
                </li>
              </ul>
              <!-- //stacked donut -->
            </div>
            <br>

            <div>
              <p> stacked donut2 - square</p>
              <!-- stacked donut2 -->
              <h2 class="label-tit18 fwb w100p">1. 좋아하는 커피브랜드 1개이상 선택해주세요.</h2>
              <p class="person">참여인원 <span>100</span>명</p>
              <ul class="diagram_wrap square">
                <div class="diagram2">
                  <stackedDoghnut02
                    :data="stackedDoghnut02.data"
                    class="doughnut02"/>
                </div>
                <li class="type4">
                  <p class="prog-txt">스타벅스</p>
                  <div class="tar">
                    <span class="part-num"><span>38</span>명</span>
                    <span class="pipe"/>
                    <span class="part-num-2"><span>38</span>%</span>
                  </div>
                </li>
                <li class="type1">
                  <p class="prog-txt">탐앤탐스 <span class="chip color1">나의 선택</span></p>
                  <div class="tar">
                    <span class="part-num"><span>29</span>명</span>
                    <span class="pipe"/>
                    <span class="part-num-2"><span>29</span>%</span>
                  </div>
                </li>
                <li class="type5">
                  <p class="prog-txt">이디야</p>
                  <div class="tar">
                    <span class="part-num"><span>22</span>명</span>
                    <span class="pipe"/>
                    <span class="part-num-2"><span>22</span>%</span>
                  </div>
                </li>
                <li class="type3">
                  <p class="prog-txt">할리스</p>
                  <div class="tar">
                    <span class="part-num"><span>11</span>명</span>
                    <span class="pipe"/>
                    <span class="part-num-2"><span>11</span>%</span>
                  </div>
                </li>
              </ul>
              <!-- //stacked donut2 -->
            </div>
            <br>

            <div>
              <p> column </p>
              <!-- column -->
              <h2 class="label-tit20 w100p">정규학습</h2>
              <ul class="diagram_wrap type2 tar">
                <li class="type1">나의 점수</li>
                <li class="square o40 type1">회사 평균</li>
              </ul>
              <div class="w100p">
                <barChart
                  :chart-data="barLineData1"
                  :options="barLineOpt1"
                  class="barLine"/>
              </div>

              <h2 class="label-tit20 w100p">자율학습</h2>
              <ul class="diagram_wrap type2 tar">
                <li class="type3">나의 학습시간</li>
                <li class="square o40 type3">회사 평균</li>
              </ul>
              <div class="w100p">
                <barChart
                  :chart-data="barLineData2"
                  :options="barLineOpt2"
                  class="barLine"/>
              </div>
              <!-- //column -->
            </div>

            <stackedDoghnut03
              :data="stackedDoghnut03.data"
              class="doughnut02"/>

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- //wrap -->
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

const imsiChart = {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ['options'],
  mounted: function () {
    this.renderChart( this.chartData, this.options )
  }
}

const stackedDoghnut01 = {
  extends: Doughnut,
  props: ['data'],
  mounted: function () {
    this.renderChart({
      datasets: [{backgroundColor: ['#ff726D', '#ffba00', '#00b3c4', '#00b6e8', '#32667d'],
        data: this.data}]}
    )
  }
}

const stackedDoghnut02 = {
  extends: Doughnut,
  props: ['data'],
  mounted: function () {
    this.renderChart({
      datasets: [{backgroundColor: ['#ffba00', '#ff726D', '#00b3c4', '#32667d'],
        data: this.data}]}
    )
  }
}

const stackedDoghnut03 = {
  extends: Doughnut,
  props: ['data'],
  mounted: function () {
    this.renderChart({
      labels: ['스타벅스', '탐앤탐스', '이디야', '할리스'],
      datasets: [{backgroundColor: ['#ffba00', '#ff726D', '#00b3c4', '#32667d'],
        data: this.data}]}
    )
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

const horizontalBarChart = {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: ['options'],
  mounted: function () {
    /* renderChart(data,options) */
    this.renderChart( this.chartData, this.options )
  }
}

export default {
  name: 'ComponentsChart',
  components: {
    'barStack': barStack,
    'imsiChart': imsiChart,
    'stackedDoghnut01': stackedDoghnut01,
    'stackedDoghnut02': stackedDoghnut02,
    'stackedDoghnut03': stackedDoghnut03,
    'barChart': barChart,
    'h-bar-chart': horizontalBarChart
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
        datasets: [{ backgroundColor: '#32667d', data: [100] }]
      },
      basicBarData2: {
        datasets: [{ backgroundColor: '#00b6e8', data: [100] }]
      },
      basicBarData3: {
        datasets: [{ backgroundColor: '#ffba00', data: [70] }]
      },
      basicBarData4: {
        datasets: [{ backgroundColor: '#ff726D', data: [80] }]
      },
      basicBarData5: {
        datasets: [{ backgroundColor: '#00b3c4', data: [40] }]
      },
      basicBarData21: {
        datasets: [{ backgroundColor: '#ff726D', data: [40] }]
      },
      basicBarData22: {
        datasets: [{ backgroundColor: '#ffba00', data: [10] }]
      },
      basicBarData23: {
        datasets: [{ backgroundColor: '#00b3c4', data: [50] }]
      },
      basicBarData31: {
        datasets: [{ backgroundColor: '#00b6e8', data: [38] }]
      },
      basicBarData32: {
        datasets: [{ backgroundColor: '#ff726D', data: [29] }]
      },
      basicBarData33: {
        datasets: [{ backgroundColor: '#00b6e8', data: [22] }]
      },
      basicBarData34: {
        datasets: [{ backgroundColor: '#32667d', data: [11] }]
      },
      barStackOpt: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            stacked: true,
            barThickness: 1,
            gridLines: {display: false, color: 'rgba(0, 0, 0, 0)', scaleLineColor: 'rgba(0, 0, 0, 0)', drawBorder: false},
            ticks: {display: false}
          }],
          yAxes: [{
            stacked: true,
            barThickness: 8,
            gridLines: {display: false, color: 'rgba(0, 0, 0, 0)', scaleLineColor: 'rgba(0, 0, 0, 0)', drawBorder: false},
            ticks: {display: false}
          }]
        }
      },
      basicBar41Data: {
        datasets: [
          { backgroundColor: '#ff726D', data: [20] },
          { backgroundColor: '#00b6e8', data: [20] },
          { backgroundColor: '#32667d', data: [40] },
          { backgroundColor: '#ffba00', data: [20] }
        ]
      },
      basicBar42Data: {
        datasets: [
          { backgroundColor: '#ff726D', data: [10] },
          { backgroundColor: '#00b6e8', data: [30] },
          { backgroundColor: '#32667d', data: [20] },
          { backgroundColor: '#ffba00', data: [40] }
        ]
      },
      basicBar5Data: {
        datasets: [
          { backgroundColor: '#00b6e8', data: [64] },
          { backgroundColor: '#ff726D', data: [36] }
        ]
      },
      imsiChartData: {
        labels: ['취득학점', '목표학점'],
        datasets: [
          {
            data: [54, 46],
            backgroundColor: [
              'rgba(0, 173, 251, 1)',
              'rgba(0, 0, 0, 0.1)'
            ],
            hoverBackgroundColor: [
              'rgba(0, 173, 251, 0.5)',
              'rgba(234, 234, 234, 0.5)'
            ]
          }
        ]
      },
      imsiChartOpt: {
        animation: {
          animationRotate: true,
          duration: 2000
        },
        legend: {
          display: false
        }
      },
      stackedDoghnut01: {
        data: [36, 25, 28, 14, 5]
      },
      stackedDoghnut02: {
        data: [38, 29, 22, 11]
      },
      stackedDoghnut03: {
        data: [38, 29, 22, 11]
      },
      barLineData1: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [
          {
            type: 'line',
            lineTension: 0,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(247, 108, 82, 1)',
            pointBackgroundColor: 'rgba(247, 108, 82, 1)',
            pointBorderWidth: 3,
            borderWidth: 2,
            data: [61, 58, 72, 63, 57, 59, 58, 67, 33, 63, 43, 5]
          },
          {
            type: 'bar',
            backgroundColor: 'rgba(255, 219, 218, 1)',
            hoverBackgroundColor: 'rgba(255, 219, 218, 0.5)',
            borderColor: 'rgba(255, 219, 218, 1)',
            borderWidth: 1,
            data: [52, 70, 60, 64, 59, 40, 76, 17, 34, 22, 5, 80]
          }
        ]
      },
      barLineOpt1: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {display: false, color: 'rgba(0, 0, 0, 0)', scaleLineColor: 'rgba(0, 0, 0, 0)', drawBorder: false}
          }],
          yAxes: [{
            barThickness: 8,
            ticks: { min: 0, max: 100, stepSize: 20 }
          }]
        }
      },

      barLineData2: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [
          {
            type: 'line',
            lineTension: 0,
            backgroundColor: 'rgba(0, 179, 196, 0)',
            borderColor: 'rgba(0, 179, 196, 1)',
            pointBackgroundColor: 'rgba(0, 179, 196, 1)',
            pointBorderWidth: 3,
            borderWidth: 2,
            data: [5, 3.2, 6, 5.7, 3.2, 5, 8, 7, 3, 6, 4, 5]
          },
          {
            type: 'bar',
            backgroundColor: 'rgba(191, 236, 240, 1)',
            hoverBackgroundColor: 'rgba(191, 236, 240, 0.5)',
            borderColor: 'rgba(191, 236, 240, 1)',
            borderWidth: 1,
            data: [9.5, 6.2, 12, 9.9, 8.9, 6, 5, 2, 3, 11, 5, 8]
          }
        ]
      },
      barLineOpt2: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {display: false, color: 'rgba(0, 0, 0, 0)', scaleLineColor: 'rgba(0, 0, 0, 0)', drawBorder: false}
          }],
          yAxes: [{
            barThickness: 8,
            ticks: { min: 0, max: 12, stepSize: 3 }
          }]
        }
      }

    }
  },
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue function */
  methods: {
  }
}
</script>

<style>

.basicBar41{
  width:100%;
  height: 20px;
}

.basicBar42{
  width:100%;
  height: 20px;
}

.basicBar5{
  width:100%;
  height: 18px;
}

.imsiChart{
  width: 96px;
  height: 96px;
}

.doughnut01 {
  width: 176px;
  height: 176px;
}

.doughnut02{
  width: 176px;
  height: 176px;
}

.barLine{
  height:170px;
}

.basicBar {
  width:100%;
  height: 18px;
}

</style>
