<template lang="pug">
  .edit
    form.edit__form(@submit.prevent='action')
      .edit__close(@click='close') x
      .edit__title \#{{ comment.id }}
      label.edit__item
        span.edit__title text
        textarea.edit__input(
          type='text'
          v-model='comment.text'
        )
        span.edit__error(
          v-show='validation.firstError("comment.text")'
        ) {{ validation.firstError("comment.text") }}
      label.edit__item
        span.edit__title author
        input.edit__input(
          type='text'
          v-model='comment.author'
        )
        span.edit__error(
          v-show='validation.firstError("comment.author")'
        ) {{ validation.firstError("comment.author") }}
      .edit__item
        button.edit__btn(type='submit') action
    .edit__popup(v-show='error') {{ error }}
</template>

<script>
import { mapActions } from "vuex";
import { Validator } from "simple-vue-validator";
import axios from "axios";
axios.defaults.baseURL = "http://20200401-webapi/";
export default {
  props: {
    comment: {
      id: Number,
      text: String,
      author: String,
      created_at: Date
    }
  },
  data: () => ({
    error: ""
  }),
  methods: {
    ...mapActions("base", ["setIsEditedComm", "setEdit"]),
    ...mapActions("comment", ["getComments"]),
    async action() {
      if (await this.$validate()) {
        try {
          if (this.comment.id) {
            const response = await axios.post("/edit/comment", this.comment);
          } else {
            const response = await axios.post("/put/comment", this.comment);
          }
          this.setEdit({});
          this.setIsEditedComm(false);
          this.getComments();
        } catch (error) {
          this.error = error || error.response.data.error;
        }
      }
    },
    close() {
      this.setEdit({});
      this.setIsEditedComm(false);
    }
  },
  validators: {
    "comment.text": function(value) {
      return Validator.value(value).required("заполните поле");
    },
    "comment.author": function(value) {
      return Validator.value(value).required("заполните поле");
      // .regex(/^[А-Яа-яA-Za-z0-9_-\s]{3,25}$/, "неверный формат имени");
    }
  }
};
</script>

<style lang="postcss" scoped>
.edit {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.705);
  display: flex;
  justify-content: center;
  align-items: center;
}
.edit__form {
  position: relative;
  max-width: 500px;
  width: 90%;
  padding: 10px;
  border-radius: 7px;
  background: #ffffff;
}
.edit__close {
  position: absolute;
  top: 7px;
  right: 10px;
  padding: 0 5px;
  border-radius: 4px;
  display: block;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #ff2a2a;
  background: #ffffff;
  transition: 0.3s background-color ease;
  &:hover {
    background: #ffaaaa;
  }
}
.edit__item {
  position: relative;
  display: block;
  font-size: 18px;
  font-weight: 300;
  & + .edit__item {
    margin-top: 30px;
  }
}
.edit__title {
  display: block;
  margin-bottom: 10px;
}
.edit__input {
  border: 1px solid #ccc;
  border-radius: 7px;
  outline: none;
  padding: 0.625rem 0.9375rem;
}
textarea {
  resize: none;
  height: 150px;
}
.edit__btn {
  padding: 7px 15px;
  font-weight: 300;
  border-radius: 3px;
  transition: 0.3s background-color ease;
  &:hover {
    background: #bebebe;
  }
}
.edit__error {
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  color: #ff2a2a;
  text-align: center;
}
.edit__popup {
  position: absolute;
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