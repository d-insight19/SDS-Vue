<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer bpo_classstatus">
            
             <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">출강현황</p>
            </div>
            <!-- //header -->
       
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div class="tabCnt dpb pt0"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                                                        
                        <div class="date_wrap">
                             2018.08.05~2018.12.05 <a href="#"><span class="ico calender_blue_24"></span></a>                    
                        </div>

                        <p class="hr"></p>

                        <p class="title_line">
                            <span class="title_txt">진행과정</span><span class="total_txt">총</span><strong class="fwb600 count">338</strong>개                              
                        </p>
                        <!-- list -->                 
                        <ul class="multiList type3">
                            <li>
                                <div class="in">                                                                                        
                                    <div class="multiline contents">
                                    <a href="#">The course can be written 2 lines in length. Text goes here.
                                    <span class="ico arrow"></span></a>
                                    </div>                                                     
                                    <p class="class_info">강의기간 <span class="info"> 2018.12.14 ~2019.01.14 (10일, 40시간)</span></p>
                                    <p class="class_info">강의누적시간 <span class="info"> 20시간 30분</span></p>
                                </div>                                                
                            </li> 
                            <li>
                                <div class="in">                                                                                        
                                    <div class="multiline contents">
                                    <a href="#">The course can be written 2 lines in length. Text goes here.
                                    <span class="ico arrow"></span></a>
                                    </div>                                                     
                                    <p class="class_info">강의기간 <span class="info"> 2018.12.14 ~2019.01.14 (10일, 40시간)</span></p>
                                    <p class="class_info">강의누적시간 <span class="info"> 20시간 30분</span></p>
                                </div>                                                
                            </li>
                            <li>
                                <div class="in">                                                                                        
                                    <div class="multiline contents">
                                    <a href="#">The course can be written 2 lines in length. Text goes here.
                                    <span class="ico arrow"></span></a>
                                    </div>                                                     
                                    <p class="class_info">강의기간 <span class="info"> 2018.12.14 ~2019.01.14 (10일, 40시간)</span></p>
                                    <p class="class_info">강의누적시간 <span class="info"> 20시간 30분</span></p>
                                </div>                                                
                            </li>
                            <li>
                                <div class="in">                                                                                        
                                    <div class="multiline contents">
                                    <a href="#">The course can be written 2 lines in length. Text goes here.
                                    <span class="ico arrow"></span></a>
                                    </div>                                                     
                                    <p class="class_info">강의기간 <span class="info"> 2018.12.14 ~2019.01.14 (10일, 40시간)</span></p>
                                    <p class="class_info">강의누적시간 <span class="info"> 20시간 30분</span></p>
                                </div>                                                
                            </li>
                            <li>
                                <div class="in">                                                                                        
                                    <div class="multiline contents">
                                    <a href="#">The course can be written 2 lines in length. Text goes here.
                                    <span class="ico arrow"></span></a>
                                    </div>                                                     
                                    <p class="class_info">강의기간 <span class="info"> 2018.12.14 ~2019.01.14 (10일, 40시간)</span></p>
                                    <p class="class_info">강의누적시간 <span class="info"> 20시간 30분</span></p>
                                </div>                                                
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
