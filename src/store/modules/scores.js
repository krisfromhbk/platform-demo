import { GET_SCORES_REQUEST, GET_SCORES_SUCCESS, GET_SCORES_ERROR, CLEAR_SCORES } from '../actions/scores'
import { apiCall } from '@/utils/api'

const namespaced = true

const state = { scores: localStorage.getItem('scores') || '', status: '' }

const getters = {
  isProcessing: state => state.status === 'getting scores'
}

const actions = {
  [GET_SCORES_REQUEST]: async ({ commit, dispatch }) => {
    commit(GET_SCORES_REQUEST)
    try {
      let response = await apiCall('scores', 'get')
      localStorage.setItem('scores', response.scores)
      commit(GET_SCORES_SUCCESS, response)
    } catch (error) {
      commit(GET_SCORES_ERROR)
      console.log(error)
    }
  },
  [CLEAR_SCORES]: ({ commit, dispatch }) => {
    commit(CLEAR_SCORES)
    localStorage.removeItem('scores')
  }
}

const mutations = {
  [GET_SCORES_REQUEST]: (state) => {
    state.status = 'getting scores'
    state.scores = ''
  },
  [GET_SCORES_SUCCESS]: (state, response) => {
    state.status = 'get success'
    state.scores = response.scores
  },
  [GET_SCORES_ERROR]: (state) => {
    state.status = 'get error'
  },
  [CLEAR_SCORES]: (state) => {
    state.status = ''
    state.scores = ''
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
