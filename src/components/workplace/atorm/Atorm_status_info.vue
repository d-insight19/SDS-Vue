<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery atorm">
            
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

                    <h2 class="label-tit18 mb22">기본정보</h2>  
                    <ul class="thumList mb20">
                        <li>
                            <div class="in">
                                <a href="#" class="thum">
                                    <div class="thumbnail">
                                        <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                    </div>
                                </a>
                                <h3 class="font_15 fwb">과정명</h3>
                                <a href="#" class="font_15 mono_80">처음부터 배우는 데이터 분석</a>                                                           
                            </div>
                        </li>
                    </ul>
                   
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
                                <td class="fwb vt">학습목표</td> 
                                <td class="data">데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. 데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. </td> 
                            </tr>
                            <tr>
                                <td class="fwb vt">과정소개</td> 
                                <td class="data">데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. 데이터 분석을 통해 데이터를 제대로 분석하고 얘기하며 배워보는 시간을 갖도록합시다. </td> 
                            </tr>
                            </tbody>
                        </table> 
                    </div>  

                    <p class="hr" style="margin:26px -24px 22px"></p> 

                    <h2 class="label-tit18 mb22">수료기준</h2>

                    <div class="title_line">
                        <h3 class="label-tit15"><b>기본수료기준</b></h3>
                    </div>
                    <ul class="multiList type_1">
                        <li style="border-top:0">
                            <div class="in">
                                <span class="label-tit14">진도율</span>
                                <span class="status_data fr"><span class="status_value mr4">80%</span>이상 </span>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <span class="label-tit14">총점</span>
                                <span class="status_data fr"><span class="status_value">80</span>점 이상 </span>
                            </div>
                        </li>
                    </ul>
                    
                    <div class="title_line mt26">
                        <h3 class="label-tit15"><b>총점 평가항목 및 점수반영 비율</b></h3>
                    </div>
                    <ul class="multiList type_1">
                        <li style="border-top:0">
                            <div class="in">
                                <span class="label-tit14">진도율</span>
                                <span class="status_data fr"><span class="status_value mr4">80%</span></span>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <span class="label-tit14">최종평가점수</span>
                                <span class="status_data fr"><span class="status_value">20%</span></span>
                            </div>
                        </li>
                    </ul>
                    
                    <div class="title_line mt26">
                        <h3 class="label-tit15"><b>기타 설정</b></h3>
                    </div>
                    <ul class="multiList type_1">
                        <li style="border:0">
                            <div class="in">
                                <span class="label-tit14">설문 및 별점</span>
                            </div>
                        </li>
                    </ul>

                    <p class="hr" style="margin:26px -24px 22px"></p> 

                    <h2 class="label-tit18 mb9">승인정보</h2>

                    <div class="atorm_status_table">
                        <table class="detail_table2">
                            <tbody>
                            <tr>
                                <td class="fwb" style="width:95px">승인 요청일</td> 
                                <td class="data">2018.03.02</td> 
                            </tr> 
                            <tr>
                                <td class="fwb">승인 완료일</td> 
                                <td class="data">2018.03.05</td> 
                            </tr>
                            <tr>
                                <td class="fwb">승인여부</td> 
                                <td class="data">승인</td> 
                            </tr>                            
                            <tr>
                                <td class="fwb">승인자</td> 
                                <td class="data">천경자</td> 
                            </tr>  
                            <tr>
                                <td class="fwb vt">승인/반려 사유</td> 
                                <td class="data">과정 제작에 쓰인 컨텐츠가 저작권에 위촉됩니다. 사용된 컨텐츠를 교체하여 재승인 요청해주세요. </td> 
                            </tr>                           
                            </tbody>
                        </table> 
                    </div>

                    <p class="hr" style="margin:26px -24px 22px"></p> 

                    <h2 class="label-tit18 mb9">과정 운영자 정보</h2>
                    <ul class="multiList type_1">
                        <li style="border:0">
                            <div class="in">
                                <span class="label-tit14">홍길동</span>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <span class="label-tit14">010 - 1234 - 5678</span>
                            </div>
                        </li>
                         <li style="border:0">
                            <div class="in">
                                <span class="label-tit14">abcd@multismart.com</span>
                            </div>
                        </li>
                    </ul>

                    <p class="hr" style="margin:26px -24px 22px"></p> 

                    <h2 class="label-tit18 mb9">제작정보</h2>

                    <div class="atorm_status_table">
                        <table class="detail_table2">
                            <tbody>
                            <tr>
                                <td class="fwb" style="width:95px">제작자</td> 
                                <td class="data">홍길순</td> 
                            </tr> 
                            <tr>
                                <td class="fwb">제작일</td> 
                                <td class="data">2018.02.02</td> 
                            </tr>
                            <tr>
                                <td class="fwb">연락처</td> 
                                <td class="data">010 - 1234 -1234</td> 
                            </tr>
                            <tr>
                                <td class="fwb">이메일 </td> 
                                <td class="data">abc@multismart.com</td> 
                            </tr>
                            <tr>
                                <td class="fwb">소유 구분</td> 
                                <td class="data">멀티 캠퍼스</td> 
                            </tr>
                            <tr>
                                <td class="fwb">승인자</td> 
                                <td class="data">천경자</td> 
                            </tr>
                            <tr>
                                <td class="fwb">과정 제작일</td> 
                                <td class="data">2018.03.01</td> 
                            </tr>
                            <tr>
                                <td class="fwb">과정 오픈일</td> 
                                <td class="data">2018.03.01</td> 
                            </tr>                                                    
                            </tbody>
                        </table> 
                    </div>

                    <p class="hr" style="margin:26px -24px 22px"></p> 

                    <h2 class="label-tit18 mb9">과정 운영 및 폐강 이력</h2>

                    <div class="atorm_status_table">
                        <table class="detail_table2">
                            <tbody>
                            <tr>
                                <td class="fwb" style="width:95px">과정 제작일</td> 
                                <td class="data">2018.03.02</td> 
                            </tr> 
                            <tr>
                                <td class="fwb">과정 오픈일</td> 
                                <td class="data">2018.03.31</td> 
                            </tr>
                            <tr>
                                <td class="fwb">운영 여부</td> 
                                <td class="data">운영 중</td> 
                            </tr>
                            <tr>
                                <td class="fwb">승인자 </td> 
                                <td class="data">김길동</td> 
                            </tr>
                            <tr>
                                <td class="fwb">폐강자</td> 
                                <td class="data">홍길동</td> 
                            </tr>
                            <tr>
                                <td class="fwb">최종 폐강일</td> 
                                <td class="data">2018.03.27</td> 
                            </tr>                                               
                            </tbody>
                        </table> 
                    </div>

                       
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
