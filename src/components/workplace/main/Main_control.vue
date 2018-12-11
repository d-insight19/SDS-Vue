<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MainType">

        <!-- header 1단형 -->
        <div id="header" class="mainType">
            <button type="button" class="btn allMenu"><span class="ico">전체메뉴</span><span class="ico new"></span></button>
            <ul class="gnbMenu">
                <!-- selected class:on -->
                <li class="menu menu_home" :class="{'on': tabIdx == 1}" @click="onClick(1)">
                    <a href="#"><span class="ico">추천</span></a>
                </li>
                <li class="menu menu_exploration" :class="{'on': tabIdx == 2}" @click="onClick(2)">
                    <a href="#"><span class="ico">카테고리</span></a>
                </li>
                <li class="menu menu_subscription" :class="{'on': tabIdx == 3}" @click="onClick(3)">
                    <a href="#"><span class="ico">나의공간</span></a>
                </li>
            </ul>
            <button type="button" class="btn btnSch"><span class="ico">검색</span></button>
        </div>
        <!-- //header -->

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <component :is="component"/>
                test
            </div>
          </div>
        </div>
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
import MainRecommed from './Main_recommed'
import MainExploration from './Main_exploration'
import MainEubscribe from './Main_subscribe'
export default {
  name: 'Main_control',
  components: {'Main_recommed': MainRecommed, 'Main_exploration': MainExploration, 'Main_subscribe': MainEubscribe},
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 1,
      component: 'Main_recommed'
    }
  },
  /* vue function */
  methods: {
    onClick (idx) {
      this.tabIdx = idx
      if (idx === 1) {
        this.component = 'Main_recommed'
      } else if (idx === 2) {
        this.component = 'Main_exploration'
      } else {
        this.component = 'Main_subscribe'
      }
    }
  }
}
</script>
