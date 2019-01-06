<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery eduperson_studycurrent_detail">
        <!-- header -->
        <div id="header" class="fixed">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_18">이러닝 학습현황</p>
        </div>
        <!-- //header -->
        
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
              
              <div class="detail_date">
                <p class="fl select_date">2018.11<span class="ico calender_blue_24"></span></p>
                <p class="fr select_lecture" @click="bottomsheetToggle">교육차수1<span class="ico ico_dropdown16"></span></p>
              </div>
              <p class="hr"></p>
              <div class="detail_box">
                <div class="type_title_wrap">
                  <span class="fl type_title">집합과정</span>
                </div>
                <div class="type_box">
                  <div class="info type2">
                    <p class="tit">개설과정수</p>
                    <p><span class="value">32</span><span class="value_sub">개</span></p>
                  </div>
                  <dl>
                    <dt>신청인원</dt> <dd>2,260</dd>
                  </dl>
                  <dl>
                    <dt>학습인원</dt><dd>540</dd>
                  </dl>
                </div>
              </div>

              <p class="hr"></p>
              <div class="detail_box">
                <ul class="progBox_wrap">
                  <h2 class="progBox_tit">학습자 진도율</h2>
                  <li>
                    0%<span class="fr">101명</span>
                    <div class="progBox">
                      <div class="bar bar5" style="width: 30%;"></div>
                    </div>
                  </li>
                  <li>
                    <p>10%~20%<span class="fr">314명</span></p>
                    <div class="progBox">
                      <div class="bar bar5" style="width: 50%;"></div>
                    </div>
                  </li>
                  <li>
                    <p>21%~40%<span class="fr">245명</span> </p>
                    <div class="progBox">
                      <div class="bar bar5" style="width: 65%;"></div>
                    </div>
                  </li>
                  <li>
                    <p>41%~60%<span class="fr">187명</span></p>
                    <div class="progBox">
                      <div class="bar bar5" style="width: 53%;"></div>
                    </div>
                  </li>
                  <li>
                    <p>61%~80%<span class="fr">124명</span></p>
                    <div class="progBox">
                      <div class="bar bar5" style="width: 35%;"></div>
                    </div>
                  </li>
                  <li>
                    <strong><p>81%~100%<span class="fr">327명</span></p></strong>
                    <div class="progBox">
                      <div class="bar bar1" style="width: 90%;"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <p class="hr"></p>

              <div class="detail_box">
                <h2 class="tit">학습자 성적분포도</h2>
                <ul class="progBox_wrap vertical">                  
                  <li>
                    <span  class="bar bar5" style="height:30%" title="80점 미만" value="30.0%"></span>
                  </li>
                  <li>
                    <span class="bar bar1" style="height:38.1%" title="80-90점" value="38.1%"></span>
                  </li>
                  <li>
                    <span class="bar bar5" style="height:21.2%" title="90-95점" value="21.2%"></span>
                  </li>
                  <li>
                    <span class="bar bar5" style="height:12.0%" title="90점 이상" value="12.0%"></span>
                  </li>
                </ul>    
              </div>

              <p class="hr"></p>

              <div class="detail_box">
                <ul class="progBox_wrap multi">
                  <h2 class="tit">월별 입과 인원현황</h2>
                  <p class="graph_detail">
                    <span class="bar5">2017</span>
                    <span class="bar1">2018</span>
                  </p>

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
  name: 'Eduperson_Studycurrent_elearning',
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
