<template>
  <!-- eslint-disable -->
  <!-- container -->
  <div class="wrap" :class="{hide: !visible}">
    <div id="container" :class="containerClass">
      <!-- header -->
      <div id="header" class="fixed">
        <button
          type="button"
          class="btn only close"
          @click="$emit('close')">
            <span class="ico"></span>
        </button>
        <p class="header_text font_18">{{ title }}</p>
      </div>
      <!-- //header -->

      <!-- content -->
      <div id="content" :class="contentClass">
        <div class="mr-18 ml-18">
          <slot/>
        </div>
      </div>
      <!-- // content -->
    </div>
  </div>
  <!-- //container -->     
</template>

<script>
export default {
  name: 'SlpModal',
  props: {
    title: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      required: true,
      default: false
    },
    containerClass: {
      type: String,
      default: 'mediaquery'
    },
    contentClass: {
      type: String,
      default: 'list'
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  transition: transform 0.5s ease-out;
  z-index: 99;
}
.wrap.hide {
  transform: translateY(100%);
}
.mediaquery {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
