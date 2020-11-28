export default {
  state: {
    currentAge: null,
    planningAge: null
  },
  mutations: {
    setCurrAge(state, payload) {
      state.currentAge = payload
    },
    setPlanAge(state, payload) {
      state.planningAge = payload
    }
  },
  actions: {
    setCurrAge({commit}, payload) {
      commit('setCurrAge', payload)
    },
    setPlanAge({commit}, payload) {
      commit('setPlanAge', payload)
    }
  },
  getters: {
    getCurrentAge: state => state.currentAge,
    getPlanningAge: state => state.planningAge
  }
}