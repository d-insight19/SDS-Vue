<template>
  <date-picker v-model="state" :placeholder="placeholder" :format="format">
  </date-picker>
</template>

<script>
import DatePicker from 'vuejs-datepicker'
export default {
  name: 'fdp-date-picker',
  components: {DatePicker},
  props: {
    value: { type: String, default: new Date().toISOString() },
    format: { type: String, default: 'yyyy-MM-dd' },
    placeholder: { type: String }
  },
  data () {
    return {
      state: this.value ? new Date(this.value) : this.placeholder ? '' : new Date()
    }
  },
  watch: {
    state: function () {
      this.$emit('input', this.state.toISOString())
    }
  },
  mounted: function () {
    this.$emit('input', this.state.toISOString())
  }
}
</script>

<style>

</style>
