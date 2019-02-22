<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_calender" style="min-height:100vh;">
           <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico"></span></button>
                <p class="header_text font_18">출석부</p>
            </div>
            <!-- //header -->      
        
        <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner pt0">
                        <img src="@/assets/img/img_calendar2.png" class="w100p" alt="">
                    </div>
                </div>
                
            </div>

            <div class="fixBtm" >
                <table class="">
                    <tr>
                        <td class="btm_tit ">
                            2018년 9월 17일
                        </td>                           
                    </tr>
                    <tr>
                        <td>
                            <span>입실</span>
                            <span class="color_clr1 fwb600">10:30</span>
                        </td>
                        <td rowspan="2">
                            <span class="color_clr1 fwb600">
                                2h 30m
                            </span> /
                            <span>
                                Total 3h 00m
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <span>퇴실</span>
                            <span class="color_clr1 fwb600">14:00</span>
                        </td>
                    </tr>
                </table>
            </div>
                
        </div>
        <!-- //container --> 

    </div>
    <!-- //wrap -->

</template>

<script>
export default {
/*eslint-disable */
  name: 'Study_studystatus_attendance_bpo',
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
