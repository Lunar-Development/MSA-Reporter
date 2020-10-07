import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import ViewReports from '../views/ViewReports.vue'
import CreateReports from '../views/CreateReports.vue'
import Report from '../views/Report.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/ViewReports',
    name: 'ViewReports',
    component: ViewReports
  },
  {
    path: '/CreateReports',
    name: 'CreateReports',
    component: CreateReports
  },
  {
    path: '/report/:id',
    name: 'Report',
    component: Report,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
