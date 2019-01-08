<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery search">

        <!-- header -->
        <div id="header" class="fixed tab">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <div class="search-wrapper">
                    <input type="text"  pattern="^\s+" class="input noline" placeholder="검색어를 입력해 주세요" value="자바스크립트" />
                    <button class="close-icon" type="button"></button>
                </div>
            </div>
            <div class="header_inner line2 scroll-x">
                <!-- list -->
                <ul class="ulList type1 pl18">
                    <li>
                        <div class="in-chk">
                            <slp-checkbox type="button">지식과정</slp-checkbox>
                            <slp-checkbox type="button" value="true">부가서비스</slp-checkbox>
                            <slp-checkbox type="button">교육안내</slp-checkbox>
                            <slp-checkbox type="button">학습노트</slp-checkbox>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
            </div>
        </div>
        <!-- //header -->
        <div id="content" class="list">
        
          <div class="cell">
            <div class="filterArea ml-18 mr-18">
                <p class="font_15 mono_100 fwb"><span class="ico arrowback"></span> 랭귀지 클럽 <span class="color_clr2">122</span></p>
                <span class="ico filter"></span>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                
                <ul class="multiList type3">
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                This meeting is quite disorganized. 1line
                            </div>
                        </div>
                        <span class="ico arrow"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                Why didn’t the skeleton dance at the party? Why didn’t the skeleton dance at the party?
                            </div>
                        </div>
                        <span class="ico arrow"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                “To be happy with a man” vs “To be happy with a woman”
                            </div>
                        </div>
                        <span class="ico arrow"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                What is the difference between a locomotive engineer and a teacher?
                            </div>
                        </div>
                        <span class="ico arrow"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                This meeting is quite disorganized.  Who is in charge of this meeting?  Who is in charge of this meeting?
                            </div>
                        </div>
                        <span class="ico arrow"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                How do you put a giraffe into a refrigerator? How do you put a giraffe into a refrigerator?
                            </div>
                        </div>
                        <span class="ico arrow"></span>
                    </li>
                    <li>
                        <div class="in">
                            <div class="multiline line2">
                                How do you put a giraffe into a refrigerator? How do you put a giraffe into a refrigerator?
                            </div>
                        </div>
                        <span class="ico arrow"></span>
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
  name: 'search_result_language',
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
