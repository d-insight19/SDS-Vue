<template>
  <button
    :class="classObject"
    :disabled="disabled"
    class="btn"
    type="button"
    @click="onClick">{{ title }}
    <slot/>
  </button>
</template>

<script>
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
    classObject: {
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
