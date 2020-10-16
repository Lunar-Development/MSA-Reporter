import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import ViewReports from '../views/ViewReports.vue'
import ActionDashboard from '../views/ActionDashboard.vue'
import Session from '../views/Session.vue'
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
    path: '/ActionDashboard',
    name: 'ActionDashboard',
    component: ActionDashboard
  },
  {
    path: '/report/:category/:id',
    name: 'Report',
    component: Report,
    props: true
  },
  {
    path: '/Session/:excavator/:truck/:trainee/:trainer/:session/:method/:site/:crew',
    name: 'Session',
    component: Session,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
