export default {
  namespaced: true,
  state: {
    isLogin: false,
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    SET_ISLOGIN(state, isLogin) {
      state.isLogin = isLogin;
    }
  },
  actions: {
    setIsLogin({commit, rootState}, isLogin) {
      commit('SET_ISLOGIN', isLogin);
    }
  }
}