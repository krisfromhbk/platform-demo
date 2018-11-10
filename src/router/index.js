import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Scoreboard from '@/components/Scoreboard'
import TasksView from '@/components/Tasks'
import store from '@/store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters['auth/isAuthenticated']) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters['auth/isAuthenticated']) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: ifAuthenticated,
      children: [
        {
          path: 'tasks',
          component: TasksView
        },
        {
          path: 'score',
          component: Scoreboard
        }
      ]
    },
    { path: '/login', name: 'Login', component: Login, beforeEnter: ifNotAuthenticated }
  ]
})
