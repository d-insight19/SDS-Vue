<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass pay pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
              
                <h1 class="h-tit">수강신청</h1>

                <div class="stepper">
                    <div class="clearfix">
                        <h2 class="tit">수강형태 선택</h2>
                        <div class="num">
                            <strong class="color_clr2">4</strong>/<span>4</span>
                        </div>
                    </div>
                        <div class="progBox" style="height:4px !important;">
                        <div class="bar clr2" style="width:100%; height:4px;"></div>
                    </div>
                    <p class="txt-desc" style="display:none1;">결제방식을 선택해주세요.</p>
                </div>
                <p class="hr" style="margin-top:28px; margin-bottom:22px;"></p>
                <p class="label-tit-18">결제강좌</p>
                <ul class="thumList">
                    <li class="bottom-bd-x pdb0">
                        <div class="in">
                            <a href="#" class="thum">                     
                                <div class="thumbnail">
                                    <img class="thumnail" src="@/assets/img/itemfactory_url_img.jpg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <a href="#" class="date" style="font-family: 'Noto Sans CJK KR'; margin-bottom:0px;">18.12.01 ~ 19.05.31</a>
                            <ul class="info">
                                <li class="fwb info-num">2,235,000원 </li>
                                <li class="info-txt">(VAT포함)</li>
                            </ul>
                        </div>
                    </li>
                </ul> 
                <!-- useCupon  -->
                <div class="cupon-wrap" v-if="useCupon">
                    <p class="hr" style="margin-top:26px; margin-bottom:22px;"></p>
                    <p class="label-tit-18 dpb">할인정보</p>
                    <strong class="label-tit" style="margin-bottom:8px; display:inline-block;">쿠폰선택</strong>
                    <slp-select class="w100p" required placeholder="[-20%] 신규가입 감사 기념 이벤트 쿠폰" style="color:rgba(0,0,0,0.8)">
                        <option>[-20%] 신규가입 감사 기념 이벤트 쿠폰</option>
                    </slp-select>
                </div>
                <!-- //useCupon -->
                <p class="hr" style="margin-top:26px; margin-bottom:22px;"></p>
                <p class="label-tit-18">결제정보</p>
                <ul>
                    <li style="margin-bottom:7px;">
                        <span class="label-tit-14 type1 mb0">수강금액</span>
                        <span class="label-tit-15 type1 fr">2,235,000 원</span>
                    </li>
                    <li style="margin-bottom:7px;">
                        <span class="ico indent n-ml18"></span>
                        <span class="label-tit-14 type1 mono_50 mb0">공급가</span>
                        <span class="label-tit-15 type1 mono_50 fr">1,110,000 원</span>
                    </li>
                    <li style="margin-bottom:11px;">
                        <span class="ico indent n-ml18"></span>
                        <span class="label-tit-14 type1 mono_50 mb0">부가세</span>
                        <span class="label-tit-15 type1 mono_50 fr">1,000,000 원</span>
                    </li>
                    <li style="margin-bottom:11px;">
                        <span class="label-tit-14 type1 mb0">할인금액</span>
                        <span class="label-tit-15 type1 fr">2,235,000 원</span>
                    </li>
                    <li class="color_clr1" style="border-top:1px solid rgba(0,0,0,0.65); padding-top:11px;">
                        <span class="label-tit-15 type1 fwb"> 결제 금액</span>
                        <span class="fr fwb600 label-tit-18">2,135,000 원</span>
                    </li>
                </ul>
                <p class="hr" style="margin-top:26px; margin-bottom:22px;"></p>
                <p class="label-tit-18 mb10">결제수단</p>
                <ul class="ul-block com-rdo">
                    <li>
                        <label class="labelRdo" @click="active_el(1)">
                            <input type="radio" class="rdo" name="test-rdo" >
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label" >신용카드 결제</span>                    
                        </label>
                    </li>
                    <li>
                        <label class="labelRdo" @click="active_el(2)">
                            <input type="radio" class="rdo" name="test-rdo" >
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label" >가상계좌 결제</span>                    
                        </label>
                    </li>
                    <li>
                        <label class="labelRdo" @click="active_el(3)">
                            <input type="radio" class="rdo" name="test-rdo" checked>
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">무통장 입금</span>                    
                        </label>
                    </li>
                    <li>
                        <label  class="labelRdo" >
                            <input type="radio" class="rdo" name="test-rdo">
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">ARS 현장결제</span>                    
                        </label>
                    </li>
                    <li>
                        <label  class="labelRdo" >
                            <input type="radio" class="rdo" name="test-rdo">
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">계좌이체</span>                    
                        </label>
                    </li>
                </ul>
                <div v-if="idx == 1">
                    <p class="label-tit-13 mt20 mono_50">고용보험 과정은 법인카드로만 결제하시기 바랍니다. 개인카드로 결제 시 고용보험 환급을 받을 수 없습니다.</p> 
                </div>
                <div v-if="idx == 2">
                    <p class="label-tit-13 mt20 mono_50 in9_13">・고용보험 과정은 법인카드로만 결제하시기 바랍니다. 개인카드로 결제 시 고용보험 환급을 받을 수 없습니다. </p> 
                    <p class="label-tit-13 mt5 mono_80 in9_13">・고용보험 환급과정일 경우에는 반드시“회사” 통장에서 “전용계좌”로 입금하여 주십시오. 만일 “개인”통장에서 입금될 경우 고용보험환급이 불가 할 수 있습니다. </p> 
                    <p class="label-tit-13 mt5 mono_50 in9_13">・교육비 납입기한(교육시작 전일)까지 해당계좌번호로 미입금시에는 신청이 자동취소되니 유의하시기 바랍니다. </p> 
                    <p class="label-tit-13 mt5 mono_80 in9_13">・입금하실 전용계좌번호는 &lt;신청완료&gt; 및 &lt;신청정보 조회&gt; 화면에서 확인하실 수 있습니다. </p> 
                    <p class="label-tit-13 mt5 mono_50 in9_13">・입금은행 : 국민,KEB하나(구 외환),기업,수협,농협,우리,제일,신한,부산,광주,시티,우체국(타행입금 시에는 수수료가 발생할 수 있습니다.) </p> 
                </div>
                <div v-if="idx == 3">
                    <p class="label-tit-13 mt20 mono_50 in9_13">・무통장 입금(전자계산서 발행)은 우리은행 계좌로만 입금 가능합니다.(타 은행 입금 시 수수료가 발생할 수 있습니다.) </p> 
                    <p class="label-tit-13 mt5 mono_80 in9_13">・예금주 : (주) 멀티캠퍼스<br/>계좌번호 : 052-249245-13-201 </p> 
                </div>
            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md">이전</button></li>
                <li><button type="button" class="btn md clr1">결제</button></li>
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
  name: 'regiclass_register_pay_cyberaccount',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      useCupon: true,
      idx: [3]
    }
  },
  /* vue function */
  methods: {
      active_el (el) {
        this.idx = []
        this.idx = el
      }
  }
}
</script>
