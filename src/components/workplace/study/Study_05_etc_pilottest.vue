<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_etc pd70">
        <!-- header + 확장형 + tab  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div v-if="headerType == '2'" id="header" class="tab fixed">          
          <div class="header_inner line1">
            <button type="button" class="btn only close"><span class="ico">이전</span></button>
            <p class="header_text font_19">콘텐츠검사 결과</p>
          </div>  
          <div class="header_inner line2 tabMenu">
              <ul class="fixTab">
                <li :class="{'on': tabIdx == 1}" @click.prevent="onClick(1)"><a href="">오류 등록</a></li><!-- selected class "on" -->
                <li :class="{'on': tabIdx == 2}" @click.prevent="onClick(2)"><a href="">오류 결과</a></li>
              </ul>
          </div>  
          <div class="hide_header" style="background:#e3e3e3;padding-top:100px;">
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
          </div>
        </div>
        <!-- //header -->
    
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner" >
                      <component :is="component" />
                    </div>
                </div>
            </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md clr1">저장</button>
            </div>
            <!-- //floatingbtn -->                
        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->

</template>

<script>
import Study05etcpilottest01 from './Study_05_etc_pilottest_01'
import Study05etcpilottest02 from './Study_05_etc_pilottest_02'

export default {
  name: 'Study_05_etc_pilottest',
  components: {'Study_05_etc_pilottest_01': Study05etcpilottest01, 'Study_05_etc_pilottest_02': Study05etcpilottest02},
  props: {
  },
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 2,
      tabIdx: 2,
      component: 'Study_05_etc_pilottest_02'
    }
  },
  /* vue function */
  methods: {
    onClick (idx) {
      this.tabIdx = idx
      if (idx === 1) {
        this.component = 'Study_05_etc_pilottest_01'
      } else if (idx === 2) {
        this.component = 'Study_05_etc_pilottest_02'
      }
    }
  }
}
</script>
