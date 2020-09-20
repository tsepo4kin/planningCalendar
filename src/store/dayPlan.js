export default {
  state: {
    tasks: [
      {
        title: "test1",
        done: false,
        time: "12:15",
        id: "12fAfagI",
        tags: ["daily", "prog"],
      },
      {
        title: "test2",
        done: false,
        time: "15:20",
        id: "12bjhjLK",
        tags: ["eng", "stud"],
      },
      {
        title: "test3",
        done: false,
        time: "18:00",
        id: "asvbJLA1",
        tags: ["daily", "fun"],
      },
      {
        title: "test4",
        done: false,
        time: "21:55",
        id: "QZXCb12k",
        tags: ["daily", "resp"],
      },
    ],
    isLocal: true,
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = payload;
    },
    localToggle(state) {
      state.isLocal = !state.isLocal;
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter((e) => e.id !== payload);
    },
    addTask(state, payload) {
      state.tasks.push(payload);
    },
  },
  actions: {
    saveTasks({ state }) {
      if (state.isLocal) {
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      } else {
        //save in database
      }
    },
    setTasks({ commit, state }) {
      if (state.isLocal) {
        commit("setTasks", JSON.parse(localStorage.getItem("tasks")));
      } else {
        //set from database
      }
    },
    addTask({ commit }, payload) {
      commit("addTask", payload);
    },
    deleteTaskById({ commit }, payload) {
      commit("deleteTask", payload);
    },
    localToggle({ commit }) {
      commit("localToggle");
    },
  },
  getters: {
    getTasks: (state) => state.tasks,
    getSaveSettings: (state) => state.isLocal,
  },
};
