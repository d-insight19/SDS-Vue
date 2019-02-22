<template>
    <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap">
        <div class="splashWrap" style="">
            <video class="splashCon" style="" src="../../../../static/movie/SLP_Mobile_GUI_Splash_B2B.mp4" loop autoplay></video>
            <div class="splashBox" >
                <div class="square"></div>
            </div>
        </div>
    </div>
    <!-- //wrap -->

</template>

<script>
/*eslint-disable */

// 1. jquery
import $ from 'jquery'
window.$ = $
window.jQuery = $

export default {
  name: '',
  /* vue lifecycle */
  created () {

  // $(window).resize(function(){
  // $window = window.innerWidth
  // $video = $('.splash_wrap video')

  // if($window < 767 ){
  //   $video.attr('src', '@/assets/movie/SLP_Mobile_GUI_Splash_B2C.mp4')
  // } else {
  //   $video.attr('src', '@/assets/movie/m010102.mp4')
  // }

  
	// }).resize(); // resize 종료

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
<style scoped>
@media only screen and (max-width:767px){
}

@media only screen and (min-width:768px) and (max-width:1023px){

}
</style>
