<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">

        <!-- container -->
        <div id="container">

            <select class="select w100p">
                <option>년도</option>
            </select>

            <br/>
            <br/>

            <slp-select required placeholder="언어">
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
            </slp-select>

            <div class="birthInt">
                <select class="select err">
                    <option>년도</option>
                </select>
                <select class="select err">
                    <option>월</option>
                </select>
                <select class="select err">
                    <option>일</option>
                </select>
                <p class="InfoChK-resultTxt err">생년월일을 선택해주세요.</p>
            </div>

            <div class="birthInt">
                <select class="select">
                    <option>년도</option>
                </select>
                <select class="select">
                    <option>월</option>
                </select>
                <select class="select">
                    <option>일</option>
                </select>
            </div>
            

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
