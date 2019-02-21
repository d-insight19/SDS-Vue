<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery Eduperson_Operation">
        <!-- header -->
        <div id="header" class="fixed">
          <button type="button" class="btn only close"><span class="ico">닫기</span></button>
          <p class="header_text font_18">자율 운영 보고서</p>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner" style="padding-top:18px;">

              <div class="detail_date">
                <p class="fl select_date">2018.11.01 - 2018.11.30<span class="ico calender_blue_24"></span></p>
                <ul class="fr" style="border:1px solid #d9d9d9">
                  <li class="inb-box fl"><span class="ico gragh" :class="{'blue': tabIdx == 1}" @click="onClick(1)"></span></li>
                  <li class="inb-box"><span class="ico table " :class="{'blue': tabIdx == 2}" @click="onClick(2)"></span></li>
                </ul>
              </div>
              <p class="hr" style="margin-top:17px; margin-bottom:22px;"></p>
              <component :is="component"></component>
            </div>
          </div>
        </div>
      </div>
      <!-- //container -->


    </div>
    <!-- //wrap -->

</template>

<script>
import EdupersonOperationAutonomyGraph from './Eduperson_operation_autonomy_graph'
import EdupersonOperationAutonomyTable from './Eduperson_operation_autonomy_table'
export default {
  name: 'Eduperson_Studycurrent_autonomy',
  components: {'Eduperson_operation_autonomy_graph': EdupersonOperationAutonomyGraph, 'Eduperson_operation_autonomy_table': EdupersonOperationAutonomyTable},
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 1,
      component: 'Eduperson_operation_autonomy_graph'
    }
  },
  /* vue function */
  methods: {
    onClick (idx) {
      this.tabIdx = idx
      if (idx === 1) {
        this.component = 'Eduperson_operation_autonomy_graph'
      } else if (idx === 2) {
        this.component = 'Eduperson_operation_autonomy_table'
      }
    }
  }
}
</script>
