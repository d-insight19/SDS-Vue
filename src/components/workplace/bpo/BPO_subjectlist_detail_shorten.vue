<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer bpo_shorten">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">단축 요청</p><button type="button" class="btn14 color_clr2">저장</button>                
            </div>
            <!-- //header -->
       
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div class="tabCnt dpb pt0"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                                                        
                        <p class="title_line">
                            <span class="title_txt">학습 종료 예정일</span>
                            <span class="fr date">2018.12.30</span> 
                        </p>
                        
                        <!-- list -->
                        <ul class="multiList type2 mt20">
                            <li class="pt0">
                                <strong class="label-tit15">단축 일자</strong>                                
                                <div class="calender">2018.12.29 <a href="#"><span class="ico calender_24 fr"></span></a></div>
                            </li>                             
                            <li class="mt20">
                                <strong class="label-tit15">단축 사유</strong>
                                <slp-text-field placeholder="단축사유 입력"></slp-text-field>
                            </li>                                                                                                        
                        </ul>
                       
                        <!-- //list -->
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
