<template>
  <div class="-fdp-chip" :style=chipStyle+chipHide>
    {{chipLabel}}
    <div class="-fdp-chip__close-image"  @click="closeButtonClick"></div>
  </div>
</template>

<script>
export default {
  name: 'fdp-chip',
  props: {
    chipLabel: {type: String, required: true},
    chipStyle: {type: String, default: ''},
    chipCloseFn: {type: Boolean, default: false}
  },
  data () {
    return {
      chipHide: ''
    }
  },
  methods: {
    closeButtonClick () {
      this.$emit('chip-close', this.chipLabel)
      if (!this.chipCloseFn) {
        this.chipHide += 'display:none;'
      }
    }
  }
}
</script>

<style>

</style>
