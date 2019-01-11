<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
              
                <h1 class="h-tit">수강신청</h1>

                <div class="stepper">
                    <div class="clearfix">
                        <h2 class="tit">수강형태 선택</h2>
                        <div class="num">
                            <strong class="color_clr2">1</strong>/<span>4</span>
                        </div>
                    </div>
                        <div class="progBox" style="height:4px !important;">
                        <div class="bar clr2" style="width:50%; height:4px;"></div>
                    </div>
                    <p class="txt-desc" style="display:none1;">수강형태를 선택하세요.</p>
                </div>
                <p class="hr" style="margin-top:28px; margin-bottom:22px;"></p>
                <p class="label-tit-18">신청강좌</p>
                <ul class="thumList">
                    <li class="bottom-bd-x pdb0">
                        <div class="in">
                            <a href="#" class="thum">                     
                                <div class="thumbnail">
                                    <img class="thumnail" src="@/assets/img/itemfactory_url_img.jpg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <a href="#" class="date">18.12.01 ~ 19.05.31</a>
                            <ul class="info">
                                <li class="fwb info-num">2,235,000원 </li>
                                <li class="info-txt">(VAT포함)</li>
                            </ul>
                        </div>
                    </li>
                </ul>               
                <p class="hr" style="margin-top:26px; margin-bottom:22px;"></p>
                <p class="label-tit-18 mb15">약관동의</p>
                    <!-- 동의 리스트 -->
                    <div class="agreeAll">
                        <slp-checkbox class="label-tit-18 mb0" @click="checkAll()" v-model='isCheckAll'>전체동의</slp-checkbox>
                    </div>
                    <ul class="agreeList mt14">
                        <li>
                            <slp-checkbox   v-bind:value='lang' v-model='languages' @change='updateCheckall()'>개인정보 수집 이용 동의<span class="ico gray_next"></span></slp-checkbox>
                        </li>
                        <li>
                            <slp-checkbox  v-bind:value='lang' v-model='languages' @change='updateCheckall()'>고유식별 정보 수집 동의<span class="ico gray_next"></span></slp-checkbox>
                        </li>
                        <li>
                            <slp-checkbox  v-bind:value='lang' v-model='languages' @change='updateCheckall()'>개인정보 취급 위탁동의<span class="ico gray_next"></span></slp-checkbox>
                        </li>
                    </ul>
                    <!-- //동의 리스트 -->

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md">수강신청 취소</button></li>
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
      languages: undefined,
      lang: [],
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
