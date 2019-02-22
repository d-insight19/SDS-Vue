<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass basicinfo book pd70">

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
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>
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
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>
                <ul class="ulList type1 dif">
                    <li>
                        <strong class="label-tit require_mark">받는분</strong>
                        <slp-text-field error message="test error" placeholder="정해민" ></slp-text-field>
                    </li>   
                    <li>
                        <strong class="label-tit require_mark">연락처</strong>
                        <slp-text-field error message="test error" placeholder="01029382747" ></slp-text-field>
                    </li>              
                    <li>
                        <strong class="label-tit">주소</strong>
                        <div>                            
                            <ul class="addrInt">
                                <li>
                                    <div class="postCode infoChk">
                                        <slp-text-field  error message="test error" placeholder="926301"></slp-text-field>
                                        <button type="button" class="btn sm">우편번호</button>
                                    </div>
                                </li>
                                <li><slp-text-field error message="test error" placeholder="서울특별시 강남구 테헤란로 212"></slp-text-field></li>
                                <li><slp-text-field error message="test error" placeholder="상록회관 1층 104호"></slp-text-field></li>
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
        <div class="fixBtmBtn zin1">
            <ul>
                <li><button type="button" class="btn md">이전</button></li>
                <li><button type="button" class="btn md clr1">다음</button></li>
            </ul>
        </div>
        <!-- //floating button -->
      </div>
      <!-- //container -->    

      <!-- popup z-index 테스트용
        
        <button type="button" title="title" class="btn ld" @click="() => {showConfirm = true}">팝업(Popup) 확인</button>

      <slp-popup v-if="showConfirm" title="이메일 인증" cancelInput="취소" confirmInput="이메일 발송" @cancelClick="cancel" @confirmClick="confirm">
       
          <div class="ly-cnt">
              <p>회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 발송합니다.<br>메일 내 링크를 클릭해주시면 잠금이 해제됩니다.</p>	
          </div>
          <div class="ly-info">
              <p>finedesign@mulcam.com</p>
              <p>정해민</p>
          </div>
      </slp-popup>

      <button type="button" title="title" class="btn ld" @click="() => {showModal = true}">모달(Full-Popup) 확인</button>

      <slp-modal :visible="showModal" title="타이틀 입력" @close="showModal = false">
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <p class="font_16 fwb600 mb15">도서소개</p>
                <p class="font_15 fwb mb10">저자 새뮤얼 배런디스</p>
                <p class="font_15 fwr mono_65 mb20">캘리포니아 대학교 샌프란시스코 캠퍼스 신경생물학 및 정신의학센터 소장이자 정신의학과 명예교수이다. 컬럼비아 대학교ㆍ하버드 대학교ㆍ미국국립보건원에서 정신의학과 신경과학을 공부했으며, 1970년부터 캘리포니아 대학교에서 연구해왔다. 캘리포니아 대학교 샌프란시스코 캠퍼스의 랭글리 포터 정신의학연구소 소장을 비롯해 맥나이트 신경과학기금 회장, 미국국립정신건강연구소 상담위원회 위원장 등을 역임했다. 미국의학원과 미국예술과학아카데미 회원이기도 하다. 200편이 넘는 연구 논문을 썼으며, 지은 책으로 『분자와 정신질환』, 『기분 유전자』, 『프로작보다 좋은 것』, 그리고 아이들을 위한 시집으로 『잠들기 전에』등이 있다. 현재 캘리포니아 소살리토에서 아내와 함께 살고 있다. </p>
            </div>
          </div>
        </div>

        <br/>
        <img src="@/assets/img/thum_no_L.jpg" class="width100" alt="">
        <br/>
        <br/>
        <img src="@/assets/img/thum_no_L.jpg" class="width100" alt="">
        <img src="@/assets/img/thum_no_L.jpg" class="width100" alt="">
        <br/>
        <br/>
        <br/>
        <img src="@/assets/img/thum_no_L.jpg" class="width100" alt="">
        <br/>
      </slp-modal> -->


    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'regiclass_register_book',
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
      showConfirm: false,
      showModal: false
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
    cancel: function () {
      this.showConfirm = false
    },
    confirm: function () {
      this.showConfirm = false
    }
  }
}
</script>
