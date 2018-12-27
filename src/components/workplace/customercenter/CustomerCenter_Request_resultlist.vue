<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer inquiry">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">설문</p>
            </div>
            <!-- //header -->
       
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div class="tabCnt dpb pt0" id="tab1"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                    <!-- list -->                                 
                    <h1 class="h-tit5 title_line">
                        <span class="total_txt">총</span>
                        <strong class="fwb600 count">2</strong><span>건</span>
                        <a href="#"><span class="ico down fr"></span><span class="total fr">마감</span></a>
                    </h1>
                
                    <ul class="multiList type3">
                        <li>
                        <div class="in">                                                                                        
                            <div class="multiline contents">
                                LMS 설문 테스트입니다.LMS 설문 테스트입니다.<br>LMS 설문 테스트입니다.
                            </div>                                                     
                            <ul class="info">
                            <li class="fwb">마감</li>
                            <li class="icon"><span class="date">2018.10.10 ~ 2018.10.20</span></li>
                            <button type="button" class="btn13 color_clr2 fr"> 결과보기</button> 
                            </ul>
                        </div>                                                
                        </li>
                        <li>
                        <div class="in">                                                                                        
                            <div class="multiline contents">
                                LMS 설문 테스트입니다.LMS 설문 테스트입니다.<br>LMS 설문 테스트입니다.
                            </div>                                                     
                            <ul class="info">
                            <li class="fwb">마감</li>
                            <li class="icon"><span class="date">2018.10.10 ~ 2018.10.20</span></li>
                            <button type="button" class="btn13 color_clr2 fr"> 결과보기</button> 
                            </ul>
                        </div>                                                
                        </li>
                    </ul>
                    <!-- //list -->
                    <div class="snackbar_wrap">
                        <div class="snackbar"><p>제출 되었습니다</p></div>
                        <!-- <div class="snackbar"><p>취소 되었습니다</p></div> -->
                    </div>
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
