export default {
  namespaced: true,
  state: {
    comment: {}
  },
  mutations: {
    SET_COMMENT(state, comment) {
      state.comment = comment;
    }
  },
  actions: {
    async getComment({ commit, rootState }) {
      try {
        // const { data } = await this.$axios.get('/get/statistic');
        let data = [
          {
            'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'name': 'John Down'
          },
          {
            'text': 'Nullam finibus velit eget tellus rhoncus pharetra. Quisque gravida purus quis commodo porttitor. Maecenas laoreet iaculis ante. Aliquam vehicula tortor eu mauris consequat tristique. Phasellus efficitur ligula suscipit sem auctor ornare.',
            'name': 'Maya Creed'
          },
          {
            'text': 'Integer sodales ipsum ante. Sed vel nisi vitae ipsum posuere mollis. Sed finibus felis volutpat, tempor dui id, accumsan arcu. Duis id eleifend magna, sed ultricies lectus. Sed maximus quis massa eu congue.',
            'name': 'Greg Mc\'Artur'
          }
        ];
        let rnd = Math.round(Math.random() * (data.length - 1));
        let comment = data[rnd];
        commit('SET_COMMENT', comment);
      } catch (error) {
        alert('Error' + error.response.data.error || error.response.data.message);
      }
    }
  }
}