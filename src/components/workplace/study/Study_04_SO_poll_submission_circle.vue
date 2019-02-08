<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery study_poll ">
            
            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <div class="page-btn">
                        <span class="ico back"></span>
                        <div class="num"><span>03</span>/<span>36</span>p</div>
                        <span class="ico next"></span>
                    </div>
                    <p class="header_text  font_19"> </p>
                </div>  
                <div class="hide_header" style="background:#efeff6; padding-top:76px; padding-bottom:32px">                
                    <div class="hide-inner">                           
                        <p class="h-tit5"> 
                            <span class="ico chk"></span>
                            <span >제출 완료!</span>
                        </p>
                        <p class="h-tit1">선호 커피 브랜드 시장 조사 선호 커피 브랜드 시장 조사</p>
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
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">                
                    <div class="head-inner">
                        <span class="chip">FAQ</span>                         
                        <p class="h-tit1">질문 타이틀 영역 질문 타이틀 영역 질문 타이틀 영역</p>
                        <p class="ico-group">
                            <span>동영상</span>
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
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">                
                    <div class="head-inner">
                        <span class="chip">FAQ</span>                         
                        <p class="h-tit1">질문 타이틀 영역 질문 타이틀 영역 질문 타이틀 영역</p>
                        <p class="ico-group">
                            <span>동영상</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- //header -->
            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">
                        <p class="font_18 mb6">1. 좋아하는 커피브랜드 1개이상 선택해주세요.</p>
                        <p class="font_14">참여인원 <span class="">100</span>명</p>              
                        <div class="diagram2">
                        <stackedDoghnut01
                            :data="stackedDoghnut01.data"
                            class="doughnut01"/>
                        </div>
                        <ul class="chart-list">
                            <li>
                            <p class="chart-txt">
                                <span class="dot bar1" style="margin-right:8px"></span>
                                <span>스타벅스</span>
                                <span class="fr">
                                    <span class="part-num">
                                        <span>19</span>명</span>
                                        <span class="pipe"></span> 
                                        <span class="part-num-2 mono_100">
                                            <span>38</span>%
                                        </span>
                                </span>
                            </p>
                            </li>
                            <li>
                            <p class="chart-txt">
                                <span class="dot bar4" style="margin-right:8px"></span>
                                <span><span class="chip color1">나의선택</span> 탐앤탐스</span>
                                <span class="fr">
                                    <span class="part-num">
                                        <span>15</span>명</span>
                                        <span class="pipe"></span> 
                                        <span class="part-num-2 mono_100">
                                            <span>29</span>%
                                        </span>
                                </span>
                            </p>
                            </li>
                            <li>
                            <p class="chart-txt">
                                <span class="dot bar2" style="margin-right:8px"></span>
                                <span>이디야</span>
                                <span class="fr">
                                    <span class="part-num">
                                        <span>11</span>명</span>
                                        <span class="pipe"></span> 
                                        <span class="part-num-2 mono_100">
                                            <span>22</span>%
                                        </span>
                                </span>
                            </p>
                            </li>
                            <li class="bottom-bd-x">
                            <p class="chart-txt">
                                <span class="dot bar3" style="margin-right:8px"></span>
                                <span>할리스</span>
                                <span class="fr">
                                    <span class="part-num">
                                        <span>6</span>명</span>
                                        <span class="pipe"></span> 
                                        <span class="part-num-2 mono_100">
                                            <span>11</span>%
                                        </span>
                                </span>
                            </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- //contents -->

            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <ul>
                <li>
                    <button type="button" class="btn md">재투표</button>
                </li> 
                <li>
                    <button type="button" class="btn md clr1">완료</button>
                </li>
                </ul>
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

const stackedDoghnut01 = {
  extends: Doughnut,
  props: ['data'],
  mounted: function () {
    this.renderChart({
      // labels: ['리더십', '마케팅', '성과', '지식', '경영'],
      datasets: [{backgroundColor: ['#ff726D', '#ffba00', '#00b3c4', '#32667d'],
        data: this.data}]}
    )
  }
}


const barStack = {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: ['options'],
  mounted: function () {
    this.renderChart( this.chartData, this.options )
  }
}

// const barChart = {
//   extends: Bar,
//   mixins: [reactiveProp],
//   props: ['options'],
//   mounted: function () {
//     this.renderChart( this.chartData, this.options )
//   }
// }

export default {
   components: {
    'stackedDoghnut01': stackedDoghnut01,
    'barStack': barStack
  },
/* vue data */
  data () {
    return {
      headerType:1,
      stackedDoghnut01: {
        data: [37, 30, 28, 14]
      },
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
        datasets: [{ backgroundColor: '#32667d', data: [30] }]
      },
      basicBarData2: {
        datasets: [{ backgroundColor: '#00b6e8', data: [50] }]
      },
      basicBarData3: {
        datasets: [{ backgroundColor: '#ffba00', data: [60] }]
      },
      basicBarData4: {
        datasets: [{ backgroundColor: '#ff726D', data: [80] }]
      },
      basicBarData5: {
        datasets: [{ backgroundColor: '#00b3c4', data: [40] }]
      }
    }
  },
  methods: {
  }
}
</script>
