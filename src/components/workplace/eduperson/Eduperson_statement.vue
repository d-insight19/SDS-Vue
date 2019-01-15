<template>
   <div class="edu_tab3">
      <div class="detail_date">
         <p class="fl select_date tab-txt">
            <span class="label-tit-20">통합검색 통계</span></p>
         <p class="fr select_lecture" @click="bottomsheetToggle">월간<span class="ico ico_dropdown16"></span></p>
      </div>
      <p class="line01" style="border-color:#999;"></p>
      <div class="js-chart-wrap mb40">
         <div class="js-chart">

         </div>
         <ul class="chart-list">
            <li>
               <p class="chart-txt">
                  <span class="dot bar1" style="margin-right:8px"></span>
                  <span class="chart-num-2">1.</span>
                  <span>리더십</span>
                  <span class="fr chart-num">37<span class="per">%</span></span>
               </p>
            </li>
            <li>
               <p class="chart-txt">
                  <span class="dot bar3" style="margin-right:8px"></span>
                  <span class="chart-num-2">2.</span>
                  <span>마케팅</span>
                  <span class="fr chart-num">30<span class="per">%</span></span>
               </p>
            </li>
            <li>
               <p class="chart-txt">
                  <span class="dot bar2" style="margin-right:8px"></span>
                  <span class="chart-num-2">3.</span>
                  <span>성과</span>
                  <span class="fr chart-num">28<span class="per">%</span></span>
               </p>
            </li>
            <li>
               <p class="chart-txt">
                  <span class="dot bar4" style="margin-right:8px"></span>
                  <span class="chart-num-2">4.</span>
                  <span>지식</span>
                  <span class="fr chart-num">28<span class="per">%</span></span>
               </p>
            </li>
            <li class="bottom-bd-x">
               <p class="chart-txt">
                  <span class="dot bar1" style="margin-right:8px"></span>
                  <span class="chart-num-2">5.</span>
                  <span>경영</span>
                  <span class="fr chart-num">14<span class="per">%</span></span>
               </p>
            </li>
         </ul>
      </div>
      <!-- Bottom Sheet -->
         <div id="bottomsheet_wrap" v-show="bottomsheetFlag">
            <div id="sheetDim"  @click="bottomsheetToggle"></div>
            <div id="bottomsheet">
            <ul  @click="bottomsheetToggle">
               <li class="">교육차수 1<span class="checkIcon"></span></li>
               <li class="">교육차수 2<span class="checkIcon"></span></li>
               <li class="">교육차수 3<span class="checkIcon"></span></li>
               <li class="">교육차수 4<span class="checkIcon"></span></li>
               <li class="">교육차수 5<span class="checkIcon"></span></li>
               <li class="active">선택된 차수<span class="checkIcon"></span></li>
            </ul>
            <div class="bottomsheetBtn">
               <span class="ico close_24_black"></span>
               닫기
            </div>
            </div>
         </div>
         <!-- // Bottom Sheet -->
   </div>
</template>

<script>
export default {
/* vue data */
  data () {
    return {
      bottomsheetFlag: false
    }
  },
  methods: {
    bottomsheetToggle () {
      this.bottomsheetFlag = !this.bottomsheetFlag
    }
  }
}
</script>
