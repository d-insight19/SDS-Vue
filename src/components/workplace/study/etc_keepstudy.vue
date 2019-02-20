<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery">
           <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico"></span></button>
                <p class="header_text font_18">학습 독려 설정</p>
            </div>
            <!-- //header -->      

            <div id="content" class="etc">
                <div class="cell">
                  <div class="inner">
                     캘린더
                  </div>
                </div>
            </div>

        <!-- fixed Bottom Btn -->    
        <div class="fixBtmBtn">
            <ul>
                <li> 
                    <button type="button" class="btn ld clr1">완료</button>
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
/*eslint-disable */
  name: 'etc_keepstudy',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      list1: []
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
