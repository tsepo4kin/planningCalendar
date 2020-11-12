import firebase from "firebase";
export default {
  state: {
    user: {
      isAuth: false,
      uid: null,
      isLocal: true
    }
  },
  mutations: {
    SetUser(state, payload) {
      (state.user.isAuth = true), (state.user.uid = payload);
    },
    UnsetUser(state) {
      (state.user.isAuth = false), (state.user.uid = null);
    },
    localToggle(state) {
      state.isLocal = !state.isLocal;
    }
  },
  actions: {
    signUp({ commit }, payload) {
      commit("SetProcessing", true);
      commit("ClearError");

      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          commit("SetProcessing", false);
        })
        .catch(e => {
          commit("SetProcessing", false);
          commit("SetError", e.message);
        });
    },
    signOut() {
      firebase.auth().signOut();
    },
    signIn({ commit }, payload) {
      commit("SetProcessing", true);
      commit("ClearError");

      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          commit("SetProcessing", false);
        })
        .catch(e => {
          commit("SetProcessing", false);
          commit("SetError", e.message);
        });
    },
    stateChange({ commit }, payload) {
      if (payload) {
        commit("SetUser", payload.uid);
      } else {
        commit("UnsetUser");
      }
    },
    localToggle({ commit }) {
      commit("localToggle");
    }
  },
  getters: {
    isAuth: state => state.user.isAuth
  }
};
