<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery">
        <!-- header 1단형 -->
        <div id="header" class="mainType" style="display:none">
            <button type="button" class="btn allMenu"><span class="ico">전체메뉴</span><span class="ico new"></span></button>
            <ul class="gnbMenu">
                <!-- selected class:on -->
                <li class="menu menu_home on">
                    <a href="#"><span class="ico">추천</span></a>
                </li>
                <li class="menu menu_exploration">
                    <a href="#"><span class="ico">카테고리</span></a>
                </li>
                <li class="menu menu_subscription">
                    <a href="#"><span class="ico">나의공간</span></a>
                </li>
            </ul>
            <button type="button" class="btn btnSch"><span class="ico">검색</span></button>
        </div>
        <!-- //header -->

        <!-- header 2단형 -->
        <div id="header" class="mainType2" style="display:none1">
            <div class="header_inner line1">
                <button type="button" class="btn allMenu"><span class="ico">전체메뉴</span><span class="ico new"></span></button>  
                <span>ATORM</span>          
                <button type="button" class="btn btnHome"><span class="ico">홈</span></button>
            </div>            
            <div class="header_inner line2">
                <ul class="gnbMenu">
                    <!-- selected class:on -->
                    <li class="menu menu_home on">
                        <a href="#"><span class="ico">추천</span></a>
                    </li>
                    <li class="menu menu_exploration">
                        <a href="#"><span class="ico">카테고리</span></a>
                    </li>
                    <li class="menu menu_subscription">
                        <a href="#"><span class="ico">나의공간</span></a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- //header -->
        
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <!-- list 임시 -->
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

      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'components_mainheader',
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
