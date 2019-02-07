<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery studystatus pd70">
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">과정 평가 창</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc" >
                <div class="cell">
                    <div class="inner " style="padding-top:56px;">
                        <div class="full-box pd mb26">
                            <table >
                                <tr>
                                    <td class=" fwb" style="padding-bottom:10px;"><span class="l-txt">답안 체크 현황</span> <span class="fr r-txt fwb tar">5/20</span></td>
                                </tr>
                                <tr>
                                    <td class=" fwb"><span class="l-txt">제한 시간</span> <span class="fr r-txt tar"><span class="color_clr2">01:34:57</span> / 02:00:00</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="stepper"><div class="progBox"><div class="bar clr2" style="width:60%;"></div></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p class="font_16 mono_80">학습을 통해 얼마나 배웠는지 과정 평가를 통해 알아 볼까요? 본인의 학습성과를 테스트하고 그 결과를 확인해 볼 수 있습니다</p>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <p class="txt-tit">1. 다음 지문을 읽고 <span class="underline">틀린 것</span>을 고르시오. (5점)</p>
                        <p class="inner-txt op65 mb20">Java 기반의 웹 프레임워크. 로드 존슨이 2002년에 출판한 저서 Expert One-on-One J2EE Design and Development에서 선보인 소스 코드를 시작으로 점점 발전하게 되었다. 2003년 6월에 최초로 공개되었다. </p>
                        <ul class="ul-block com-rdo">
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[0]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"  >① EJB를 주 프레임워크로 사용할 때 불편했을 점을 해소하려고 개발되었다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[1]" >
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" >② 2002년 로드존슨이 출판한 도서가 스프링의 시작이라고 보는 견해가 있다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[2]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" >③ 2003년 Apache 2.0 License로 최초 공개</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[3]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" >④ 2003년 상용으로 소개되었으나 이후 오픈소스로 바뀌었다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[4]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" >⑤ 동적인 웹 사이트를 개발하기 위한 여러 가지 서비스를 제공하고 있다.</span>                    
                                </label>
                            </li>
                        </ul>     
                        <p class="hr"></p>
                        <p class="txt-tit">2. 마이동풍은 이백의 시에서 유래한 말이다. 여기에서 동풍은 어떤 계절의 바람일까?</p>                        
                        <ul class="ul-block com-rdo">
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo2" :value="rdos2[0]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" >① 봄</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo2" :value="rdos2[1]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"  >② 여름</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo2" :value="rdos2[2]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" >③ 가을</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo2" :value="rdos2[3]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" >④ 겨울</span>                    
                                </label>
                            </li>
                        </ul> 

                        <p class="hr"></p>
                        <p class="txt-tit">3. 다음을 읽고 지문에 대한 설명이 맞다면 O, 틀리다고 생각하면 X를 선택하세요.</p>
                        <p class="inner-txt op65 mb20">Java 기반의 웹 프레임워크. 로드 존슨이 2002년에 출판한 저서 Expert One-on-One J2EE Design and Development에서 선보인 소스 코드를 시작으로 점점 발전하게 되었다. 2003년 6월에 최초로 공개되었다. </p>
                        <ul class="com-rdo">
                            <li class="inb-box">
                                <label class="labelRdo">
                                    <input type="radio" class="rdo"  v-model="rdo3" :value="rdos3[0]">                                    
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"><span  class="ico chk-o"></span></span>                    
                                </label>
                            </li>
                            <li class="inb-box">
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo"  v-model="rdo3" :value="rdos3[1]" >
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"><span class="ico chk-x"></span></span>                    
                                </label>
                            </li>
                        </ul>
                        <p class="hr"></p>
                        <p class="txt-tit">4. 다음을 읽고 지문에 대한 설명이 맞다면 O, 틀리다고 생각하면 X를 선택하세요.</p>
                        <p class="inner-txt op65 mb20">Java 기반의 웹 프레임워크. 로드 존슨이 2002년에 출판한 저서 Expert One-on-One J2EE Design and Development에서 선보인 소스 코드를 시작으로 점점 발전하게 되었다. 2003년 6월에 최초로 공개되었다. </p>
                        <ul class="com-rdo">
                            <li class="inb-box">
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo"  v-model="rdo4" :value="rdos4[0]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"><span class="ico chk-o"></span></span>                    
                                </label>
                            </li>
                            <li class="inb-box">
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo"  v-model="rdo4" :value="rdos4[1]" >
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"><span class="ico chk-x"></span></span>                    
                                </label>
                            </li>
                        </ul>
                        <p class="hr"></p>
                        <p class="txt-tit">5. 다음이 설명하는 단어를 입력하세요.</p>
                        <p class="inner-txt op65 mb20">Java 기반의 웹 프레임워크. 로드 존슨(Rod Johnson)이 2002년에 출판한 저서 Expert One-on-One J2EE Design and Development에서 선보인 소스 코드를 시작으로 점점 발전하게 되었다. 2003년 6월에 최초로 공개되었다. </p>
                        <input @input="onInput" type="text" class="input" placeholder="스프링"/>
                        <div class="inputbottom inp-num">
                            <span class="strlenth" >{{keylength}}/300</span>
                        </div> 
                    </div>
                </div>
            </div>
            <!-- //contents -->

            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md clr1">최종제출</button>
            </div>
            <!-- //floatingbtn -->

        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->

</template>

<script>
/* eslint-disable */

export default {
  name: 'Study_05_etc_captcha',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      rdo: '',
      rdos: ['one', 'two', 'three', 'four', 'five'],
      rdo2: '',
      rdos2: ['one', 'two', 'three', 'four'],
      rdo3: '',
      rdos3: ['one', 'two'],
      rdo4: '',
      rdos4: ['one', 'two'],
      keylength: 0
    }
  },
  /* vue function */
  methods: {
    onInput (event) {
      this.keylength = event.target.value.length
    }
  }
}
</script>
