<template>
  <div class="-fdp-dropdown">
    <div class="-fdp-dropdown__button" v-dropdown-click-outside="toggleItemOuter" @click="toggleItem">
      <input v-if="autocomplete" class="-fdp-dropdown__autocomplete-input" type="text" :placeholder="placeholder" :value="inputValue" @input="onChangeInput" @keydown.tab.prevent="complete(0)">
      <div v-else class="-fdp-dropdown__selected">{{ selectedTitle }}</div>
      <div class="-fdp-dropdown__icon--up" v-if="isItemShowing"/>
      <div class="-fdp-dropdown__icon--down" v-else/>
    </div>
    <transition name="-fdp-dropdown__move-down">
      <div class="-fdp-dropdown__items" v-show="isItemShowing">
        <div v-for="(item, index) in items" :key="index" @click="onClickItem(item, index)" :class="['-fdp-dropdown__items-wrapper', { '-fdp-dropdown--selected': isSelectedItem(index) }]">
          <div v-if="custom" class="-fdp-dropdown__custom-item-wrapper">
            <slot :item ="item" :bold="bold" :getHighlightTitle="getHighlightTitle"></slot>
          </div>
          <div v-else class="-fdp-dropdown__default-item-wrapper">
            <span v-if="autocomplete && bold" class="-fdp-dropdown__autocomplete-item" v-html="getHighlightTitle(item[title]? item[title] : item)"></span>
            <span v-else class="-fdp-dropdown__default-item">{{ item[title]? item[title] : item }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'fdp-dropdown',
  props: {
    items: [Array, Object],
    current: [Number, String],
    placeholder: {
      type: String,
      default: 'input value'
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    },
    custom: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'title'
    }
  },
  data () {
    return {
      inputValue: '',
      isItemShowing: false,
      currentItem: this.current,
      inputDelay: true
    }
  },
  computed: {
    selectedTitle () {
      return this.items[this.currentItem][this.title] ? this.items[this.currentItem][this.title] : this.items[this.currentItem]
    }
  },
  methods: {
    getHighlightTitle (title) {
      const regex = new RegExp(`(${this.inputValue})`, 'gi')
      return title.replace(regex, '<b>$1</b>')
    },
    onChangeInput (input) {
      this.inputValue = input.target.value

      // Delay 0.5s
      if (this.inputDelay) {
        this.inputDelay = false
        setTimeout(() => {
          this.$emit('changeInput', this.inputValue)
          this.inputDelay = true
        }, 500)
      }
    },
    onClickItem (item, index) {
      this.$emit('clickItem', item)
      if (this.autocomplete) {
        this.inputValue = this.items[index][this.title] ? this.items[index][this.title] : this.items[index]
      } else {
        this.currentItem = index
      }
      this.toggleItem()
    },
    toggleItem () {
      this.isItemShowing = !this.isItemShowing
    },
    toggleItemOuter () {
      this.isItemShowing = false
    },
    isSelectedItem (index) {
      return index === Number(this.currentItem)
    },
    complete (i) {
      this.inputValue = this.items[i][this.title]
    }
  },
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
  }
}
</script>

<style>

</style>
