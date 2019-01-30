<template>
 <!-- eslint-disable -->
  <!-- wrap -->
  <div id="wrap" class="colorCode2">
    
    <button type="button" title="title" class="btn ld" @click="() => {showConfirm = true}">팝업(Popup) 확인</button>

    <slp-popup v-if="showConfirm" title="이메일 인증" cancelInput="취소" confirmInput="이메일 발송" @cancelClick="cancel" @confirmClick="confirm">
        <!-- popup body -->
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
    </slp-modal>

  </div>
  <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_popup',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      showConfirm: false,
      showModal: false
    }
  },
  /* vue function */
  methods: {
    cancel: function () {
      this.showConfirm = false
    },
    confirm: function () {
      this.showConfirm = false
    }
  }
}
</script>
