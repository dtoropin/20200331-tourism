export default {
  namespaced: true,
  state: {
    isLogin: false,
    isEditedStat: false,
    isEditedComm: false,
    isEditedMarker: false,
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
    SET_ISEDITEDMARKER(state, isEditedMarker) {
      state.isEditedMarker = isEditedMarker;
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
    setIsEditedMarker({commit, rootState}, isEditedMarker) {
      commit('SET_ISEDITEDMARKER', isEditedMarker);
    },
    setEdit({commit, rootState}, edit) {
      commit('SET_EDIT', edit);
    }
  }
}