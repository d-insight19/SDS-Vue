<template>
  <!-- eslint-disable -->
   <!-- wrap -->
    <div id="wrap" style="background:#" >
        
        <transition appear name="fade">
            <div class="splash_action">
                <img src="@/assets/img/atorm_splash_01.png" alt="">
            </div>
        </transition>
        
        <div class="splash_action2">
            <img src="@/assets/img/atorm_splash_02.png" alt="">
        </div>
        
        <div class="splash_action3">
            <img src="@/assets/img/atorm_splash_03.png" alt="">
        </div>

        <div class="splash_atorm">
            <img src="@/assets/img/img_atormlogo_blue.png" alt="">
        </div>

    </div>
</template>
<style >
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

<script>
/*eslint-disable */
export default {
  name: 'Atorm_splash',
  /* vue lifecycle */
  created () {
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
