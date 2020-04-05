export default {
  namespaced: true,
  state: {
    isEdit: false,
    markers: {}
  },
  mutations: {
    SET_ISEDIT(state, isEdit) {
      state.isEdit = isEdit;
    },
    SET_MARKERS(state, markers) {
      state.markers = markers;
    }
  },
  actions: {
    getIsEdit({ commit, rootState }, isEdit) {
      commit('SET_ISEDIT', isEdit);
    },
    async getMarkers({ commit, rootState }) {
      try {
        const { data } = await this.$axios.get('/get/markers');
        commit('SET_MARKERS', data);
      } catch (error) {
        alert('Error:' + error || error.response.data.error);
      }
    }
  }
}