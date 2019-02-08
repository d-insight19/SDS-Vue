<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass basicinfo pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
              
                <h1 class="h-tit">수강신청</h1>

                <div class="stepper">
                    <div class="clearfix">
                        <h2 class="tit">약관 동의</h2>
                        <div class="num">
                            <strong class="color_clr2">2</strong>/<span>4</span>
                        </div>
                    </div>
                        <div class="progBox" style="height:4px !important;">
                        <div class="bar clr2" style="width:50%; height:4px;"></div>
                    </div>
                    <p class="txt-desc" style="display:none1;">약관에 동의해주세요.</p>
                </div>
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>               
                <p class="label-tit-18 mb15">약관동의</p>
                    <!-- 동의 리스트 -->
                    <div class="agreeAll">
                        <slp-checkbox class="label-tit-18 mb0" @click="checkAll()" v-model='isCheckAll'>전체동의</slp-checkbox>
                    </div>
                    <ul class="agreeList mt14">
                        <li>
                            <slp-checkbox   v-bind:value='lang' v-model='languages' @change='updateCheckall()'>개인정보 제 3자 제공 동의 - 배송업체...<span class="ico gray_next"></span></slp-checkbox>
                        </li>
                        <li>
                            <slp-checkbox  v-bind:value='lang' v-model='languages' @change='updateCheckall()'>고용보험 환급불가 동의 (필수)<span class="ico gray_next"></span></slp-checkbox>
                        </li>
                        <li>
                            <slp-checkbox  v-bind:value='lang' v-model='languages' @change='updateCheckall()'>개인정보 처리 위탁 동의 (필수)<span class="ico gray_next"></span></slp-checkbox>
                        </li>
                    </ul>
                    <!-- //동의 리스트 -->

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn zin0">
            <ul>
                <li><button type="button" class="btn md">이전</button></li>
                <li><button type="button" class="btn md clr1">다음</button></li>
            </ul>
        </div>
        <!-- //floating button -->
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'regiclass_register_option',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      isCheckAll: false,
      languages: [],
      langsdata: ['one', 'two', 'three']
    }
  },
  /* vue function */
  methods: {
    checkAll () {
      this.isCheckAll = !this.isCheckAll
      this.languages = []
      if (this.isCheckAll) {
        for (var key in this.langsdata) {
          this.languages.push(this.langsdata[key])
        }
      }
    }
    // updateCheckall: function(){
    //   if(this.languages.length == this.langsdata.length){
    //      this.isCheckAll = true;
    //   }else{
    //      this.isCheckAll = false;
    //   }
    // }
  }
}
</script>
