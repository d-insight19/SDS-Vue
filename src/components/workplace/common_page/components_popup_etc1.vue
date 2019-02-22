<template>
<!-- eslint-disable -->

        <!-- pop_wrap -->
        <div class="pop_wrap">
            <div class="pop_imgBlock">
                <img src="@/assets/img/img_survey_intro_bg.png" alt="" style="width:720px; height:720px; max-width:100%;">
                <div class="pop_btn_goBlock">
                    <a href="" class="pop_btn_go">페이지 이동 버튼</a>
                </div>
            </div>
            <div class="pop_container">
                <div class="pop_btnBLock">
                    <div class="pop_btnBLock_inner d_flex">
                        <button type="button" class="pop_btn flex_1">오늘 하루 안 보기</button>
                        <button type="button" class="pop_btn pop_btn_snd flex_1">닫기</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- //pop_wrap -->

</template>

<script>
export default {
  name: 'Study_02_studyquestion_detail_02',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
