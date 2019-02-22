<template>
  <div :class="rootClass"
    class="dropdown" >
    <div
      ref="trigger"
      role="button"
      class="dropdown-trigger"
      @click="toggle($event)">
      <slot name="trigger"/>
    </div>
    <transition name="fade">
      <div
        v-show="!disabled && isActive"
        ref="dropdownMenu"
        class="dropdown-menu">
        <div
          v-if="dimmed"
          id="sheetDim"/>
        <div
          id="dropdown"
          ref="dropdown"
          :style="position"
          class="dropdown-content">
          <ul>
            <slot/>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
const pointerSize = 6

export default {
  name: 'SlpDropdown',
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol, Function],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dimmed: {
      type: Boolean,
      default: false
    },
    top: {
      type: Number,
      default: undefined
    },
    right: {
      type: Number,
      default: undefined
    },
    rootClass: {
      type: [String, Object],
      default: null
    }
  },
  data () {
    return {
      selected: this.value,
      isActive: false,
      position: {
        top: 0,
        right: 0
      },
      _isDropdown: true // Used internally by DropdownItem
    }
  },
  watch: {
    /**
     * When v-model is changed set the new selected item.
     */
    value (value) {
      this.selected = value
    },

    /**
     * Emit event when isActive value is changed.
     */
    isActive (value) {
      this.$emit('active-change', value)
    }
  },
  created () {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', this.clickedOutside)
    }
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      document.removeEventListener('click', this.clickedOutside)
    }
  },
  methods: {
    /**
     * Click listener from DropdownItem.
     *   1. Set new selected item.
     *   2. Emit input event to update the user v-model.
     *   3. Close the dropdown.
     */
    selectItem (value) {
      if (this.selected !== value) {
        this.$emit('change', value)
        this.selected = value
      }
      this.$emit('input', value)
      this.isActive = false
    },

    /**
     * White-listed items to not close when clicked.
     */
    isInWhiteList (el) {
      if (el === this.$refs.dropdownMenu) return true
      if (el === this.$refs.trigger) return true
      // All chidren from dropdown
      if (this.$refs.dropdownMenu !== undefined) {
        const children = this.$refs.dropdownMenu.querySelectorAll('*')
        for (const child of children) {
          if (child.id === "sheetDim") {
            return false
          }
          if (el === child) {
            return true
          }
        }
      }
      // All children from trigger
      if (this.$refs.trigger !== undefined) {
        const children = this.$refs.trigger.querySelectorAll('*')
        for (const child of children) {
          if (el === child) {
            return true
          }
        }
      }

      return false
    },

    /**
     * Close dropdown if clicked outside.
     */
    clickedOutside (event) {
      if (!this.isInWhiteList(event.target)) this.isActive = false
    },

    /**
     * Toggle dropdown if it's not disabled.
     */
    toggle (event) {
      if (this.disabled) return

      if (!this.isActive) {
        // if not active, toggle after clickOutside event
        // this fixes toggling programmatic
        this.$nextTick(() => {
          let { target, name, position } = event
          // 하위 Element 선택시 dropdown 위치 이동 현상으로 인한 Trigger element 제한
          if (target.parentElement !== this.$refs.trigger) {
             target = target.parentElement
          }
          if (name === this.name) {
            this.isActive = !this.isActive
            this.$nextTick(() => {
              let position = this.getDropdownPosition(target, this.$refs.dropdown)
              this.position = this.stylePosition(position)
            })
          }
        })
      } else {
        this.isActive = !this.isActive
      }
    },

    getDropdownPosition (target, dropdown) {
      let trRect = target.getBoundingClientRect()
      let ddRect = dropdown.getBoundingClientRect()
      // Screen size
      let width = window.innerWidth || document.documentElement.scrollWidth || document.body.scrollWidth
      let height = window.innerHeight || document.documentElement.scrollHeight || document.body.scrollHeight
      let scrollWidth = window.innerWidth - document.body.scrollWidth
      // Scroll offset of the current document
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // Position within the parent
      let offsetLeft = trRect.left + scrollLeft
      let offsetTop = trRect.top + scrollTop
      // Center of the target element
      let centerX = offsetLeft - 0.5 * (ddRect.width - trRect.width)
      let centerY = offsetTop + trRect.height

      // Position of the dropdown relatively to target
      let x = 0
      let y = 0
      if (trRect.right - ddRect.width > 0) {
        x = width - trRect.right
      } else {
        x = width - (trRect.left + ddRect.width)
      }
      if (trRect.bottom + scrollTop + pointerSize + ddRect.height <= height) {
        y = trRect.bottom + pointerSize
      } else {
        y = trRect.top - (ddRect.height + pointerSize)
      }
      
      console.log(trRect);
      console.log(target.offsetLeft , target.offsetTop )
      console.log(x, y)
      return {
        right: x - scrollWidth,
        top: y + scrollTop
      }
    },

    stylePosition (position) {
      let top = this.top ? position.top + this.top : position.top
      let right = this.right ? position.right + this.right : position.right

      return {
        top: top + 'px',
        right: right + 'px'
      }
    }

  }
}
</script>

<style scoped>
#dropdown{
  z-index: 900;
  position: absolute;
  top: auto;
  right: auto;
  width: auto;
  background: #fff;
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
}
</style>
