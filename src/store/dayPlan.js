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
    },
    addTask(state, payload) {
      state.tasks.push(payload)
    }
  },
  actions: {
    saveTasks({commit},state) {
      if(commit('getSaveSettings')) {
        localStorage.setItem(tasks, state.tasks)
      } else {
        //save in database
      }
    },
    setTasks({commit}){
      if(commit('getSaveSettings')) {
        commit('setTasks', localStorage.getItem('tasks'))
      } else {
        //set from database
      }
    },
    addTask({commit}, payload) {
      commit('addTask', payload)
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
