export default {
  state: {
    incomeCategories: [

    ],
    outcomeCategories: [

    ],
  },
  mutations: {
    deleteIncomeById(state, id) {
      state.incomeCategories = state.incomeCategories.filter(e => e.id !== id)
    },
    deleteOutcomeById(state, id) {
      state.outcomeCategories = state.outcomeCategories.filter(e => e.id !== id)
    },
    setIncome(state, payload) {
      state.incomeCategories = payload
    },
    setOutcome(state, payload) {
      state.outcomeCategories = payload
    },
    addIncome(state, payload) {
      state.incomeCategories.push(payload)
    },
    addOutcome(state, payload) {
      state.outcomeCategories.push(payload)
    }
  },
  actions: {
    setIncome({commit, state}) {
      if(state.isLocal) {
        commit('setIncome', localStorage)
      } else {
        // from db
      }
    },
    setOutcome({commit, state}) {
      if(state.isLocal) {
        commit('setOutcome', localStorage)
      } else {
        // from db
      }
    },
    saveIncome({state}) {
      if(state.isLocal) {
        //save in localstorage
      } else {
        //save in db
      }
    },
    saveOutcome({state}) {
      if(state.isLocal) {
        //save in localstorage
      } else {
        //save in db
      }
    },
    addIncome({commit}, payload) {
      commit('addIncome', payload)
    },
    addOutcome({commit}, payload) {
      commit('addOutcome', payload)
    },
    deleteIncome({commit}, id) {
      commit('deleteIncomeById', id)
    },
    deleteOutcome({commit}, id) {
      commit('deleteOutcomeById', id)
    }
  },
  getters: {
    getIncome: (state) => state.incomeCategories,
    getOutcome: (state) => state.outcomeCategories,
  }
}