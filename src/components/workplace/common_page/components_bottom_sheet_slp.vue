<template>
  <!-- wrap -->
  <div>
    <div class="">
      <button
        type="button"
        title="title"
        class="btn md"
        @click="bottomsheetToggle">버튼( Default )</button>
    </div>

    <slp-bottom-sheet
      :show="bottomsheetFlag"
      :list="list"
      v-model="selected"
      @show="bottomsheetToggle"
      @selected="change"/>
  </div>
  <!-- //wrap -->
</template>

<script>
export default {
  name: 'ComponentsBottomSheet',
  /* vue data */
  data () {
    return {
      bottomsheetFlag: false,
      selected: 0,
      list: [
        {title: '교육차수 1'},
        {title: '교육차수 2'},
        {title: '교육차수 3'},
        {title: '교육차수 4'},
        {title: '교육차수 5'},
        {title: '교육차수 6'},
        {title: '교육차수 7'},
        {title: '교육차수 8'}
      ]
    }
  },
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue function */
  methods: {
    bottomsheetToggle () {
      this.bottomsheetFlag = !this.bottomsheetFlag
    },
    change (value) {
      this.selected = value
    }
  }
}
</script>
