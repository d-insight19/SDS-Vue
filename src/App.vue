<template>
  <div id="app" class="app">
      <router-view></router-view>
  </div>
</template>

<script>
import router from './core/router'
export default {
  name: 'App',
  data () {
    return {}
  },
  router: router
}
</script>
<style scoped>
.app{
  width: 100%;
  height: 100%;
}
</style>
