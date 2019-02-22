<template>
  <!-- eslint-disable -->
   <!-- wrap -->
    <div id="wrap" >
      <div id="container" class="mediaquery atorm" style="background:#e9ecef; min-height: calc(100vh);">
        <div class="contents" >
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
</template>
<style >
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.splash_action{
  animation-duration: 3s;
  animation-name: slidein;
}
.splash_action2{
  animation-duration: 5s;
  animation-name: slideinright;
}
.splash_action3{
  animation-duration: 7s;
  animation-name: slideinbottom;
}
.slidein {
  /* -moz-animation-iteration-count: 3;
  -webkit-animation-iteration-count: 3;
  animation-iteration-count: 3; */
  -moz-animation-direction: alternate;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}
@keyframes slidein {
  from {
    left:-100%;
    opacity: 0;
  }
  
  to {
    left:0;
    opacity: 1;
  }
} 
@keyframes slideinbottom{
   from {
    bottom:-100%;
    opacity: 0;
  }
  
  to {
    bottom:0;
    opacity: 1;
  }
}
@keyframes slideinright{
   from {
    right:-100%;
    opacity: 0;
  }
  
  to {
    right:0;
    opacity: 1;
  }
}

</style>

<script>

/*eslint-disable */

// 1. jquery
import $ from 'jquery'
window.$ = $
window.jQuery = $
export default {
  name: 'Atorm_splash',
  /* vue lifecycle */
  // created () {

  //   window.onload() = function () {
  //     $( ".bounceInLeft" ).animate({
  //     width: "70%",
  //     opacity: 0.4,
  //     marginLeft: "0.6in",
  //     fontSize: "3em",
  //     borderWidth: "10px"
  //     }, 1500 );
  //   }
   
  // },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      status: false
    }
  },
  /* vue function */
  methods: {
  }
  
}
</script>
