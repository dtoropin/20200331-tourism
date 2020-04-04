<template lang="pug">
  .list.container
    Tabs
      Tab(title="Comments")
        button.list__btn.list__btn--add(@click='addComm') add
        .list__row(v-for='comment in comments')
          h3 \#{{ comment.id }}
          p {{ comment.text }}
          .list__footer
            .list__button
              button.list__btn(@click='editComm(comment)') edit
              button.list__btn(@click='deleteComm(comment.id)') delete
            span.list__author {{ comment.author }}
      Tab(title="Statistic")
        .list__row(v-for='count in statistics')
          h4 \#{{ count.id }}
          .list__footer
            .list__block
              span.list__count {{ count.number }}
              span.list__count {{ count.name }}
            .list__button
              button.list__btn(
                @click='edit(count)'
              ) edit
      Tab(title="Security")
        .list__row
          h3 Change name and password
          form(@submit.prevent='change').list__form
            label.list__item
              span.list__title New name
              input.list__input(
                type='text'
                v-model='user.name'
              )
              span.list__error(
                v-show='validation.firstError("user.name")'
              ) {{ validation.firstError("user.name") }}
            label.list__item
              span.list__title New password
              input.list__input(
                type='text'
                v-model='user.pass'
              )
              span.list__error(
                v-show='validation.firstError("user.pass")'
              ) {{ validation.firstError("user.pass") }}
            label.list__item
              span.list__title Confirm password
              input.list__input(
                type='text'
                v-model='user.confpass'
              )
              span.list__error(
                v-show='validation.firstError("user.confpass")'
              ) {{ validation.firstError("user.confpass") }}
            label.list__item
              button.list__btn(type='submit') change
    .list__popup(v-show='error') {{ error }}
</template>

<script>
import "vue-slim-tabs/themes/default.css";
import { mapActions, mapState } from "vuex";
import { Tabs, Tab } from "vue-slim-tabs";
import { Validator } from "simple-vue-validator";
import axios from "axios";
export default {
  data: () => ({
    user: {
      pass: "",
      confpass: "",
      name: "admin"
    },
    submitted: false,
    error: ""
  }),
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
    ...mapActions("statistic", ["getStatistic"]),
    ...mapActions("base", [
      "setIsLogin",
      "setIsEditedStat",
      "setIsEditedComm",
      "setEdit"
    ]),
    async change() {
      this.submitted = true;
      if (await this.$validate()) {
        try {
          const response = await axios.post("/login/change", this.user);
          if (response.data.error) {
            throw new Error(response.data.error);
          }
          const token = response.data.token;
          localStorage.setItem("token", token);
          this.setIsLogin(false);
        } catch (error) {
          this.error = error;
        }
      }
    },
    edit(count) {
      this.setEdit(count);
      this.setIsEditedStat(true);
    },
    editComm(comment) {
      this.setEdit(comment);
      this.setIsEditedComm(true);
    },
    async deleteComm(id) {
      try {
        if (confirm('Удалить коммент #' + id + '?')) {
          const response = await axios.post("/delete/comment/" + id);
        this.error = response.data.error;
        if (response.data.error) {
          throw new Error(response.data.error);
        }
        this.getComments();
        }
      } catch (error) {
        this.error = error;
        setTimeout(() => this.error = '', 1500);
      }
    },
    addComm() {
      this.setIsEditedComm(true);
    }
  },
  validators: {
    "user.name": function(value) {
      return Validator.value(value)
        .required("заполните поле")
        .regex(/^[a-z0-9_-]{3,16}$/, "неверный формат имени");
    },
    "user.pass": function(value) {
      return Validator.value(value)
        .required("заполните поле")
        .regex(/^[a-z0-9_-]{3,16}$/, "неверный формат пароля");
    },
    "user.confpass, user.pass": function(confpass, pass) {
      if (this.submitted || this.validation.isTouched("user.confpass")) {
        return Validator.value(confpass)
          .required("заполните поле")
          .match(pass);
      }
    }
  },
  mounted() {
    this.getComments();
    this.getStatistic();
  }
};
</script>

<style lang="postcss" scoped>
.list {
  position: relative;
  padding-top: 50px;
  margin: 0 auto 20px;
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
.list__count {
  display: inline-block;
  min-width: 50px;
  font-weight: 500;
  & + .list__count {
    margin-left: 20px;
  }
}
.list__form {
  max-width: 300px;
  margin: 0 auto;
}
.list__item {
  position: relative;
  display: block;
  font-size: 18px;
  font-weight: 300;
  & + .list__item {
    margin-top: 30px;
  }
}
.list__title {
  display: block;
  margin-bottom: 10px;
}
.list__input {
  border: 1px solid #ccc;
  border-radius: 7px;
  outline: none;
  padding: 0.625rem 0.9375rem;
}
.list__error {
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  color: #ff2a2a;
  text-align: center;
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
.vue-tabpanel {
  position: relative;
}
</style>