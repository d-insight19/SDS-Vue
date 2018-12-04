<template>
  <div v-if="getLoading.isShow" class="-fdp-loading-global">
    <div class="-fdp-loading-indicator--load-img"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'fdp-loading-global',
  computed: {
    ...mapGetters(['getLoading'])
  }
}
</script>
<style>

</style>
