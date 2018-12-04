import Vue from 'vue'
import VueRouter from 'vue-router'
import rootRoutes from '@/config/router/rootRoutes'

// 사용자 커스터 마이징
const makeRoute = () => {
  return rootRoutes
}

// 인스턴스 생성
const createInstance = () => {
  let router = ''

  // Router  전역 등록
  Vue.use(VueRouter)

  router = new VueRouter({
    mode: 'hash',
    routes: makeRoute()
  })

  router.beforeEach(function (to, from, next) {
    console.log(from)
    console.log(to)
    next()
  })

  return router
}

var routerWrapper = {}
routerWrapper.createInstance = createInstance

export default routerWrapper
