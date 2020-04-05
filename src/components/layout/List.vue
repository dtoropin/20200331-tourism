<template lang="pug">
  .list.container
    Tabs
      Tab(title="Comments")
        Comments
      Tab(title="Statistic")
        Statistics
      Tab(title="Markers")
        Markers
      Tab(title="Security")
        Security
</template>

<script>
import "vue-slim-tabs/themes/default.css";
import { Tabs, Tab } from "vue-slim-tabs";
export default {
  components: {
    Tabs,
    Tab,
    Comments: () => import('../blocks/Comments'),
    Statistics: () => import('../blocks/Statistics'),
    Markers: () => import('../blocks/Markers'),
    Security: () => import('../blocks/Security')
  }
};
</script>

<style lang="postcss" scoped>
.list {
  position: relative;
  padding-top: 50px;
  margin: 0 auto 20px;
}
</style>