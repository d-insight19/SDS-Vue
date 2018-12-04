<template>
    <div class="-fdp-tag">
        <label v-if="tagType === 'small'" class="-fdp-tag--small" :style="tagColor">{{tagLabel}}</label>
        <label v-else class="-fdp-tag--big" :style="tagColor">{{tagLabel}}</label>
    </div>

</template>

<script>
export default {
  name: 'fdp-tag',
  props: {
    tagType: {type: String, required: true},
    tagLabel: {type: String, required: true},
    tagColor: {type: String}
  }
}
</script>

<style>

</style>
