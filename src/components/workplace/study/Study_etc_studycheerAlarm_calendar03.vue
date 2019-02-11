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

        <!-- layer wrap -->
        <slp-popup confirmInput="확인">
            <div class="ly-body">
                <p>학습 독려 설정이 완료되었습니다.</p>
            </div>
        </slp-popup>
        <!-- //layer wrap -->
 

    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Study_02_discuss_edit',
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
    addList1 () {
      this.list1.push('tmp 어학등급 아이템')
    },
    deleteFileList (index) {
      console.log(index, '제거')
      this.list1.splice(index, 1)
    }
  }
}
</script>
