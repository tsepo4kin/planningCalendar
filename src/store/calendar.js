export default {
  state: {
    currentAge: null,
    planningAge: null,
    birthDate: null
  },
  mutations: {
    setCurrAge(state, payload) {
      state.currentAge = payload
    },
    setPlanAge(state, payload) {
      state.planningAge = payload
    },
    setBirthDate(state, payload) {
      state.birthDate = payload
    }
  },
  actions: {
    setCurrAge({commit}, payload) {
      commit('setCurrAge', payload)
    },
    setPlanAge({commit}, payload) {
      commit('setPlanAge', payload)
    },
    setBirthDate({commit}, payload) {
      commit('setBirthDate', payload)
    }
  },
  getters: {
    getCurrentAge: state => state.currentAge,
    getPlanningAge: state => state.planningAge,
    getBithDate: state => state.birthDate
  }
}