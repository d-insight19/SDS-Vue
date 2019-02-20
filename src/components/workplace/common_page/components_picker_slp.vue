<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="sample_page">

        <h3> Date Picker </h3>
        <slp-picker ref="datePicker" :data="data" :change="dataChange" />

        <br/>
        <br/>

        <h3> Time Picker </h3>
        <div style="height: 100px; width: 60%">
          <div class="flex-50"><slp-picker ref="hoursPicker" :data="hours" :change="dataChanged" /></div>
          <div class="flex-50"><slp-picker ref="minutesPicker" :data="minutes" :change="dataChanged" /></div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>

        <h3> Pop-up Picker </h3>

        <button type="button" class="btn ld" @click="() => {showConfirm = true}">버튼 (show/hide)</button>

        <slp-popup v-if="showConfirm" title="시간 선택" cancelInput="취소" confirmInput="확인" @cancelClick="cancelPopup" @confirmClick="confirmPopup">
            <!-- popup body -->
            <div style="height: 100px; width: 48%">
              <div class="flex-50"><slp-picker ref="hoursPicker" :data="hours" :change="dataChanged" /></div>
              <div class="flex-50"><slp-picker ref="minutesPicker" :data="minutes" :change="dataChanged" /></div>
            </div>
        </slp-popup>

        <br/>
        <br/>

        <h3> Full Pop-up </h3>
        <button type="button" class="btn ld" @click="() => {showPopup = true}">버튼 (show/hide)</button>

        <slp-date-picker
          ref="date"
          :restday="restday"
          :workday="workday"
          :display="showPopup"
          :custom="dataPopup"
          @select="select"
          @cancel="cancel"
          @selectDisabled="selectErr"
          @viewport="viewport"
          @click="click"
          @clickStart="clickStart"
          @clickEnd="clickEnd"
          autoComplete/>

      </div>
    </div>
    <!-- //wrap -->
</template>

<script>
/* eslint-disable */
export default {
  name: 'components_picker',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    const nowYear = (new Date()).getFullYear()
    const years = []
    for (let i = 1991; i <= nowYear; i++) {
        years.push(i)
    }

    return {
      showConfirm: false,
      showPopup: false,
      startDate: '',
      endDate: '',
      restday: [],
      workday: ['2018-9-29', '2018-9-30'],
      dataPopup: ['￥1300', '￥1345', { highlight: true, text: '￥999' }],
      data: [
        {
          currentIndex: parseInt((nowYear - 1991)),
          flex: 3,
          list: years,
          textAlign: 'center',
          className: 'row-group'
        },
        {
          currentIndex: 8,
          flex: 3,
          list: [...Array(12)].map((m, i) => i + 1),
          textAlign: 'center',
          className: 'row-group'
        },
        {
          currentIndex: 1,
          flex: 2,
          list: [...Array(30)].map((d, i) => i + 1),
          onClick: this.clickOnDay,
          textAlign: 'center',
          className: 'item-group'
        }
      ],
      hours: [
        {
          currentIndex: 1,
          flex: 1,
          list: [...Array(24)].map((m, i) => (i + 1) > 9 ? "" + (i + 1) : "0" + (i + 1)) ,
          textAlign: 'center',
          className: 'hours-group'
        }
      ],
      minutes: [
        {
          currentIndex: 1,
          flex: 1,
          list: [...Array(60)].map((m, i) => i > 10 ? "" + i : "0" + i),
          textAlign: 'center',
          className: 'minutes-group'
        }
      ]
    }
  },
  /* vue function */
  methods: {
    select({ start, end, range }) {
      this.startDate = start.odate
      this.endDate = end.odate
      console.log('range', range)
      this.showPopup = false
    },
    cancel() {
      this.showPopup = false
    },
    selectErr(date) {
      console.log('date', date)
      Snackbars(`无法选择该范围：${date.date}为${date.custom.dec}`)
    },
    viewport({ year, month, date }) {
      console.log('Now in line of sight is:', `${year}-${month}`)
    },
    click(target, start) {
      console.log('click', target)
      console.log('click', start)
    },
    clickStart(tar) {
      console.log('start', tar)
      // set the border color of day after a aweek is orange
      const time = new Date(tar.date).getTime() + 7 * 24 * 60 * 60 * 1000
      const date = new Date(time).toJSON().split('T')[0]
      this.$refs.date.setData({ bdcolor: 'orange' }, date)
    },
    clickEnd(tar) {
      console.log('end', tar)
    },
    isLeapYear (year) {
      return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
    },
    dataChange (gIndex, iIndex) {
      console.info('list', gIndex, iIndex)
      const ciList = this.$refs.datePicker.getCurrentIndexList()
      if (gIndex === 0 || gIndex === 1) { // year or month changed
        let currentIndex = 15
        let monthCount = 30
        let month = iIndex + 1 // month
        if (gIndex === 0) { // year
          month = this.data[1].list[ciList[1]]
        }
        switch (month) {
          case 2:
            let selectedYear = this.data[0].list[ciList[0]] // month
            if (gIndex === 0) { // year
              selectedYear = this.data[0].list[iIndex]
            }
            let isLeapYear = false
            if (this.isLeapYear(selectedYear)) {
              isLeapYear = true
            }
            monthCount = 28
            currentIndex = 14
            if (isLeapYear) {
              monthCount = 29
              currentIndex = 15
            }
            break
          case 4:
          case 6:
          case 9:
          case 11:
            monthCount = 30
            currentIndex = 15
            break
          default:
            monthCount = 31
            currentIndex = 16
        }
        const list = [...Array(monthCount)].map((d, i) => i + 1)
        this.$refs.datePicker.setGroupData(2, { ...this.data[2], ...{ currentIndex, list }})
      }
    },
    dataChanged (gIndex, iIndex) {
      console.info('dataChanged:', gIndex, iIndex)
    },
    clickOnDay (gIndex, iIndex) {
      window.alert('Clicked day: ' + this.data[gIndex].list[iIndex])
    },
    confirm () {
      const ciList = this.$refs.datePicker.getCurrentIndexList()
      const year = this.data[0].list[ciList[0]]
      const month = this.data[1].list[ciList[1]]
      const day = this.data[2].list[ciList[2]]
      window.alert(
        year + ' / ' + month + ' / ' + day
      )
    },
    cancelPopup: function () {
      this.showConfirm = false
    },
    confirmPopup: function () {
      this.showConfirm = false
    }
  }
}
</script>

<style scoped>
.flex-50 {
  float: left;
  width: 50%;
  padding:10px;
}
</style>
