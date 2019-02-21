<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery drawer bpo_student">

            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>

            </div>
            <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">
                <div class="tabCnt dpb pt0"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->

                        <div class="name_wrap">
                            <strong class="name" @click="bottomsheetToggle">김수범 <a href="#"><span class="ico down_blue_24"></span> </a></strong>
                            <div class="calender">2018.08.05~2018.12.05 <a href="#"><span class="ico calender_blue_24 fr"></span></a></div>
                        </div>

                        <p class="hr"></p>

                         <p class="title_line">
                            <span class="title_txt">출석률</span><strong class="fwb600 count">80.81</strong>%

                        </p>
                        <!-- list -->
                        <ul class="multiList type1">
                            <li>
                                <span class="date">2018.12.05</span>
                                <span class="fr desc">Business</span>
                                <span class="fr status">Absent</span>
                            </li>
                            <li>
                                <span class="date">2018.11.30</span>
                                <span class="fr time">02시간 00분</span>
                                <span class="fr status">Attend</span>
                            </li>
                            <li>
                                <span class="date">2018.11.20</span>
                                <span class="fr time">02시간 00분</span>
                                <span class="fr status">Attend</span>
                            </li>
                            <li>
                                <span class="date">2018.11.16</span>
                                <span class="fr time">02시간 00분</span>
                                <span class="fr status">Attend</span>
                            </li>
                            <li>
                                <span class="date">2018.11.10</span>
                                <span class="fr time">01시간 10분</span>
                                <span class="fr status">Late</span>
                            </li>
                            <li>
                                <span class="date">2018.10.30</span>
                                <span class="fr time">01시간 10분</span>
                                <span class="fr status">Attend</span>
                            </li>
                            <li>
                                <span class="date">2018.10.20</span>
                                <span class="fr time">01시간 10분</span>
                                <span class="fr status">Attend</span>
                            </li>
                            <li>
                                <span class="date">2018.12.05</span>
                                <span class="fr desc">Business</span>
                                <span class="fr status">Absent</span>
                            </li>

                        </ul>

                        <!-- //list -->
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
              <li class="">학습자명 1<span class="checkIcon"></span></li>
              <li class="">학습자명 2<span class="checkIcon"></span></li>
              <li class="">학습자명 3<span class="checkIcon"></span></li>
              <li class="">학습자명 4<span class="checkIcon"></span></li>
              <li class="">학습자명 5<span class="checkIcon"></span></li>
              <li class="active">선택된 학습자명<span class="checkIcon"></span></li>
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
  name: 'Eduperson_Studycurrent_set',
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
        {month: '1월', count1: '10', count2: '12'},
        {month: '2월', count1: '8', count2: '12'},
        {month: '3월', count1: '12', count2: '12'},
        {month: '4월', count1: '10', count2: '14'},
        {month: '5월', count1: '8', count2: '12'},
        {month: '6월', count1: '10', count2: '10'},
        {month: '7월', count1: '10', count2: '12'},
        {month: '8월', count1: '24', count2: '12'},
        {month: '9월', count1: '20', count2: '30'},
        {month: '10월', count1: '10', count2: '28'},
        {month: '11월', count1: '8', count2: '12'},
        {month: '12월', count1: '5', count2: '12'}
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
