<template>
    <div :class="['-fdp-validator', slotClass]">
        <slot></slot>
        <input v-model="val" v-validate="rules"  :data-vv-as="displayName" class="-fdp-validator__input--hidden"
               :name="name" v-show="false" />
        <span class="-fdp-validator__error-message">{{errors.first(parseScope)}}</span>
    </div>
</template>

<script>
export default {
  name: 'fdp-validator',
  inject: ['$validator'],
  props: {
    value: {
      type: [String, Array],
      required: true
    },
    rules: {
      type: [String, Object],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    displayName: {
      type: String
    },
    block: {
      type: Boolean,
      default: false
    },
    scope: {
      type: String,
      default: '__global__'
    }
  },
  data: function () {
    return {
      val: ''
    }
  },
  computed: {
    slotClass () {
      return {
        '-fdp-validator--block': this.block,
        '-fdp-validator__slot--error': this.errors.first(this.scope + '.' + this.name)
      }
    },
    parseScope () {
      if (this.scope === '__global__') {
        return this.name
      } else {
        return this.scope + '.' + this.name
      }
    }
  },
  watch: {
    value () {
      this.val = this.value
    }
  },
  mounted: function () {
    this.val = this.value
  }
}
</script>

<style>

</style>
