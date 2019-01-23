<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery findcenter pd70">
            <!-- header -->
            <div id="header">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text font_18"></p>
            </div>
            <!-- //header -->
            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">

                        <h1 class="h-tit1">연수원(회사) 선택하기</h1>

                        <!-- list -->
                        <ul class="ulList type3">
                            <li>
                                <a href="#">삼성SDS<span class="ico gray_next"></span></a>
                            </li>
                            <li>
                                <a href="#">삼성생명<span class="ico gray_next"></span></a>
                            </li>
                            <li @click="toggleBtn">
                                <a href="#">삼성증권<span class="ico gray_next" :class="{ gray_down : toggleFlag }"></span></a>
                                <dl class="subList" v-show="toggleFlag">
                                    <dt><a href="#">회사명1<span class="ico gray_next"></span></a></dt>
                                    <dt><a href="#">회사명2<span class="ico gray_next"></span></a></dt>
                                </dl>
                            </li>
                            <li>
                                <a href="#">삼성그룹<span class="ico gray_next"></span></a>
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
  name: 'Login_findcenter_select_02',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      toggleFlag: true
    }
  },
  /* vue function */
  methods: {
    toggleBtn () {
      this.toggleFlag = !this.toggleFlag
    }
  }
}
</script>
