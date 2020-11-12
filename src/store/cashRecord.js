export default {
  state: {
    incomeCategories: [
      {
        name: "Incometest1",
        value: 100,
        id: "qwe123"
      },
      {
        name: "Incometest2",
        value: 400,
        id: "qwasf3"
      },
      {
        name: "Incometest3",
        value: 300,
        id: "qasv123"
      },
      {
        name: "Incometest4",
        value: 200,
        id: "qwasdvz23"
      }
    ],
    outcomeCategories: [
      {
        name: "Outcometest1",
        value: 100,
        id: "qwe123"
      },
      {
        name: "Outcometest2",
        value: 400,
        id: "qwasf3"
      },
      {
        name: "Outcometest3",
        value: 300,
        id: "qasv123"
      },
      {
        name: "Outcometest4",
        value: 200,
        id: "qwasdvz23"
      }
    ]
  },
  mutations: {
    deleteIncomeById(state, id) {
      state.incomeCategories = state.incomeCategories.filter(e => e.id !== id);
    },
    deleteOutcomeById(state, id) {
      state.outcomeCategories = state.outcomeCategories.filter(
        e => e.id !== id
      );
    },
    setIncome(state, payload) {
      if(payload) {
        state.incomeCategories = payload;
      }
    },
    setOutcome(state, payload) {
      if(payload) {
        state.outcomeCategories = payload;
      }
    },
    addIncome(state, payload) {
      state.incomeCategories.push(payload);
    },
    addOutcome(state, payload) {
      state.outcomeCategories.push(payload);
    }
  },
  actions: {
    setIncome({ commit, state }) {
      if (state.isLocal) {
        // commit('setIncome', JSON.parse(localStorage.getItem("income"))
      } else {
        // from db
      }
      commit("setIncome", JSON.parse(localStorage.getItem("income")));
    },
    setOutcome({ commit, state }) {
      if (state.isLocal) {
        // commit('setOutcome', JSON.parse(localStorage.getItem("outcome"))
      } else {
        // from db
      }
      commit("setOutcome", JSON.parse(localStorage.getItem("outcome")));
    },
    saveIncome({ state }) {
      if (state.isLocal) {
        //save in localstorage
      } else {
        //save in db
      }
      localStorage.setItem("income", JSON.stringify(state.incomeCategories));
    },
    saveOutcome({ state }) {
      if (state.isLocal) {
        //save in localstorage
      } else {
        //save in db
      }
      localStorage.setItem("outcome", JSON.stringify(state.outcomeCategories));
    },
    addIncome({ commit }, payload) {
      commit("addIncome", payload);
    },
    addOutcome({ commit }, payload) {
      commit("addOutcome", payload);
    },
    deleteIncome({ commit }, id) {
      commit("deleteIncomeById", id);
    },
    deleteOutcome({ commit }, id) {
      commit("deleteOutcomeById", id);
    }
  },
  getters: {
    getIncome: state => state.incomeCategories,
    getOutcome: state => state.outcomeCategories
  }
};
