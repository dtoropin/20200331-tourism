<template lang="pug">
  .wrapper__content
    Login(v-if='!isLogin')
    List(v-if='isLogin')
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("base", {
      isLogin: state => state.isLogin
    })
  },
  components: {
    Login: () => import('../layout/Login.vue'),
    List: () => import('../layout/List')
  }
}
</script>