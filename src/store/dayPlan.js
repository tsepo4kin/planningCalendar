export default {
  state: {
    tasks: [
      {
        title: "test1",
        done: false,
        time: "12:15",
        id: "12fAfagI",
        tags: ["daily", "prog"]
      },
      {
        title: "test2",
        done: false,
        time: "15:20",
        id: "12bjhjLK",
        tags: ["eng", "stud"]
      },
      {
        title: "test3",
        done: false,
        time: "18:00",
        id: "asvbJLA1",
        tags: ["daily", "fun"]
      },
      {
        title: "test4",
        done: false,
        time: "21:55",
        id: "QZXCb12k",
        tags: ["daily", "resp"]
      }
    ]
  },
  mutations: {
    setTasks(state, payload) {
      if(payload) {
        state.tasks = payload;
      }
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter(e => e.id !== payload);
    },
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    editTask(state, payload) {
      state.tasks = state.tasks.map( e => {
        if(e.id == payload.id) {
          e = payload
        } 
        return e
      })
    }
  },
  actions: {
    saveTasks({ state }) {
      if (state.isLocal) {
        //localstorage save
      } else {
        //save in database
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setTasks({ commit, state }) {
      if (state.isLocal) {
        //localstorage save
      } else {
        //set from database
      }
      commit("setTasks", JSON.parse(localStorage.getItem("tasks")));
    },
    addTask({ commit }, payload) {
      commit("addTask", payload);
    },
    deleteTaskById({ commit }, payload) {
      commit("deleteTask", payload);
    },
    editTaskById({commit}, payload) {
      commit('editTask', payload)
    }
  },
  getters: {
    getTasks: state => state.tasks,
    getSaveSettings: state => state.isLocal
  }
};
