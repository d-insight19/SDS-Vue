<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">

        <!-- container -->
        <div id="container" class="sample_page">
            <div class="rdoSelBox err">
                <label class="labelRdo">
                    <input type="radio" class="rdo" name="place-rdo">
                    <span class="ico"></span>
                    <span class="label">자택</span>
                </label>  
                <label class="labelRdo">
                    <input type="radio" class="rdo" name="place-rdo">
                    <span class="ico"></span>
                    <span class="label">직장</span>
                </label>    
                <p class="InfoChK-resultTxt err">주소를 선택해주세요.</p>              
            </div>

            <div class="rdoSelBox">
                <label class="labelRdo">
                    <input type="radio" class="rdo" name="place-rdo" checked>
                    <span class="ico"></span>
                    <span class="label">자택</span>
                </label>          
                <label class="labelRdo">
                    <input type="radio" class="rdo" name="place-rdo">
                    <span class="ico"></span>
                    <span class="label">직장</span>
                </label>        
            </div>



        </div>
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_radiobutton',
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
