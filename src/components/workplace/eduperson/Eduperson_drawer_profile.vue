<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery eduperson_drawer_setting">

       <!-- header -->
        <div id="header" class="" >
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_18 visible"> 나의정보 </p>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">

                <!-- myinfo_img -->
                <div class="myinfo_img">
                    <img src="@/assets/img/benjamin_parker_736167_unsplash.png" class="thumImg" alt="profile img">
                </div>
                <!-- //myinfo_img -->
                <p class="myinfo_name">이시원</p>
                <p class="myinfo_position">회사운영자</p>


            </div>
          </div>
        </div>

        <!-- floating button -->
        <div class="fixBtmBtn abs">
            <ul>
                <li><slp-button class="md clr1">로그아웃</slp-button></li>
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
  name: 'Eduperson_drawer_profile',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 1,
      component: 'Eduperson_studycurrent',
      drawerFlag: false,
      title_list_flag: false
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
