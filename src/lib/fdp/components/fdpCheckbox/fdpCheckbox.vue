<template>
  <div class="-fdp-checkbox" :class="{ '-fdp-checkbox--disabled' : disabled}" @click="onClick()">
    <div class="-fdp-checkbox__check-image" :class="{ '-fdp-checkbox--check-on' : this.clicked, '-fdp-checkbox--check-off' : !this.clicked }"/>
    <div class="-fdp-checkbox__label"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'fdp-checkbox',
  model: {
    prop: 'checked'
  },
  props: {
    checked: [Boolean, String, Array],
    value: {
      type: [String, Boolean, Array, Object],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      strTypeClicked: false
    }
  },
  computed: {
    clicked () {
      if (typeof (this.value) === 'boolean') {
        if (typeof (this.checked) === 'boolean') {
          return this.checked
        } else {
          return this.checked === 'Y'
        }
      } else {
        if (typeof (this.checked) === 'object') {
          return (this.checked.indexOf(this.value) >= 0)
        } else {
          return this.strTypeClicked
        }
      }
    }
  },
  methods: {
    onClick () {
      if (typeof (this.value) === 'boolean') {
        if (typeof (this.checked) === 'boolean') {
          this.$emit('input', !this.checked)
        } else {
          this.$emit('input', this.checked === 'Y' ? 'N' : 'Y')
        }
      } else {
        if (typeof (this.checked) === 'object') {
          if (this.checked.indexOf(this.value) >= 0) {
            this.$emit('input', this.checked.filter(item => item !== this.value))
          } else {
            this.$emit('input', this.checked.concat(this.value))
          }
        } else {
          this.$emit('input', this.strTypeClicked ? '' : this.value)
          this.strTypeClicked = !this.strTypeClicked
        }
      }
    }
  }

}
</script>

<style>

</style>
