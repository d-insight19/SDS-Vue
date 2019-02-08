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
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>
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
                    <p class="hr_2" style="margin-top:26px; margin-bottom:22px;"></p>
                    <p class="label-tit-18 dpb">할인정보</p>
                    <strong class="label-tit" style="margin-bottom:8px; display:inline-block;">쿠폰선택</strong>
                    <slp-select class="w100p" required placeholder="선택 안함" style="color:rgba(0,0,0,0.8)">
                        <option>1</option>
                    </slp-select>
                </div>
                <!-- //useCupon -->
                <p class="hr_2" style="margin-top:26px; margin-bottom:22px;"></p>
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
                    <li class="color_clr1" style="border-top:1px solid rgba(0,0,0,0.65); padding-top:11px;">
                        <span class="label-tit-15 type1 fwb"> 결제 금액</span>
                        <span class="fr fwb600 label-tit-18">2,135,000 원</span>
                    </li>
                </ul>
                <p class="hr_2" style="margin-top:26px; margin-bottom:22px;"></p>
                <p class="label-tit-18 mb10">결제수단</p>
                <ul class="ul-block com-rdo">
                    <li>
                        <label class="labelRdo" >
                            <input type="radio" class="rdo" name="test-rdo">
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label" >신용카드 결제</span>                    
                        </label>
                    </li>
                    <li>
                        <label class="labelRdo" >
                            <input type="radio" class="rdo" name="test-rdo" >
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label" >가상계좌 결제</span>                    
                        </label>
                    </li>
                    <li>
                        <label class="labelRdo" >
                            <input type="radio" class="rdo" name="test-rdo">
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
                <p class="label-tit-13 mt20 mono_50">고용보험 과정은 법인카드로만 결제하시기 바랍니다. 개인카드로 결제 시 고용보험 환급을 받을 수 없습니다. </p> 
            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn zin0">
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
  name: 'regiclass_register_pay_creditcard',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      useCupon: false
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
