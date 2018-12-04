<template>
    <button
      class="btn"
      :class="btnClassObject"
      type="button"
      :disabled="disabled"
      @click="onClick">{{ title }}
      <slot></slot>
    </button>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SlpButton',
  props: {
    title: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnClassObject: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onClick: function () {
      this.$emit('onClick')
    }
  }
}
</script>
