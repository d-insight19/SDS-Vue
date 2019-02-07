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
                        <h2 class="tit">수강정보 입력</h2>
                        <div class="num">
                            <strong class="color_clr2">3</strong>/<span>4</span>
                        </div>
                    </div>
                        <div class="progBox" style="height:4px !important;">
                        <div class="bar clr2" style="width:50%; height:4px;"></div>
                    </div>
                    <p class="txt-desc" style="display:none1; width:55%;">국가기간 전략산업 취업교육 지원서를 입력해주세요.</p>
                </div>
                <p class="hr" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1 ">
                    <li>
                        <strong class="label-tit require_mark">최종학력</strong>
                        <select class="select w100p" required placeholder="선택">
                            <option>1</option>
                        </select>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">학교명</strong>
                        <slp-text-field placeholder="학교명 입력" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">단과대명</strong>
                        <slp-text-field placeholder="단과대명 입력" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">전공학과</strong>
                        <slp-text-field placeholder="전공학과 입력" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">전공계열</strong>
                        <select class="w100p select" required placeholder="선택">
                            <option>1</option>
                        </select>
                    </li> 
                    <li>
                        <strong class="label-tit require_mark">수료학기</strong>
                        <select class="w100p select" required placeholder="선택">
                            <option>1</option>
                        </select>
                    </li> 
                    <li>
                        <strong class="label-tit require_mark">졸업예정 년월</strong>
                        <select class="w100p select" required placeholder="선택">
                            <option>1</option>
                        </select>
                    </li> 
                    <li>
                        <strong class="label-tit require_mark">근로여부</strong>
                        <select class="w100p select" required placeholder="선택">
                            <option>1</option>
                        </select>
                    </li> 
                    <li>
                        <strong class="label-tit require_mark">근로여부</strong>
                        <select class="w100p select" required placeholder="선택">
                            <option>1</option>
                        </select>
                        <slp-text-field class="mt8" placeholder="신청경로 입력" ></slp-text-field>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">교육관심분야</strong>
                        <select class="w100p select" required placeholder="선택">
                            <option>1</option>
                        </select>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">거주지역</strong>
                        <slp-text-field placeholder="예 : 경기도 수원" ></slp-text-field>
                    </li>   
                </ul>
                <!-- //list -->
               
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
  name: 'regiclass_register_basicinfo_add',
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
