<template lang="pug">
  Tabs.list.container
    Tab(title="Comments")
      .list__row(v-for='comment in comments')
        h3 \#{{ comment.id }}
        p {{ comment.text }}
        .list__footer
          .list__button
            button.list__btn edit
            button.list__btn delete
          span.list__author {{ comment.author }}
    Tab(title="Statistic")
      .list__row(v-for='count in statistics')
        h3 \#{{ count.idx }}
        .list__footer
          .list__block
            span.list__count {{ count.number }}
            span.list__count {{ count.name }}
          .list__button
            button.list__btn edit
            button.list__btn delete
</template>

<script>
import "vue-slim-tabs/themes/default.css";
import { mapActions, mapState } from "vuex";
import { Tabs, Tab } from "vue-slim-tabs";
export default {
  components: {
    Tabs,
    Tab
  },
  computed: {
    ...mapState("comment", {
      comments: state => state.comments
    }),
    ...mapState("statistic", {
      statistics: state => state.statistic
    })
  },
  methods: {
    ...mapActions("comment", ["getComments"]),
    ...mapActions("statistic", ["getStatistic"])
  },
  mounted() {
    this.getComments();
    this.getStatistic();
  }
};
</script>

<style lang="postcss" scoped>
.list {
  margin: 50px auto 20px;
}
.list__row {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #cccccc;
  &:last-child {
    border: none;
    margin-bottom: 0;
  }
  & h3 {
    font-weight: 500;
    margin-bottom: 10px;
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
.list__author {
  display: block;
  font-style: italic;
}
.list__count {
  display: inline-block;
  min-width: 50px;
  font-weight: 500;
  & + .list__count {
    margin-left: 20px;
  }
}
</style>