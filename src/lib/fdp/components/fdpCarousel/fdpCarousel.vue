<template>
    <div class="-fdp-carousel">
        <swiper :options="swiperOption">
            <swiper-slide v-for="n in numberOfPage" :key="n">
                <slot :name="n"></slot>
            </swiper-slide>
            <div class="-fdp-carousel__page-indicator swiper-pagination swiper-pagination-bullets swiper-pagination-clickable" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'fdp-carousel',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  props: {
    numberOfPage: {type: Number, required: true}
  }
}
</script>

<style>

</style>
