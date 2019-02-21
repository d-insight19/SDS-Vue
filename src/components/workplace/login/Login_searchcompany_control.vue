<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery regiclass basicinfo register">
        <div id="header" class="tab">
          <div class="header_inner"><button type="button" class="btn only close"><span class="ico">이전</span></button>
            <p class="header_text font_18" style="display:block; padding-left:70px;">회사 검색</p>
          </div>
          <div class="header_inner line2 tabMenu">
            <ul class="fixTab">
              <li :class="{'on' : active == 1}" @click="active_el(1)"><a href="#">회사명</a></li>
              <li :class="{'on' : active == 2}" @click="active_el(2)"><a href="#">사업자 등록번호</a></li>
            </ul>
          </div>
        </div>
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <component :is="component" @childs-event="parentsMethod(parentsData)"></component>
            </div>
          </div>
        </div>

      </div>
      <!-- //container -->
    </div>
    <!-- //wrap -->

</template>

<script>
/* eslint-disable */
import LoginSearchcompany1 from './Login_searchcompany1'
import LoginSearchcompany2 from './Login_searchcompany2'
export default {
  name: 'regiclass_register_contorl',
  components: {
    'Login_searchcompany1': LoginSearchcompany1,
    'Login_searchcompany2': LoginSearchcompany2
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
      component: 'Login_searchcompany1',
      active: 1
    }
  },
  /* vue function */
  methods: {
    active_el (el) {
      this.active = el
      if (el === 1) {
        this.component = 'Login_searchcompany1'
      } else if (el === 2) {
        this.component = 'Login_searchcompany2'
      }
    },
  }
}
</script>
