<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">

        <!-- container -->
        <div id="container" class="sample_page">

            <p>20181129 변경내용 : ulList -> singleList 로 클래스명 변경 </p>

            <h2> L.1.1. Single Line Lists</h2>
            <br/>

            <p> List + Button </p>
            <ul class="singleList type_1">
                <li>
                    <a href="#">삼성SDS
                        <span class="ico"></span>
                    </a>
                </li>
                <li>
                    <a href="#">삼성생명
                        <span class="ico"></span>
                    </a>
                </li>
            </ul>
            <br/>

            <p> List + Switch button </p>
            <ul class="singleList type_2">
                <li>
                    <a href="#">리스트 텍스트</a>
                    <label class="labelBtn">
                        <input type="checkbox" name="" class="chk">
                        <div class="chk_box"><span class="ball"></span><ul class="txt"><li class="m1"></li><li class="m2"></li></ul></div>
                    </label>
                </li>
                
            </ul>
            <br/>

            <p> List + Text </p>
            <ul class="singleList type_3">
                <li>
                    <a href="#">
                        리스트 텍스트
                        <div class="subTxt">                                
                            <span class="subTxt1">최신버전</span>
                            <span class="subTxt2">1.0.1</span>
                        </div>
                    </a>
                    
                </li>
                
            </ul>
            <br/>

            <p> Checkbox + List </p>
            <ul class="singleList type_4">
                <li>
                    <label class="labelChk">
                        <input id="" type="checkbox" class="chk" name="">
                        <span class="ico"></span>
                        <span class="label">이메일 수신</span>
                    </label>
                </li>
                <li>
                    <label class="labelChk">
                        <input id="" type="checkbox" class="chk" name="">
                        <span class="ico"></span>
                        <span class="label">전화 수신</span>
                    </label>
                </li>
            </ul>

        </div>
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_list_singleline',
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
