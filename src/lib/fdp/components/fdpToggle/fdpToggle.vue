<template>
  <label class="-fdp-toggle">
    <input class="-fdp-toggle__box-area" type="checkbox" v-model="value">
    <span class="-fdp-toggle__box-slider round"></span>
  </label>
</template>
<script>
export default {
  name: 'fdp-toggle',
  props: {
    value: {type: Boolean, required: true, default: false}
  },
  watch: {
    value: function () {
      this.$emit('input', this.value)
    }
  }
}
</script>
<style>

</style>
