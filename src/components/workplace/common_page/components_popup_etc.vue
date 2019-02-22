<template>
<!-- eslint-disable -->

<!-- pop_wrap -->
<div class="pop_wrap">

    <div class="pop_container">
        <div class="pop_inner">
            <div class="pop_header">팝업 타이틀</div>
            <div class="pop_body">
                <div class="pop_content">
                    <p>
                    시작
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    마지막
                    </p>
                </div>
                <div class="pop_btn_goBlock">
                    <a href="" class="pop_btn_go">페이지 이동 버튼</a>
                </div>
            </div>
        </div>
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
