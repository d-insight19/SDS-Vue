<template>
    <div class="-fdp-tab-topcolor-type">
        <div class="-fdp-tab-topcolor-type__header">
            <ul class="-fdp-tab-topcolor-type__header-item-list">
                <li v-for="(item,idx) in tabItemList" :key="idx" @click="changeIdx(idx)" :class="{'-fdp-tab-topcolor-type--active':selectedIndex===idx}" class="-fdp-tab-topcolor-type__header-item">{{item.tabTitle}}</li>
            </ul>
        </div>
        <div v-if="selectedIndex===-1" class="-fdp-tab-topcolor-type__cont -fdp-tab-topcolor-type__cont--empty">
            Tab didn't select yet.
        </div>
        <div v-else class="-fdp-tab-topcolor-type__cont">
            <keep-alive>
                <slot></slot>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
  name: 'fdp-tab-topcolor-type',
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
