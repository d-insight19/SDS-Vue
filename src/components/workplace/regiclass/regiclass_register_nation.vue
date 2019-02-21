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
                    <p class="txt-desc" style="display:none1; width:55%;">수강생 정보를 입력해 주세요.</p>
                </div>
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1 ">
                    <li>
                        <p><span class="fl mr10">성명</span> <span>정해민</span></p>
                        <p class="line01"></p>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">주민등록번호</strong>
                        <div>
                            <slp-text-field class="w48p dib" value="1234567"></slp-text-field><span class="connec" style="display:inline-block; width: 4%; text-align: center;">-</span><slp-text-field class="w48p dib" value="1234567" type="password" ></slp-text-field>
                        </div>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">소속</strong>
                        <slp-text-field placeholder="시스템개발팀" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">생년월일</strong>
                        <slp-text-field type="number" placeholder="1980.12.13" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">전화번호</strong>
                        <slp-text-field placeholder="0201830201" ></slp-text-field>
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">휴대전화</strong>
                        <slp-text-field placeholder="01012345678" ></slp-text-field>
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
