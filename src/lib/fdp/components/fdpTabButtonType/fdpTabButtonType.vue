<template>
    <div class="-fdp-tab-button-type">
        <div class="-fdp-tab-button-type__scroll">
            <ul class="-fdp-tab-button-type__header">
                <li v-for="(item,idx) in tabItemList" :key="idx" @click="changeIdx(idx)" :class="{'-fdp-tab-button-type--active':selectedIndex===idx, '-fdp-tab-button-type--st01':item.tabButtonClass==='st01', '-fdp-tab-button-type--st02':item.tabButtonClass==='st02'}" class="-fdp-tab-button-type__header-item">
                    {{item.tabTitle}}
                </li>
            </ul>
        </div>
        <div v-if="selectedIndex===-1" class="-fdp-tab-button-type__cont -fdp-tab-button-type__cont--empty">
            Tab didn't select yet.
        </div>
        <div v-else class="-fdp-tab-button-type__cont">
            <keep-alive>
                <slot></slot>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
  name: 'fdp-tab-button-type',
  props: {
    defaultSelectedIdx: {Type: Number, default: -1},
    tabItems: {Type: Array, required: true}
  },
  data: function () {
    return {
      selectedIndex: this.defaultSelectedIdx,
      tabItemList: this.tabItems
    }
  },
  methods: {
    changeIdx (idx) {
      this.selectedIndex = idx
      this.$emit('change-tab-idx', idx)
    }
  }
}
</script>

<style>

</style>
