<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer bpo_calcel">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">휴강 등록</p><button type="button" class="btn14 color_clr2">저장</button>                
            </div>
            <!-- //header -->
       
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div class="tabCnt dpb pt0"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                                                        
                         <!-- list -->
                        <ul class="multiList type2">
                            <li class="pt0">
                                <strong class="label-tit15">강의날짜 선택</strong>                                
                                <slp-select required placeholder="2018.11.19" width="100%" class="mt8">
                                    <option>2018.11.30</option>
                                    <option>2018.12.19</option>
                                    <option>2018.12.30</option>
                                </slp-select>
                            </li> 
                            <li class="mt20">
                                <strong class="label-tit15">휴강사유 입력</strong>
                                <slp-text-field placeholder="건강"></slp-text-field>
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
