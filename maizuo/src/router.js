import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component:(resolve)=>require(["./views/Home.vue"],resolve),
    },
    {
      path: '/video',
      name: 'video',
      component: (resolve)=>require(["./views/Video.vue"],resolve)
    },
    {
      path: '/pref',
      name: 'pref',
      component: (resolve)=>require(["./views/Pref.vue"],resolve)
    },
    {
      path: '/me',
      name: 'me',
      component: (resolve)=>require(["./views/Me.vue"],resolve)
    },
  ]
})

