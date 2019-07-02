import Vue from 'vue'
import Router from 'vue-router'
import routes from './router-config'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
})

window.router = router
export default router
