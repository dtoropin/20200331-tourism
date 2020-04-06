export default {
  namespaced: true,
  state: {
    comment: {},
    comments: []
  },
  mutations: {
    SET_COMMENT(state, comment) {
      state.comment = comment;
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    }
  },
  actions: {
    async getComment({ commit, rootState }) {
      try {
        const { data } = await this.$axios.get('/get/comments');
        let rnd = Math.round(Math.random() * (data.length - 1));
        let comment = data[rnd];
        commit('SET_COMMENT', comment);
      } catch (error) {
        console.log(error || error.response.data.error);
      }
    },
    async getComments({ commit, rootState }) {
      try {
        const { data } = await this.$axios.get('/get/comments');
        commit('SET_COMMENTS', data);
      } catch (error) {
        console.log(error || error.response.data.error);
      }
    }
  }
}