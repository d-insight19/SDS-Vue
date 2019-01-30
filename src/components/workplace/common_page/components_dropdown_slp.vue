<template>
<!-- eslint-disable -->
  <!-- container -->
  <div id="wrap">
    <div class="trainIntro">

      <slp-dropdown dimmed
        @change="(v) => eDropdown('@change:', v)" 
        @input="(v) => eDropdown('@input:', v)" >

        <button type="button" title="title" class="btn ld" slot="trigger">Dropdown (with Dim sheet)</button>

        <slp-dropdown-item disabled>Disabled</slp-dropdown-item>
        <slp-dropdown-item :value="true">True</slp-dropdown-item>
        <slp-dropdown-item :value="false">False</slp-dropdown-item>
      </slp-dropdown>

      <slp-dropdown
        :top="50" :right="100"
        @change="(v) => eDropdown('@change:', v)" 
        @input="(v) => eDropdown('@input:', v)" >

        <button type="button" title="title" class="btn ld" slot="trigger">Dropdown Position change (Top/Right)</button>

        <slp-dropdown-item disabled>Disabled</slp-dropdown-item>
        <slp-dropdown-item :value="true">True</slp-dropdown-item>
        <slp-dropdown-item :value="false">False</slp-dropdown-item>
      </slp-dropdown>


      <slp-dropdown 
        v-model="lang"
        @change="(v) => eDropdown('@change:', v)" 
        @input="(v) => eDropdown('@input:', v)" >
        <div class="wrapper" style="top: 150px; left: 20px" slot="trigger">
          <span class="content">{{lang}}</span>
        </div>

        <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
        <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
        <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
        <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
      </slp-dropdown>

      <slp-dropdown 
        v-model="lang"
        @change="(v) => eDropdown('@change:', v)" 
        @input="(v) => eDropdown('@input:', v)" >
        <div class="wrapper" style="top: 150px; right: 20px" slot="trigger">
            <span class="content">{{lang}}</span>
        </div>
        <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
        <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
        <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
        <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
      </slp-dropdown>

      <slp-dropdown 
        v-model="lang"
        @change="(v) => eDropdown('@change:', v)" 
        @input="(v) => eDropdown('@input:', v)" >
        <div class="wrapper" style="bottom: 20px; left: 20px" slot="trigger">
          <span class="content">{{lang}}</span>
        </div>

        <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
        <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
        <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
        <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
      </slp-dropdown>

      <slp-dropdown 
        v-model="lang"
        @change="(v) => eDropdown('@change:', v)" 
        @input="(v) => eDropdown('@input:', v)" >
        <div class="wrapper" style="bottom: 20px; right: 20px" slot="trigger">
          <span class="content">{{lang}}</span>
        </div>

        <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
        <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
        <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
        <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
      </slp-dropdown>

    </div>
  </div>
  <!-- //container -->
</template>

<script>
export default {
  name: 'ComponentDropdown',
  /* vue data */
  data () {
    return {
      lang: '한국어'
    }
  },
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue function */
  methods: {
    eDropdown (e, v) {
      console.log(e, v)
    }
  }
}
</script>

<style scoped>

.wrapper {
  position: absolute;
  width: 100px;
}
.content {
  color: #fff;
}

</style>
