<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass basicinfo pd70">

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">
              
                <h1 class="h-tit" >수강신청</h1>

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
                    <p class="txt-desc" style="display:none1;">수강신청을 위한 정보를 입력해주세요.</p>
                </div>
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1 dif">
                    <li class="join-id mt0 pdb0">
                        <strong class="label-name fwb">성명</strong>
                        <span class="label-name mono_80 ml12">정해민</span>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">회사명</strong>
                        <div class="intSchBox">
                            <div class="search-wrapper">
                                <input type="text"  pattern="^\s+" class="input" placeholder="멀티캠퍼스" />
                            </div>
                            <a href="#" class="btn"><span class="ico"></span></a>
                        </div>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">부서명</strong>
                        <slp-text-field placeholder="시스템개발팀" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">전화번호</strong>
                        <slp-text-field placeholder="0212340000" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">휴대전화</strong>
                        <slp-text-field placeholder="01093847345" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">이메일</strong>
                        <slp-text-field placeholder="multicampus@gmail.com" ></slp-text-field>
                    </li>                 
                </ul>
                <div class="loginChk mt20">
                    <slp-checkbox ><span class="label-tit-14 mono_65 mb0">입력하신 정보로 개인정보를 수정합니다.</span></slp-checkbox>
                </div>
                <!-- //list -->
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1">
                    <li class="join-id mt0">
                        <strong class="label-tit-16 fwb">소속회사 담당자 정보</strong>
                        <slp-checkbox class="w-auto fr" ><span class="label-tit-14 mono_65 mb0">신청자와 동일</span></slp-checkbox>
                    </li>
                    <li>
                        <p class="label-tit-15">한국 가스 안전공사 사이버 연수원</p>
                        <p class="label-tit-14 mono_50 mb0" style="display:block">사업자번호 : 12345678</p>
                    </li>               
                    <li class="mt16">
                        <strong class="label-tit require_mark">교육담당자 성명</strong>
                        <slp-text-field placeholder="성명 입력" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">교육담당자 이메일</strong>
                        <slp-text-field placeholder="이메일 입력" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">교육담당자 전화번호</strong>
                        <slp-text-field placeholder="전화번호 입력" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">교육담당자 휴대전화</strong>
                        <slp-text-field placeholder="‘-‘없이 숫자만 입력" ></slp-text-field>
                    </li>                 
                </ul>
                <!-- //list -->
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1">                    
                    <li>
                        <p class="label-tit-16 fwb">고용보험 환급 정보</p>
                        <p class="txt-desc mt0">고용보험 환급 금액은 법인명의의 계좌에서만 확인 가능합니다.</p>
                        <strong class="label-tit-14 mt16 fwb" >환급입금 계좌</strong>
                        <div class="rdoSelBox">
                            <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo" @click="active_el(2)" ><span class="ico"></span><span class="label">기존계좌 선택</span></label>
                            <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo" @click="active_el(1)" checked><span class="ico"></span><span class="label">신규등록</span></label>
                        </div>                      
                    </li>
                    <li v-if="active">
                        <strong class="label-tit require_mark">예금주 성명</strong>
                        <slp-text-field placeholder="성명 입력" ></slp-text-field>
                    </li>                 
                    <li v-if="active">
                        <strong class="label-tit require_mark" >은행명</strong>
                        <div @click="bottomsheetToggle">
                            <slp-select class="w100p" required v-model="selected" >
                                <option v-for="item in selects" :key="item.id" @change="selectVal" style="display:none !important;">{{ item.value }}</option>
                            </slp-select>
                        </div>
                    </li>                 
                    <li v-if="active">
                        <strong class="label-tit require_mark">계좌번호</strong>
                        <slp-text-field placeholder="869190382010" ></slp-text-field>
                    </li>
                    <li v-if="active" class="mt16">
                        <p class="label-tit-14 mb8" >통장사본(법인)</p>
                        <div v-show="list1.length" v-for="(item, index) in list1" :key="index">                            
                            <div class="img-box">
                                <img src="" alt="">
                                <span class="ico close_20"  @click="deleteFileList(index)"></span>
                            </div>
                        </div>
                        <a href="#" class="btn sm w100p add"  @click="addList1()" ><span class="ico"></span>사진추가</a>
                        <div>
                        <slp-checkbox  style="width:80%"><span class="label-tit-14 mono_80 mb0">개인정보 수집/활용에 동의합니다.</span></slp-checkbox><div style="width:20%; display:inline-block" class="tar"><span class="label-tit-14 mt20 color_clr2" style="vertical-align: -12%; ">약관보기</span></div>
                        </div>
                    </li>
                    <li v-else="" class="mt8">
                        <div  class="loginChk">
                            <slp-select class="w100p" required placeholder="선택" >
                                <option>선택</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </slp-select>
                        </div>    
                    </li>      
                </ul>

                
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

       <!-- Bottom Sheet -->
         <div id="bottomsheet_wrap" v-show="bottomsheetFlag">
            <div id="sheetDim"  @click="bottomsheetToggle"></div>
            <div id="bottomsheet">
            <ul >
               <li  v-for="item in selects" :key="item"><span @click="selectVal(event)">{{item.value}}</span><span class="checkIcon"></span></li>
            </ul>
            <div class="bottomsheetBtn" @click="bottomsheetToggle">
               <span class="ico close_24_black"></span>
               닫기
            </div>
            </div>
         </div>
         <!-- // Bottom Sheet -->
    </div>
    <!-- //wrap -->

</template>

<script>
/* eslint-disable */
export default {
  name: 'regiclass_register_basicinfo_add_bot',
  
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      active: true,
      list1: [],
      bottomsheetFlag: false,
      selected: 'IBK 기업은행',
      selects: [
          {value:'IBK 기업은행'},
          {value:'KEB 하나은행'},
          {value:'국민은행'},
          {value:'신한은행'},
          {value:'우리은행'},
          {value:'카카오뱅크'}
      ]
    }
  },
  /* vue function */
  methods: {
    active_el (el) {
      if (el === 1) {
        this.active = true
      } else if (el === 2) {
        this.active = false
      }
    },
    addList1 () {
      this.list1.push('tmp 어학등급 아이템')
    },
    deleteFileList (index) {
      console.log(index, '제거')
      this.list1.splice(index, 1)
    },
    bottomsheetToggle () {
      this.bottomsheetFlag = !this.bottomsheetFlag
    },
    selectVal (e) {
        this.selected = e.target.value;
        console.log(e.target.value);
    }
  },
  watch: {
    selected (oldVal, newVal) {
      this.selected = newVal
    }
  }
}
</script>
