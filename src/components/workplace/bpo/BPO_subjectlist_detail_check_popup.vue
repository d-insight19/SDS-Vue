<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer bpo">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">일괄 출석체크</p><button type="button" class="btn14 color_clr2">저장</button>
            </div>
            <!-- //header -->
       
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div class="tabCnt dpb pt0"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                                                        
                        <p class="title_line">
                            <span class="title_txt">학습자</span><span class="total_txt">총</span><strong class="fwb600 count">9</strong>명
                            <span class="fr time">02시간 00분</span><span class="fr status">Attend</span> 
                        </p>
                        <!-- list -->                 
                        <ul class="multiList type1">                         
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit">모두</span>
                            </li>
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit">홍길동</span>
                                <span class="fr time">01시간 10분</span><span class="fr status">Late</span>
                            </li>
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit">홍길동</span>
                                <span class="fr time">02시간 00분</span><span class="fr status">Attend</span>
                            </li> 
                             <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit">홍길동</span>
                                <span class="fr time">01시간 10분</span><span class="fr status">Late</span>
                            </li>
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit">홍길동</span>
                                <span class="fr status">Absent</span>
                            </li> 
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit">홍길동</span>
                                <span class="fr time">02시간 00분</span><span class="fr status">Attend</span>
                            </li> 
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit">홍길동</span>
                                <span class="fr time">01시간 10분</span><span class="fr status">Late</span>
                            </li>  
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit">홍길동</span>
                                <span class="fr time">02시간 00분</span><span class="fr status">Attend</span>
                            </li>
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit">홍길동</span>
                                <span class="fr time">02시간 00분</span><span class="fr status">Attend</span>
                            </li>
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit">홍길동</span>
                                <span class="fr time">02시간 00분</span><span class="fr status">Attend</span>
                            </li>
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit">홍길동</span>
                                <span class="fr time">02시간 00분</span><span class="fr status">Attend</span>
                            </li>
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit">홍길동</span>
                                <span class="fr time">02시간 00분</span><span class="fr status">Attend</span>
                            </li>                                                           
                        </ul>
                                    
                        <!-- //list -->
                </div>   

            </div>
          </div>
        </div>

      </div>
      <!-- //container -->  

      <!-- layer wrap -->
        <slp-popup confirmInput="확인">
            <div class="ly-body">
                <p><span class="ly-info">2018.08.01(월)</span> 수업의<br>
                    <span class="ly-info">Attend 9명의 출석체크</span>가 <br>
                    저장되었습니다.</p>
            </div>
        </slp-popup>
        <!-- //layer wrap -->   
    </div>
    <!-- //wrap -->

</template>

<script>
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
      headerType: 2
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
