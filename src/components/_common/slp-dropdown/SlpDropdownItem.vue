<template>
  <li
    :class="itemClasses"
    @click="selectItem">
    <slot/>
  </li>
</template>

<script>
export default {
  name: 'SlpDropdownItem',
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    itemClasses () {
      return {
        'is-disabled': this.disabled,
        'is-active': this.value !== null && this.value === this.$parent.selected
      }
    },
    /**
     * Check if item can be clickable.
     */
    isClickable () {
      return !this.$parent.disabled && !this.disabled
    }
  },
  created () {
    if (!this.$parent.$data._isDropdown) {
      this.$destroy()
      throw new Error('You should wrap SlpDropdownItem on a SlpDropdown')
    }
  },
  methods: {
    /**
             * Click listener, select the item.
             */
    selectItem () {
      if (!this.isClickable) return

      this.$parent.selectItem(this.value)
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.is-disabled {
  color: #c9c9c9
}
.is-active {
  color: #589fff
}
</style>
