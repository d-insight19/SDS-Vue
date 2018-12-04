<template>
    <div v-show="!hideIndicator">
        <div class="-fdp-loading-indicator--load-img"/>
    </div>
</template>

<script>
export default {
  name: 'fdp-loading-indicator',
  props: {
    hide: {type: Boolean, default: true}
  },
  data () {
    return {
      hideIndicator: this.hide
    }
  },
  mounted () {
    if (!this.hide) {
      this.startIndicator()
    } else {
      this.killIndicator()
    }
  },
  methods: {
    killIndicator () {
      this.hideIndicator = true
    },
    startIndicator () {
      this.hideIndicator = false
    }
  }

}
</script>
