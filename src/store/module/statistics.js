export default {
  namespaced: true,
  state: {
    statistic: []
  },
  mutations: {
    SET_STATISTIC(state, statistic) {
      state.statistic = statistic;
    }
  },
  actions: {
    async getStatistic({ commit, rootState }) {
      try {
        const { data } = await this.$axios.get('/get/statistics');
        commit('SET_STATISTIC', data);
      } catch (error) {
        alert('Error' + error.response.data.error || error.response.data.message);
      }
    }
  }
}