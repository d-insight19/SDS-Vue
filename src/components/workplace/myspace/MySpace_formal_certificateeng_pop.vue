<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace">
      </div>
      <!-- //container -->   
      
      <!-- layer wrap -->
      <slp-popup title="영문 이름 입력" cancelInput="취소" confirmInput="확인">
        <div class="ly-info mb15">
          <p class="mb8">First Name</p>
          <slp-text-field placeholder="First Name"></slp-text-field>
          <p class="mb8 mt20">Family Name</p>
          <slp-text-field placeholder="Family Name"></slp-text-field>
        </div>
      </slp-popup>
      <!-- //layer wrap -->

    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'MySpace_formal_certificateeng_pop',
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
