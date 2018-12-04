<template>
  <div class="-fdp-segment-box"
       :class="{'-fdp-segment-box--disabled': disabled, '-fdp-segment-box--mod': data.length%lineNumber==0}">
    <div v-for="(i, index) in Math.ceil(data.length/lineNumber)" :key="index"
         class="-fdp-segment-box__row">
      <div v-for="(item,j) in data.slice((i-1)*lineNumber,i*lineNumber)" :key="j"
           class="-fdp-segment-box__item"
           :class="{'-fdp-segment-box__item--active': checkFlag[(i-1)*lineNumber+j]}"
           :style="{'width': (itemWidth? itemWidth : 'fit-content' )}"
           @click="changeValue(item,(i-1)*lineNumber+j)">
        <div v-if="item.value" class="-fdp-segment-box__item-text">
          <span class="-fdp-segment-box__item-value">{{item.value}}</span>
          <span class="-fdp-segment-box__item-subValue">{{item.subValue}}</span>
        </div>
        <div v-else>
          <div class="-fdp-segment-box__item-text"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fdp-segment-box',
  data: function () {
    return {
      checkFlag: new Array(this.data.length).fill(false),
      lineNumber: this.itemPerLine || this.data.length
    }
  },
  props: {
    data: {type: Array, required: true},
    value: {type: Array},
    multi: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    itemPerLine: {type: Number, default: 0},
    itemWidth: {type: String}
  },
  methods: {
    changeValue (item, idx) {
      if (this.disabled) return
      if (this.multi) {
        var newArr = Array.from(this.checkFlag)
        newArr[idx] = !this.checkFlag[idx]
        this.checkFlag = newArr
        this.makeReturnValue(this.checkFlag)
      } else { // single
        newArr = new Array(this.data.length).fill(false)
        newArr[idx] = !this.checkFlag[idx]
        this.checkFlag = newArr
        this.makeReturnValue(this.checkFlag)
      }
      this.$emit('click', item)
    },
    makeReturnValue (newArr) {
      var rtnValue = []
      for (var i = 0; i < newArr.length; i++) {
        if (newArr[i]) {
          rtnValue.push(this.data[i])
        }
      }
      this.$emit('input', rtnValue)
    },
    initiateReturnValue (value) {
      this.checkFlag = new Array(this.data.length).fill(false)
      for (var i in this.data) {
        for (var j in this.value) {
          if (this.value[j].key === this.data[i].key) {
            this.checkFlag[i] = true
          }
        }
      }
      this.makeReturnValue(this.checkFlag)
    }
  },
  watch: {
    value: function () {
      this.checkFlag = new Array(this.data.length).fill(false)
      for (var i in this.data) {
        for (var j in this.value) {
          if (this.value[j].key === this.data[i].key) {
            this.checkFlag[i] = true
          }
        }
      }
    }
  },
  created () {
    this.initiateReturnValue(this.value)
  }
}
</script>

<style>

</style>
