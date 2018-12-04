<template>
  <transition
    :name="effect">
    <div
      v-modal-auto-set-z-index
      v-if="value"
      :class="effect"
      class="-slp-modal"
      name="-slp-modal"
      @click="onClose('outside')">
      <div
        class="-slp-modal__container"
        @click.stop>
        <div
          v-if="quit"
          class="-slp-modal__close-button">
          <button
            class="-slp-modal--cursor"
            @click.prevent="onClose"/>
        </div>
        <div
          class="-slp-modal__contents">
          <slot/>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'SlpModal',
  directives: {
    'modal-auto-set-z-index': {
      bind: function (el, binding, vnode) {
        let createdModal = document.getElementsByName('-slp-modal')
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
  },
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
      default: null
    }
  },
  data () {
    return {
      action: false
    }
  },
  computed: {
    effect () {
      return this.moveToTop ? '-slp-modal--move-top'
        : this.moveToRight ? '-slp-modal--move-right'
          : this.moveToBottom ? '-slp-modal--move-bottom'
            : this.moveToLeft ? '-slp-modal--move-left'
              : '-slp-modal--fade'
    }
  },
  methods: {
    onClose (param) {
      console.log('onClose ' + param)
      if (param === 'outside' && this.preventOutsideClose) {
        return
      }
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style>
.-slp-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}

.-slp-modal__container {
    position: relative;
    background-color: #ffffff;
    border-radius: 2px;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
}

.-slp-modal__close-button,
.-slp-modal__contents {
    overflow-y: auto;
}

.-slp-modal__close-button {
    position: absolute;
    right: 5px;
    top: 5px;
}

.-slp-modal--cursor {
    cursor: pointer;
    float:right;
    display:block;
    width:15px;
    height:50px;
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjAyMDVFQ0M2MzEyMTFFODgwMDFGOEMzNkEyOUYzOTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjAyMDVFQ0Q2MzEyMTFFODgwMDFGOEMzNkEyOUYzOTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMDIwNUVDQTYzMTIxMUU4ODAwMUY4QzM2QTI5RjM5NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMDIwNUVDQjYzMTIxMUU4ODAwMUY4QzM2QTI5RjM5NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu2AoLMAAAGiSURBVHjaxJc7TgMxEEDHu9twCMQRECUSgoYip+AMpoMKylBl7wESKCcAKcUehTZlCmxmEntlNrbXX+HGn43yXsaz45hdXt9B2zRAjTF2I6T8goqtQYZUjB8hoDGeLUHKT+x5RT5XjKVeaE/PzsnqgQE87aMAsJAAWxwOpeH4a1eKcYXdDiOxIYGLlrFX85MVJEa4wbjF7V6TwDdu/paglSSO4NQEwD1G4GO/BZh8A8EqSDjh2PUoAFqA1ktLeOE0ngqUlJiFuwRKSATBfQI5EsHwOYEUiSh4iECMRDRcC3QBCdULquETAM2FMY6F69YFZrVVAiOxssUuFK7kg1uvvvgQvoNAFnw8jDw5YM0J7Bcl4JQDTUp9tcFl6v+DEuVVb4d6xmsJeOHw943gpQXcR6qRmCkSXQ5cJ9xMnehz3oLQCpd0dsyV4tjyGi3hE+CJ5TVKwiXAc2p7jIRNIBceJTEVKAUPljAFSsODJFBg0BeT9wrwWYnxYoIR2NFNpQLcKYHzR4zAm74bbnDthO5sFeBHEti/4PyZcoD99/X8V4ABAHvwOiZaD6AEAAAAAElFTkSuQmCC) no-repeat 0 50% / 16px;
    text-indent:-9999px;
    padding: 0 13px;
}

.-slp-modal--move-bottom,
.-slp-modal--move-left {
    bottom: 0;
    left: 0;
}

.-slp-modal--move-top,
.-slp-modal--fade {
    top: 0;
    left: 0;
}

.-slp-modal--move-right {
    right: 0;
    top: 0;
}

.-slp-modal--fade-enter-active,
.-slp-modal--fade-leave-active {
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.-slp-modal--fade-enter,
.-slp-modal--fade-leave-to {
    opacity: 0;
}

.-slp-modal--move-bottom-enter-active,
.-slp-modal--move-bottom-leave-active {
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.-slp-modal--move-bottom-enter,
.-slp-modal--move-bottom-leave-to {
    bottom: 100%;
}

.-slp-modal--move-top-enter-active,
.-slp-modal--move-top-leave-active {
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.-slp-modal--move-top-enter,
.-slp-modal--move-top-leave-to {
    top: 100%;
}

.-slp-modal--move-right-enter-active,
.-slp-modal--move-right-leave-active {
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.-slp-modal--move-right-enter,
.-slp-modal--move-right-leave-to {
    right: 100%;
}

.-slp-modal--move-left-enter-active,
.-slp-modal--move-left-leave-active {
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.-slp-modal--move-left-enter,
.-slp-modal--move-left-leave-to {
    left: 100%;
}

</style>
