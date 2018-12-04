<template>
    <div class="-fdp-tooltip-button">
        <div class="-fdp-tooltip-button__arrow" v-show="tooltipStatus"></div>
        <button type="button" @click="tooltipClick" class="-fdp-tooltip-button__activator">
            <slot name="activator"></slot>
        </button>
        <div class="-fdp-tooltip-button__content" v-show="tooltipStatus">
            <button type="button" class="-fdp-tooltip-button__close-button"  @click="tooltipStatus = false">X</button>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'fdp-tooltip-button',
  data () {
    return {
      tooltipStatus: false
    }
  },
  methods: {
    tooltipClick () {
      this.tooltipStatus = true
    }
  }

}
</script>

<style>

</style>
