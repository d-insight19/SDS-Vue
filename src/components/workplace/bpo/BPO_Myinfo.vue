<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery drawer bpo_myinfo">

            <!-- header -->
            <div id="header" class="fixed noline">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">나의정보</p>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">
                    <!-- myinfo_img -->
                    <div class="myinfo_img">
                    <!-- 프로필사진 수정 -->
                        <!-- <a class="edit_ico" href="#"></a>-->
                    </div>
                    <!-- //myinfo_img -->
                    <p class="name">이시원</p>
                    <p class="lecturer">강사</p>


                    </div>
                </div>
            </div>


             <!-- floatingbtn -->
            <div class="fixBtmBtn abs">
                <button type="button" class="btn md clr1">로그아웃</button>
            </div>
            <!-- //floatingbtn -->
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
