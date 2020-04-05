<template lang="pug">
  .list__content
    button.list__btn.list__btn--add(@click='addComm') add comment
    .list__row(v-for='comment in comments')
      h3 \#{{ comment.id }}
      p {{ comment.text }}
      .list__footer
        .list__button
          button.list__btn(@click='editComm(comment)') edit
          button.list__btn(@click='deleteComm(comment.id)') delete
        span.list__author {{ comment.author }}
    .list__popup(v-show='error') {{ error }}
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";
export default {
  data: () => ({
    error: ""
  }),
  computed: {
    ...mapState("comment", {
      comments: state => state.comments
    })
  },
  methods: {
    ...mapActions("comment", ["getComments"]),
    ...mapActions("base", ["setEdit", "setIsEditedComm"]),
    addComm() {
      this.setIsEditedComm(true);
    },
    editComm(comment) {
      this.setEdit(comment);
      this.setIsEditedComm(true);
    },
    async deleteComm(id) {
      try {
        if (confirm("Удалить коммент #" + id + "?")) {
          const response = await axios.post("/delete/comment/" + id);
          if (response.data.error) {
            throw new Error(response.data.error);
          }
          this.getComments();
        }
      } catch (error) {
        this.error = error;
        setTimeout(() => (this.error = ""), 1500);
      }
    }
  },
  mounted() {
    this.getComments();
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
  &--add {
    position: absolute;
    top: -40px;
    right: 10px;
  }
}
.list__author {
  display: block;
  font-style: italic;
}
.list__popup {
  position: fixed;
  max-width: 500px;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 50px;
  color: #000;
  background: #ff7171;
  border-radius: 7px;
}
</style>