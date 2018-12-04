<template>
  <transition name="-fdp-bottom-bar__transition">
    <div class="-fdp-bottom-bar" :class="classes" :style="barStyle">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'fdp-bottom-bar',
  props: {
    pageFixed: {
      type: Boolean,
      default: false
    },
    leftMargin: {
      type: String,
      default: '0'
    },
    rightMargin: {
      type: String,
      default: '0'
    },
    height: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return [{'-fdp-bottom-bar--page-fixed': this.pageFixed}]
    },
    barStyle () {
      return {
        left: `${this.leftMargin}`,
        right: `${this.rightMargin}`,
        height: `${this.height}`
      }
    }
  }
}
</script>

<style>

</style>
