export default {
  state: {
    projects: [
      {
        title: "test",
        subtitle: "test",
        description: "testtest",
        id: "qwe"
      }
    ]
  },
  mutations: {
    setProjects(state, payload) {
      if(payload) {
        state.projects = payload;
      }
    },
    deleteProject(state, payload) {
      state.projects = state.projects.filter(e => e.id !== payload);
    },
    addProject(state, payload) {
      state.projects.push(payload);
    }
  },
  actions: {
    saveProjects({ state }) {
      if (state.isLocal) {
        // localStorage.setItem("projects", JSON.stringify(state.projects));
      } else {
        //save in database
      }
      localStorage.setItem("projects", JSON.stringify(state.projects));
    },
    setProjects({ commit, state }) {
      if (state.isLocal) {
        // commit("setProjects", JSON.parse(localStorage.getItem("projects")));
      } else {
        //set from database
      }
      commit("setProjects", JSON.parse(localStorage.getItem("projects")));
    },
    addProject({ commit }, payload) {
      commit("addProject", payload);
    },
    deleteProjectById({ commit }, payload) {
      commit("deleteProject", payload);
    }
  },
  getters: {
    getProjects: state => state.projects
  }
};
