<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery">   

        <div>
          <h1>Tables</h1>

          <h2>type_box</h2>
          <ul>
            <li>
              
              <div class="type_box">
                <div class="info type2">
                  <p class="tit">전체과정수</p> 
                  <p><span class="value">1,245</span></p>
                </div> 
                <dl>
                  <dt>운영중 과정</dt> 
                    <dd>100</dd>
                  </dl> 
                  <dl>
                    <dt>학습중인 학습자</dt>
                    <dd>400</dd>
                  </dl> 
                  <dl>
                    <dt>제작자</dt>
                    <dd>1,120</dd>
                  </dl>
                </div>        
              
            </li>    
            <li>
              
              <div class="type_box type_1">
                <dl>
                  <dt>운영중 과정</dt> 
                    <dd>100</dd>
                  </dl> 
                  <dl>
                    <dt>학습중인 학습자</dt>
                    <dd>400</dd>
                  </dl> 
                  <dl>
                    <dt>제작자</dt>
                    <dd>1,120</dd>
                  </dl>
                </div>        
              
            </li>  
            <li>

              <table class="detail_table">
                <thead>
                  <tr>
                    <td style="width: 65%;">문의유형</td> 
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
            </li>
            <li>
              <p style="margin-top:20px;">마지막 행 텍스트 볼드 적용 없앰 + 스크롤 처리</p>
              <div class="scroll-x">
                <table class="table detail_table">
                  <thead>
                      <tr>
                      <th></th> 
                      <th>가중치</th> 
                      <th>과락기준</th>
                      <th>학습현황</th> 
                      <th>취득점수</th> 
                      <th>가중치</th> 
                      <th>과락기준</th>
                      <th>학습현황</th>                                
                      </tr>
                  </thead> 
                  <tbody>
                      <tr>
                        <td class="">진도율</td> 
                        <td>-</td> 
                        <td>-</td>
                        <td>-</td> 
                        <td>-</td>   
                        <td>-</td>
                        <td>-</td> 
                        <td>-</td>                                    
                      </tr> 
                      <tr>
                        <td>과제</td> 
                        <td>-</td> 
                        <td>-</td>
                        <td>-</td> 
                        <td>-</td>  
                        <td>-</td>
                        <td>-</td> 
                        <td>-</td>                                       
                      </tr>   
                      <tr>
                        <td>중간평가</td> 
                        <td>-</td> 
                        <td>-</td>
                        <td>-</td> 
                        <td>-</td> 
                        <td>-</td>
                        <td>-</td> 
                        <td>-</td>                                        
                      </tr> 
                      <tr>
                        <td>최종평가</td> 
                        <td>-</td> 
                        <td>-</td>
                        <td>-</td> 
                        <td>-</td>  
                        <td>-</td>
                        <td>-</td> 
                        <td>-</td>                                       
                      </tr> 
                      <tr>
                        <td>출석율</td> 
                        <td>-</td> 
                        <td>-</td>
                        <td>-</td> 
                        <td>-</td> 
                        <td>-</td>
                        <td>-</td> 
                        <td>-</td>                                        
                      </tr>
                      <tr>
                        <td class="font_weight_base">스코어</td> 
                        <td class="font_weight_base">20%</td> 
                        <td class="font_weight_base">20%</td>
                        <td class="font_weight_base">20%</td> 
                        <td class="font_weight_base">0%</td> 
                        <td>-</td>
                        <td>-</td> 
                        <td>-</td>                                        
                      </tr>                                                                       
                  </tbody>
                </table>  
              </div>         
            </li>           
          </ul>
    
        </div>

      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->    
</template>

<script>
export default {
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
<style scoped>
h1 { margin-bottom:40px; font-size:50px; }
h2 { margin-top:40px; font-size:30px; color:blue; }
.ul { display: flex; flex-wrap: wrap;}
.ul li { padding:10px; }
.bc-black{background-color: black;}
</style>
