import { GET_TASKS_REQUEST, GET_TASKS_SUCCESS, GET_TASKS_ERROR } from '../actions/tasks'
import { apiCall } from '@/utils/api'

const namespaced = true

const state = { tasks: localStorage.getItem('tasks') || '', status: '' }

const getters = {
  isProcessing: state => !!state.tasks
}

const actions = {
  [GET_TASKS_REQUEST]: async ({ commit, dispatch }) => {
    commit(GET_TASKS_REQUEST)
    try {
      // Обращение к API за массивом заданий
      let response = await apiCall('tasks', 'get')
      localStorage.setItem('tasks', response.tasks)
      commit(GET_TASKS_SUCCESS, response)
    } catch (error) {
      commit(GET_TASKS_ERROR)
      // Сделать общий обработчик ошибок с пересылкой логов на сервер
      console.log(error)
    }
  }
}

const mutations = {
  [GET_TASKS_REQUEST]: (state) => {
    state.status = 'getting tasks'
  },
  [GET_TASKS_SUCCESS]: (state, response) => {
    state.status = 'get success'
    state.tasks = response.tasks
  },
  [GET_TASKS_ERROR]: (state) => {
    state.status = 'get error'
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
