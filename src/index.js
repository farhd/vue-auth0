import Vue from 'vue'
import auth from './auth/index'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import SecretQuote from './components/SecretQuote.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

auth.checkAuth()

export var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/login': {
    component: Login
  },
  '/signup': {
    component: Signup
  },
  '/secretquote': {
    component: SecretQuote
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
