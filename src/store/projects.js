export default {
  state: {
    projects: [
      
    ]
  },
  mutations: {
    setProjects(state, payload) {
      state.projects = payload;
    },
    deleteProject(state, payload) {
      state.projects = state.projects.filter((e) => e.id !== payload);
    },
    addProject(state, payload) {
      state.projects.push(payload);
    },
  },
  actions: {
    saveProjects({ state }) {
      if (state.isLocal) {
        localStorage.setItem("projects", JSON.stringify(state.projects));
      } else {
        //save in database
      }
    },
    setProject({ commit, state }) {
      if (state.isLocal) {
        commit("setProjects", JSON.parse(localStorage.getItem("projects")));
      } else {
        //set from database
      }
    },
    addTask({ commit }, payload) {
      commit("addProject", payload);
    },
    deleteProjectById({ commit }, payload) {
      commit("deleteProject", payload);
    }
  },
  getters: {
    getTasks: (state) => state.projects
  },
};
