<template>
 <!-- eslint-disable -->
  <!-- wrap -->
  <div id="wrap" class="colorCode2">
    
    <button type="button" title="title" class="btn ld" @click="() => {showConfirm = true}">알림(show/hide)</button>

    <slp-popup v-if="showConfirm" title="확인" cancelInput="취소" confirmInput="학습시작" @cancelClick="cancel" @confirmClick="confirm">
        <!-- popup body -->
        <div class="ly-cnt">
            <p>지금부터 본격적인 학습이 시작됩니다. 학습을 시작하시겠습니까?</p>	
        </div>
        <div class="ly-info">
            <p></p>
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
