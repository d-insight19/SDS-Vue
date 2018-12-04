<template>
  <div class="-fdp-select">
    <div class="-fdp-select--input" :class="{'-fdp-select--disabled':disabled, '-fdp-select--selected':isSelected && highlight}"
         v-dropdown-click-outside="toggleItemOuter"
         @click="optionClick">{{ currLabel }}
    </div>
    <transition name="-fdp-select__transition">
      <ul v-show="isActive" class="-fdp-select__ul">
          <li v-for="item in optionList" :key="item.key" class="-fdp-select__li" :class="{'-fdp-select--selected':item.key === value}"
              @click="listClick(item)">
            {{ item.label }}
          </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'fdp-select',
  directives: {
    'dropdown-click-outside': {
      bind: function (el, binding) {
        // Define Handler and cache it on the element
        const handler = (e) => {
          if ((!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener('click', handler)
      },

      unbind: function (el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null
      }
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    optionList: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    highlight: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: false,
      isSelected: this.value !== '' && !this.disabled,
      currLabel: this.value !== '' ? this.getLabel(this.value) : this.placeholder
    }
  },
  watch: {
    value: function () {
      this.isSelected = (this.value !== '' && !this.disabled)
    }
  },
  methods: {
    optionClick () {
      if (!this.disabled) {
        this.isActive = !this.isActive
      }
    },
    listClick (target) {
      this.currLabel = target.label
      this.$emit('input', target.key)
      this.isActive = false
    },
    toggleItemOuter () {
      this.isActive = false
    },
    getLabel () {
      return this.optionList[this.optionList.map(x => x.key).indexOf(this.value)].label
    }
  }

}
</script>

<style>
</style>
