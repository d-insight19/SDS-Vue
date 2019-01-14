<template>
 <!-- eslint-disable -->
  <!-- wrap -->
  <div id="wrap" class="colorCode2">
    
    <button type="button" title="title" class="btn ld" @click="() => {showConfirm = true}">알림(show/hide)</button>

    <slp-popup v-if="showConfirm" title="학습전 안내" confirmInput="동의" @cancelClick="cancel" @confirmClick="confirm">
        <!-- popup body -->
        <div class="ly-cnt">
            <p>미수료시에는 급여에서 교육비가 전액 공제됩니다.</p>	
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
