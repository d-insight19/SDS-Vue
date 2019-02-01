<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm">
      </div>
      <!-- //container -->   
      
      <!-- layer wrap -->
      <slp-popup title="과정 대표이미지 선택" confirmInput="저장" cancelInput="취소">
        <div class="ly-cnt">
          <table class="imgTable">
            <tbody>
                <tr>
                    <td>
                        <div class="thum">
                            <slp-radio name="titleImg" innerCircle="true"><img src="@/assets/img/thum_no_s.jpg" class="radioImage" alt=""></slp-radio>
                        </div>
                    </td>
                    <td>
                        <div class="thum">
                            <slp-radio name="titleImg" innerCircle="true"><img src="@/assets/img/thum_no_s.jpg" class="radioImage" alt=""></slp-radio>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="thum">
                            <slp-radio name="titleImg" innerCircle="true"><img src="@/assets/img/thum_no_s.jpg" class="radioImage" alt=""></slp-radio>
                        </div>
                    </td>
                    <td>
                        <div class="thum">
                            <slp-radio name="titleImg" innerCircle="true"><img src="@/assets/img/thum_no_s.jpg" class="radioImage" alt=""></slp-radio>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
      </slp-popup>
      <!-- //layer wrap -->

    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Atorm_e-learning_thumbnail',
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
