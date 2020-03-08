import Vue from 'vue'
import Router from 'vue-router'
import Html from './views/Html.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'html',
      component: Html
    }
  ]
})
