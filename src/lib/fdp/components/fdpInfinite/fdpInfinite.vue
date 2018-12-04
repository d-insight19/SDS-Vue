<template>
  <div class="-fdp-infinite" :style="{'height':(tableHederHeight + tableBodyHeight) + 'px'}">
    <table class="-fdp-infinite__table" :style="{'min-width': tableMinWidth + 'px'}">
      <thead class="-fdp-infinite__thead">
        <slot name="header"></slot>
      </thead>
      <tbody class="-fdp-infinite__tbody" @scroll="onScroll" ref="fdpInfiniteBody">
        <tr v-for="(item,index) in items" :key="item.id"
            :class="{ '-fdp-infinite--selected': isSelected(item) }"
            @click="onClickRow(item)"
            :value="index">
          <slot :item="item"></slot>
        </tr>
        <tr v-show="showLoadingStatus && isLoading"
            class="-fdp-infinite__loading">
          <td class="-fdp-infinite__loading-text"
              :colspan="this.headers.length" >
            Loading</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'fdp-infinite',
  props: {
    headers: {
      type: [Array, String]
    },
    items: {
      type: [Array, String, Object]
    },
    tableHederHeight: {
      type: [String, Number],
      default: 49
    },
    tableBodyHeight: {
      type: [String, Number],
      default: 400
    },
    tableMinWidth: {
      type: [String, Number],
      default: 1024
    },
    choosable: {
      type: Boolean,
      default: false
    },
    showLoadingStatus: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, Object],
      default: () => []
    }
  },
  data () {
    return {
      currentScrollPoint: 0,
      // showLoadingStatus: false,
      selected: []
    }
  },
  watch: {
    value: function (val) {
      this.selected = val
    }
  },
  methods: {
    isSelected (b) {
      return (this.selected.indexOf(b) >= 0)
    },
    onClickRow (b) {
      if (!this.choosable) { return }
      if (this.selected.indexOf(b) >= 0) {
        this.selected.splice(this.selected.indexOf(b), 1)
      } else {
        this.selected.push(b)
      }
      this.$emit('input', this.selected)
    },
    onScroll (e) {
      this.currentScrollPoint = e.srcElement.scrollTop

      if (!this.isLoading && this.currentScrollPoint >= (e.srcElement.scrollHeight - this.tableBodyHeight)) {
        this.$emit('loadingData')
      }
    },
    scrollTop () {
      this.$refs.fdpInfiniteBody.scrollTop = 0
    }
  }
}
</script>

<style>

</style>
