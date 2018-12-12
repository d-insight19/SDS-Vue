<template>
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
</template>

<script>
export default {
  name: 'SlpSelect',
  props: {
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
