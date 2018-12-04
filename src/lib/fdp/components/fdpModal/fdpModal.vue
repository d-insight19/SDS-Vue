<template>
  <transition :name="effect" id="transition2">
    <div v-if="value"
         class="-fdp-modal"
         :class="effect"
         name="-fdp-modal"
         @click="onClose('outside')"
         v-modal-auto-set-z-index
         id="div2">
      <div class="-fdp-modal__container" @click.stop id="div3">
        <div class="-fdp-modal__close-button" id="div4">
          <button class="-fdp-modal--cursor" @click.prevent="onClose"></button>
        </div>
        <div class="-fdp-modal__contents" id="div5">
          <slot id="slot2"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'fdp-modal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    moveToTop: {
      type: Boolean,
      default: false
    },
    moveToRight: {
      type: Boolean,
      default: false
    },
    moveToBottom: {
      type: Boolean,
      default: false
    },
    moveToLeft: {
      type: Boolean,
      default: false
    },
    quit: {
      type: Boolean,
      default: false
    },
    preventOutsideClose: {
      type: Boolean,
      default: false
    },
    modalType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      action: false
    }
  },
  computed: {
    effect () {
      return this.moveToTop ? '-fdp-modal--move-top'
        : this.moveToRight ? '-fdp-modal--move-right'
          : this.moveToBottom ? '-fdp-modal--move-bottom'
            : this.moveToLeft ? '-fdp-modal--move-left'
              : '-fdp-modal--fade'
    }
  },
  methods: {
    onClose (param) {
      if (param === 'outside' && this.preventOutsideClose) {
        return
      }
      this.$emit('input', !this.value)
    }
  },
  directives: {
    'modal-auto-set-z-index': {
      bind: function (el, binding, vnode) {
        let createdModal = document.getElementsByName('-fdp-modal')
        let maxZIndex = 2000
        createdModal.forEach((m) => {
          maxZIndex = (maxZIndex < m.style.zIndex) ? m.style.zIndex : maxZIndex
        })
        if (vnode.context.$props.modalType === 'popup') {
          maxZIndex = maxZIndex - 100
        }
        el.style.zIndex = Number(maxZIndex) + 2
      }
    }
  }
}
</script>

<style>
</style>
