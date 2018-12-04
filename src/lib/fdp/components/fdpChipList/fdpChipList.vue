<template>
  <div>
    <fdp-chip v-for="(item,idx) in value" :key="idx" :chip-label="item.chipLabel" :chip-style="item.chipStyle" @chip-close="removedIdx(idx)" chip-close-fn></fdp-chip>
  </div>
</template>

<script>
export default {
  name: 'fdp-chip-list',
  methods: {
    removedIdx (idx) {
      this.$emit('chip-list-remove-activated', idx)
    }
  },
  props: {
    value: {type: Array, required: true, default () { return [] }}
  }
}
</script>
