<template>
  <div class="-fdp-stepper__step-wrapper">
    <div class="-fdp-stepper__step">
        <button type="button" :class="['-fdp-stepper__step-button', stepClass, {'--clickable': clickable}]" @click="stepClick">
          {{ step }}
        </button>
        <div v-if="!!label" class="-fdp-stepper__label-wrapper">
          <span :class="['-fdp-stepper__step-label', stepClass, {'--error': error}]"> {{ label }} </span>
          <span class="-fdp-stepper__step-sub-label">{{subText}}</span>
        </div>
    </div>
    <div class="-fdp-stepper__space" :class="{'--divider': divider}" v-if="!last" :style="spaceStyles">
      <hr class="-fdp-stepper__divider" v-if="divider & !vertical">
    </div>
  </div>
</template>

<script>
export default {
  name: 'fdp-step',
  props: {
    step: {
      type: Number,
      default: 1
    },
    label: {
      type: String,
      default: ''
    },
    subText: {
      type: String,
      default: ''
    },
    current: {
      type: Number,
      default: 0
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      last: false,
      divider: this.$parent.$props.divider,
      space: this.$parent.$props.space,
      clickable: this.$parent.$props.clickable,
      vertical: this.$parent.$props.vertical
    }
  },
  mounted () {
    this.last = this.$parent.$el.childElementCount === this.step
  },
  computed: {
    stepClass () {
      if (this.step < this.current) {
        return '--finish'
      } else if (this.step === this.current) {
        return '--on'
      } else {
        return ''
      }
    },
    spaceStyles () {
      let styles
      if (this.vertical) {
        styles = {
          'height': (this.space - (this.divider ? 12 : 0)) + 'px'
        }
      } else {
        styles = {
          'width': (this.space - (this.divider ? 16 : 0)) + 'px'
        }
      }
      return styles
    }
  },
  methods: {
    stepClick () {
      if (this.clickable) {
        this.$parent.$emit('step-click', this.step)
      }
    }
  }
}
</script>

<style>

</style>
