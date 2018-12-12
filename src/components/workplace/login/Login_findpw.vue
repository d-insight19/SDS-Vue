<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery findid">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_19"></p>
        </div>
        <!-- //header -->
        
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <h1 class="h-tit1">아이디/비밀번호 찾기</h1>

                
                <!-- tab wrap -->
                <div class="tabWrap">
                    <!-- tab menu -->
                    <ul class="tabMenu">
                        <li :class="{'on': tabIdx == 1}" @click="onClick(1)"><a href="#tab_id">아이디</a></li>
                        <li :class="{'on': tabIdx == 2}" @click="onClick(2)"><a href="#tab_pw">비밀번호</a></li>
                    </ul>
                    <!-- //tab menu -->
                    <component :is="component"/>

                </div>
                <!-- //tab wrap -->


            </div>
          </div>
        </div>
      </div>
      <!-- //container --> 
        
      
    </div>
    <!-- //wrap -->

</template>

<script>
import LoginTabFindid from './Login_tabfindid'
import LoginTabFindpw from './Login_tabfindpw'
export default {
  name: 'Login_findid',
  components: {'Login_tabfindid': LoginTabFindid, 'Login_tabfindpw': LoginTabFindpw},
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 2,
      component: 'Login_tabfindpw'
    }
  },
  /* vue function */
  methods: {
    onClick (idx) {
      this.tabIdx = idx
      if (idx === 1) {
        this.component = 'Login_tabfindid'
      } else if (idx === 2) {
        this.component = 'Login_tabfindpw'
      }
    }
  }
}
</script>
