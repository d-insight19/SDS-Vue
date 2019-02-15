<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery atorm">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">선택보기</p><button type="button" class="btn16 color_clr2">적용</button>
            </div>
            <!-- //header -->

            <div id="content" class="etc">

                <div class="cell">
                    <div class="inner">  
                        <!-- list -->
                        <ul class="singleList type1">                         
                            <li class="mb20">
                                <p class="label-tit14 bbB89 pb10 mb10">
                                    다운로드한 콘텐츠만 보기
                                    <slp-switch class="fr" value="true"/>
                                </p>
                            </li>
                            
                            <li class="mb20">
                                <p class="label-tit14 mb10">상태별</p>
                                <ul>
                                    <li class="mb15">
                                        <slp-radio name="difficulty" innerCircle="true">학습중</slp-radio>
                                    </li>
                                    <li class="mb15">
                                        <slp-radio name="difficulty" innerCircle="true">학습완료</slp-radio>
                                    </li>
                                    <li class="mb15">
                                        <slp-radio name="difficulty" innerCircle="true">미진행</slp-radio>
                                    </li>                                    
                                </ul>
                            </li>
                            <li class="mb20">
                                <p class="label-tit14 mb10">필수여부</p>
                                <ul>
                                    <li class="mb15">
                                        <slp-radio name="difficulty" innerCircle="true">필수항목</slp-radio>
                                    </li>
                                    <li class="mb15">
                                        <slp-radio name="difficulty" innerCircle="true">비필수항목</slp-radio>
                                    </li>                                  
                                </ul>
                            </li> 
                            <li class="mb20">
                                <p class="label-tit14 mb10">커스텀</p>
                                <ul>
                                    <li class="mb15">
                                        <slp-radio name="difficulty" innerCircle="true">필수항목</slp-radio>
                                    </li>
                                    <li class="mb15">
                                        <slp-radio name="difficulty" innerCircle="true">비필수항목</slp-radio>
                                    </li>                                  
                                </ul>
                            </li>                                                              
                        </ul>             
                        <!-- //list -->        
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
  name: 'Atorm_itemfactory_old_filter',
  /* vue lifecycle */
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
