import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginSignUp from '../components/LoginSignUp.vue'
import Twitter from '../components/Twitter.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Application from '../components/Application.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginSignUp',
    component: LoginSignUp,
    props: true
  },
  {
    path: '/twitter',
    name: 'Twitter',
    component: Twitter,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    props: true
  },
  {
    path: '/application',
    name: 'Application',
    component: Application,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
