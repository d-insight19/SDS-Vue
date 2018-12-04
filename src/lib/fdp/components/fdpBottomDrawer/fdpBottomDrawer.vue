<template>
  <div :class="['-fdp-bottom-drawer' , {'-fdp-bottom-drawer--up': isUp}]">
    <div class="-fdp-bottom-drawer__header">
      <slot name="drawerHeader"></slot>
    </div>
    <button type="button" :class="['-fdp-bottom-drawer__handle-button', {'-fdp-bottom-drawer__handle-button--up': isUp}]"
            @click="bottomClicked"></button>
    <slot name="drawerBody"></slot>
  </div>
</template>

<script>
export default {
  name: 'fdp-bottom-drawer',
  data () {
    return {
      isUp: false
    }
  },
  methods: {
    bottomClicked () {
      this.isUp = !this.isUp
    }
  }
}
</script>

<style>

</style>
