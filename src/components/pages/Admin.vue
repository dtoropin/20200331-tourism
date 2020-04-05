<template lang="pug">
  .wrapper__content
    a.logout(
      href='#'
      v-if='isLogin'
      @click.prevent='logout'
    ) logout
    List
    EditStatistic(
      v-if='isEditedStat'
      :stat='edit'
    )
    EditComment(
      v-if='isEditedComm'
      :comment='edit'
    )
    EditMarker(
      v-if='isEditedMarker'
      :marker='edit'
    )
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapState("base", {
      isLogin: state => state.isLogin,
      isEditedStat: state => state.isEditedStat,
      isEditedComm: state => state.isEditedComm,
      isEditedMarker: state => state.isEditedMarker,
      edit: state => state.edit
    })
  },
  methods: {
    ...mapActions("base", ["setIsLogin"]),
    logout() {
      if (confirm("Вы хотите выйти?")) {
        this.setIsLogin(false);
        localStorage.removeItem("token");
        this.$router.push('/login');
      }
    }
  },
  components: {
    List: () => import("../layout/List"),
    EditStatistic: () => import("../blocks/EditStatistic"),
    EditComment: () => import("../blocks/EditComment"),
    EditMarker: () => import('../blocks/EditMarker')
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setIsLogin(true);
      axios.defaults.headers.common["Authorization"] = token;
    }
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