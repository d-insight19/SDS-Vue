<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer studysupport ">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">학습지원</p>
            </div>
            <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner nopad">
                     <!-- list -->
                        <p class="label-tit20"><strong>버전관리</strong></p>
                        <ul class="singleList type_1">
                            <li class="border_top">
                                <a>버전정보<span class="version fr">최신 버전 v.0.1</span></a>
                            </li>                           
                        </ul>
                        <p class="hr"></p> 
                        <p class="label-tit20"><strong>지원 모바일 환경</strong></p>
                            <table class="support_mobile">
                                <tr>
                                    <th>안드로이드</th>
                                    <th>iOS</th>
                                </tr>
                                <tr>
                                    <td>5.0 이상</td>
                                    <td>10.0 이상</td>
                                </tr>
                            </table>
                       
                        <p class="hr"></p> 
                        <p class="label-tit20"><strong>원격지원 서비스</strong></p>
                            <dl class="remote_assistance">
                                <dt>모바일원격지원 서비스란?</dt>
                                <dd>학습서비스와 관련된 모바일상 문제가 생겼을때 담당자가 고객님의 모바일에 직접 접속하여 장애를 해결하는 서비스입니다.</dd>

                                <dt>원격지원 서비스 동의</dt>
                                <dd>본 서비스 고객님의 모바일 오류해결을 위한 목적으로만 진행됩니다. 운영자가 원격제어를 진행하는 동안에는 인터넷 뱅킹 또는 개인정보가 노출될 수 있는 프로그램은 실행하지 않도록 주의하시기 바랍니다.</dd>
                            </dl>
                        <ul class="singleList type_2 mt22">
                            <li class="noline">
                                <a href="# pt0">원격지원 서비스 방법 안내<span class="ico accordion_down"></span></a>
                            </li>
                        </ul>
                        <ul class="singleList type_2">
                            <li>
                                <a href="#">모바일 원격 접속 방법<span class="ico accordion_down"></span></a>
                            </li>
                        </ul>
                <!-- //list -->
                       

                       
                    </div>
                </div>
            </div>           
            
        </div>
        <!-- //container -->   

    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Drawer_myinfo',
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
