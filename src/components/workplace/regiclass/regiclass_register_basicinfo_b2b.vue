<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass basicinfo pd70">

        <div id="content" class="normal">
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
                <!-- //list -->

                <div class="loginChk mt12">
                    <slp-checkbox ><span class="label-tit-14 mono_65 mb0">입력하신 정보로 개인정보를 수정합니다.</span></slp-checkbox>
                </div>
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
  name: 'regiclass_register_option_02',
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
