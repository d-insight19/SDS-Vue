<template>
  <div
    id="header"
    :class="{'fixed': fixed, 'tab': !fixed, 'clr4': !fixed}">

    <div class="header_inner line1">

      <slot name="scroll"/>

    </div>

    <div
      ref="default"
      class="hide_header"
      style="padding-top: 60px; height:188px; padding-left:66px">

      <slot name="default"/>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SlpAppBar',
  props: {
  },
  data () {
    return {
      defaultHeight: 0,
      fixed: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.defaultHeight = this.$refs.default.clientHeight
  },
  methods: {
    handleScroll () {
      if (this.defaultHeight < window.scrollY) {
        this.fixed = true
      } else {
        this.fixed = false
      }
    }
  }
}
</script>
