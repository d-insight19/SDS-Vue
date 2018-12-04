/*
  Main 관리 (2018/08/01 정재윤)
    - 각 모듈 초기화
    - App 초기화
    - ACL 초기화
    - FDP component import 변경
*/
import Vue from 'vue'
import FlatUI from './lib/fdp/component'
import slpUI from './components/component'

Vue.use(FlatUI)
Vue.use(slpUI)
