<template>
  <div class="-fdp-data-table">
    <!-- table area : height : 헤더높이 + 바디높이(각 row 높이*rowPerpage + row별 divider 1px씩 추가)-->
    <div class="-fdp-data-table-card" :style="{'height':computeTableHeight + 'px'}">
      <table class="-fdp-data-table__table" :style="{'min-width': tableMinWidth + 'px'}">
        <thead class="-fdp-data-table__thead">
          <slot name="header"></slot>
        </thead>
        <tbody class="-fdp-data-table__tbody">
          <tr v-for="(item,index) in items" :key="item.id"
              @click="onClickRow(item)" :value="index"
              :class="{ '-fdp-data-table--selected': isSelected(item) }"
              :style="{'height':''+tableBodyRowHeight+'px'}">
            <slot :item="item"></slot>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- page area -->
    <div class="-fdp-data-table__pager-area">
      <div v-if="pagination.totalPages > 10">
        <!-- |< -->
        <div class="-fdp-data-table__move-page--first -fdp-data-table__move-page--disable" v-if="isLeftMoveEnd" />
        <div class="-fdp-data-table__move-page--first" v-else @click="onClickPage(1)"/>

        <!-- < -->
        <div class="-fdp-data-table__move-page--left -fdp-data-table__move-page--disable" v-if="isLeftMoveEnd" />
        <div class="-fdp-data-table__move-page--left" v-else @click="onClickPage(pagination.currentPage - 1)"/>
      </div>
      <span v-for="n in range" @click="onClickPage(n)" :key="n" :class="{ '-fdp-data-table__page-number': true, '-fdp-data-table--highlight': n === pagination.currentPage }">{{n}}</span>

      <div v-if="pagination.totalPages > 10">
        <!-- > -->
        <div class="-fdp-data-table__move-page--right -fdp-data-table__move-page--disable" v-if="isRightMoveEnd" />
        <div class="-fdp-data-table__move-page--right" v-else @click="onClickPage(pagination.currentPage + 1)"/>
        <!-- >| -->
        <div class="-fdp-data-table__move-page--last -fdp-data-table__move-page--disable" v-if="isRightMoveEnd"/>
        <div class="-fdp-data-table__move-page--last" v-else @click="onClickPage(pagination.totalPages)"/>
      </div>
    </div>
    <!-- pager area -->
  </div>
</template>

<script>
export default {
  name: 'fdp-data-table',
  props: {
    items: [Array, Object],
    tableHederHeight: {
      type: Number,
      default: 48
    },
    tableBodyRowHeight: {
      type: Number,
      default: 48
    },
    tableHeight: {
      type: Number,
      default: -1
    },
    tableMinWidth: {
      type: [String, Number],
      default: 1024
    },
    pagination: {
      type: Object,
      required: true
    },
    choosable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentScrollPoint: 0,
      showLoadingStatus: false,
      selected: []
    }
  },
  computed: {
    computeTableHeight () {
      if (this.tableHeight) { return this.tableHeight }
      return (this.tableHederHeight + (this.tableBodyRowHeight * this.pagination.rowsPerPage))
    },
    range () {
      let arr = []
      let currentPage = this.pagination.currentPage
      let totalPages = this.pagination.totalPages
      let start = currentPage - 9
      if (start < 1) {
        start = 1
      }
      let end = currentPage + 9
      if (end > totalPages) {
        end = totalPages
      }
      for (let i = start; i <= end; i++) {
        arr.push(i)
      }
      for (let i = arr.length - 1; arr[i] > currentPage + 4 && arr.length > 10; i--) {
        arr.pop()
      }
      if (arr.length > 10) {
        arr.splice(0, arr.length - 10)
      }
      return arr
    },
    isLeftPageEnd () {
      return this.pagination.currentPage <= 6 || this.pagination.totalPages <= 10
    },
    isLeftMoveEnd () {
      return this.pagination.currentPage <= 1
    },
    isRightPageEnd () {
      return (this.total - this.pagination.currentPage < 5) || this.pagination.totalPages <= 10
    },
    isRightMoveEnd () {
      return this.pagination.currentPage >= this.pagination.totalPages
    }
  },
  methods: {
    isSelected (b) {
      return this.selected.indexOf(b) >= 0
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
    onClickPage (n) {
      if (n === this.pagination.currentPage) {
        return
      }
      this.$emit('changePage', n)
    }
  }
}
</script>

<style>
</style>
