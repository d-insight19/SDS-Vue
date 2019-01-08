<template>
   <div class="edu_tab4">
      <div class="detail_date tab-txt">
         <p class="select_date">2018.11<span class="ico calender_blue_24"></span></p>
      </div>
      <p class="line01" style="border-color:#999;"></p>
      <h2 class="label-tit-20 mg">유입경로별 현황</h2>
      <div class="js-chart-wrap mb40">
         <div class="js-chart">

         </div>
         <ul class="chart-list">
            <li>
               <p class="chart-txt">
                  <span class="dot bgc-1" style="margin-right:8px"></span>
                  <span>전화</span>
                  <span class="fr chart-num">37<span class="per">%</span></span>
               </p>
            </li>
            <li>
               <p class="chart-txt">
                  <span class="dot bgc-4" style="margin-right:8px"></span>
                  <span>1:1메일문의</span>
                  <span class="fr chart-num">30<span class="per">%</span></span>
               </p>
            </li>
            <li>
               <p class="chart-txt">
                  <span class="dot bgc-2" style="margin-right:8px"></span>
                  <span>질문방</span>
                  <span class="fr chart-num">28<span class="per">%</span></span>
               </p>
            </li>
            <li class="bottom-bd-x">
               <p class="chart-txt">
                  <span class="dot bgc-3" style="margin-right:8px"></span>
                  <span>운영자 문의메일</span>
                  <span class="fr chart-num">14<span class="per">%</span></span>
               </p>
            </li>
         </ul>
      </div>
      <h2 class="label-tit-20 ">유입경로별 평균 처리시간</h2>
      <p class="inner-txt mt12">평균 2.1시간 / 총 2975건</p>
      <table class="detail_table mt12 mb40">
         <thead>
            <tr>
                  <td style="width:65%;">문의유형</td>
                  <td>건수</td>
                  <td>처리시간(hr)</td>
            </tr>
         </thead>
         <tbody>
            <tr>
                  <td>전화</td>
                  <td>2513</td>
                  <td>1</td>
            </tr>
            <tr>
                  <td>1:1메일문의</td>
                  <td>321</td>
                  <td>1.2</td>
            </tr>
            <tr>
                  <td>질문방</td>
                  <td>121</td>
                  <td>2</td>
            </tr>
            <tr>
                  <td>운영자 문의메일</td>
                  <td>20</td>
                  <td>4</td>
            </tr>
            <tr>
                  <td>합계</td>
                  <td>2975</td>
                  <td>2.1</td>
            </tr>
         </tbody>
      </table>
      <div class="detail_box">
         <ul class="progBox_wrap">
         <h2 class="label-tit-20 mb14">
            분류별 접수 현황
         </h2>
         <li>
            신청/취소<span class="fr">101명</span>
            <div class="progBox">
               <div class="bar bgc-3" style="width: 30%;"></div>
            </div>
         </li>
         <li>
            <p>학습<span class="fr">180명</span></p>
            <div class="progBox">
               <div class="bar bgc-2" style="width: 50%;"></div>
            </div>
         </li>
         <li>
            <p class="fwb600">평가<span class="fr">245명</span> </p>
            <div class="progBox">
               <div class="bar bgc-4" style="width: 65%;"></div>
            </div>
         </li>
         <li>
            <p>수료<span class="fr">297명</span></p>
            <div class="progBox">
               <div class="bar bgc-1" style="width: 53%;"></div>
            </div>
         </li>
         <li>
            <p>기타<span class="fr">124명</span></p>
            <div class="progBox">
               <div class="bar bgc-2" style="width: 35%;"></div>
            </div>
         </li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {

}
</script>
