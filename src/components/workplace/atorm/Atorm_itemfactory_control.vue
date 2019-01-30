<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm_itemfactory">

        <!-- header  -->
        <div id="header" class="tab fixed">          
          <div class="header_inner line1">
            <button type="button" class="btn only" :class="{'prev': showOldComponentType == 1,'close': showOldComponentType != 1}"><span class="ico">이전</span></button>
            <p class="header_text  font_18">아이템 팩토리</p>
            <p class="end" v-show="showOldComponentType!=1">
                <span class="end_btn2 color_clr2">등록</span>
            </p>
          </div>
          <div class="header_inner line2 tabMenu">
              <ul class="fixTab">
                <li :class="{'on': tabIdx == 1}"   @click="onClick(1)"><a href="#">신규 아이템</a></li>
                <li :class="{'on': tabIdx == 2}"   @click="onClick(2)"><a href="#">기존 아이템</a></li>
              </ul>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="list">
          <div class="cell">
            <div class="inner">
                <component :is="component"/>
            </div>
          </div>
        </div>
      </div>
      <!-- //container -->    

    </div>
    <!-- //wrap -->

</template>

<script>
// itemFactory_old1,2,3  으로 3가지 유형있음
import AtormItemfactoryNewlist from './Atorm_itemfactory_newlist'
import AtormItemfactoryOld1 from './Atorm_itemfactory_old1'
import AtormItemfactoryOld2 from './Atorm_itemfactory_old2'
import AtormItemfactoryOld3 from './Atorm_itemfactory_old3'
export default {
  name: 'Atorm_itemfactory_control',
  components: {'Atorm_itemfactory_newlist': AtormItemfactoryNewlist, 'Atorm_itemfactory_old1': AtormItemfactoryOld1, 'Atorm_itemfactory_old2': AtormItemfactoryOld2, 'Atorm_itemfactory_old3': AtormItemfactoryOld3},
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 1,
      component: 'Atorm_itemfactory_newlist',
      showOldComponentType: 1// OldType이 3개가 있어 변수로 확인
    }
  },
  /* vue function */
  methods: {
    onClick (idx) {
      this.tabIdx = idx
      if (idx === 1) {
        this.component = 'Atorm_itemfactory_newlist'
      } else if (idx === 2) {
        if (this.showOldComponentType === 1) {
          this.component = 'Atorm_itemfactory_old1'
        } else if (this.showOldComponentType === 2) {
          this.component = 'Atorm_itemfactory_old2'
        } else if (this.showOldComponentType === 3) {
          this.component = 'Atorm_itemfactory_old3'
        }
      }
    }
  }
}
</script>
