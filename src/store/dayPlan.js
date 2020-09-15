export default {
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = payload;
    },
  },
  actions: {
    saveTasks() {},
    deleteTasks() {},
    sortTasks() {},
  },
  getters: {
    getTasks: (state) => state.tasks,
  },
};
