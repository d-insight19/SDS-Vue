<template>
  <transition
    :enter-active-class="transition.enter"
    :leave-active-class="transition.leave">
    <div
      v-show="isActive"
      :class="[type, position]"
      class="toast">
      <div class="in">{{ message }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    type: {
      type: String,
      default: undefined
    },
    message: {
      type: String,
      default: undefined
    },
    duration: {
      type: Number,
      default: 4000
    },
    queue: {
      type: Boolean,
      default: undefined
    },
    position: {
      type: String,
      default: 'is-bottom',
      validator (value) {
        return [
          'is-top-right',
          'is-top',
          'is-top-left',
          'is-bottom-right',
          'is-bottom',
          'is-bottom-left'
        ].indexOf(value) > -1
      }
    },
    container: {
      type: String,
      default: undefined
    }
  },
  data () {
    return {
      isActive: false,
      parentTop: null,
      parentBottom: null,
      newContainer: this.container,
      newDuration: this.duration
    }
  },
  computed: {
    correctParent () {
      switch (this.position) {
        case 'is-top-right':
        case 'is-top':
        case 'is-top-left':
          return this.parentTop

        case 'is-bottom-right':
        case 'is-bottom':
        case 'is-bottom-left':
          return this.parentBottom
      }
    },
    transition () {
      switch (this.position) {
        case 'is-top-right':
        case 'is-top':
        case 'is-top-left':
          return {
            enter: 'fadeInDown',
            leave: 'fadeOut'
          }
        case 'is-bottom-right':
        case 'is-bottom':
        case 'is-bottom-left':
          return {
            enter: 'fadeInUp',
            leave: 'fadeOut'
          }
      }
    }
  },
  beforeMount () {
    this.setupContainer()
  },
  mounted () {
    this.showNotice()
  },
  methods: {
    shouldQueue () {
      const queue = this.queue !== undefined ? this.queue : true

      if (!queue) return false

      return (
        this.parentTop.childElementCount > 0 ||
                this.parentBottom.childElementCount > 0
      )
    },

    close () {
      clearTimeout(this.timer)
      this.isActive = false

      // Timeout for the animation complete before destroying
      setTimeout(() => {
        this.$destroy()
        const el = this.$el
        if (typeof el.remove !== 'undefined') {
          el.remove()
        } else if (typeof el.parentNode !== 'undefined') {
          el.parentNode.removeChild(el)
        }
      }, 150)
    },

    showNotice () {
      if (this.shouldQueue()) {
        // Call recursively if should queue
        setTimeout(() => this.showNotice(), 250)
        return
      }
      this.correctParent.insertAdjacentElement('afterbegin', this.$el)
      this.isActive = true

      if (!this.indefinite) {
        this.timer = setTimeout(() => this.close(), this.newDuration)
      }
    },

    setupContainer () {
      this.parentTop = document.querySelector('.notices.is-top')
      this.parentBottom = document.querySelector('.notices.is-bottom')

      if (this.parentTop && this.parentBottom) return

      if (!this.parentTop) {
        this.parentTop = document.createElement('div')
        this.parentTop.className = 'notices is-top'
      }

      if (!this.parentBottom) {
        this.parentBottom = document.createElement('div')
        this.parentBottom.className = 'notices is-bottom'
      }

      const container = document.querySelector(this.newContainer) || document.body

      container.appendChild(this.parentTop)
      container.appendChild(this.parentBottom)

      if (this.newContainer) {
        this.parentTop.classList.add('has-custom-container')
        this.parentBottom.classList.add('has-custom-container')
      }
    }
  }
}
</script>
