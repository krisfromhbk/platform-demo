import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR, AUTH_LOGOUT_REQUEST, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_ERROR } from '../actions/auth'
import { apiCall } from '@/utils/api'
import router from '@/router'

const namespaced = true

const state = { token: localStorage.getItem('user-token') || '', status: '' }

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  wrongData: state => state.status === 'login error',
  isLoggingIn: state => state.status === 'logging in'
}

const actions = {
  [AUTH_LOGIN_REQUEST]: async ({ commit, dispatch }, user) => {
    commit(AUTH_LOGIN_REQUEST)
    try {
      // Обращение к API за токеном
      let response = await apiCall('auth', 'post', user)
      localStorage.setItem('user-token', response.token)
      commit(AUTH_LOGIN_SUCCESS, response)
      router.push('/')
    } catch (error) {
      commit(AUTH_LOGIN_ERROR)
      // Сделать общий обработчик ошибок с пересылкой логов на сервер
      console.log(error)
    }
  },

  [AUTH_LOGOUT_REQUEST]: async ({ commit, dispatch }) => {
    commit(AUTH_LOGOUT_REQUEST)
    try {
      // Обращение к API для выхода (удаление токена на стороне сервера и обновление состояния пользователей онлайн)
      // await apiCall(user)
      localStorage.removeItem('user-token')
      commit(AUTH_LOGOUT_SUCCESS)
      router.push('/login')
    } catch (error) {
      commit(AUTH_LOGOUT_ERROR)
      // Сделать общий обработчик ошибок с пересылкой логов на сервер
      console.log(error)
    }
  }
}

const mutations = {
  [AUTH_LOGIN_REQUEST]: (state) => {
    state.status = 'logging in'
  },
  [AUTH_LOGIN_SUCCESS]: (state, response) => {
    state.status = 'login success'
    state.token = response.token
  },
  [AUTH_LOGIN_ERROR]: (state) => {
    state.status = 'login error'
  },
  [AUTH_LOGOUT_REQUEST]: (state) => {
    state.status = 'logging out'
  },
  [AUTH_LOGOUT_SUCCESS]: (state) => {
    state.status = 'logout success'
    state.token = ''
  },
  [AUTH_LOGOUT_ERROR]: (state) => {
    state.status = 'logout error'
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
