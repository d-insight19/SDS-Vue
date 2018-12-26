<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer inquiry">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">1:1문의</p>
            </div>
            <!-- //header -->
       
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div class="tabCnt dpb pt0"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                    <h1 class="h-tit5 title_line">
                        <span class="total_txt">총</span>
                        <strong class="fwb600 count">0</strong><span>건</span>
                        <div class="inquiry_btn fr">                                            
                        <button type="button" class="btn14 color_clr2"><span class="pencil_16_blue ico"></span> 문의하기</button>  
                        </div>                                            
                    </h1>  
                    
                          
                </div>   

            </div>
          </div>
        </div>

         <div class="content_wapper">
                        <div class="content_inner">
                            <div class="content"><span class="test_24 ico"></span> 문의하신 내역이 없습니다.</div>
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
