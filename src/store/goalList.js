export default {
  state: {
    goals: [
      {
        title: "test1",
        date: "02.01.20",
        id: "12fAfagI",
        points: ["daily", "prog"]
      },
      {
        title: "test2",
        date: "02.01.21",
        id: "12asdAfagI",
        points: ["daily", "prog"]
      },
      {
        title: "test1",
        date: "02.01.22",
        id: "12f78yvahsI",
        points: ["daily", "prog"]
      }
    ]
  },
  mutations: {
    setGoals(state, payload) {
      if(payload) {
        state.goals = payload;
      }
    },
    deleteGoal(state, payload) {
      state.goals = state.goals.filter(e => e.id !== payload);
    },
    addGoal(state, payload) {
      state.goals.push(payload);
    },
    editGoal(state, payload) {
      state.goals = state.goals.map( e => {
        if(e.id == payload.id) {
          e = payload
        } 
        return e
      })
    }
  },
  actions: {
    saveGoals({ state }) {
      if (state.isLocal) {
        //localstorage save
      } else {
        //save in database
      }
      localStorage.setItem("goals", JSON.stringify(state.tasks));
    },
    setGoals({ commit, state }) {
      if (state.isLocal) {
        //localstorage save
      } else {
        //set from database
      }
      commit("setGoals", JSON.parse(localStorage.getItem("goals")));
    },
    addGoal({ commit }, payload) {
      commit("addGoal", payload);
    },
    deleteGoalById({ commit }, payload) {
      commit("deleteGoal", payload);
    },
    editGoalById({commit}, payload) {
      commit('editGoal', payload)
    }
  },
  getters: {
    getGoals: state => state.tasks
  }
};