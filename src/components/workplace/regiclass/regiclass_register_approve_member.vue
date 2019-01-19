<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass basicinfo register">
        <div id="header" class="fixed">
            <button type="button" class="btn only close"><span class="ico"></span></button>
            <p class="header_text font_18">회원 검색</p>
          </div>
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <strong class="label-tit-14 fwb" style=" display:inline-block; margin-bottom:8px;">성명 검색</strong>
                <div class="intSchBox">
                    <div class="search-wrapper">
                        <input type="text" ref="input01" pattern="^\s+" class="input" placeholder="성명 입력" />
                        <button class="close-icon" type="button" @click="delTxt"></button>
                        <a href="#" class="btn"><span class="ico"></span></a>
                    </div>
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
/* eslint-disable */

export default {
  name: 'regiclass_register_contorl',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 2,      
    }
  },
  /* vue function */
  methods: {
      delTxt () {
        this.$refs.input01.value = ''
      }
  }
}
</script>
