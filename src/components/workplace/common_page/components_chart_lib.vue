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

            <h-bar-chart
              id="myChart"
              :chart-data="basicBarData1"
              :options="basicBarOpt"
              css-classes="basicBar" />

            <div>
              <p> basic bar </p>
              <!-- basic bar -->
              <h2 class="label-tit20 w100p">분류별 접수 현황</h2>
              <ul class="progBox_wrap">
                <li>
                  <p>신청/취소<span class="fr">101명</span> </p>
                  <div class="progBox">
                    <h-bar-chart
                      :chart-data="basicBarData1"
                      :options="basicBarOpt"
                      css-classes="basicBar" />
                  </div>
                </li>
                <li>
                  <p>학습<span class="fr">180명</span> </p>
                  <div class="progBox">
                    <barStack
                      :chart-data="basicBarData2"
                      :options="basicBarOpt"
                      class="basicBar"/>
                  </div>
                </li>
                <li>
                  <strong>평가<span class="fr">245명</span> </strong>
                  <div class="progBox">
                    <barStack
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
                    <h-bar-chart
                      :chart-data="basicBar41Data"
                      :options="barStackOpt"
                      class="basicBar4"/>
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
                    <h-bar-chart
                      :chart-data="basicBar42Data"
                      :options="barStackOpt"
                      class="basicBar4"/>
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
                      :plugins="imsiChartPlugins"
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
                    :chart-data="stackedDoghnut01Data"
                    :options="imsiChartOpt"
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
                  <stackedDoghnut01
                    :chart-data="stackedDoghnut02Data"
                    :options="imsiChartOpt"
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
/* eslint-disable */
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
  props: ['options', 'plugins'],
  mounted: function () {
    this.renderChart( this.chartData, this.options )
  }
}
const stackedDoghnut01 = {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ['options'],
  mounted: function () {
    this.renderChart( this.chartData, this.options )
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
      stackedDoghnut02Data: {
        labels: ['스타벅스', '탐앤탐스','이디야', '할리스'],
        datasets: [
          {
            data: [38, 29, 22, 11],
            backgroundColor: ['#ff726D', '#ffba00', '#00b3c4', '#32667d'],
          }
        ]
      },
      stackedDoghnut02Opt: {
        legend: {
          display: false
        },
      },      
      stackedDoghnut01Data: {
        labels: ['직무과정', '경영 리더십','외국어 과정', '금융과정', '교육과정'],
        datasets: [
          {
            data: [52, 12, 36, 8, 6],
            backgroundColor: ['#ff726D', '#ffba00', '#00b3c4', '#00b6e8', '#32667d'],
          }
        ]
      },
      stackedDoghnut01Opt: {
        legend: {
          display: false
        },
      },
      basicBarOpt: {
        tooltips: {
          enabled: false,
          custom: function (tooltipModel) {
            // Tooltip Element
            var tooltipEl = document.getElementById('chartjs-tooltip')

            // Create element on first render
            if (!tooltipEl) {
              tooltipEl = document.createElement('div')
              tooltipEl.id = 'chartjs-tooltip'
              tooltipEl.innerHTML = '<table></table>'
              document.body.appendChild(tooltipEl)
            }

            // Hide if no tooltip
            if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = 0
              return
            }

            // Set caret Position
            tooltipEl.classList.remove('above', 'below', 'no-transform')
            if (tooltipModel.yAlign) {
              tooltipEl.classList.add(tooltipModel.yAlign)
            } else {
              tooltipEl.classList.add('no-transform')
            }

            function getBody (bodyItem) {
              return bodyItem.lines
            }

            // Set Text
            if (tooltipModel.body) {
              var titleLines = tooltipModel.title || []
              var bodyLines = tooltipModel.body.map(getBody)

              var innerHtml = '<thead>'

              titleLines.forEach(function (title) {
                innerHtml += '<tr><th>' + title + '</th></tr>'
              })
              innerHtml += '</thead><tbody>'

              bodyLines.forEach(function (body, i) {
                var colors = tooltipModel.labelColors[i]
                var style = 'background:' + colors.backgroundColor
                style += '; border-color:' + colors.borderColor
                style += '; border-width: 2px'
                var span = '<span style="' + style + '"></span>'
                innerHtml += '<tr><td>' + span + body + '</td></tr>'
              })
              innerHtml += '</tbody>'

              var tableRoot = tooltipEl.querySelector('table')
              tableRoot.innerHTML = innerHtml
            }

            // `this` will be the overall tooltip
            var position = this._chart.canvas.getBoundingClientRect()

            // Display, position, and set styles for font
            tooltipEl.style.opacity = 1
            tooltipEl.style.position = 'absolute'
            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px'
            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px'
            tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily
            tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px'
            tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle
            tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px'
            tooltipEl.style.pointerEvents = 'none'
            tooltipEl.style.background = '#ec5629'
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {display: false, drawBorder: false},
            ticks: { display: false, min: 0, max: 100 },
            display: false
          }],
          yAxes: [{
            barThickness: 8,
            display: false,
            gridLines: { display: false }
          }]
        }
      },
      basicBarData1: {
        // labels: ['신청/취소'],
        datasets: [{ backgroundColor: '#32667d', data: [30], label: '신청/취소' }]
      },
      basicBarData2: {
        datasets: [{ backgroundColor: '#00b6e8', data: [50] }]
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
        tooltips: {
          enabled: false
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            stacked: true,
            gridLines: {display: false, drawBorder: false},
            ticks: { display: false, min: 0, max: 100 },
            display: false
          }],
          yAxes: [{
            stacked: true,
            barThickness: 10,
            display: false,
            gridLines: { display: false }
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
      imsiChartPlugins: [{
          beforeDraw: function(chart) {
          var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = (height / 114).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";

          var text = Math.round(59*100/80)+"%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }],
      imsiChartData: {
        labels: ['취득학점', ''],
        datasets: [
          {
            data: [59, 21],
            backgroundColor: [
              'rgba(0, 173, 251, 1)',
              'rgba(0, 0, 0, 0.1)'
            ],
            borderColor: [
              'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0)'
            ],
            hoverBackgroundColor: [
              'rgba(0, 173, 251, 0.5)',
              'rgba(0, 0, 0, 0.1)'
            ],
          }
        ]
      },
      imsiChartOpt: {
  	    responsive: true,
        legend: {
          display: false
        },
        tooltips: {
        	filter: function(item, data) {
            var label = data.labels[item.index];
            if  (label) return item;
          },
          // callbacks: {
          //   // 59 * 100 /
          //   label: function(tooltipItem, data) {
          //     console.log(tooltipItem)
          //     console.log(data)
          //     return 59
          //   }
          // }          
        }        
      },
      stackedDoghnut01: {
        // data: [36, 25, 28, 14, 5]
        data: [10, 20, 30],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]    
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
    this.overRide()
//    this.textCenter(75)
  },
  mounted () {
  },
  /* vue function */
  methods: {
    textCenter(val) {
      Chart.pluginService.register({
          beforeDraw: function(chart) {
          var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = (height / 114).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";

          var text = val+"%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      });
    },       
    // 엣지 라운드 처리    
    overRide () {
      Chart.elements.Rectangle.prototype.draw = function () {
        var ctx = this._chart.ctx
        var vm = this._view
        var left, right, top, bottom, signX, signY, borderSkipped, radius
        var borderWidth = vm.borderWidth
        // Set Radius Here
        // If radius is large enough to cause drawing errors a max radius is imposed
        var cornerRadius = 100

        if (!vm.horizontal) {
          // bar
          left = vm.x - vm.width / 2
          right = vm.x + vm.width / 2
          top = vm.y
          bottom = vm.base
          signX = 1
          signY = bottom > top ? 1 : -1
          borderSkipped = vm.borderSkipped || 'bottom'
        } else {
          // horizontal bar
          left = vm.base
          right = vm.x
          top = vm.y - vm.height / 2
          bottom = vm.y + vm.height / 2
          signX = right > left ? 1 : -1
          signY = 1
          borderSkipped = vm.borderSkipped || 'left'
        }

        // Canvas doesn't allow us to stroke inside the width so we can
        // adjust the sizes to fit if we're setting a stroke on the line
        if (borderWidth) {
          // borderWidth shold be less than bar width and bar height.
          var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom))
          borderWidth = borderWidth > barSize ? barSize : borderWidth
          var halfStroke = borderWidth / 2
          // Adjust borderWidth when bar top position is near vm.base(zero).
          var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0)
          var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0)
          var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0)
          var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0)
          // not become a vertical line?
          if (borderLeft !== borderRight) {
            top = borderTop
            bottom = borderBottom
          }
          // not become a horizontal line?
          if (borderTop !== borderBottom) {
            left = borderLeft
            right = borderRight
          }
        }

        ctx.beginPath()
        ctx.fillStyle = vm.backgroundColor
        ctx.strokeStyle = vm.borderColor
        ctx.lineWidth = borderWidth

        // Corner points, from bottom-left to bottom-right clockwise
        // | 1 2 |
        // | 0 3 |
        var corners = [
          [left, bottom],
          [left, top],
          [right, top],
          [right, bottom]
        ]

        // Find first (starting) corner with fallback to 'bottom'
        var borders = ['bottom', 'left', 'top', 'right']
        var startCorner = borders.indexOf(borderSkipped, 0)
        if (startCorner === -1) {
          startCorner = 0
        }

        function cornerAt (index) {
          return corners[(startCorner + index) % 4]
        }

        // Draw rectangle from 'startCorner'
        var corner = cornerAt(0)
        var width, height, x, y, nextCorner, nextCornerId
        var x_tl, x_tr, y_tl, y_tr
        var x_bl, x_br, y_bl, y_br
        ctx.moveTo(corner[0], corner[1])

        for (var i = 1; i < 4; i++) {
          corner = cornerAt(i)
          nextCornerId = i + 1
          if (nextCornerId == 4) {
            nextCornerId = 0
          }

          nextCorner = cornerAt(nextCornerId)

          width = corners[2][0] - corners[1][0]
          height = corners[0][1] - corners[1][1]
          x = corners[1][0]
          y = corners[1][1]

          radius = cornerRadius

          // Fix radius being too large
          if (radius > Math.abs(height) / 2) {
            radius = Math.floor(Math.abs(height) / 2)
          }
          if (radius > Math.abs(width) / 2) {
            radius = Math.floor(Math.abs(width) / 2)
          }

          if (height < 0) {
            // Negative values in a standard bar chart
            x_tl = x; x_tr = x + width
            y_tl = y + height; y_tr = y + height

            x_bl = x; x_br = x + width
            y_bl = y; y_br = y

            // Draw
            ctx.moveTo(x_bl + radius, y_bl)
            ctx.lineTo(x_br - radius, y_br)
            ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius)
            ctx.lineTo(x_tr, y_tr + radius)
            ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr)
            ctx.lineTo(x_tl + radius, y_tl)
            ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius)
            ctx.lineTo(x_bl, y_bl - radius)
            ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl)
          } else if (width < 0) {
            // Negative values in a horizontal bar chart
            x_tl = x + width; x_tr = x
            y_tl = y; y_tr = y

            x_bl = x + width; x_br = x
            y_bl = y + height; y_br = y + height

            // Draw
            ctx.moveTo(x_bl + radius, y_bl)
            ctx.lineTo(x_br - radius, y_br)
            ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius)
            ctx.lineTo(x_tr, y_tr + radius)
            ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr)
            ctx.lineTo(x_tl + radius, y_tl)
            ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius)
            ctx.lineTo(x_bl, y_bl - radius)
            ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl)
          } else {
            // Positive Value
            ctx.moveTo(x + radius, y)
            ctx.lineTo(x + width - radius, y)
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
            ctx.lineTo(x + width, y + height - radius)
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
            ctx.lineTo(x + radius, y + height)
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
            ctx.lineTo(x, y + radius)
            ctx.quadraticCurveTo(x, y, x + radius, y)
          }
        }

        ctx.fill()
        if (borderWidth) {
          ctx.stroke()
        }
      }
    }
  }
}
</script>

<style>

.basicBar4{
  height: 10px;
}

.basicBar5{
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
  width:680px;
  height:170px;
}

.basicBar {
  height: 8px;
}

</style>
