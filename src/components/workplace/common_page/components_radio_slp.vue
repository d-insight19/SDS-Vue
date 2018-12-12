<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">

        <!-- container -->
        <div id="container" class="sample_page">
            <ul class="ul-block">
                <li>
                    <slp-radio v-model="radioValue" native-value="checkable">선택가능</slp-radio>
                </li>
                <li>
                    <slp-radio v-model="radioValue" native-value="checked">선택함</slp-radio>
                </li>
                <li>
                    <slp-radio v-model="radioValue" native-value="disabled" disabled>선택불가능</slp-radio>
                </li>
            </ul>

        </div>
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_radio',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
        radioValue: 'checked'
    }
  },
  /* vue function */
  methods: {
  }
}
</script>

<style>
</style>
