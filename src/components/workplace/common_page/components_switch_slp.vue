<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">

        <!-- container -->
        <div id="container">

            <slp-switch/>
            <slp-switch :value="true"/>

            <br/>

            <slp-switch :classObject="{'fr': true}"/>

        </div>
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_switch',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
