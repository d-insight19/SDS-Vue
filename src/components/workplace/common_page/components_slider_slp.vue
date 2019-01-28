<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="sample_page">
        <slp-slider
          ref="imageSlider"
          direction="horizontal"
          :mousewheel-control="true"
          :performance-mode="true"
          :pagination-visible="true"
          :pagination-clickable="true"
          :loop="true"
          :interval="3000"
          :speed="500"
          :auto="auto"
          @slide-change-start="onSlideChangeStart"
          @slide-change-end="onSlideChangeEnd">
            <div>Page 1</div>
            <div :key="index" v-for="(img, index) in images">
              <img
                :src="img"
                @mouseover="setRotation(false)"
                @mouseout="setRotation(true)"
              />
            </div>
        </slp-slider>

        <br/>
        <br/>

        <slp-slider
          ref="verticalSlider"
          direction="vertical"
          :mousewheel-control="true"
          :performance-mode="true"
          :pagination-visible="true"
          :pagination-clickable="true"
          :loop="true"
          :interval="1000"
          :speed="0"
          :auto="auto">
            <div style="background-color: red;"></div>
            <div style="background-color: blue;"></div>
        </slp-slider>

      </div>
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_slider',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      auto: true,
      images: [
        'http://i.imgur.com/vYdoAKu.jpg', 'http://i.imgur.com/PUD9HQL.jpg', 'http://i.imgur.com/Lfv18Sb.jpg', 'http://i.imgur.com/tmVJtna.jpg', 'http://i.imgur.com/ZfFAkWZ.jpg'
      ]
    }
  },
  /* vue function */
  methods: {
    setRotation (value) {
      this.auto = value
    },
    onSlideChangeStart (currentPage, el) {
      console.log('onSlideChangeStart', currentPage, el)
    },
    onSlideChangeEnd (currentPage, el) {
      console.log('onSlideChangeEnd', currentPage, el)
    }
  }
}
</script>

<style scoped>
  .sample_page {
    margin-top: 10px;
  }
  .slider {
    width: 450px;
    height: 300px;
  }
  img {
    height: 300px;
  }
</style>
