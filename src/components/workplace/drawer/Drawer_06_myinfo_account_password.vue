<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">계정 관리</p>
            </div>
            <!-- //header -->

            <div id="content" class="drawer etc">
                <div class="cell">
                    <div class="inner nopad">
                     <!-- list -->
                        <ul class="singleList type_1">
                            <li>
                                <a href="# first_line">비밀번호 변경<span class="black_next"></span></a>
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
