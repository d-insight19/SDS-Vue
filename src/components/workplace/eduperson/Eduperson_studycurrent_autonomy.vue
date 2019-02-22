<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery eduperson_studycurrent_detail">
        <!-- header -->
        <div id="header" class="fixed">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_18">자율 학습현황</p>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">

              <div class="detail_date">
                <p class="fl select_date">2018.11<span class="ico calender_blue_24"></span></p>
                <p class="fr select_lecture" @click="bottomsheetToggle">교육차수1<span class="ico ico_dropdown16"></span></p>
              </div>
              <p class="hr"></p>
              <div class="detail_box">
                <div class="type_title_wrap">
                  <span class="fl type_title">종합현황</span>
                </div>
                <div class="type_box">
                  <div class="info type2">
                    <p class="tit">학습편수</p>
                    <p><span class="value">68</span><span class="value_sub">개</span></p>
                  </div>
                  <dl>
                    <dt>학습인원</dt> <dd>3,812</dd>
                  </dl>
                  <dl>
                    <dt>학습시간</dt><dd>23:40:16</dd>
                  </dl>
                </div>
              </div>
              <p class="hr"></p>

              <div class="detail_box">
                <ul class="progBox_wrap multi">
                  <li>
                    <h2 class="tit">분류별 학습현황</h2>
                    <p class="graph_detail">
                      <span class="bar-cir5">개설과정</span>
                      <span class="bar-cir1">학습과정</span>
                    </p>
                  </li>
                  <li v-for="(item, index) in list1" :key="index">
                    <p class="chart_multi_tit">{{item.month}}</p>
                    <div class="progBox_multi">
                      <div class="progBox">
                        <div class="bar bar5" style="width: 10%;"></div>
                        <span class="fr">{{item.count1}}명</span>
                      </div>

                      <div class="progBox">
                        <div class="bar bar1" style="width: 30%;"></div>
                        <span class="fr">{{item.count2}}명</span>
                      </div>
                    </div>
                  </li>
                </ul>

                <table class="detail_table">
                    <thead>
                        <tr>
                            <td>분류명</td>
                            <td>개설과정</td>
                            <td>학습과정</td>
                            <td>개설대비 학습비율</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>경영·리더십</td>
                            <td>15</td>
                            <td>10</td>
                            <td>29.3%</td>
                        </tr>
                        <tr>
                            <td>외국어</td>
                            <td>150</td>
                            <td>10</td>
                            <td>29.3%</td>
                        </tr>
                        <tr>
                            <td>OA</td>
                            <td>100</td>
                            <td>10</td>
                            <td>29.3%</td>
                        </tr>
                        <tr>
                            <td>직무</td>
                            <td>50</td>
                            <td>10</td>
                            <td>29.3%</td>
                        </tr>
                        <tr>
                            <td>인문</td>
                            <td>50</td>
                            <td>10</td>
                            <td>29.3%</td>
                        </tr>
                        <tr>
                            <td>합계</td>
                            <td>365</td>
                            <td>260</td>
                            <td>1003%</td>
                        </tr>
                    </tbody>
                    </table>
              </div>


            </div>
          </div>
        </div>

        <!-- Bottom Sheet -->
        <div id="bottomsheet_wrap" v-show="bottomsheetFlag">
          <div id="sheetDim"  @click="bottomsheetToggle"></div>
          <div id="bottomsheet">
            <ul  @click="bottomsheetToggle">
              <!--
                현재 아이콘이 이미지라 문의했지만, 순수  css로 바꿔야한다면
                <span class="ico check_24_blue"></span> -> <span class="checkIcon"></span>
              -->
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
      <!-- //container -->


    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Eduperson_Studycurrent_autonomy',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      bottomsheetFlag: false,
      list1: [
        {month: '경영·리더십', count1: '10', count2: '12'},
        {month: '외국어', count1: '8', count2: '12'},
        {month: 'QA', count1: '12', count2: '12'},
        {month: '직무', count1: '10', count2: '14'},
        {month: '인문', count1: '8', count2: '12'}
      ]
    }
  },
  /* vue function */
  methods: {
    bottomsheetToggle () {
      this.bottomsheetFlag = !this.bottomsheetFlag
    }
  }
}
</script>
