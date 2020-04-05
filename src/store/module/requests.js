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
        alert('Error' + error.response.data.error || error.response.data.message);
      }
    }
  }
}