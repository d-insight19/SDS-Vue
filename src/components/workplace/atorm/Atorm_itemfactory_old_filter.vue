<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery atorm">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">기존 아이템 필터</p><button type="button" class="btn16 color_clr2">적용</button>
            </div>
            <!-- //header -->

            <div id="content" class="normal">

                <div class="cell">
                    <div class="inner">  
                        <!-- list -->
                        <ul class="singleList type1">
                            <li class="mb20">
                                <p class="label-tit14 bbB89 pb10 mb10">
                                내 아이템만 보기
                                    <slp-switch class="fr" value="true"/>
                                </p>
                            </li>
                            <li class="mb20">
                                <p class="label-tit14 mb10">정렬 기준</p>
                                <ul>
                                    <li class="mb15">
                                        <slp-radio name="difficulty" innerCircle="true">최신순</slp-radio>
                                    </li>
                                    <li>
                                        <slp-radio name="difficulty" innerCircle="true">가나다 순</slp-radio>
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
