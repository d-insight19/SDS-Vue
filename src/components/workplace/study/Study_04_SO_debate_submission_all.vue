<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_debate">
            <!-- header -->
            <div id="header" class="fixed">
            <button type="button" class="btn only close"><span class="ico">닫기</span></button>
            <p class="header_text font_19">토론</p>
            </div>
            <!-- //header -->
            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">

                        <p class="h-tit5">
                            OO은 OO해야 합니다. 의견공유 텍스트 질문 영역입니다.  당신의 의견은 어떻습니까?
                        </p>
                        <div class="txt-line">
                            <div id="dropdown_wrap" v-show="langFlag">
                            <div id="sheetDim" @click="changeLang()"></div>
                            <div id="dropdown" style="right: 0;">            
                                <ul  @click="changeLang()">
                                <!-- 
                                    position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력             
                                -->
                                    <li @click="sortAgree(1)">전체의견</li>
                                    <li @click="sortAgree(2)">찬성의견</li>
                                    <li @click="sortAgree(3)">반대의견</li>
                                </ul>
                            </div>
                            </div>
                            <p class="tar"  @click="changeLang()">
                                <span>전체의견</span>
                                <span class="ico down_blue_24"></span>
                            </p>
                        </div>                        
                        <p class="line01"></p>
                        <ul class="multiList type3 dif">
                            <li>
                                <p class="reply-name mt20">                                    
                                    <span class="chip type2 type2 agree-x agree">찬성</span>
                                    <span>정*민 [작성자]</span>
                                    <span class="fr ico more"></span>
                                </p>
                                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                                <div class="reply-wrap">
                                    <span class="ico arr down" :class="{ up : replyFlag } " @click="toggleReply"></span>
                                    <span @click="toggleReply">답글 4</span>
                                    <p class="fr reply-num">
                                        <label>
                                            <input type="radio"
                                            @click="toggleLike()"
                                            :checked="rdo" v-model="rdo">
                                            <span v-if="rdo">
                                                <span class=" ico like_32" ></span>
                                                <span class="">{{goodcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico like_32 blue" ></span>
                                                <span class="">{{goodcnt +1}}</span>
                                            </span> 
                                        </label>
                                        
                                        <label>
                                            <input type="radio"
                                            @click="toggleLike()"
                                            :checked="!rdo" v-model="rdo">
                                            <span v-if="!rdo">
                                                <span class=" ico unlike_32" ></span>
                                                <span class="">{{badcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico unlike_32 red" ></span>
                                                <span class="">{{badcnt +1}}</span>
                                            </span> 
                                        </label>
                                    </p>
                                </div>
                                <ul class="replyList" v-if="replyFlag">
                                    <li class="left_pd" v-for="item in replyList" :key="item.id">
                                        <p class="reply-name mt16">
                                            <span class="ico indent n-ml18"></span>
                                            <span class="chip type2 agree-x" :class="{ agree : item.active_el }" >{{item.agree}}</span>
                                            <span>{{item.name}}</span>
                                        </p>
                                        <p class="reply-txt">{{item.story}}</p>
                                        
                                        <div class="reply-wrap mt0">
                                            <p><span class="fl reply-date">{{item.date}}</span></p>
                                            <p class="fr reply-num mb mt">
                                                <label>
                                                    <input type="radio"
                                                    @click="toggleLike5(key)"
                                                    :checked="rdo5" v-model="rdo5">
                                                    <span v-if="rdo5">
                                                        <span class=" ico like_32" ></span>
                                                        <span class="">{{item.good}}</span>
                                                    </span>
                                                    <span v-else="">
                                                        <span class=" ico like_32 blue" ></span>
                                                        <span class="">{{item.good +1}}</span>
                                                    </span> 
                                                </label>
                                                
                                                <label>
                                                    <input type="radio"
                                                    @click="toggleLike5(key)"
                                                    :checked="!rdo5" v-model="rdo5">
                                                    <span v-if="!rdo5">
                                                        <span class=" ico unlike_32" ></span>
                                                        <span class="">{{item.bad}}</span>
                                                    </span>
                                                    <span v-else="">
                                                        <span class=" ico unlike_32 red" ></span>
                                                        <span class="">{{item.bad +1}}</span>
                                                    </span> 
                                                </label>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </li>   
                            <li class="top_bottom_pd">
                                <div class="infoChk pr0">
                                    <input type="text" placeholder="답글을 입력하세요" class="input type2"><button type="button" class="btn sm clr1 w17p">등록</button>
                                </div>
                            </li>
                            <li >
                                <p class="reply-name mt20">                                    
                                    <span class="chip type2 type2 agree-x">반대</span>
                                    <span>김*소</span>
                                </p>
                                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                                <div class="reply-wrap">
                                    <span class="ico arr down"></span>
                                    <span>답글 4</span>
                                    <p class="fr reply-num">
                                        <label>
                                            <input type="radio"
                                            @click="toggleLike2()"
                                            :checked="rdo2" v-model="rdo2">
                                            <span v-if="rdo2">
                                                <span class=" ico like_32" ></span>
                                                <span class="">{{goodcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico like_32 blue" ></span>
                                                <span class="">{{goodcnt +1}}</span>
                                            </span> 
                                        </label>
                                        
                                        <label>
                                            <input type="radio"
                                            @click="toggleLike2()"
                                            :checked="!rdo2" v-model="rdo2">
                                            <span v-if="!rdo2">
                                                <span class=" ico unlike_32" ></span>
                                                <span class="">{{badcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico unlike_32 red" ></span>
                                                <span class="">{{badcnt +1}}</span>
                                            </span> 
                                        </label>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <p class="reply-name mt20">                                    
                                    <span class="chip type2 type2 agree-x">반대</span>
                                    <span>박*환</span>
                                </p>
                                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                                <div class="reply-wrap">
                                    <span class="ico arr down"></span>
                                    <span>답글 4</span>
                                    <p class="fr reply-num">
                                        <label>
                                            <input type="radio"
                                            @click="toggleLike3()"
                                            :checked="rdo3" v-model="rdo3">
                                            <span v-if="rdo3">
                                                <span class=" ico like_32" ></span>
                                                <span class="">{{goodcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico like_32 blue" ></span>
                                                <span class="">{{goodcnt +1}}</span>
                                            </span> 
                                        </label>
                                        
                                        <label>
                                            <input type="radio"
                                            @click="toggleLike3()"
                                            :checked="!rdo3" v-model="rdo3">
                                            <span v-if="!rdo3">
                                                <span class=" ico unlike_32" ></span>
                                                <span class="">{{badcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico unlike_32 red" ></span>
                                                <span class="">{{badcnt +1}}</span>
                                            </span> 
                                        </label>
                                    </p>
                                </div>
                            </li>
                            <li class="bottom-bd">
                                <p class="reply-name mt20">                                    
                                    <span class="chip type2 type2 agree-x agree">찬성</span>
                                    <span>정*민</span>
                                </p>
                                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                                <div class="reply-wrap">
                                    <span class="ico arr down"></span>
                                    <span>답글 4</span>
                                    <p class="fr reply-num">
                                        <label>
                                            <input type="radio"
                                            @click="toggleLike4()"
                                            :checked="rdo4" v-model="rdo4">
                                            <span v-if="rdo4">
                                                <span class=" ico like_32" ></span>
                                                <span class="">{{goodcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico like_32 blue" ></span>
                                                <span class="">{{goodcnt +1}}</span>
                                            </span> 
                                        </label>
                                        
                                        <label>
                                            <input type="radio"
                                            @click="toggleLike4()"
                                            :checked="!rdo4" v-model="rdo4">
                                            <span v-if="!rdo4">
                                                <span class=" ico unlike_32" ></span>
                                                <span class="">{{badcnt}}</span>
                                            </span>
                                            <span v-else="">
                                                <span class=" ico unlike_32 red" ></span>
                                                <span class="">{{badcnt +1}}</span>
                                            </span> 
                                        </label>
                                    </p>
                                </div>
                            </li>
                        </ul>
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
/* eslint-disable */
  name: 'Study_dictionary',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
        langFlag: false,
        replyList: [
            {active_el: false, agree:'반대' , name: '김*영', story:'최대한 쉽고 재미있게 기본개념을 설명해주셨네요.', date:'2018.09.14 21:34', good: 2, bad: 3},
            {active_el: false, agree:'반대' , name: '이*우', story:'최대한 쉽고 재미있게 기본개념을 설명해주셨네요.', date:'2018.09.14 21:34', good: 2, bad: 3},
            {active_el: true, agree:'찬성' , name: '이*우', story:'최대한 쉽고 재미있게 기본개념을 설명해주셨네요.', date:'2018.09.14 21:34', good: 2, bad: 3}
        ],
        replyFlag: false,
        goodcnt: 12,
        badcnt: 3,
        rdo: undefined,
        rdos: ['one', 'two'],
        rdo2: undefined,
        rdos2: ['one', 'two'],
        rdo3: undefined,
        rdos3: ['one', 'two'],
        rdo4: undefined,
        rdos4: ['one', 'two'],
        rdo5: undefined,
        rdos5: ['one', 'two']
    }
  },
  /* vue function */
  methods: {
      toggleReply () {
        this.replyFlag = !this.replyFlag 
      },
    toggleLike () {
        this.rdo = !this.rdo;
    },
    toggleLike2 () {
        this.rdo2 = !this.rdo2;
    },
    toggleLike3 () {
        this.rdo3 = !this.rdo3;
    },
    toggleLike4 () {
        this.rdo4 = !this.rdo4;
    },
    toggleLike5 () {
        this.rdo5 = !this.rdo5;
    },
    changeLang () {
        this.langFlag = !this.langFlag
    }
  }
}
</script>
