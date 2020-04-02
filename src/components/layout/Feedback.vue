<template lang="pug">
  section.feedback
    .feedback__block.container
      .feedback__head
        h2.feedback__title Feedback
      .feedback__text
        p {{ feedback.text }}
      span.feedback__author {{ feedback.author }}
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("comment", {
      feedback: state => state.comment
    })
  },
  methods: {
    ...mapActions("comment", ["getComment"])
  },
  mounted() {
    this.getComment();
  }
};
</script>

<style lang="postcss" scoped>
.feedback {
  background: url(../../images/bg-feedback.jpg) no-repeat center / cover;
  padding: 95px 0;
}
.feedback__block {
  color: #fff;
  max-width: 620px;
}
.feedback__head {
  display: flex;
  justify-content: center;
  margin-bottom: 29px;
}
.feedback__title {
  padding: 9px 17px;
  border: solid 1px #ffffff;
  font-size: 23px;
  font-weight: 300;
  text-transform: capitalize;
}
.feedback__text {
  padding-left: 20px;
  line-height: 2;
  letter-spacing: 0.52px;
  text-align: justify;
  font-size: 13px;
  font-weight: 300;
  margin-bottom: 10px;
  & > p {
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: -30px;
      content: "\201d";
      font-size: 72px;
      line-height: 72px;
      color: #b7b7b7;
    }
  }
}
.feedback__author {
  font-style: italic;
  display: block;
  text-align: right;
}
</style>