<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery drawer">

            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">비밀번호 변경</p><button type="button" class="btn14 color_clr2">완료</button>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">
                    <!-- list -->
                    <div class="desc mt0">현재 비밀번호를 입력한 후<br>
                        새로 사용할 비밀번호를 입력해주세요.</div>
                        <ul class="multiList type2">
                        <li class="mb20">
                            <strong class="label-tit14">현재 비밀번호</strong>
                            <input type="text" class="input" placeholder="현재 비밀번호 입력" >
                        </li>
                        <li class="mb20">
                            <strong class="label-tit14">새 비밀번호</strong>
                            <input type="text" class="input" placeholder="6~16자의 영소문자, 숫자 조합" >
                        </li>
                        <li class="mb20">
                            <strong class="label-tit14">새 비밀번호 확인</strong>
                            <input type="text" class="input" placeholder="6~16자의 영소문자, 숫자 조합" >
                        </li>
                    </ul>
                    <!-- //list -->



                    </div>
                </div>
            </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <!-- 비활성화시 :  disabled 추가 -->
                <li><button type="button" class="btn md">나중에 변경하기</button></li>
                <li><button type="button" disabled class="btn ld">확인</button></li>
            </ul>
        </div>
        <!-- //floating button -->


        </div>
        <!-- //container -->

    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Drawer_myinfo',
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
