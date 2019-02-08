<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass basicinfo register">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
              
                <h1 class="h-tit">수강신청</h1>

                <div class="stepper">
                    <div class="clearfix">
                        <h2 class="tit">수강정보 입력</h2>
                        <div class="num">
                            <strong class="color_clr2">3</strong>/<span>4</span>
                        </div>
                    </div>
                        <div class="progBox" style="height:4px !important;">
                        <div class="bar clr2" style="width:50%; height:4px;"></div>
                    </div>
                    <p class="txt-desc" style="display:none1;">직무확인정보를 입력해주세요.</p>
                </div>
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1 ">
                    <li class="join-id mt0 pdb0">
                        <strong class="label-name fwb">회사명</strong>
                        <span class="label-name mono_80 ml12">멀티캠퍼스</span>
                    </li>                
                    <li>
                        <strong class="label-tit require_mark">부서명</strong>
                        <slp-text-field value="시스템개발팀" class="mono_65" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">담당업무</strong>
                        <slp-text-field  value="소프트웨어 엔지니어" ></slp-text-field>
                    </li>                 
                    <li class="bottom-bd-d9 pdb20">
                        <strong class="label-tit require_mark">학습사유</strong>
                        <input @input.prevent="e => keylength = e.target.value.length" type="text" class="input01" placeholder="학습사유 입력">
                        <span class="inputbottom inp-num">
                            <span class="strlenth" ><span v-text="keylength"></span>/300</span>
                        </span>                      
                    </li>                    
                </ul>
                <!-- //list -->
                <div class="mt12 mono_50 label-tit-13">
                    해당 과정은 본인의 직무역량 개발을 위해 학습하는 과정입니다.상기 내용이 사실과 다를 경우에는 훈련지원 대상에서 제외됨을 확인합니다.
                </div>
                <div class="loginChk mt12">
                    <slp-checkbox ><span class="label-tit-14 mb0">상기 내용을 확인하였습니다.</span></slp-checkbox>
                </div>
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
/* eslint-disable */
export default {
  name: 'regiclass_register_option_02',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
        keylength: 0
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
