<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm_confirmlist">

        <!-- header  -->
        <div id="header" class="fixed">          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_18">승인요청</p>
            
            <p class="end color_clr2" @click="toggleCheckbox()"  v-show="!checkboxFlag">선택</p>
            <p class="end"  v-show="checkboxFlag">
                <span class="end_btn1" @click="toggleCheckbox()" v-show="checkboxFlag">취소</span>
                <span class="end_btn2 color_clr2">3개 승인</span>
            </p>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <ul class="multiList" :class="{'checkbox': checkboxFlag}">
                    <li v-for="(item, index) in 6" :key="index" >
                        <label :for="index" class="labelChk">
                            <input :id="index" type="checkbox" name="test" class="chk">
                            <span class="ico"></span>
                            <div class="in">
                                <div class="multiline line2">처음부터 배우는 데이터 분석 처음부터 배우는 데이터 분석 처음부터 배우는 데이터 분석</div>
                                <ul class="info">
                                    <li class="fwb color_clr3">이러닝</li>
                                    <li>K12113</li>
                                    <li>정해민{{index}}</li>
                                    <li>2018.10.10</li>
                                </ul>
                            </div>
                            <span class="ico next_16"></span>
                        </label>
                    </li>
                </ul>
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
  name: 'Atorm_confirm_list',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      checkboxFlag: false
    }
  },
  /* vue function */
  methods: {
    toggleCheckbox () {
      this.checkboxFlag = !this.checkboxFlag
    }
  }
}
</script>
