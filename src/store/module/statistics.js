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
        // const { data } = await this.$axios.get('/get/statistic');
        let data = [
          { 'number': 2000, 'name': 'hikes' },
          { 'number': 23, 'name': 'regions' },
          { 'number': 19382, 'name': 'people' },
          { 'number': 120, 'name': 'towns' }
        ];
        commit('SET_STATISTIC', data);
      } catch (error) {
        alert('Error' + error.response.data.error || error.response.data.message);
      }
    }
  }
}