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
                    <div class="inner pt0">
                        <img src="@/assets/img/img_calendar2.png" class="w100p" alt="">
                    </div>
                </div>
                
                <div class="cell">
                    <div class="inner btB92">
                        <div class="attend_status_detail">
                            <ul class="fix">
                                <li>
                                    <p class="font_13 mb8"><span class="chip mono_80 font_11">CP</span> <span class="fwb mono_65">Cancel Penalty(보강)</span></p>
                                    <p class="font_13 mb8"><span class="color_clr2 fwb700 ml8 mr8">O</span> <span class="fwb mono_65">Attend(출석)</span></p>
                                    <p class="font_13 mb8"><span class="color_clr2 fwb700 ml8 mr8">L</span> <span class="fwb mono_65">Late(지각)</span></p>
                                    <p class="font_13 mb8"><span class="color_clr2 fwb700 ml8 mr8">E</span> <span class="fwb mono_65">Education(교육)</span></p>
                                    <p class="font_13"><span class="color_clr2 fwb700 ml8 mr8">H</span> <span class="fwb mono_65">Holiday(휴일)</span></p>
                                </li>
                                <li>
                                    <p class="font_13 mb8"><span class="chip mono_80 font_11">CC</span> <span class="fwb mono_65">Class Canceled(휴강)</span></p>
                                    <p class="font_13 mb8"><span class="color_clr2 fwb700 ml8 mr8">X</span> <span class="fwb mono_65">Absent(결석)</span></p>
                                    <p class="font_13 mb8"><span class="color_clr2 fwb700 ml8 mr8">B</span> <span class="fwb mono_65">Business(업무)</span></p>
                                    <p class="font_13 mb8"><span class="color_clr2 fwb700 ml8 mr8">V</span> <span class="fwb mono_65">Vacation(휴가)</span></p>
                                    <p class="font_13"><span class="color_clr2 fwb700 ml8 mr8">S</span> <span class="fwb mono_65">Sick Leave(병가)</span></p>
                                </li>
                            </ul>
                        </div>
                        <p class="hr mb0"></p>
                    </div>
                </div>
                
                <div class="cell">
                    <div class="inner pdb27">
                        <p class="label-tit20 mb16 fwb600">출결현황</p>
                        <div class="attend_status_detail pdb27">
                            <ul class="fix">
                                <li ><span class="color_clr2 fwb700 ml8 mr8">O</span> <span class="fwb700 mono_65">16</span></li>
                                <li><span class="color_clr2 fwb700 ml8 mr8">L</span> <span class="fwb700 mono_65">1</span></li>
                                <li><span class="color_clr2 fwb700 ml8 mr8">B</span> <span class="fwb700 mono_65">3</span></li>
                                <li><span class="color_clr2 fwb700 ml8 mr8">E</span> <span class="fwb700 mono_65">2</span></li>
                                <li><span class="color_clr2 fwb700 ml8 mr8">B</span> <span class="fwb700 mono_65">2</span></li>
                            </ul>
                            <p v-show="ok" class="mt12"><span class="ico chk" style="margin-right:6px; vertical-align: -2px;"></span><span class="font_18 fwb">확인 완료</span></p>
                        </div>
                    </div>
                </div>

                <div class="cell">
                    <div class="inner mb40 btB92">
                        <p class="label-tit18 fwb mb4">변경요청내역</p>
                        <p class="mono_25 font_14">반영 대기 중</p>

                        <ul class="attendance_notice_list">
                            <li>
                                <p class="font_14">11월 8일 오후 수업에 결석으로 처리되었으나 업무상 출장을 다녀왔습니다. 확인 부탁드리겠습니다.</p>
                            </li>
                            <li>
                                <p class="font_14">11월 8일 오후 수업에 결석으로 처리되었으나 업무상 출장을 다녀왔습니다. 확인 부탁드리겠습니다.</p>
                            </li>
                        </ul>
                        
                    </div>
                </div>

            </div>

        <!-- fixed Bottom Btn -->    
        <div class="fixBtmBtn" v-if="!ok">
            <ul>
                <li><slp-button class="md">변경요청</slp-button></li>
                <li @click="ActiveOk()"><slp-button   class="md clr1">최종확인</slp-button></li>
            </ul>
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
  name: 'Study_studystatus_attendance_bpo',
  /* vue lifecycle */
    data () {
        return {  
            ok:false
        }
    },
  created () {
  },
  mounted () {
  },
  /* vue data */
  /* vue function */
  methods: {
    ActiveOk () {
        console.log('flase')
        this.ok = true
    }
  }
}
</script>
