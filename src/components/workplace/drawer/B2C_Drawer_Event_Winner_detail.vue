<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery drawer event">           
            <div v-if="headerType == '1'" id="header" class="expand">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>  
                </div>  
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">                
                    <div class="head-inner">                                              
                        <p class="h-tit">도전 열공모드! 자격과정 11-12월 베스트 수강 후기 모집 이벤트</p>                                               
                        <p class="date">2018.11.12 ~ 2018.11.20</p>
                    </div>
                </div>
            </div>
            <!-- //header -->         
           
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner" style="padding-top:26px">              
                        운영제작
                    </div>
                </div>
            </div>
            <!-- //contents -->

            

        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Study_04_SO_survey_submission',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
