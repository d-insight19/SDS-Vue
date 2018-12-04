<template>
    <div class="-fdp-input-label" :class="classes" :style="widthStyle">
      <label v-show="label"> {{ label }} </label>
      <span :class="{'-fdp-input-label__star':required}"></span>
      <slot class="-fdp-input-label__icon"></slot>
    </div>
</template>

<script>
export default {
  name: 'fdp-input-label',
  props: {
    label: { type: String, default: null },
    required: {type: Boolean, default: false},
    vertical: {type: Boolean, default: false},
    width: { type: String, default: '' }
  },
  computed: {
    classes () {
      return [
        {'-fdp-input-label--vertical': this.vertical}
      ]
    },
    widthStyle () {
      if (this.width !== '') { return {'width': this.width} }
    }
  }
}
</script>

<style>

</style>
