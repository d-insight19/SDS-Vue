<template>
  <div
    v-show="show"
    id="bottomsheet_wrap">
    <div
      id="sheetDim"
      @click="toggle"/>
    <div id="bottomsheet">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="{'active': value === index ? true : false}"
          @click="itemSelect(index)">
          {{ item.title }}
          <span class="checkIcon"/>
        </li>
      </ul>
      <div
        class="bottomsheetBtn"
        @click="toggle">
        <span class="ico close_24_black"/>
        닫기
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlpBottomSheet',
  props: {
    value: {
      type: Number,
      default: 0
    },
    show: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default () { return [] }
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    toggle () {
      this.$emit('show')
    },
    itemSelect (value) {
      this.$emit('selected', value)
      this.toggle()
    }
  }
}
</script>
