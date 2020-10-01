export default {
  state: {
    shareItems: [

    ]
  },
  mutations: {
    setShareItems(state, payload) {
      state.shareItems = payload;
    },
    deleteShareItem(state, payload) {
      state.shareItems = state.shareItems.filter((e) => e.id !== payload);
    },
    addShareItem(state, payload) {
      state.shareItems.push(payload);
    },
  },
  actions: {
    saveShareItems({ state }) {
      if (state.isLocal) {
        localStorage.setItem("shareItems", JSON.stringify(state.shareItems));
      } else {
        //save in database
      }
    },
    setShareItems({ commit, state }) {
      if (state.isLocal) {
        commit("shareItems", JSON.parse(localStorage.getItem("shareItems")));
      } else {
        //set from database
      }
    },
    addShareItem({ commit }, payload) {
      commit("addShareItem", payload);
    },
    deleteShareItemById({ commit }, payload) {
      commit("deleteShareItem", payload);
    },
  },
  getters: {
    getShareItems: (state) => state.shareItems,
  },
};
