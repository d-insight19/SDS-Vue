<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery">
           <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico"></span></button>
                <p class="header_text font_18">출석부</p>
            </div>
            <!-- //header -->      

            <div id="content" class="normal">
                <div class="cell">
                  <div class="inner pt0 pdb52">
                     <img src="@/assets/img/img_calendar.png" class="w100p" alt="">
                  </div>
                </div>
            </div>

        <!-- fixed Bottom Btn -->    
        <div class="fixBtmBtn">
          <div class="attend_status_detail gray_bg p1218">
            <p class="font_15 fwb600 mb8">2018년 9월 17일</p>
            <ul class="fix">
              <li>
                <p class="font_13"><span class="fwb mr8">입실</span><span class="color_clr1 fwb700">10:30</span></p>
                <p class="font_13"><span class="fwb mr8">퇴실</span><span class="color_clr1 fwb700">14:00</span></p>
              </li>
              <li>
                <p class="font_13"><span class="color_clr1 fwb700">2h 30m</span> / <span class="fwb">Total 3h 00m</span></p>
              </li>
            </ul>
          </div>
        </div>
        <!-- //fixed Bottom Btn -->    
        </div>
        <!-- //container --> 

    </div>
    <!-- //wrap -->

</template>

<script>
export default {
/*eslint-disable */
  name: 'Study_home_set_calendar',
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
