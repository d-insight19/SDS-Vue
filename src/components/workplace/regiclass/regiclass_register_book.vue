<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass basicinfo book ">

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
                    <p class="txt-desc" style="display:none1;">이 과정은 교재가 발송되는 과정입니다.</p>
                </div>
                <p class="hr" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1 dif">
                    <li class="join-id mt0 pdb0">
                        <strong class="label-name fwb">참고도서</strong>
                    </li>
                    <li>
                        <p class="label-tit-13 mono_65  dpb fwb">1개월차</p>
                        <p class="label-tit-15 dpb">새로운 나를 만나는 셀프 리더십</p>
                        <p class="label-tit-14 mono_65 mb0 dpb">삼성출판사,이인창</p>
                    </li>
                    <li class="top-bd-d9">
                        <p class="label-tit-13 mono_65 mt20 dpb fwb">2개월차</p>
                        <p class="label-tit-15 dpb">이더리움을 활용한 블록체인 프로젝트 구축 : 쉽게 접하는 블록체인 개발 프로세스</p>
                        <p class="label-tit-14 mono_65 mb0 dpb">삼성출판사,이인창</p>
                    </li>
                    <li >                      
                        <a href="#" class="btn sm w100p add"  @click="addList1()" ><span class="ico"></span>도서추가</a>
                    </li>
                </ul>
                <!-- //list -->
                <p class="hr" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1 dif">
                    <li>
                        <strong class="label-tit require_mark">받는분</strong>
                        <slp-text-field placeholder="정해민" ></slp-text-field>
                    </li>   
                    <li>
                        <strong class="label-tit require_mark">연락처</strong>
                        <slp-text-field placeholder="01029382747" ></slp-text-field>
                    </li>              
                    <li>
                        <strong class="label-tit">주소</strong>
                        <div>                            
                            <ul class="addrInt">
                                <li>
                                    <div class="postCode infoChk">
                                        <slp-text-field placeholder="926301"></slp-text-field>
                                        <button type="button" class="btn sm">우편번호</button>
                                    </div>
                                </li>
                                <li><slp-text-field placeholder="서울특별시 강남구 테헤란로 212"></slp-text-field></li>
                                <li><slp-text-field placeholder="상록회관 1층 104호"></slp-text-field></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
            </div>
            <!-- //inner -->
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
  name: 'regiclass_register_basicinfo_add_02',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      active: true,
      list1: []
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
    }
  }
}
</script>
