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
                <component :is="component" v-on:delTxt="delTxt"></component>
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
import regiclassRegisterSearchcp from './regiclass_register_searchcp'
import regiclassRegisterSearchcp02 from './regiclass_register_searchcp_02'

export default {
  name: 'regiclass_register_contorl',
  components: {
    'regiclass_register_searchcp' : regiclassRegisterSearchcp,
    'regiclass_register_searchcp_02' : regiclassRegisterSearchcp02
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
      component: 'regiclass_register_searchcp',
      active: 1
    }
  },
  /* vue function */
  methods: {
    active_el (el) {
      this.active = el
      if (el === 1) {
        this.component = 'regiclass_register_searchcp'
      } else if (el === 2) {
        this.component = 'regiclass_register_searchcp_02'
      }
    },
    delTxt () {
      this.$refs.input01.value = ''
    }
  }
}
</script>
