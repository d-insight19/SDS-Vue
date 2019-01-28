<template>
  <div
    ref="slider"
    :class="[direction, {'dragging': dragging}]"
    class="slider"
    @touchstart="_onTouchStart"
    @mousedown="_onTouchStart"
    @wheel="_onWheel">
    <div
      ref="sliderWrap"
      :style="{
        'transform' : 'translate3d(' + translateX + 'px,' + translateY + 'px, 0)',
        'transition-duration': transitionDuration + 'ms'
      }"
      class="slider-wrap"
      @transitionend="_onTransitionEnd">
      <slot/>
    </div>
    <div
      v-show="paginationVisible"
      class="slider-pagination">
      <span
        v-for="(slide, index) in slideEls"
        :class="{'active': index+1===currentPage}"
        :key="index"
        class="slider-pagination-bullet"
        @click="paginationClickable && setPage(index+1)"/>
    </div>
  </div>
</template>

<script>
const VERTICAL = 'vertical'
const HORIZONTAL = 'horizontal'
const LEFT = 'left'
const RIGHT = 'right'

export default {
  name: 'SlpSlider',
  props: {
    align: {
      type: String,
      default: LEFT,
      validator: (value) => [LEFT, RIGHT].indexOf(value) > -1
    },
    auto: {
      type: Boolean,
      default: false
    },
    asyncData: {
      type: [Boolean, Array],
      default: false
    },
    curPage: {
      type: Number,
      default: 1
    },
    direction: {
      type: String,
      default: VERTICAL,
      validator: (value) => [VERTICAL, HORIZONTAL].indexOf(value) > -1
    },
    dragEnable: {
      type: Boolean,
      default: true
    },
    mousewheelControl: {
      type: Boolean,
      default: true
    },
    performanceMode: {
      type: Boolean,
      default: true
    },
    paginationVisible: {
      type: Boolean,
      default: false
    },
    paginationClickable: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 3000
    },
    speed: {
      type: Number,
      default: 500
    }
  },
  data () {
    return {
      currentPage: this.curPage,
      lastPage: 1,
      translateX: 0,
      translateY: 0,
      startTranslate: 0,
      delta: 0,
      dragging: false,
      startPos: null,
      transitioning: false,
      slideEls: [],
      translateOffset: 0,
      transitionDuration: 0,
      timer: null,
      cloneEl: []
    }
  },
  watch: {
    auto (value) {
      if (value) {
        this._autoMove()
      } else {
        this._clearAutoMove()
      }
    }
  },
  mounted () {
    this._onTouchMove = this._onTouchMove.bind(this)
    this._onTouchEnd = this._onTouchEnd.bind(this)
    this.$watch('currentPage', val => this.$emit('update:curPage', val))
    this.$watch('asyncData', this._sliderInit, { deep: true, immediate: true })
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    _setTranslateOffset (el) {
      const propName = this.isHorizontal() ? 'clientWidth' : 'clientHeight'
      this.translateOffset = -el[propName]
    },
    _sliderInit (newAsyncData, oldAsyncData) {
      if (!newAsyncData || (Array.isArray(newAsyncData) && newAsyncData.length > 0)) {
        if (this.loop) {
          this.cloneEl.forEach(el => el.remove())

          this.$nextTick(() => {
            this._createLoop()
            this._revert(true)
          })
        } else {
          this._revert()
        }

        if (this.auto) {
          this._autoMove()
        }

        this.slideEls = [].map.call(this.$refs.sliderWrap.children, el => el)

        window.addEventListener('resize', () => { // resize after recalc in offset(fix: issue#8)
          this.loop && this._setTranslateOffset(this.slideEls[0])
          this._setTranslate(this._getTranslateOfPage(this.currentPage))
        })
      }
    },
    next () {
      const page = this.currentPage
      if (page < this.slideEls.length || this.loop) {
        this.setPage(page + 1)
      } else {
        this._revert()
      }
    },
    prev () {
      const page = this.currentPage
      if (page > 1 || this.loop) {
        this.setPage(page - 1)
      } else {
        this._revert()
      }
    },
    setPage (page, noAnimation) {
      this.lastPage = this.currentPage
      if (page === 0) {
        this.currentPage = this.slideEls.length
      } else if (page === this.slideEls.length + 1) {
        this.currentPage = 1
      } else {
        this.currentPage = page
      }
      if (this.loop) {
        if (this.delta === 0) {
          this._setTranslate(this._getTranslateOfPage(this.lastPage))
        }
        setTimeout(() => {
          this._setTranslate(this._getTranslateOfPage(page))
          if (noAnimation) return
          this._onTransitionStart()
        }, 0)
      } else {
        this._setTranslate(this._getTranslateOfPage(page))
        if (noAnimation) return
        this._onTransitionStart()
      }
    },
    isHorizontal () {
      return this.direction === HORIZONTAL
    },
    isVertical () {
      return this.direction === VERTICAL
    },
    _onTouchStart (e) {
      if (!this.dragEnable) return

      this.startPos = this._getTouchPos(e)
      this.delta = 0
      this.startTranslate = this._getTranslateOfPage(this.currentPage)
      this.startTime = new Date().getTime()
      this.dragging = true
      this.transitionDuration = 0

      document.addEventListener('touchmove', this._onTouchMove, false)
      document.addEventListener('touchend', this._onTouchEnd, false)
      document.addEventListener('mousemove', this._onTouchMove, false)
      document.addEventListener('mouseup', this._onTouchEnd, false)
    },
    _onTouchMove (e) {
      this.delta = this._getTouchPos(e) - this.startPos

      if (this.performanceMode) {
        this._setTranslate(this.startTranslate + this.delta)
        this.$emit('slider-move', this._getTranslate())
      }

      if (this.isVertical() || (this.isHorizontal() && Math.abs(this.delta) > 0)) {
        e.preventDefault()
      }
    },
    _onTouchEnd (e) {
      this.dragging = false
      this.transitionDuration = this.speed

      const isQuickAction = new Date().getTime() - this.startTime < 1000

      if (this.delta < -100 || (isQuickAction && this.delta < -15)) {
        this.next()
      } else if (this.delta > 100 || (isQuickAction && this.delta > 15)) {
        this.prev()
      } else {
        this._revert()
      }

      document.removeEventListener('touchmove', this._onTouchMove)
      document.removeEventListener('touchend', this._onTouchEnd)
      document.removeEventListener('mousemove', this._onTouchMove)
      document.removeEventListener('mouseup', this._onTouchEnd)
    },
    _onWheel (e) {
      if (this.mousewheelControl) {
        // TODO Support apple magic mouse and trackpad.
        if (!this.transitioning) {
          if (e.deltaY > 0) {
            this.next()
          } else {
            this.prev()
          }
        }
        if (this._isPageChanged()) e.preventDefault()
      }
    },
    _revert (noAnimation) {
      this.setPage(this.currentPage, noAnimation)
    },
    _getTouchPos (e) {
      const key = this.isHorizontal() ? 'pageX' : 'pageY'
      return e.changedTouches ? e.changedTouches[0][key] : e[key]
    },
    _onTransitionStart () {
      this.transitioning = true
      this.transitionDuration = this.speed
      if (this._isPageChanged()) {
        this.$emit('slide-change-start', this.currentPage, this.$refs.slider)
      } else {
        this.$emit('slide-revert-start', this.currentPage, this.$refs.slider)
      }
    },
    _onTransitionEnd () {
      this.transitioning = false
      this.transitionDuration = 0
      this.delta = 0
      if (this._isPageChanged()) {
        this.$emit('slide-change-end', this.currentPage, this.$refs.slider)
      } else {
        this.$emit('slide-revert-end', this.currentPage, this.$refs.slider)
      }
    },
    _isPageChanged () {
      return this.lastPage !== this.currentPage
    },
    _setTranslate (value) {
      const translateName = this.isHorizontal() ? 'translateX' : 'translateY'
      this[translateName] = value
    },
    _getTranslate () {
      const translateName = this.isHorizontal() ? 'translateX' : 'translateY'
      return this[translateName]
    },
    _getTranslateOfPage (page) {
      if (page === 0) return 0
      const propName = this.isHorizontal() ? 'clientWidth' : 'clientHeight'
      return -[].reduce.call(this.slideEls, (total, el, i) => {
        if (this.align === 'left') {
          return i > page - 2 ? total : total + el[propName]
        } else if (this.align === 'right') {
          return i === 0 || i >= page ? total : total + el[propName]
        }
      }, 0) + this.translateOffset
    },
    _autoMove () {
      clearInterval(this.timer)

      if (this.loop) {
        this.timer = setInterval(this.next, this.interval)
      } else {
        let i = 1
        const size = this.$el.children.length
        this.timer = setInterval(() => {
          this.setPage(i = i < size ? (i + 1) : 1)
        }, this.interval)
      }
    },
    _clearAutoMove () {
      clearInterval(this.timer)
      this.timer = null
    },
    _createLoop () {
      const sliderWrapEl = this.$refs.sliderWrap
      const duplicateFirstChild = sliderWrapEl.firstElementChild.cloneNode(true)
      const duplicateLastChild = sliderWrapEl.lastElementChild.cloneNode(true)

      sliderWrapEl.insertBefore(duplicateLastChild, sliderWrapEl.firstElementChild)
      sliderWrapEl.appendChild(duplicateFirstChild)

      this.cloneEl = [duplicateFirstChild, duplicateLastChild]
      this._setTranslateOffset(duplicateLastChild)
    }
  }
}
</script>

<style>
.slider {
  position: relative;
  overflow: hidden;
}
.slider .slider-wrap {
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 0ms ease;
}
.slider .slider-wrap > div {
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}
.slider.horizontal .slider-wrap {
  flex-direction: row;
}
.slider.vertical .slider-wrap {
  flex-direction: column;
}
.slider .slider-pagination {
  position: absolute;
}
.slider .slider-pagination .slider-pagination-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #000000;
  opacity: .2;
  transition: all .5s ease;
}
.slider .slider-pagination .slider-pagination-bullet.active {
  background: #007aff;
  opacity: 1;
}
.slider.vertical .slider-pagination {
  right: 10px;
  top: 50%;
  transform: translate3d(0,-50%,0);
}
.slider.vertical .slider-pagination .slider-pagination-bullet {
  display: block;
  margin: 6px 0;
}
.slider.horizontal .slider-pagination {
  bottom: 10px;
  width: 100%;
  text-align: center;
}
.slider.horizontal .slider-pagination .slider-pagination-bullet {
  display: inline-block;
  margin: 0 3px;
}
</style>
