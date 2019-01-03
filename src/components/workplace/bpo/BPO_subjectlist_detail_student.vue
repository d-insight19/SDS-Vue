<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer bpo_student">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                
            </div>
            <!-- //header -->
       
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div class="tabCnt dpb pt0"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                                                        
                        <div class="name_wrap">
                            <strong class="name">김수범</strong><a href="#"><span class="ico down_blue_24"></span> </a> 
                            <div class="calender">2018.08.05~2018.12.05 <a href="#"><span class="ico calender_blue_24 fr"></span></a></div>                        
                        </div>

                        <p class="hr"></p>

                         <p class="title_line">
                            <span class="title_txt">출석률</span><strong class="fwb600 count">80.81</strong>%
                           
                        </p>
                        <!-- list -->                 
                        <ul class="multiList type1">                         
                            <li>                                
                                <span class="date">2018.12.05</span>
                                <span class="fr desc">Business</span>
                                <span class="fr status">Absent</span>
                            </li>
                            <li>                                
                                <span class="date">2018.11.30</span>                                
                                <span class="fr time">02시간 00분</span>
                                <span class="fr status">Attend</span>
                            </li>
                            <li>                                
                                <span class="date">2018.11.20</span>                                
                                <span class="fr time">02시간 00분</span>
                                <span class="fr status">Attend</span>
                            </li>
                            <li>                                
                                <span class="date">2018.11.16</span>                                
                                <span class="fr time">02시간 00분</span>
                                <span class="fr status">Attend</span>
                            </li>
                            <li>                                
                                <span class="date">2018.11.10</span>                                
                                <span class="fr time">01시간 10분</span>
                                <span class="fr status">Late</span>
                            </li>
                            <li>                                
                                <span class="date">2018.10.30</span>                                
                                <span class="fr time">01시간 10분</span>
                                <span class="fr status">Attend</span>
                            </li>
                            <li>                                
                                <span class="date">2018.10.20</span>                                
                                <span class="fr time">01시간 10분</span>
                                <span class="fr status">Attend</span>
                            </li>
                            <li>                                
                                <span class="date">2018.12.05</span>
                                <span class="fr desc">Business</span>
                                <span class="fr status">Absent</span>
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
