<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery atorm pd70">
            
           <!-- header -->
            <div v-if="headerType == '2'" id="header" class="tab fixed">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text font_18">처음부터 배우는 데이터 분석</p>
                </div>  
                <div class="header_inner line2 tabMenu scroll-x">
                    <ul class="scrollTab">
                        <li><a href="#tab1">과정정보</a></li>                       
                        <li class="on"><a href="#tab2">학습현황</a></li><!-- selected class "on" --> 
                    </ul>
                </div>  
            </div>
        <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner nopad">                     

                    <ul class="thumList">
                        <li>
                            <div class="in">
                                <a href="#" class="thum">
                                    <div class="thumbnail">
                                        <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                    </div>
                                </a>
                                <a href="#" class="tit">처음부터 배우는 데이터 분석</a>                                                           
                            </div>
                        </li>
                    </ul>
                   
                    <p class="hr" style="margin:26px -24px 21px"></p>      

                    <div class="atorm_status_table">
                        <table class="detail_table2">
                            <tbody>
                            <tr>
                                <td class="fwb" style="width:95px">과정코드</td> 
                                <td class="data">K1111</td> 
                            </tr> 
                            <tr>
                                <td class="fwb">학습시간</td> 
                                <td class="data">3시간</td> 
                            </tr>
                            <tr>
                                <td class="fwb">과정 유형</td> 
                                <td class="data">이러닝</td> 
                            </tr>
                            <tr>
                                <td class="fwb">과정분류</td> 
                                <td class="data">경영 리더십<span class="ico next_line_12 ml6 mr6"></span>비지니스 리더십<span class="ico next_line_12 ml6 mr6"></span>커뮤니케이션</td> 
                            </tr>
                            <tr>
                                <td class="fwb">학습대상</td> 
                                <td class="data">전체</td> 
                            </tr>
                            <tr>
                                <td class="fwb">난이도</td> 
                                <td class="data">선택 안 함</td> 
                            </tr>
                            <tr>
                                <td class="fwb">강사명</td> 
                                <td class="data">천경자, 윤동주</td> 
                            </tr> 
                            <tr>
                                <td class="fwb">TAG</td> 
                                <td class="data">데이터분석, 통계분석</td> 
                            </tr>
                            <tr>
                                <td class="fwb">역량</td> 
                                <td class="data">커뮤니케이션<span class="ico next_line_12 ml6 mr6"></span>의사결정</td> 
                            </tr>
                            <tr>
                                <td class="fwb">최종평가</td> 
                                <td class="data">Y / 총 30문항ㅣ100점</td> 
                            </tr>
                            <tr>
                                <td class="fwb">학습목표</td> 
                                <td class="data">데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. 데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. </td> 
                            </tr>
                            <tr>
                                <td class="fwb pt13">과정소개</td> 
                                <td class="data">데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. 데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. </td> 
                            </tr>
                            </tbody>
                        </table> 
                    </div>  

                    <p class="hr" style="margin:26px -24px 22px"></p> 
                       
                    </div>
                </div>
            </div>  
       
        </div>
        <!-- //container -->   

    </div>
    <!-- //wrap -->

</template>

<script>
/*eslint-disable */
export default {
  name: 'components_tabheader',  
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
   data () {
    return {
      headerType: 2,
      langFlag: false,     
    }
  },
  /* vue function */
  methods: {
    changeLang () {
      this.langFlag = !this.langFlag
    }
  }
}
</script>
