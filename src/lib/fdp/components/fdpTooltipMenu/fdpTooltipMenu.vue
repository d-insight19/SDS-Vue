<template>
  <div :class="['-fdp-tooltip-menu', classes]" v-dropdown-click-outside="() => {tooltipStatus = false}">
    <button type="button" @click="tooltipClick" class="-fdp-tooltip-menu__activator">
      <slot></slot>
    </button>
    <div class="-fdp-tooltip-menu__menubox" v-show="tooltipStatus">
      <ul class="-fdp-tooltip-menu__menu-list">
        <li v-for="menu in menuList" :key="menu.key" @click="menuClick(menu.key)" class="-fdp-tooltip-menu__menu-item">{{ menu.label }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fdp-tooltip-menu',
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
    menuList: {
      type: Array,
      default: () => []
    },
    blue: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    button: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tooltipStatus: false
    }
  },
  computed: {
    classes () {
      return {
        '-fdp-tooltip-menu--blue': this.blue,
        '-fdp-tooltip-menu--top': this.top,
        '-fdp-tooltip-menu--button': this.button
      }
    }
  },
  methods: {
    tooltipClick () {
      this.tooltipStatus = !this.tooltipStatus
    },
    menuClick (menuKey) {
      this.$emit('input', menuKey)
      this.tooltipStatus = !this.tooltipStatus
    }
  }
}

</script>

<style>

</style>
