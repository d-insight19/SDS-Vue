<template>
  <div >
    <div class="layerWrap">
      <div class="ly-in">
        <div class="ly-hd">
          {{ title }}
        </div>
        <div class="ly-body">
          <slot/>
        </div>
        <div
          class="ly-btn">
          <button
            v-if="!!cancelInput"
            type="button"
            class="btn"
            @click="cancelClick">{{ cancelInput }}</button>
          <button
            v-if="!!confirmInput"
            type="button"
            class="btn color_clr2"
            @click="confirmClick">{{ confirmInput }}</button>
        </div>
      </div>
    </div>
    <div id="dim"/>
  </div>
</template>

<script>
export default {
  name: 'SlpPopup',
  props: {
    title: {
      type: String,
      default: null
    },
    cancelInput: {
      type: String,
      default: null
    },
    confirmInput: {
      type: String,
      default: null
    }
  },
  data () {
    return {
    }
  },
  methods: {
    cancelClick () {
      this.$emit('cancelClick')
    },
    confirmClick () {
      this.$emit('confirmClick')
    }
  }
}
</script>
