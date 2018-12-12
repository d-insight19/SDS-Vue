<template>
 <!-- eslint-disable -->
  <!-- wrap -->
  <div id="wrap" class="colorCode2">
    
    <button type="button" title="title" class="btn ld" @click="() => {showConfirm = true}">팝업 확인 (show/hide)</button>

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
        showConfirm: false
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
