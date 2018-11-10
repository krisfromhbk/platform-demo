import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import tasks from './modules/tasks'
import scores from './modules/scores'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    tasks,
    scores
  },
  strict: debug
})
