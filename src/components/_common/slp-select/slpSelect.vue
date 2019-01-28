<template>
  <div>
    <select
      ref="select"
      v-model="computedValue"
      :class="computedClass"
      :style="{'width': width, 'height': height}"
      v-bind="$attrs"
      class="select"
      @focus="$emit('focus', $event)">
      <template v-if="placeholder">
        <option
          v-if="!computedValue"
          :value="undefined"
          selected
          disabled
          hidden>
          {{ placeholder }}
        </option>
      </template>
      <slot/>
    </select>
    <p
      v-if="error && message"
      class="error-msg">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'SlpSelect',
  props: {
    value: {
      type: [String, Number, Boolean, Object, Function],
      default: undefined
    },
    width: {
      type: String,
      default: null
    },
    height: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    error: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      selected: this.value
    }
  },
  computed: {
    computedValue: {
      get () {
        return this.selected
      },
      set (value) {
        this.selected = value
        this.$emit('input', value)
      }
    },
    computedClass () {
      return {
        'err': this.error
      }
    }
  },
  watch: {
    value (value) {
      this.selected = value
    }
  },
  created: function () {
  }
}
</script>
