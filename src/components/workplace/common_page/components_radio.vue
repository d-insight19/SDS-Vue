<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">

        <!-- container -->
        <div id="container" class="sample_page"  style="padding:18px;">
            <ul class="ul-block">
                <li>
                    <label class="labelRdo">
                        <input type="radio" class="rdo" name="test-rdo">
                        <span class="ico">
                            <span class="innerCircle"></span>
                        </span>
                        <span class="label">선택가능</span>                    
                    </label>
                </li>
                <li>
                    <label class="labelRdo">
                        <input type="radio" class="rdo" name="test-rdo" checked>
                        <span class="ico">
                            <span class="innerCircle"></span>
                        </span>
                        <span class="label">선택함</span>                    
                    </label>
                </li>
                <li>
                    <label class="labelRdo">
                        <input type="radio" class="rdo" name="test-rdo" disabled>
                        <span class="ico">
                            <span class="innerCircle"></span>
                        </span>
                        <span class="label">선택불가능</span>                    
                    </label>
                </li>

                <li>
                    <label class="labelRdo err">
                        <input type="radio" class="rdo" name="test-rdo">
                        <span class="ico">
                            <span class="innerCircle"></span>
                        </span>
                        <span class="label">선택함</span>
                    </label>
                    <p class="InfoChK-resultTxt err">답안을 선택 해 주세요..</p>
                </li>
            </ul>

            <br><p>2줄이상일 경우</p><br>
            <ul>
                <li>
                    <label class="labelRdo multi">
                        <input type="radio" class="rdo" name="test-rdo">
                        <span class="ico">
                            <span class="innerCircle"></span>
                        </span>
                        <span class="label">텍스트가 Multiline일 경우</span>
                        <p class="sub_label">텍스트가 Multiline일 경우</p>
                    </label>

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
    }
  },
  /* vue function */
  methods: {
  }
}
</script>

<style>
</style>
