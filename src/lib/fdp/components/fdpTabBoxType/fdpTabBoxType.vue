<template>
    <div class="-fdp-tab-box-type">
        <ul class="-fdp-tab-box-type__header">
            <li v-for="(item,idx) in tabItemList" :key="idx" @click="changeIdx(idx)" :class="{'-fdp-tab-box-type--active':selectedIndex===idx}" class="-fdp-tab-box-type__header-item">
                <strong class="-fdp-tab-box-type__header-item__title">{{item.tabTitle}}</strong>
                <span class="-fdp-tab-box-type__header-item__subTitle">{{item.tabSubTitle}}</span>
            </li>
        </ul>
        <div v-if="selectedIndex !==-1" class="-fdp-tab-box-type__cont">
            <keep-alive>
                <slot></slot>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
  name: 'fdp-tab-box-type',
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
