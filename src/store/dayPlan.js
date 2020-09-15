export default {
  state: {
    tasks: [],
    isLocal = false
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = payload;
    },
    localToggle(state) {
      state.isLocal = !state.isLocal
    },
    deleteTasks(state, payload) {
      state.tasks = state.tasks.filter(e => e.id !== payload)
    }
  },
  actions: {
    saveTasks({commit}) {
      if(commit('getSaveSettings')) {
        //save in lockalstorage
      } else {
        //save in database
      }
    },
    deleteTasks() {},
    localToggle({commit}) {
      commit('localToggle')
    }
  },
  getters: {
    getTasks: (state) => state.tasks,
    getSaveSettings: (state) => state.isLocal
  },
};
