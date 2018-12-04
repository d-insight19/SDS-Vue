<template>
    <div>
        <form @submit.prevent="validateBeforeSubmit" :data-vv-scope="scope">
            <slot></slot>
        </form>
    </div>
</template>

<script>
export default {
  name: 'fdpFormWrapper',
  props: {
    scope: {
      type: String,
      required: true
    }
  },
  methods: {
    validateBeforeSubmit () {
      let _this = this
      this.$validator.validateAll(this.scope).then((result) => {
        _this.$emit('validate-all', result)
      })
    }
  }
}
</script>

<style>

</style>
