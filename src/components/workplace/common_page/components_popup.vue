<template>
 <!-- eslint-disable -->
  <!-- wrap -->
  <div id="wrap" class="colorCode2">

    <!-- layer wrap -->
    <div class="layerWrap">
        <div class="ly-in">
            <div class="ly-hd">팝업 타이틀</div>
            <div class="ly-body">
                <div class="ly-cnt">
                    <p>회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 발송합니다. 메일 내 링크를 클릭해주시면 잠금이</p>
                </div>
                <div class="ly-info">
                    <p>finedesign@mulcam.com</p>
                    <p>정해민</p>
                </div>
            </div>
        
            <div class="ly-btn">
                <button type="button" class="btn">취소</button>
                <button type="button" class="btn color_clr2">이메일 발송</button>
            </div>

        </div>
    </div>
    <!-- //layer wrap -->

    <div id="dim"></div>
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
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
