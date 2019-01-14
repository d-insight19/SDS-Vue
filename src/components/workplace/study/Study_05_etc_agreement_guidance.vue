<template>
 <!-- eslint-disable -->
  <!-- wrap -->
  <div id="wrap" class="colorCode2">
    
    <button type="button" title="title" class="btn ld" @click="() => {showConfirm = true}">알림(show/hide)</button>

    <slp-popup v-if="showConfirm" title="알림" confirmInput="확인" @cancelClick="cancel" @confirmClick="confirm">
        <!-- popup body -->
        <div class="ly-cnt">
            <p>해당 과정의 학습일이 종료되었습니다. 현재는 청강만 가능하며 진도에 반영되지 않습니다.</p>	
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
