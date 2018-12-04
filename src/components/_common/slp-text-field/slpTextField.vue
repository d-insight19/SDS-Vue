<template>
  <input
    :type="inputType"
    :placeholder="placeholder">
</template>
/* eslint-disable */
<script>
export default {
  name: 'SlpTextField',
  props: {
    placeholder: {
      type: String,
      default: null
    },
    password: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
    }
  },
  computed: {
    inputType () {
      if (this.password) {
        return 'password'
      } else {
        return 'text'
      }
    }
  }
}
</script>

<style>
</style>
