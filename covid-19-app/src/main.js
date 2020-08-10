/*
$ npm install -g vue-cli
$ vue init webpack-simple my-project
$ cd my-project
$ npm install
$ npm run dev
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Countries from './components/Countries.vue'
import Home from './components/Home.vue'
import Info from './components/Info.vue'
import Authors from './components/Authors.vue'
import CountryInfo from './components/CountryInfo.vue'
import News from './components/News.vue'
import axios from 'axios'
import Signup from './components/Signup.vue'
import Logout from './components/Logout.vue'

import './registerServiceWorker'

Vue.prototype.$axios = axios

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/countries', name: 'countries', component: Countries },
  { path: '/app', component: App },
  { path: '/authors', component: Authors },
  { path: '/CountryInfo/:CountryCode', component: CountryInfo },
  { path: '/info', component: Info },
  { path: '/news', component: News },
  { path: '/signup', name: 'signup', component: Signup },
  { path: '/logout', name: 'logout', component: Logout }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
  base: process.env.BASE_URL
})

/* router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  console.log("isauthenticated", isAuthenticated)
  if (requiresAuth && !isAuthenticated) {
    next("/")
  } else {
    next()
  }
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  console.log("isauthenticated", isAuthenticated)
  if (!requiresAuth && isAuthenticated) {
    next("/home")
  } else {
    next()
  }
}) */

export default router

let app

if (!app) {
  app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
}
