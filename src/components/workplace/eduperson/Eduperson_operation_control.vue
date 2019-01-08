<template>
   <div class="edu_tab2">
      <button type="button" class="btn md  w33p" :class="{'on' : tabIdx == 1 , 'clr2' : tabIdx == 1 }" @click="onClick(1)">이러닝</button><button type="button" title="title" class="btn md w33p" :class="{'on' : tabIdx == 2 , 'clr2' : tabIdx == 2 }" @click="onClick(2)">집합교육</button><button type="button" title="title" class="btn md w33p" :class="{'on' : tabIdx == 3 , 'clr2' : tabIdx == 3}" @click="onClick(3)">자율</button>
      <component :is="component"></component>
   </div>
</template>

<script>
import EdupersonOperation from './Eduperson_operation'
import EdupersonOperationSet from './Eduperson_operation_set'
import EdupersonOperationAutonomy from './Eduperson_operation_autonomy'
export default {
  name: 'Eduperson_operation_control',
  components: {'Eduperson_operation': EdupersonOperation, 'Eduperson_operation_set': EdupersonOperationSet, 'Eduperson_operation_autonomy': EdupersonOperationAutonomy},
  props: {
  },
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 2,
      tabIdx: 1,
      component: 'Eduperson_operation'
    }
  },
  /* vue function */
  methods: {
    onClick (idx) {
      this.tabIdx = idx
      if (idx === 1) {
        this.component = 'Eduperson_operation'
      } else if (idx === 2) {
        this.component = 'Eduperson_operation_set'
      } else if (idx === 3) {
        this.component = 'Eduperson_operation_autonomy'
      }
    }
  }
}
</script>
