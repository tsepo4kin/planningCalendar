export default {
  state: {
    habits:[

    ],
    isLocal: true,
  },
  mutations: {
    setHabits(state, payload) {
      state.habits = payload;
    },
    deleteHabit(state, payload) {
      state.habits = state.habits.filter((e) => e.id !== payload);
    },
    addHabits(state, payload) {
      state.habits.push(payload);
    },
  },
  actions: {
    saveHabits({ state }) {
      if (state.isLocal) {
        localStorage.setItem("habits", JSON.stringify(state.tasks));
      } else {
        //save in database
      }
    },
    setHabits({ commit, state }) {
      if (state.isLocal) {
        commit("setTasks", JSON.parse(localStorage.getItem("habits")));
      } else {
        //set from database
      }
    },
    addHabit({ commit }, payload) {
      commit("addHabit", payload);
    },
    deleteHabitById({ commit }, payload) {
      commit("deleteHabits", payload);
    },
  },
  getters: {
    getHabits: (state) => state.habits,
  },
};
