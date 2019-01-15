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
                    <p class="txt-desc" style="display:none1;">직무능력향상 지원금 정보를 입력해주세요.</p>
                </div>
                <p class="hr" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1 ">
                    <li>
                        <strong class="label-tit require_mark">지원금 구분</strong>
                        <slp-select class="w100p" required placeholder="선택" >
                            <option>선택</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </slp-select>                        
                    </li>
                    <li>
                        <strong class="label-tit require_mark">고용형태</strong>
                        <div class="rdoSelBox mb10">
                            <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo" ><span class="ico"></span><span class="label">정규직</span></label>
                            <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo" checked><span class="ico"></span><span class="label">비정규직</span></label>
                        </div> 
                    </li>                 
                    <li>
                        <strong class="label-tit require_mark">최종학력</strong>
                        <slp-select class="w100p" required placeholder="선택" >
                            <option>선택</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </slp-select>                        
                    </li>                
                    <li>
                        <strong class="label-tit require_mark">카드사</strong>
                        <div class="rdoSelBox mb10">
                            <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo2" ><span class="ico"></span><span class="label">농협카드</span></label>
                            <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo2" checked><span class="ico"></span><span class="label">신한카드</span></label>
                        </div> 
                    </li>                
                </ul>
                <!-- //list -->
                <p class="hr" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1">                    
                    <li>
                        <strong class="label-tit require_mark ">카드번호</strong>
                        <div>
                            <slp-text-field style="width:23%; margin-right:2.5%; display:inline-block" maxlength="4"></slp-text-field><slp-text-field style="width:23%; margin-right:2.5%; display:inline-block" maxlength="4"></slp-text-field><slp-text-field style="width:23%; margin-right:2.5%; display:inline-block" maxlength="4"></slp-text-field><slp-text-field style="width:23%; display:inline-block" maxlength="4"></slp-text-field>
                        </div>
                    </li>
                    <li class="mt6">
                        <p class="label-tit-13 mb0 mono_50">HDR-Net 또는 고용노동관서에서 발급한 근로자 직업능력개발 카드(농협카드, 신한카드)로만 수강신청이 가능합니다.</p>
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
