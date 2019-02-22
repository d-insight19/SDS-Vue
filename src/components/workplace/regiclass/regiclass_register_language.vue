<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass basicinfo register pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner" style="padding-top:40px;">
              
                <h1 class="h-tit1">수강신청</h1>

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
                    <p class="txt-desc" style="display:none1;">기존 수강자의 경우, 이전 과정과 동일한 과정이 신청되지 않도록 유의해 주십시오.</p>
                </div>
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1 ">
                    <li>
                        <strong class="label-tit require_mark">수업 희망시간</strong>
                        <slp-select class="w100p" required placeholder="선택" >
                            <option>선택</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </slp-select>
                        <p class="label-tit-13 mono_50 mb0">신청가능인원 : 00명</p>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">수업받을 휴대폰(1순위)</strong>
                        <slp-text-field placeholder="휴대 전화번호 입력" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">수업받을 휴대폰(2순위)</strong>
                        <div class="rdoSelBox mb10">
                            <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo" ><span class="ico"></span><span class="label">회사</span></label>
                            <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo" checked><span class="ico"></span><span class="label">자택</span></label>
                        </div> 
                        <slp-text-field placeholder="전화번호 입력" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">이메일</strong>
                        <slp-text-field placeholder="이메일 입력" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">영문이름</strong>
                        <slp-text-field placeholder="영문이름 입력" ></slp-text-field>
                    </li>            
                </ul>
                <!-- //list -->
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>
                
                <ul class="ulList type1" >
                    <li>
                        <strong class="label-tit require_mark">말하기 속도</strong>
                        <table class="tb-wrap" >
                            <tr>
                                <td>
                                <label class="labelRdo l-txt">
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">아주느리게</span>                    
                                </label>
                                </td>
                                <td>
                                <label class="labelRdo r-txt">
                                    <input type="radio" class="rdo" name="test-rdo" checked>
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">느리게</span>                    
                                </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label class="labelRdo l-txt">
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">보통</span>                    
                                </label>
                                </td>
                                <td>
                                <label class="labelRdo r-txt">
                                    <input type="radio" class="rdo" name="test-rdo" >
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">빠르게</span>                    
                                </label>
                                </td>
                            </tr>
                        </table>
                        <strong class="label-tit require_mark  mt40">수업방식</strong>
                        <table class="tb-wrap" >
                            <tr>
                                <td>
                                <label class="labelRdo l-txt">
                                    <input type="radio" class="rdo" name="test-rdo2">
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">교재중심</span>                    
                                </label>
                                </td>
                                <td>
                                <label class="labelRdo r-txt">
                                    <input type="radio" class="rdo" name="test-rdo2" checked>
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">교재 + 프리토킹</span>                    
                                </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label class="labelRdo l-txt">
                                    <input type="radio" class="rdo" name="test-rdo2">
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">프리토킹 중심</span>                    
                                </label>
                                </td>
                            </tr>
                        </table>
                        <strong class="label-tit require_mark mt40">교정방식</strong>
                        <table class="tb-wrap" >
                            <tr>
                                <td>
                                <label class="labelRdo l-txt">
                                    <input type="radio" class="rdo" name="test-rdo3">
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">아주느리게</span>                    
                                </label>
                                </td>
                                <td>
                                <label class="labelRdo r-txt">
                                    <input type="radio" class="rdo" name="test-rdo3" checked>
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">느리게</span>                    
                                </label>
                                </td>
                            </tr>
                        </table>  
                    </li>
                </ul>
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1">                    
                    <li>
                        <strong class="label-tit require_mark">기타 요청사항</strong>
                        <input @input.prevent="e => keylength = e.target.value.length" type="text" class="input01" placeholder="요청사항 입력">
                        <span class="inputbottom inp-num">
                            <span class="strlenth" ><span v-text="keylength"></span>/300</span>
                        </span>
                    </li>
                    <li class="mt6">
                        <p class="label-tit-13 mb0 mono_50">・연락처는 꼭 본인 번호를 등록 바랍니다.</p>
                        <p class="label-tit-13 mb0 mono_50">・해외수업의 경우 070인터넷 전화로만 수업이 가능합니다.</p>
                        <p class="label-tit-13 mb0 mono_50">・신청 이후 연락처 변경 시 1544 - 9002로 반드시 문의 주십시오.</p>
                        <p class="label-tit-13 mb0 mono_50">・휴대폰 연결이 안 될 경우 유선전화로 학습이 진행됩니다. </p>
                    </li>
                </ul>
            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn zin1">
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
  name: 'regiclass_register_language',
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
