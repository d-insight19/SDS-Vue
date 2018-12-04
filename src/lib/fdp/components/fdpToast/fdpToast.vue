<template>
  <div class="-fdp-toast">
    <fdp-toast-item v-for="(toast) in localToastArray" :key="toast.key" @change="onChange"
                v-model="toast.isShow" :content="toast.content"></fdp-toast-item>
  </div>
</template>

<script>
import fdpToastItem from './fdpToastItem'

export default {
  name: 'fdp-toast',
  components: {
    fdpToastItem
  },
  data () {
    return {
      localToastArray: [],
      uuid: 0
    }
  },
  methods: {
    makeToast (message) {
      this.localToastArray.push({ key: this.uuid++, content: message })
    },
    onChange (uid) {
      this.localToastArray.shift()
    }
  }
}
</script>
