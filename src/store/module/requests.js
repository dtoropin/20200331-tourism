export default {
  namespaced: true,
  state: {
    requests: []
  },
  mutations: {
    SET_REQUESTS(state, requests) {
      state.requests = requests;
    }
  },
  actions: {
    async getRequests({ commit, rootState }) {
      try {
        const { data } = await this.$axios.get('/get/requests');
        commit('SET_REQUESTS', data);
      } catch (error) {
        console.log(error || error.response.data.error);
      }
    }
  }
}