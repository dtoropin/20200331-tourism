<template lang="pug">
  .list__content
    .list__row(v-for='count in statistics')
      h4 \#{{ count.id }}
      .list__footer
        .list__block
          span.list__count {{ count.number }}
          span.list__count {{ count.name }}
        .list__button
          button.list__btn(@click='edit(count)') edit
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapState("statistic", {
      statistics: state => state.statistic
    })
  },
  methods: {
    ...mapActions("statistic", ["getStatistic"]),
    ...mapActions("base", ["setIsEditedStat", "setEdit"]),
    edit(count) {
      this.setEdit(count);
      this.setIsEditedStat(true);
    }
  },
  mounted() {
    this.getStatistic();
  }
};
</script>

<style lang="postcss" scoped>
.list__content {
  position: relative;
}
.list__row {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #cccccc;
  &:last-child {
    border: none;
    margin-bottom: 0;
  }
  & p {
    font-weight: 300;
    margin-bottom: 30px;
  }
}
.list__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list__count {
  display: inline-block;
  min-width: 50px;
  font-weight: 500;
  & + .list__count {
    margin-left: 20px;
  }
}
.list__btn {
  padding: 7px 15px;
  font-weight: 300;
  border-radius: 3px;
  transition: 0.3s background-color ease;
  & + .list__btn {
    margin-left: 7px;
  }
  &:hover {
    background: #bebebe;
  }
}
</style>