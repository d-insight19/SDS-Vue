<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass register pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
              
                <h1 class="h-tit">수강신청</h1>

                <div class="stepper">
                    <div class="clearfix">
                        <h2 class="tit">수강정보 입력</h2>
                        <div class="num">
                            <strong class="color_clr2">2</strong>/<span>2</span>
                        </div>
                    </div>
                        <div class="progBox" style="height:4px !important;">
                        <div class="bar clr2" style="width:100%; height:4px;"></div>
                    </div>
                    <p class="txt-desc" style="display:none1;">수강신청을 위한 정보를 입력해주세요.</p>
                </div>
                <p class="hr" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1 dif">
                    <li class="join-id bottom-bd-d9">
                        <p class="mb8">
                            <strong class="label-name fwb">성명</strong>
                            <span class="label-name mono_80 ml12">정해민</span>
                        </p>
                        <p class="mb10">
                            <strong class="label-name fwb">소속</strong>
                            <span class="label-name mono_80 ml12">멀티캠퍼스</span>
                        </p>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">주민등록번호</strong>
                        <div>
                            <slp-text-field class="w48p dib" value="1234567"></slp-text-field><span class="connec" style="display:inline-block;width: 4%; text-align: center;">-</span><slp-text-field class="w48p dib" value="1234567" type="password" ></slp-text-field>
                        </div>
                    </li>                 
                    <li>
                        <strong class="label-tit">전화번호</strong>
                        <slp-text-field value="0212340000" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">휴대전화</strong>
                        <slp-text-field value="01093847345" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">이메일</strong>
                        <slp-text-field value="multicampus@gmail.com" ></slp-text-field>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">최종학력</strong>
                        <slp-select required placeholder="선택" width="100%">
                            <option>선택</option>
                        </slp-select>
                        <p class="label-tit-12 mono_50">최종학력만 선택 후 아래 정보를 입력하세요.</p>
                    </li>  
                    <li>
                        <strong class="label-tit require_mark">학교명</strong>
                        <slp-text-field placeholder="학교명을 입력하세요." ></slp-text-field>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">소재지</strong>
                        <slp-text-field placeholder="소재지를 입력하세요." ></slp-text-field>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">학년</strong>
                        <slp-text-field placeholder="학년을 입력하세요." ></slp-text-field>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">학과</strong>
                        <slp-text-field placeholder="학과을 입력하세요." ></slp-text-field>
                    </li>
                    <li>
                        <p class="label-tit require_mark mb0">졸업여부</p>
                        <p class="line01" style="margin: 10px 0 12px;"></p>
                        <label class="labelRdo" style="margin-right:62px">
                            <input type="radio" class="rdo" name="test-rdo" >
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">예</span>                    
                        </label>
                        <label class="labelRdo">
                            <input type="radio" class="rdo" name="test-rdo" checked>
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">아니오</span>                    
                        </label>      
                    </li>                      
                    <li>
                        <div>
                            <strong class="label-tit require_mark">사회적배려 대상자</strong>
                            <slp-checkbox class="fr" style="width:auto;"><span class="label-tit-14 mono_65 mb0">해당</span></slp-checkbox>
                        </div>
                        <slp-text-field placeholder="사유를 입력하세요" ></slp-text-field>
                    </li>                    
                </ul>
                <!-- //list -->

                <div class="loginChk mt12">
                    <slp-checkbox ><span class="label-tit-14 mono_80 mb0">입력하신 정보로 개인정보를 수정합니다.</span></slp-checkbox>
                </div>

                <p class="hr" style="margin-top:26px; margin-bottom:22px;"></p>
                <p class="label-tit-18 fwb600">컴퓨터 사용능력</p>
                <ul class="ulList">
                    <li>
                        <p class="label-tit  mb0">JAVA 사용</p>
                        <p class="line01" style="margin: 10px 0 14px;"></p>
                        <label class="labelRdo" style="margin-right:25px">
                            <input type="radio" class="rdo" name="test-rdo2" >
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">상</span>                    
                        </label>
                        <label class="labelRdo" style="margin-right:25px">
                            <input type="radio" class="rdo" name="test-rdo2" checked>
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">중</span>                    
                        </label>      
                        <label class="labelRdo">
                            <input type="radio" class="rdo" name="test-rdo2">
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">하</span>                    
                        </label>      
                    </li>
                    <li class="mt36">
                        <p class="label-tit  mb0">C 사용</p>
                        <p class="line01" style="margin: 10px 0 14px;"></p>
                        <label class="labelRdo" style="margin-right:25px">
                            <input type="radio" class="rdo" name="test-rdo3" >
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">상</span>                    
                        </label>
                        <label class="labelRdo" style="margin-right:25px">
                            <input type="radio" class="rdo" name="test-rdo3" checked>
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">중</span>                    
                        </label>      
                        <label class="labelRdo">
                            <input type="radio" class="rdo" name="test-rdo3">
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">하</span>                    
                        </label>      
                    </li>
                    <li class="mt36">
                        <p class="label-tit  mb0">SQL 사용</p>
                        <p class="line01" style="margin: 10px 0 14px;"></p>
                        <label class="labelRdo" style="margin-right:25px">
                            <input type="radio" class="rdo" name="test-rdo4" >
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">상</span>                    
                        </label>
                        <label class="labelRdo" style="margin-right:25px">
                            <input type="radio" class="rdo" name="test-rdo4" checked>
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">중</span>                    
                        </label>      
                        <label class="labelRdo">
                            <input type="radio" class="rdo" name="test-rdo4">
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">하</span>                    
                        </label>      
                    </li>
                    <li class="mt36">
                        <p class="label-tit  mb0">C# 사용</p>
                        <p class="line01" style="margin: 10px 0 14px;"></p>
                        <label class="labelRdo" style="margin-right:25px">
                            <input type="radio" class="rdo" name="test-rdo5" >
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">상</span>                    
                        </label>
                        <label class="labelRdo" style="margin-right:25px">
                            <input type="radio" class="rdo" name="test-rdo5" checked>
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">중</span>                    
                        </label>      
                        <label class="labelRdo">
                            <input type="radio" class="rdo" name="test-rdo5">
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">하</span>                    
                        </label>      
                    </li>
                    <li class="mt20">
                        <strong class="label-tit">기타프로그램</strong>
                        <slp-text-field placeholder="기타프로그램을 입력하세요." ></slp-text-field>
                    </li>  
                </ul>

                <p class="hr" style="margin-top:26px; margin-bottom:22px;"></p>
                <p class="label-tit-18 fwb600">추천인 및 신청경로</p>
                <ul  class="ulList type1 dif">
                    <li>
                        <strong class="label-tit require_mark">지원동기</strong>
                        <input  type="text" @input.prevent="e => keylength = e.target.value.length"  class="input" placeholder="지원동기를 입력하세요" >
                        <div class="inputbottom inp-num">
                            <span class="strlenth" ><span v-text="keylength"></span>/300</span>
                        </div>  
                    </li>
                    <li>
                        <strong class="label-tit require_mark">교육을 최초로 알게 된 경로</strong>
                        <input maxlength="30" type="text" @input.prevent="e => keylength2 = e.target.value.length"  class="input" placeholder="교육을 최초로 알게 된 경로를 입력하세요" >
                        <div class="inputbottom inp-num">
                            <span class="strlenth" ><span v-text="keylength2"></span>/30</span>
                        </div>  
                    </li>
                    <li>
                        <strong class="label-tit require_mark">추천인</strong>
                        <a href="#" class="btn sm w100p add"  @click="addList1()" ><span class="ico"></span>추천인 찾기</a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
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
  name: 'regiclass_register_option_02',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      keylength: 0,
      keylength2: 0
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
