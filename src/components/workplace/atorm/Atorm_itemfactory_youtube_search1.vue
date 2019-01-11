<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery atorm atorm_itemfactory">
            
            <!-- header -->
            <div id="header" class="fixed noline">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">유튜브 검색</p><button type="button" class="btn16 color_clr2">저장</button>
            </div>
            <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">

                    <div class="intSchBox mt0">
                    <!-- X 아이콘이 필요한 input -->
                    <div class="search-wrapper">
                        <input type="text"  pattern="^\s+" class="input" placeholder="검색어를 입력해 주세요" />
                        <button class="close-icon" type="button"></button>
                    </div>
                    <a href="#" class="btn"><span class="ico"></span></a>
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
  name: 'Drawer_myinfo',
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
