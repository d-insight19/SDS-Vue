<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery findcenter pd70">
            <!-- header -->
            <div id="header">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text font_19"></p>
            </div>
            <!-- //header -->
            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">

                        <h1 class="h-tit1">연수원 선택하기</h1>

                        <!-- list -->
                        <ul class="ulList type3">
                            <li>
                                <a href="#">삼성SDS<span class="ico gray_next"></span></a>
                            </li>
                            <li>
                                <a href="#">삼성생명<span class="ico gray_next"></span></a>
                            </li>
                            <li>
                                <a href="#">삼성증권<span class="ico gray_next"></span></a>
                            </li>
                            <li>
                                <a href="#">삼성전자<span class="ico gray_next"></span></a>
                            </li>
                        </ul>
                        <!-- //list -->
                    </div>
                </div>
            </div>

            <!-- fixed Bottom Btn -->    
            <div class="fixBtmBtn">
                <ul>
                    <li>                            
                        <button type="button" disabled class="btn ld">다음</button>
                        <!-- 하단에 활성화 된 버튼은 임시로 display:none -->
                        <button type="button" class="btn ld clr1" style="display:none;">다음</button>
                    </li>
                </ul>                    
            </div>
            <!-- //fixed Bottom Btn -->    
        </div>
        <!-- //container -->   

       
            
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Login_findcenter_select',
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
