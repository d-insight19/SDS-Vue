<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery studystatus pd70">
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">평가 결과 통계</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc" >
                <div class="cell">
                    <div class="inner " style="padding-top:56px;">
                        <div class="full-box pd mb26">
                            <p class="font_16 mono_80 mb12">안녕하세요. 정해민님의 점수는 100점 만점에서 <span class="color_clr2">60점</span>으로 모듈별 정답 비율은 다음과 같습니다.</p>
                            <p class="font_16 mono_80 mb12">전체 평균 점수는 63점으로 평균보다 낮은 점수입니다. 부족한 모듈은 청강기간에 재학습을 통해 보완하시기 바랍니다</p>
                            <p class="font_16 mono_80">자세한 평가 결과 화면은 [결과 확인] 버튼을 클릭하여 확인 가능합니다.</p>
                        </div>
                        
                        <div>
                            
                            <ul class="diagram_wrap type2 tar">
                                <li class="fl no-cir fwb">모듈별 정답비율</li>
                                <li class="type1">본인</li>
                                <li class="type2">전체평균</li>
                            </ul>

                            <p class="line01" style="margin-top:6px;margin-bottom:15px;"></p>

                            <ul class="progBox_wrap">
                                <li>
                                <p class="font_16 fwb" >・ OPic 문장의 정석</p>
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
                                </li>
                                <li>
                                <p class="font_16 fwb">・ OPic 문법의 정석</p>
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
                                </li>
                                <li>
                                <p class="font_16 fwb">・ OPic 주제의 정석</p>
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
                                </li>
                                <li>
                                <p class="font_16 fwb">・ OPic 표현의 정석</p>
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
                                </li>
                                <li>
                                <p class="font_16 fwb">・ 총 합계</p>
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
                                </li>
                            </ul>
                            <!-- //basic bar2 -->
                            </div>
                        
                    </div>
                </div>
            </div>
            <!-- //contents -->

            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md clr1">결과확인</button>
            </div>
            <!-- //floatingbtn -->

        </div>
        <!-- //container --> 
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
        layout: {
          padding:{
            left:-20
          }
        },
        scales: {
          xAxes: [{
            gridLines: {display: false, color: 'rgba(0, 0, 0, 0)', scaleLineColor: 'rgba(0, 0, 0, 0)', drawBorder: false},
            ticks: { display: false, min: 0, max: 100 , beginAtZero:true}
          }],
          yAxes: [{
            barThickness: 8,
            gridLines: {display: false, color: 'rgba(0, 0, 0, 0)', scaleLineColor: 'rgba(0, 0, 0, 0)', drawBorder: false},
            ticks: { display: false}
          }]
        }
      },      
      basicBarData21: {
        datasets: [{ backgroundColor: '#ff726D', data: [40] }]
      },
      basicBarData22: {
        datasets: [{ backgroundColor: '#00b6e8', data: [10] }]
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
  },
}
</script>