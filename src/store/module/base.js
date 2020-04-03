export default {
  namespaced: true,
  state: {
    isLogin: false,
    isEditedStat: false,
    isEditedComm: false,
    token: localStorage.getItem('token') || '',
    edit: {}
  },
  mutations: {
    SET_ISLOGIN(state, isLogin) {
      state.isLogin = isLogin;
    },
    SET_ISEDITEDSTAT(state, isEditedStat) {
      state.isEditedStat = isEditedStat;
    },
    SET_ISEDITEDCOMM(state, isEditedComm) {
      state.isEditedComm = isEditedComm;
    },
    SET_EDIT(state, edit) {
      state.edit = edit;
    }
  },
  actions: {
    setIsLogin({commit, rootState}, isLogin) {
      commit('SET_ISLOGIN', isLogin);
    },
    setIsEditedStat({commit, rootState}, isEditedStat) {
      commit('SET_ISEDITEDSTAT', isEditedStat);
    },
    setIsEditedComm({commit, rootState}, isEditedComm) {
      commit('SET_ISEDITEDCOMM', isEditedComm);
    },
    setEdit({commit, rootState}, edit) {
      commit('SET_EDIT', edit);
    }
  }
}