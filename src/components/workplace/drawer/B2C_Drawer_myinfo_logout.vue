<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery drawer">

            <!-- header -->
            <div id="header" class="fixed">
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
                        <a class="edit_ico" href="#"></a>
                    </div>
                    <!-- //myinfo_img -->
                    <p class="name">정해민</p>
                    <p class="email">hamin.jung@multicampus.com</p>

                <!-- list -->
                        <ul class="singleList type_1 mt40">
                            <li>
                                <a href="#">기본정보 관리<span class="black_next"></span></a>
                            </li>
                            <li>
                                <a href="#">부가정보 관리<span class="black_next"></span></a>
                            </li>
                            <li>
                                <a href="#">배송지 관리<span class="black_next"></span></a>
                            </li>
                            <li>
                                <a href="#">계정 관리<span class="black_next"></span></a>
                            </li>
                        </ul>
                <!-- //list -->
                    <div class="logoutBtn mt70">
                        <button type="button" class="btn md clr1">로그아웃</button>
                    </div>


                    </div>
                </div>
            </div>

        </div>
        <!-- //container -->

     <!-- layer wrap -->
    <div class="layerWrap">
        <div class="ly-in">
            <div class="ly-body">
                <div class="ly-info">
                    <p>로그아웃 하시겠습니까?</p>
                </div>
            </div>

            <div class="ly-btn">
                <button type="button" class="btn color_clr2">로그아웃</button>
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
  name: 'Drawer_myinfo_logout',
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
