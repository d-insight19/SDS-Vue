<template>
  <select
    v-model="selected"
    class="select"
    @change="optionSelect">
    <option
      v-if="!!placeholder"
      value=""
      disabled>{{ placeholder }}</option>
    <option
      v-for="item in optionList"
      :key="item.id"
    > {{ item.value }}</option>
  </select>
</template>

<script>
export default {
  name: 'SlpSelect',
  props: {
    optionList: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: null
    },
    defaultIndex: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {
      selected: ''
    }
  },
  created: function () {
    if (this.placeholder == null) {
      this.selected = this.optionList[Number(this.defaultIndex)].value
    }
  },
  methods: {
    optionSelect: function () {
      console.log('option selected')
      this.$emit('optionChange', this.selected)
    }
  }
}
</script>
