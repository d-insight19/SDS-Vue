<template>
  <!-- eslint-disable -->
   <!-- wrap -->
    <div id="wrap" >
      <div id="container" class="mediaquery atorm" style="background:#e9ecef; min-height:100%!important;">
        <div id="content" style="padding:0; overflow:hidden;">
          <div class="cell">
            <div class="inner" style="height: 100vh;">
                  <div class="splash_action ">
                      <img src="@/assets/img/atorm_splash_01.png" alt="">
                  </div>

                  <div class="splash_action2 ">
                      <img src="@/assets/img/atorm_splash_02.png" alt="">
                  </div>

                  <div class="splash_action3 ">
                      <img src="@/assets/img/atorm_splash_03.png" alt="">
                  </div>
    
                  <transition appear name="fade">
                    <div class="splash_atorm ">
                        <img src="@/assets/img/img_atormlogo_blue.png" alt="">
                    </div>
                  </transition>
                </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

/*eslint-disable */

// 1. jquery
import $ from 'jquery'
window.$ = $
window.jQuery = $
export default {
  name: 'Atorm_splash',
  /* vue lifecycle */
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
