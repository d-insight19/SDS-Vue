<template>
  <div class="-slp-toast">
    <slp-toast-item
      v-for="(toast) in localToastArray"
      :key="toast.key"
      v-model="toast.isShow"
      :content="toast.content"
      :duration="duration"
      @change="onChange"
      @isDestroyed="changeState"/>
  </div>
</template>

<script>
import slpToastItem from './slpToastItem'

export default {
  name: 'SlpToast',
  components: {
    slpToastItem
  },
  props: {
    duration: {
      type: Number,
      default: 3500
    }
  },
  data () {
    return {
      localToastArray: [],
      uuid: 0,
      is_alive: false
    }
  },
  methods: {
    makeToast (message) {
      if (!this.is_alive) this.localToastArray.unshift({ key: this.uuid++, content: message })
      this.is_alive = true
    },
    onChange (uid) {
      this.localToastArray.pop()
    },
    changeState () {
      this.is_alive = false
    }
  }
}
</script>

<style scoped>
.-slp-toast {
    position: fixed;
    left: calc(50% - 40%);
    width: 80vw;
    bottom: 0vh;
    z-index: 10;
}

.-slp-toast-item{
    display: block;
    position: relative;
    bottom: 3vh;
    margin-bottom: 10px;
    text-align: left;
    font-weight: bold;
    background-color: rgba(34,34,34,0.96);
    -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    border: solid 1px rgba(0, 0, 0, 0.1);
    z-index: 999;
    padding: 17px 20px;
    color:white;
}

.-slp-toast-item__content {
    color:#fff;
    margin: 20px;
}

.-slp-toast-item-fade-enter-active {
    -webkit-transition: opacity .3s, left .3s, right .3s, top 0.4s, bottom .3s, -webkit-transform .3s;
    transition: opacity .3s, left .3s, right .3s, top 0.4s, bottom .3s, -webkit-transform .3s;
    transition: opacity .3s, transform .3s, left .3s, right .3s, top 0.4s, bottom .3s;
    transition: opacity .3s, transform .3s, left .3s, right .3s, top 0.4s, bottom .3s, -webkit-transform .3s;
}

.-slp-toast-item-fade-leave-active {
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}

.-slp-toast-item-fade-enter {
    -webkit-transform: translateY(100%);
            transform: translateY(100%);
}

.-slp-toast-item-fade-leave-to {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 0;
}
</style>
