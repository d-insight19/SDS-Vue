<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- header -->
      <div id="header">
        <button type="button" class="btn only prev"><span class="ico">이전</span></button>
      </div>
      <!-- //header -->

      <!-- container -->
      <div id="container">
        <div class="joinTypeBox">           
          <div class="">
            <button type="button" title="title" class="btn md">버튼( Default )</button>
          </div>
          <br/>
          <div class="">
            <button type="button" class="btn md clr1">버튼( clr1 )</button>
          </div>
          <br/>
          <div class="">
            <button type="button" class="btn md clr2">버튼( clr2 )</button>
          </div>
          <br/>
            <div class="">
              <button type="button" class="btn md clr2"><span class="ico point"></span>버튼( icon )</button>
            </div>
          <br/>       

          <div class="">
            <button type="button" title="title" class="btn ld">버튼( Default )</button>
          </div>
          <br/>
          <div class="">
            <button type="button" class="btn ld clr1">버튼( clr1 )</button>
          </div>
          <br/>
          <div class="">
            <button type="button" class="btn ld clr2">버튼( clr2 )</button>
          </div>
          <br/>
            <div class="">
              <button type="button" class="btn ld clr2"><span class="ico point"></span>버튼( icon )</button>
            </div>
          <br/>      
        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md ">통합가입 취소</button></li>
                <li><button type="button" class="btn md clr1">다음</button></li>
                <li><button type="button" class="btn md clr2">다음</button></li>
                <li><button type="button" disabled class="btn md clr1">다음</button></li>
            </ul>
        </div>
        <!-- //floating button -->
      </div>

    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_buttons',
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
