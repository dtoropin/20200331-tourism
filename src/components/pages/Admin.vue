<template lang="pug">
  .wrapper__content
    a.logout(
      href='#'
      v-if='isLogin'
      @click.prevent='logout'
    ) logout
    Login(v-if='!isLogin')
    List(v-if='isLogin')
    EditStatistic(
      v-if='isEditedStat'
      :stat='edit'
    )
    EditComment(
      v-if='isEditedComm'
      :comment='edit'
    )
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("base", {
      isLogin: state => state.isLogin,
      isEditedStat: state => state.isEditedStat,
      isEditedComm: state => state.isEditedComm,
      edit: state => state.edit
    })
  },
  methods: {
    ...mapActions("base", ["setIsLogin"]),
    logout() {
      if (confirm("Вы хотите выйти?")) {
        this.setIsLogin(false);
        localStorage.removeItem("token");
      }
    }
  },
  components: {
    Login: () => import("../layout/Login.vue"),
    List: () => import("../layout/List"),
    EditStatistic: () => import("../blocks/EditStatistic"),
    EditComment: () => import("../blocks/EditComment")
  }
};
</script>

<style lang="postcss" scoped>
.logout {
  position: absolute;
  top: 10px;
  left: 20px;
  display: block;
  padding: 3px 5px;
  z-index: 5;
  transition: .3s color ease;
  &:hover {
    text-decoration: none;
    color: #ff2a2a;
  }
}
</style>