<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer bpo sms">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">SMS 보내기</p><button type="button" class="btn14 color_clr2">발송</button>
            </div>
            <!-- //header -->
       
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div class="tabCnt dpb pt0"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                                                        
                        <p class="title_line">
                            <span class="title_txt">발송대상</span><span class="total_txt">총</span><strong class="fwb600 count">53</strong>명
                            <span class="fr ico accordion_down"></span>
                        </p>
                        <!-- list -->                 
                        <ul class="multiList type1">                         
                            <li>                                
                                <span class="label-tit14">발송연락처</span>
                                <span class="fr num">010-1120-2020</span>
                            </li>
                            <li class="noline">                                
                                <span class="label-tit14">메시지 입력</span>  
                                <slp-text-field class="mt8" ></slp-text-field>
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
