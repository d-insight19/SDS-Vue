<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">기본정보관리 수정</p><button type="button" class="btn14 color_clr2 fr">수정</button>
            </div>
            <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">
                       

                       
                    </div>
                </div>
            </div>           
            
        </div>
        <!-- //container -->   

     <!-- layer wrap -->
    <div class="layerWrap">
        <div class="ly-in">            
            <div class="ly-body">                
                <div class="ly-info">
                    <p>배송지를 삭제하시겠습니까?</p>
                </div>
            </div>
        
            <div class="ly-btn">                
                <button type="button" class="btn">취소</button>
                <button type="button" class="btn color_clr2">확인</button>
            </div>

        </div>
    </div>
    <!-- //layer wrap -->

    <div id="dim"></div>

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
