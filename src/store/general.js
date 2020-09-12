export default {
  state: {
    processing: false,
    error: null,
  },
  mutations: {
    SetProcessing(state, payload) {
      state.processing = payload;
    },
    SetError(state, payload) {
      state.error = payload;
    },
    ClearError(state) {
      state.error = null;
    },
  },
  actions: {},
  getters: {
    getError: (state) => state.error,
    getProcessing: (state) => state.processing,
  },
};
